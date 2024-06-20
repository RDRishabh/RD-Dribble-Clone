import React, {useEffect,useRef} from 'react'
import data from '../../Data/data.json'
import tags from "../../Data/tags.json"

import PortfolioCard from "./PortfolioCard.jsx";
import useLocalStorage from "../../helper/useLocalStorage.jsx";
import AutoComplete from "./AutoComplete.jsx";
import SortOptions from "./SortOptions.jsx";

function HeroSection() {
    const [selectedTag, setSelectedTag] = React.useState(tags[0].value)
    const [selectedSTMember, setSelectedSTMember] = React.useState("Shots")
    const [filterString, setFilterString] = React.useState("")
    const [originalData, setOriginalData] = React.useState(data)
    const [filteredData, setFilteredData] = React.useState(data)
    const [liked_Arr , save_like , delete_like ] = useLocalStorage("user_liked");

    function sortPortfolios(field) {
        const clone = structuredClone(filteredData);
        console.log(clone);
        setFilteredData(clone.sort((a, b) => {
            let comparison = 0;
            if (field === 'popularity') {
                comparison = a.popularity - b.popularity;
            } else if (field === 'dateCreated') {
                comparison = new Date(a.dateCreated) - new Date(b.dateCreated);
            } else if (field === 'newsWorthy') {
                comparison = b.newsWorthy - a.newsWorthy;
                console.log(a , b , comparison)
            }
            return comparison;
        })) ;
    }


    useEffect(() => {
        if(originalData){
            const dataClone = Array.from(originalData);
            const filteredByTags = dataClone.filter((single) =>{
                if(selectedTag==="All")
                    return true
                else
                    return single.tags.map((tag)=>tag.toUpperCase()).includes(selectedTag.toUpperCase())
            });
            const filtered_by_member = filteredByTags.filter((single)=>{
                return single.stmember === selectedSTMember
            })
            const fileted_by_string = filtered_by_member.filter((single)=>{
                return single.portfolioName.toUpperCase().includes(filterString.toUpperCase()) || single.author.toUpperCase().includes(filterString.toUpperCase())
            })

            const final_arr = fileted_by_string.map((single)=>{
                const data = JSON.parse(JSON.stringify(single))
                data.save = liked_Arr.includes(data.portfolioName.toUpperCase())
                return data
            })
            setFilteredData(final_arr)
        }
    }, [originalData,selectedTag,filterString,liked_Arr,selectedSTMember]);

  return (
    <div className="justify-center">
        <div className="background-bar w-full h-80 bg-custom-gradient-1"></div>

        <div className="mx-auto  -translate-y-1/2 items-center justify-center mb-12">
            <div className="flex items-center shadow-lg rounded-lg max-w-xl mx-auto px-4 py-1 bg-white justify-between">
                <div className="flex items-center pr-2 max-w-full w-96 z-20">
                    <img src="../src/assets/search-icon.png" alt="" className="h-4 w-4"/>

                    <form action="/search" method="get" className="ml-2 flex-1 w-96">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <AutoComplete tags={tags} changeTag={(val)=>{setSelectedTag(val)}} />
                    </form>
                </div>

                <div className="bg-gray-400 w-[1px] h-[25px]"></div>

                <div className="relative group flex justify-between items-center "  >
                    <a href="#" className="flex items-center pr-3 text-gray-700 justify-between ml-4 space-x-8">
                        <span>{selectedSTMember}</span>
                        <div className="mt-1 ml-2">
                            <img src="../src/assets/dropdown.png" alt="" className="h-2 w-2"/>
                        </div>
                    </a>

                    <div >
                        <ul className="z-5 absolute hidden group-hover:block left-0  bg-white text-black mt-4  w-auto whitespace-nowrap shadow-lg rounded-custom-sm borderWidth-custom-thin p-2 border-2">
                            <li className="border-b border-gray-200">
                                <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded mb-1" onClick={()=>{setSelectedSTMember("Shots")}}>Shots</span>
                            </li>
                            <li className="border-b border-gray-200">
                                <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded mt-1 mb-1" onClick={()=>{setSelectedSTMember("Members")}}>Members</span>
                            </li>
                            <li>
                                <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded mt-1" onClick={()=>{setSelectedSTMember("Teams")}}>Teams</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        

        <div>

            <div className={` flex justify-center items-center text-sm gap-4`}>
                <SortOptions handleClick={sortPortfolios} class="z-50"/>

                <div className={`flex gap-4`}>
                    {
                        tags.map((single) => (
                            <span
                                className={`px-2 rounded-md cursor-pointer transition-all duration-500 ${selectedTag === single.value ? 'bg-gray-200 rounded-custom-md px-4' : 'none hover:bg-gray-100'}`}
                                key={`tag_${single.value}`} onClick={() => {
                                setSelectedTag(single.value)
                            }}>
                            {single.value}
                        </span>
                        ))
                    }
                </div>
            </div>


            <div className={`justify-center items-center px-10 py-10 flex flex-wrap gap-10 mt-4`}>
                {
                    filteredData.map((single)=>(
                        <PortfolioCard portfolio={single} key={`card_${single.portfolioName}`} handleLike={save_like} handleRemoveLike={delete_like} />
                    ))
                }
            </div>

        </div>

    </div>
  )
}

export default HeroSection

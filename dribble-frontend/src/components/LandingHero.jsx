import React from 'react'
import Carousal from './Carousal'
import PortfolioCard from './PortfolioCard'
// import data from '../../Data/data.json'
// import useLocalStorage from '../../helper/useLocalStorage.jsx'


function LandingHero() {

    // const [originalData, setOriginalData] = React.useState(data)
    // const [liked_Arr , save_like , delete_like ] = useLocalStorage("user_liked");

    // Landing Page Hero Section 
    // Carousal Component is used to display the images in the loop

    return (
        <div>
            <div>
                <div class="flex items-center mt-20 justify-center">
                    <div class="px-12 py-2 justify-center items-center inline-flex rounded-custom-lg bg-orange-300 ">
                        <span>Over 3 million ready-to-work creatives!</span>
                    </div>
                </div>
                <>
                    <div class="flex mt-8 items-center justify-center ">
                        <p class="text-[72px] font-source-serif text-center">The world's destination </p>
                        
                    </div>
                    <div class="flex -mt-2 items-center justify-center ">
                        <p class="text-[72px] font-source-serif text-center">for design</p>
                    </div>
                </>
                <div class="flex items-center justify-center m-4 text-[20px] font-semibold">
                    <span class="text-center">Get inspired by the work of millions of top-rated designers & agencies around the world.</span>
                </div>
                <div class="flex justify-center items-center m-4 mt-12">
                    <a href="/Home">
                        <button type="url" class="rounded-custom-lg bg-black text-white px-8 py-4">Get Started</button>
                    </a>
                </div>
            </div>
            <div>
                <Carousal />
            </div>

            {/* <div class="flex justify-center items-center">
                <span class="text-[42px]">Exploring inspiring designs</span>
            </div> */}
            {/* <div className={`justify-center items-center px-10 py-10 flex flex-wrap gap-10 mt-4`}>
                    {
                        originalData.map((single)=>(
                            <PortfolioCard portfolio={single} key={`card_${single.portfolioName}`} handleLike={save_like} handleRemoveLike={delete_like} />
                        ))
                    }
                </div> */}
        </div>

    )
}

export default LandingHero
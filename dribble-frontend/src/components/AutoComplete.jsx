import React, {useRef, useState} from 'react';

const AutoComplete = ({ tags , changeTag }) => {
    const [inputValue, setInputValue] = useState('');
    const [filteredTags, setFilteredTags] = useState([]);
    const inputRef = useRef(null);

    //tags is the list of tags which we will be using to filter the tags based on the input value
    //changeTag is the function which will be called when we click on a tag from the list of tags

    // This function will be called when we click on a tag from the list of tags
    const HandleChangeTag = (tag) =>{
        if(inputRef.current && inputRef.current.value){
            inputRef.current.value = "";
            setInputValue("")
            setFilteredTags([])
        }
        changeTag(tag)
    }

    // This function will be called whenever we type in the input field to filter the tags based on the input value and display the filtered tags
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        
        if (value) {
            const filtered = tags
                .filter(tag => tag.value.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 3);
            setFilteredTags(filtered);
        } else {
            setFilteredTags([]);
        }
    };

    // We firstly have a input field where we can type the tag name
    // We have a list of tags which will be displayed when we type in the input field and the tags will be filtered based on the input value
    // When we click on a tag from the list, the tag will be selected and the input field will be cleared
    return (
        <div className={`relative w-full`}>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={`outline-0`}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
            {filteredTags.length > 0 && (
                <ul className={`absolute w-full z-50 bg-white`} >
                    {filteredTags.map((tag, index) => (
                        <li key={index} className={`border-b-2 px-2 py-1 hover:bg-gray-100 flex justify-between z-50 items-center`} onClick={()=>{HandleChangeTag(tag.value)}}>
                            <span>{tag.value}</span>
                            <img src={tag.link} className={`w-[50px]`} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;

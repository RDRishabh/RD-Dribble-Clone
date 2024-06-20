import React, { useState, useRef, useEffect } from 'react';

const SortOptions = ({handleClick}) => {
    const [isUlVisible, setIsUlVisible] = useState(false);
    const sortRef = useRef(null);
    const [selectedSort, setSelectedSort] = React.useState("Popular");

    const handleOutsideClick = (event) => {
        if (sortRef.current && !sortRef.current.contains(event.target)) {
            setIsUlVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div
            className={`relative min-w-[100px] border-2 border-gray-100 rounded-md px-1 cursor-pointer text-xl z-50 `}
            onClick={() => setIsUlVisible(!isUlVisible)}
            onMouseLeave={() => console.log('leave')}
        >
            <div class="flex items-center justify-center">
                <span class="text-sm">{selectedSort}</span>
                <img src="/dropdown.png" alt="" class="h-2 w-2 ml-2 mt-1"/>
            </div>
            <ul
                ref={sortRef}
                className={`absolute ${isUlVisible ? 'block' : 'hidden'} min-w-full w-max bg-white border-2 top-8 left-0 rounded-md text-[12px]`}
            >
                <li className="border-b border-gray-200 px-3 py-1 hover:bg-gray-100" onClick={()=>{
                    handleClick("popularity")
                    setSelectedSort("Popular")
                }} >Popular</li>
                <li className="border-b border-gray-200 px-3 py-1 hover:bg-gray-100" onClick={()=>{
                    handleClick("dateCreated")
                    setSelectedSort("New")
                }}>New</li>
                <li className="border-b border-gray-200 px-3 py-1 hover:bg-gray-100" onClick={()=>{
                    handleClick("newsWorthy")
                    setSelectedSort("Net-Worthy")
                }} >Net-Worthy</li>
            </ul>
        </div>
    );
};

export default SortOptions;

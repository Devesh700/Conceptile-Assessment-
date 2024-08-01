import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RxReset } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const [searchValue, setsearchValue] = useState();
    const [suggestion, setsuggestion] = useState([]);
    const [activeSuggestion, setactiveSuggestion] = useState(0);
    const [link, setlink] = useState();
    const links = [
        { label: "personal details", path: "/" },
        { label: "update details", path: "/updatedetails" },
        { label: "education details", path: "/education" },
        { label: "courses enrolled", path: "/courses" },
        { label: "update education", path: "/updateeducation" },
        { label: "update courses", path: "/updatecourses" },
    ]
    const handleSearchValue = (e) => {
        setsearchValue(e.target.value)
    }
    const handleSuggestionClick = (path) => {
        setsuggestion([]);
        navigate(path);
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const selectedSuggestion = suggestion[activeSuggestion].path;
            setsuggestion([]);
            navigate(selectedSuggestion);
        }
        else if (e.key === "ArrowDown") {
            setactiveSuggestion(pre => Math.min(suggestion.length - 1, pre + 1))
        }
        else if (e.key === "ArrowUp") {
            setactiveSuggestion(pre => Math.max(0, pre - 1))
        }
    }
    useEffect(() => {
        if (searchValue) {
            const filteredSuggestion = links.filter((elem) =>
                elem?.label?.toLowerCase().includes(searchValue?.toLowerCase()))
            setsuggestion(filteredSuggestion);
        }
        else
            setsuggestion([]);
    }, [searchValue])

    return (
        <nav className=' flex justify-between items-center sm:px-8 px-2 h-20 sticky top-0 z-30 bg-white'>
            <div
                className=' flex items-center px-2 gap-3 justify-start rounded-md focus:outline-neutral-500 border-gray-500 border outline-2 relative'>
                <CiSearch className='text-lg' />
                <input type='search'
                    placeholder='Search anything here'
                    className='py-2 text-base w-36 outline-none '
                    value={searchValue}
                    onChange={handleSearchValue}
                    onKeyDown={handleKeyDown}
                />

                {suggestion.length > 0 && (
                    <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                        {suggestion.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion.path)}
                                className={`p-2 cursor-pointer ${index === activeSuggestion
                                        ? 'bg-gray-100'
                                        : ''
                                    }`}
                            >
                                {suggestion.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='flex gap-2'>
                <button className='px-4  rounded-md  hover:bg-red-800 hover:text-white border-red-600 border text-red-800 flex items-center'
                onClick={()=>{
                    localStorage.removeItem("user");
                    localStorage.removeItem("CourseData");
                    alert("localstorage refreshed now you can close the tab")
                }}><RxReset/> </button>
            <div className='rounded-full size-12 overflow-hidden'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=180' className='w-full h-full' />
            </div>
            </div>
        </nav>
    )
}

export default Navbar

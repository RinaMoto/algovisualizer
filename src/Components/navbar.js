import {useState} from 'react';

const sortTypes = ["Merge sort", "Heapsort", "Quicksort", "Bubble sort", "Radix sort", "Timsort"]
const Navbar = ({list, setList}) => {

    const handleClick = (option) => {
        if (list.includes(option)) {
            const newList = list.filter((item) => item !== option);
            setList(newList);
        }
        else {
            setList((prevItems) => [...prevItems, option])
        }
        
    }

    return (
        <>
        <nav>
            {sortTypes.map((type, i) => {
                return (
                    <button 
                    className="bg-indigo-300 hover:bg-indigo-400 text-gray-800 font-bold py-2 px-4 rounded-lg my-4 mx-1"
                    value={type} 
                    key={i} 
                    onClick={() => handleClick(type)}>{type}</button>
                )
            })}
        </nav>
        </>
    )
}

export default Navbar;
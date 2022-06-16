
const Navbar = ({list, setList, sortTypes, reset}) => {
    const handleClick = (option) => {
        reset()
        if (list.some(items => {
            if (items.title === option) {
                return true;
            }
        })) {
            if (list.length > 1) {
                const newList = list.filter((item) => item.title !== option);
                setList(newList); 
            }
        }

        else if (list.length === 2) {
            const newList = list.splice(-1, 1);
           
            const result = sortTypes.find(sort => {
                return sort.title === option
            })
            console.log(result);
            newList.push(result);
            setList(newList);
        }

        else {
            const result = sortTypes.find(sort => {
                return sort.title === option
            })
            setList((prevItems) => [...prevItems, result])
        }
        
    }

    return (
        <>
        <nav>
            {sortTypes.map((type, i) => {
                return (
                    <button 
                    className="bg-indigo-300 hover:bg-indigo-400 text-gray-700 font-bold py-2 px-4 rounded-lg my-4 mx-1"
                    value={type.title} 
                    key={i} 
                    onClick={() => handleClick(type.title)}>{type.title}</button>
                )
            })}
        </nav>
        </>
    )
}

export default Navbar;
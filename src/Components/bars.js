


const bars = ({index, item}) => {
    const barStyle = {
        height: `${2.0 * item}px`,
        backgroundColor: '#737CA1'
    }

      return (
        <div 
        key={index}
        id={index}
        className={`flex-1 w-[4px]`}  
        style={barStyle}>
        </div>
      )
}

export default bars;
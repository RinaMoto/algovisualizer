

const bars = ({index, length, color}) => {

    const colors = [
        ['rbga(61, 90,241, 0.5)', 'rbga(61, 90,241, 0.5)'],
        ['rbga(61, 90,241, 0.5)', 'rbga(61, 90,241, 0.5)'],
        ['rbga(61, 90,241, 0.5)', 'rbga(61, 90,241, 0.5)'],
    ];
    const buttom = {
        transform: `translateY(${200 - length}px) rotateX(-90deg)`,
        backgroundColor: `${colors[color[0]]}`,
        boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
        transition: '0.3s'
    }

    const right = {
        height: `${length}px`,
        transform: `translateY(${200 - length}px)`,
        backgroundColor: `${colors[color][0]}`,
        boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
        transition: '0.3s'
    }


    const barStyle = {
        height: length
    }
    return (
        <>
            <div className="bars" style={barStyle}></div>
        </>
    )
}

export default bars;
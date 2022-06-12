import {forwardRef} from 'react';

const Bars = forwardRef((props, ref) => {
    const height = `max-h-[${200 - props.length}px]`
    
    const colors = [
        ['rbga(61, 90,241, 0.5)', 'rbga(61, 90,241, 0.5)'],
        ['rbga(61, 90,241, 0.5)', 'rbga(61, 90,241, 0.5)'],
        ['rbga(61, 90,241, 0.5)', 'rbga(61, 90,241, 0.5)'],
    ];



    const barStyle = {
        height: `${2.5 * props.length}px`,
        backgroundColor: '#737CA1'
    }
    debugger;

    return (
        <>
            <div 
            ref={ref[props.index]}
            className={`flex-1 max-w-[4px]`}  
            style={barStyle}>
            </div>
        </>
    )}
);

export default Bars;
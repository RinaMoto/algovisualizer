import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar.js';
import {useState, useEffect, useRef, createRef, useMemo} from 'react';
import Bars from './Components/bars.js';
import MergeSort from './Components/mergeSort.js';


function App() {
  const [list, setList] = useState([]);
  const [array, setArray] = useState([]);
  const myRefs = useRef([createRef()]);

  const generateRandomArray = (count) => {
    if (array !== []) {
      var randoms = Array.from({length: count}, () => Math.floor(Math.random() * (300 - 50) + 50));
      setArray(randoms);
    }
  }

  useEffect(() => {
    generateRandomArray(100);
  }, [])

  function doFunction() {
    const animations = MergeSort(array);
    for (let i = 0; i< animations.length; i ++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const arrayBars = document.getElementById(barOneIdx);
        const arrayBars2 = document.getElementById(barTwoIdx)
        const barOneStyle = arrayBars.style;
        const barTwoStyle = arrayBars2.style;
        const color = i % 3 === 0 ? 'red' : '#737CA1'
      
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 1);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx).style
        barOneStyle.height = `${2.5 * newHeight}px`;
      }, i * 1);
    }
    }
  };

  function generateRandomNumber (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
  }


  const inputRefs = useMemo(() => Array(100).fill(0).map(i => createRef()), []);

  return (
    <>
      <div className="h-full">
        <header className="grid text-center place-content-center mt-5">
          <h1>Welcome to algorithm visualizer</h1>
          <Navbar list={list} setList={setList} />
          <button 
            className="bg-green-700 hover:bg-green-600 text-gray-800 font-bold py-2 px-4 rounded-lg my-2 mx-[20rem]"
            onClick={doFunction}
            >start sort</button>
        </header>
        <body className="grid grid-cols-1 mx-5">
          <div className={`flex bg-slate-700 h-[48rem] place-self-center m-2 w-[50rem] px-1 rounded space-x-1`} id="array-bars">
    
          {array ? array.map((item, index) => {
            console.log(item, index)
        
            const barStyle = {
              height: `${2.5 * item}px`,
              backgroundColor: '#737CA1'
          }
            return (
              <div 
              id={index}
              className={`flex-1 max-w-[4px]`}  
              style={barStyle}>
            </div>
            )
          }) : null}
          </div>
        </body>
      </div>
    </>
  );
}

export default App;

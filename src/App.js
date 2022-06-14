import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar.js';
import {useState, useEffect, useRef, createRef, useMemo} from 'react';
import Bars from './Components/bars.js';
import MergeSort from './Components/mergeSort.js';
import HeapSort from './Components/heapSort.js';

function App() {
  const [list, setList] = useState([]);
  const [array, setArray] = useState([]);
  const myRefs = useRef([createRef()]);
  const [processing, setProcessing] = useState(false);


  const generateRandomArray = (count) => {
    var randoms = Array.from({length: count}, () => Math.floor(Math.random() * (300 - 50) + 50));
    setArray(randoms);
  }

  function reset() {
    generateRandomArray(100);
    for (let i = 0; i < array.length; i ++) {
      document.getElementById(i).style.backgroundColor = '#737CA1'
    }
}

  useEffect(() => {
    generateRandomArray(100);
  }, [])

  function doFunction() {
    const animations = MergeSort(array);
    for (let i = 0; i < animations.length; i ++) {
      setProcessing(true);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const arrayBars = document.getElementById(barOneIdx);
        const arrayBars2 = document.getElementById(barTwoIdx)
        const barOneStyle = arrayBars.style;
        const barTwoStyle = arrayBars2.style;
        const color = i % 3 === 0 ? 'red' : '#76BA1B'
      
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 1);

    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx).style
        barOneStyle.height = `${2.5 * newHeight}px`;
        if (i === animations.length - 1) {
          setProcessing(false);
        }
      }, i * 1);
    }
  }
  };

  function doHeap() {
    const animations = HeapSort(array);
    console.log(animations[0], animations[1])
    for (let i = 0; i < animations[0].length; i++) {
      const [barOneIdx, newHeight] = animations[0][i];
      const barOneStyle = document.getElementById(barOneIdx).style
      setTimeout(() => {
        barOneStyle.height = `${2.5 * newHeight}px`;
      }, i * 1)
    }

    for (let i = 0; i < animations[1].length; i++) {
      const [barOneIdx, newHeight] = animations[1][i];
      const barOneStyle = document.getElementsById(barOneIdx).style
      setTimeout(() => {
        barOneStyle.height = `${2.5 * newHeight}px`
        barOneStyle.backgroundColor = '#76BA1B'
      }, i * 1)
    }
  }

  const inputRefs = useMemo(() => Array(100).fill(0).map(i => createRef()), []);

  return (
    <>
      <div className="h-full">
        <header className="grid text-center place-content-center mt-5">
          <h1>Welcome to algorithm visualizer</h1>
          <Navbar list={list} setList={setList} />
          <div className="flex place-content-center">
            <button 
            id="reset-btn"
            className="bg-green-700 hover:bg-green-600 text-gray-800 font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={doHeap}
            >start sort</button>
            <button 
            className="bg-red-700 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={reset}
            disabled={processing ? true : false}
            >reset</button>
          </div>
          
        </header>
        <body className="grid grid-cols-1 mx-5">
          <div className={`flex bg-slate-700 h-[48rem] place-self-center m-2 w-[50rem] px-1 rounded space-x-1`} id="array-bars">
    
          {array ? array.map((item, index) => {
        
            const barStyle = {
              height: `${2.5 * item}px`,
              backgroundColor: '#737CA1'
          }
            return (
              <div 
              key={index}
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

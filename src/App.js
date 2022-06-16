import {useState, useEffect} from 'react';
import './App.css';
import MergeSort from './Components/Algorithms/mergeSort.js';
import HeapSort from './Components/Algorithms/heapSort.js';
import QuickSort from './Components/Algorithms/quickSort.js';
import BubbleSort from './Components/Algorithms/bubbleSort.js';
import RadixSort from './Components/Algorithms/radixSort.js';
import TimSort from './Components/Algorithms/timSort.js';

import Bars from './Components/bars.js';
import Navbar from './Components/navbar.js';
import {sortTypes} from './Components/sortTypes.js';

import {Tooltip, Slider} from '@mui/material';


const TIMING = 2;

const ARRAY_NUM = 100;

function App() {
  const [list, setList] = useState([]);
  const [array, setArray] = useState([]);
  const [arrayNum, setArrayNum] = useState(ARRAY_NUM);

  const generateRandomArray = (count) => {
    var randoms = Array.from({length: count}, () => Math.floor(Math.random() * (300 - 50) + 50));
    setArray(randoms);
  }

  function reset() {
    let highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i); 
    }

    generateRandomArray(arrayNum);
    for (let i = 0; i < array.length * list.length; i ++) {
      document.getElementById(i).style.backgroundColor = '#737CA1'
    }
  }

  function changeArrNum(num) {
    setArrayNum(num.target.value);
    reset()
  }

  function doSorts() {
    // reset if values are already sorted
    if (document.getElementById(0).style.backgroundColor = '#76BA1B') {
      reset()
    }

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].title)
        switch(list[i].title) {
          case "Merge sort":
            doMerge(i);
            break;
          case "Heap sort":
            doHeap(i);
            break;
          case "Quick sort":
            doQuickSort(i);
            break;
          case "Bubble sort": 
            doBubbleSort(i);
            break;
          case "Radix sort":
            doRadix(i);
            break;
          case "Tim sort":
            doTim(i);
            break;
          default:
            continue;
        }
    }
  }

  useEffect(() => {
    generateRandomArray(ARRAY_NUM);
    setList([sortTypes[0]]);
  }, [])

  function doMerge(offset) {
    const animations = MergeSort(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const arrayBars = document.getElementById(barOneIdx + (array.length * offset));
        const arrayBars2 = document.getElementById(barTwoIdx + (array.length * offset))
        const barOneStyle = arrayBars.style;
        const barTwoStyle = arrayBars2.style;
        const color = i % 3 === 0 ? 'red' : '#76BA1B'
      
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * TIMING);

    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        barOneStyle.height = `${2.0 * newHeight}px`;
      }, i * TIMING);
    }
  }
  };

  function doHeap(offset) {
    const animations = HeapSort(array);
    const maxheapEnd = animations[1]
    for (let i = 0; i < animations[0].length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[0][i];
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        const barTwoStyle = document.getElementById(barTwoIdx + (array.length * offset)).style
        let color = i % 3 === 0 ? 'red' : '#76BA1B'
        if (i < maxheapEnd) {
          color = i % 3 === 0 ? 'red' : '#737CA1'
        }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * TIMING)
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[0][i]
          const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
          const barTwoStyle = document.getElementById(barTwoIdx + (array.length * offset)).style
          barOneStyle.height = `${2.0 * newHeightOne}px`;
          barTwoStyle.height = `${2.0 * newHeightTwo}px`;
        }, i * TIMING);
      }
    }
  }

  function doQuickSort(offset) {
    const animations = QuickSort(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        const barTwoStyle = document.getElementById(barTwoIdx + (array.length * offset)).style
        let color = i % 3 === 0 ? 'red' : '#76BA1B'
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * TIMING)
      }
      else {
        const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        const barTwoStyle = document.getElementById(barTwoIdx + (array.length * offset)).style
        setTimeout(() => {
          barOneStyle.height = `${2.0 * newHeightOne}px`;
          barTwoStyle.height = `${2.0 * newHeightTwo}px`;
        }, i * TIMING);
      }
    }
  }

  function doBubbleSort(offset) {
    const animations = BubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        const barTwoStyle = document.getElementById(barTwoIdx + (array.length * offset)).style
        let color = i % 3 === 0 ? 'red' : '#76BA1B'
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * TIMING)
      }
      else {
        const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        const barTwoStyle = document.getElementById(barTwoIdx + (array.length * offset)).style
        setTimeout(() => {
          barOneStyle.height = `${2.0 * newHeightOne}px`;
          barTwoStyle.height = `${2.0 * newHeightTwo}px`;
        }, i * TIMING);
      }
    }
  }


  function doRadix(offset) {
    const animations = RadixSort(array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx] = animations[i];
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        let color = i % 3 === 0 ? 'red' : '#76BA1B'
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * TIMING)
      }
      else {
        const [barOneIdx, newHeightOne] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        setTimeout(() => {
          barOneStyle.height = `${2.0 * newHeightOne}px`;
        }, i * TIMING);
      }
    }
  }

  function doTim(offset) {
    const animations = TimSort(array);
    for (let i = 0; i < animations.length; i ++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (barOneIdx !== barTwoIdx) {
          const arrayBars = document.getElementById(barOneIdx + (array.length * offset));
          const arrayBars2 = document.getElementById(barTwoIdx + (array.length * offset));
          const barOneStyle = arrayBars.style;
          const barTwoStyle = arrayBars2.style;
          const color = i % 3 === 0 ? 'red' : '#76BA1B'
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * TIMING);
        }
        else {
          const [barOneIdx] = animations[i];
          const arrayBars = document.getElementById(barOneIdx + (array.length * offset));
          const barOneStyle = arrayBars.style;
          const color = i % 3 === 0 ? 'red' : '#76BA1B'
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
          }, i * TIMING);
        }
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i]
        const barOneStyle = document.getElementById(barOneIdx + (array.length * offset)).style
        barOneStyle.height = `${2.0 * newHeight}px`;
      }, i * TIMING);
    }
  }
  }

  return (
      <div className="h-full bg-slate-600">
        <header className="grid text-center place-content-center pt-7">
          <h1 className="font-bold text-slate-300 sm:font-medium">Welcome to visualizeAlgo</h1>
          <Navbar list={list} setList={setList} sortTypes={sortTypes} reset={reset}/>
          <div className="flex place-content-center">
            <button 
            id="reset-btn"
            className="bg-green-700 hover:bg-green-600 text-gray-200 font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={doSorts}
            >start sort</button>
            <button 
            className="bg-red-700 hover:bg-red-600 text-gray-200 font-bold py-2 px-4 rounded-lg my-2 mx-4"
            onClick={reset}
            >reset</button>
          </div>
          <div className="w-[20rem] place-self-center mt-10">
            <p className="text-slate-300 font-medium">Change number of bars</p>
           <Slider 
            aria-label="array size"
            defaultValue={100}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={50}
            max={100}
       
            onChange={(val) => changeArrNum(val)}
          /> 
          </div>
        </header>
        <body className="flex flex-wrap justify-center mx-5 gap-2 bg-slate-600">
          {list.map((item, i) => {
            const best = `Best: ${item.best}`
            const worst = `Worst: ${item.worst}`
            const average = `Average: ${item.average}`
            return (
              <div className="my-5">
                <Tooltip title={
                  <div>
                    <p className="w-[6rem] text-center">{best}</p>
                    <p className="w-[6rem] text-center">{worst}</p>
                    <p className="w-[6rem] text-center">{average}</p>
                  </div>
                } 
                placement="top"
                enterDelay={200}>
                <h3 className="text-slate-300 text-center font-bold my-3">{item.title}</h3>
                </Tooltip>
                <div className={`flex bg-slate-700 w-[24rem] h-fit sm:h-[38rem] place-self-center justify-center sm:m-2 sm:w-[40rem] sm:px-1 rounded sm:space-x-0.5 shadow-lg`} id="array-bars">
                    {array ? array.map((height, index) => {
                      return (
                      <Bars index={index + (array.length * i)} item={height}/>
                      )
                    }) : null}
                </div>
            </div>
            )
          })}
        </body>
        <footer className="place-self-center text-center text-slate-300 m-10">
          Developed by Rina Easterday &copy; 2022
        </footer>
      </div>

  );
}

export default App;

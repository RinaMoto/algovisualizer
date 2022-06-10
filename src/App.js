import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar.js';
import {useState, useEffect} from 'react';
import Bars from './Components/bars.js';

function App() {
  const [list, setList] = useState([ ]);
  const [array, setArray] = useState(null);

  function generateRandomNumber (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
  }
  function generateRandomArray (count) {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(generateRandomNumber(50, 200))
    }
    console.log(temp)
  }

  useEffect(() => {
    generateRandomArray(50);
  })
  return (
    <>
      {array.map((num, index) => {
        <Bars
          key={index}
          index={index}
          length={num}
          color={index}
        />
      })}
      <div className="App">
        <header className="App-header">
          <h1>Welcome to algorithm visualizer</h1>
          <Navbar list={list} setList={setList} />
        </header>
        <body>

        </body>
      </div>
    </>
  );
}

export default App;

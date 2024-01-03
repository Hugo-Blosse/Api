import { useState, useEffect } from 'react'
import './App.css'
import Home from './home';


function App() {
  const [count, setCount] = useState(0);

  const [namer, setNamer] = useState("dupa");

  const title = "henlo";
  const link = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"
  const handleClick = () => {
    console.log("xd");
    setName("cycki")
  }
  const handleClickWithParameter = (name) => {
    console.log("name "+name);
  }


  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <Home />
      <p>{namer}</p>
      <div className='content'>
        <button onClick={handleClick}>Henlo mi fren</button>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => handleClickWithParameter("dupa")}>Paramatr</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <div className='Xd'>
          <h1>{title}</h1>
          <p>{ Math.random()*10}</p>
          <a href={link}>youtube</a>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App

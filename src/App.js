import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // пример декларативного стиля
  const [currYear, setCurrYear] = useState('');

  const getCurrYear = () => {
    const currDate = new Date();
    return currDate.getFullYear();
  }

  useEffect(() => {
    setCurrYear(getCurrYear());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{currYear}</p>
      </header>
    </div>
  );
}

export default App;

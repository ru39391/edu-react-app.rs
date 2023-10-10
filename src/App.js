import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // пример императивного стиля
  const setLogoSrc = (url) => {
    document.querySelector('.App-logo').src = url;
  }

  const setCurrYear = () => {
    const currDate = new Date();
    document.querySelector('.current-year').textContent = currDate.getFullYear();
  }

  useEffect(() => {
    setLogoSrc(logo);
    setCurrYear();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="#" className="App-logo" alt="logo" />
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
        <p className="current-year"></p>
      </header>
    </div>
  );
}

export default App;

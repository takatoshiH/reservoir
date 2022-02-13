import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header className="App_header">
            <LikeButton />
        </header>
      </div>
    </div>
  );
}

function LikeButton() {
    const [count, setCount] = useState(999);

    const handleClick = () => {
        setCount(count + 1)
    }
    return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}

export default App;

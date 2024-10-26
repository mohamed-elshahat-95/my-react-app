import me from './me.png';
import { useState } from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import WelcomeFC from './components/WelcomeFC';
import WelcomeClass from './components/WelcomeClass';


function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        {/* Function Component */}
        <WelcomeFC name="Mohamed Elshahat" age="30"/>
        _______________________________________________________________________________
        {/* Class Component */}
        <WelcomeClass age="30"/>
        _______________________________________________________________________________
        {/* Conditional Rendering */}
        <button onClick={() => {setIsLogedIn(true)}}>Login</button>
        <button onClick={() => {setIsLogedIn(false)}}>Logout</button>
        { isLogedIn ? <h1>I`m logged</h1> : <h2>I`m <u>not</u> logged</h2> }
        _______________________________________________________________________________
        {/* Lists and Keys */}
        <ProductsList />

      </header>
    </div>
  );
}

export default App;

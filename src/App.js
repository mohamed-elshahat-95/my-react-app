import me from './me.png';
import './App.css';
import WelcomeFC from './components/WelcomeFC';
import WelcomeClass from './components/WelcomeClass';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        <WelcomeFC name="Mohamed Elshahat" age="30"/>
        _______________________________________________________________________________
        <WelcomeClass age="30"/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';


function App() {
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
      </header>
      <main>

        <Hello message="React" color="blue"/>
        <Hello message="Training" color="orange"/>

        <Counter initCount={5}/>
        <Counter initCount={10}/>
       
      </main>
    </div>
  );
}

export default App;

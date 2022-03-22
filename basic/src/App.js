import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Outputting from './Outputting';

function App() {

  return(
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <br />
        <br />
        <br />
        <p>Outputting Lists in React</p>
        <Outputting />
      </div>
    </div>
  );
  
}

export default App;

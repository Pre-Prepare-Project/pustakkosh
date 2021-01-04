import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter as Router,} from "react-router-dom";
import {Button} from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
        <Link to={'https://reactjs.org'}
          target="_blank"
          rel="noopener noreferrer"
        >
        <Button type={'primary'}>  Learn React</Button>
        </Link>
        </Router>
      </header>
    </div>
  );
}

export default App;

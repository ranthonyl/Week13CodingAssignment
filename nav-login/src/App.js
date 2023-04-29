import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;

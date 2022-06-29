import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Header from './Header.js'
import axios from 'axios'
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

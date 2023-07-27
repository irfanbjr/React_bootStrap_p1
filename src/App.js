
import './App.css'; 
import About from './components/About';
import Form1 from './components/Form1';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';
// import Switch from 'react-router-dom'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar heading ="Text Up-Low Case" link="About"/>
      <Routes>
        <Route exact path="/" element={<Form1/>} />
        <Route exact path="/about" element={<About/>}/>
      </Routes>
  
 
  </>
  );
}

export default App;

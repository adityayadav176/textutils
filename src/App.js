import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('mode')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
  <Navbar title="textUtils" toggleMode={toggleMode} mode={mode}/>
  <Alert alert="this is alert"/>
  
  <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    {/* <About/> */}
  </div>
  </>
  );
}

export default App;

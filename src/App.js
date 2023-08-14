
import './App.css';
//import About from './components/About';
import Nav from './components/Nav';
import TextForm from  './components/TextForm';
//import Footer from './components/Footer';
import React, {useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#0d0d0e';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
 <>
      
<Nav title ="PRONETIZENS" mode={mode} toggleMode={toggleMode}/>

<div className="container my-3" >
 <TextForm heading="Enter the text here..!" mode={mode}/>
 {/* <About/> */}
</div>
{/* <div className="container my-3">

    <Footer/>
</div> */}
</>

  );
}

export default App;

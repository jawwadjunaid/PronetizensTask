
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
//import TextForm from  './components/TextForm';
import Footer from './components/Footer';

function App() {
  return (
 <>
      
<Nav title ="PRONETIZENS"/>

<div className="container my-3" >
 {/* <TextForm heading="Enter the text here..!"/> */}
 <About/>
</div>
<div className="container my-3">

    <Footer/>
</div>
</>

  );
}

export default App;

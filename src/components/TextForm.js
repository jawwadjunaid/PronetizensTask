import React,{useState} from 'react'

 

export default function TextForm(props) {

    const handleUpClick= ()=>{
        //console.log("Uppercase was Clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
       // console.log("On Changed")
       setText(event.target.value)
    }
    const handleLowClick = () =>{
      const lowText = text.toLowerCase();
      setText(lowText);
    }
    const handleClearText = () =>{
      let lowText = '';
      setText(lowText);
    }

    const [text, setText] = useState('Enter the text here..');
  return (
    <>
<div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-4">
<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}rows="8"></textarea>
</div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
  </div>
  
  <div className="container my-4">
    <h1>Your Text Summary</h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length } Minutes to Read</p>
    <p>{text.split(" ").join("").length} Character Count Without Spacing</p>
    <h2>Preview</h2>
    
    
  </div>
  </>
  )
}

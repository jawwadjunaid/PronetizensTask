import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On Changed")
    setText(event.target.value);
    
  };

  const [text, setText] = useState("");
  const handleUpClick = () => {
    //console.log("Uppercase was Clicked" +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    const lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearText = () => {
    let lowText = "";
    setText(lowText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-4">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7" , border: "1px solid white"}} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7", border: "1px solid white"}} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7", border: "1px solid white"}} onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7", border: "1px solid white"}} onClick={handleCopyText}>
          Copy text
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7", border: "1px solid white"}} onClick={removeExtraSpace}>
          Remove extra space
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!== 0}).length} word and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes to Read</p>
        <p>{text.split(" ").join("").length} Character Count Without Spacing</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to the Textbox above to preview it here..."}</p>
      </div>
    </>
  );
}

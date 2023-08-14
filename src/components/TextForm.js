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
  };

  const handleLowClick = () => {
    const lowText = text.toLowerCase();
    setText(lowText);
  };
  const handleClearText = () => {
    let lowText = "";
    setText(lowText);
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
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
        <button className="btn btn-dark mx-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7"}} onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-dark mx-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7"}} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7"}} onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7"}} onClick={handleCopyText}>
          Copy text
        </button>
        <button className="btn btn-dark mx-1" style={{backgroundColor:props.mode ==="dark" ? "black" : "#0b5ed7"}} onClick={removeExtraSpace}>
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
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes to Read</p>
        <p>{text.split(" ").join("").length} Character Count Without Spacing</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to the Textbox above to preview it here..."}</p>
      </div>
    </>
  );
}

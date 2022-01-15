import React, { useState } from "react";

export default function TextForm(props) {
  const handleChange = (event) => {
    // console.log("Text is changed.")
    setText(event.target.value);
    
  };
  const handleUpClick = () => {
    // console.log("You Clicked the button.")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("ALL YOUR WORDS IN UPPER CASE. ", "success")
  };
  const handleLowClick = () => {
    // console.log("You Clicked the button.")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("ALL YOUR LOWER IN UPPER CASE. ", "success")
  };
  const capitalFirstLetter = () => {
    let newText = text.split(" ");
    let uppercaseword = "";
    newText.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
    props.showAlert("First Word is UPPER CASE. ", "success")
  };

  const capitalFirstWord = () => {
    let newText = text.split(" ");
    let ucw = "";
    newText.forEach((element) => {
      ucw += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(ucw);
  };

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text-Copied ", "success")
  };

  const extraSpaces= () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra Spaces Removed", "success")
  }
  // const sentense = () =>{
  //   let newText = text.split(".")
  //   let sentenseend = ''
  //   newText.forEach(element => {
  //     sentenseend += element.newText.length + " "

  //   });

  //   setText(sentenseend)
  // }
  const [text, setText] = useState("");

  // const [text, setText] = useState('This is the Box  where you start writing : ');
  // setText("This is  the updated Text.");
  return (
    <>
      <div className="container" style={{color : props.mode===`dark`?`white`: `black`}} >
          <h2>{props.heading} </h2>
          <div className="mb-3">
            <textarea
            style={{backgroundColor : props.mode==='light'?'white' : '#1b3249', color : props.mode==='dark'?'white': 'black'}}
              className="form-control"
              value={text}
              onChange={handleChange}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Enter For Upper Text
          </button>
          <button className="btn btn-danger mx-1" onClick={handleLowClick}>
            Enter For Lower Text
          </button>
          <button className="btn btn-success mx-1" onClick={capitalFirstLetter}>
            First Letter Capital
          </button>
          <button className="btn btn-primary mx-1" onClick={capitalFirstWord}>
            Sentense
          </button>
        <button className="btn btn-danger mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-success mx-1" onClick={extraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-4" style={{color : props.mode===`dark`?`white`: `black`}}>
        <h2>Here is The Summary</h2>
        <p>
          Total words are {text.split(" ").length -1} and alphabets are {" "}
          {text.length}
        </p>
        <p>
          Total time to read this paragraph is :{" "}
          {0.016 * text.split(" ").length} Minute{" "}
        </p>
        <p>
          Total Number of Sentences is : {text.split(".").length - 1 }
        </p>
        <h2> Preview </h2>
        <p>{text.length>0?text:"ENTER YOUR TEXT ON THE ABOVE BOX : "}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  // Initializing state
  const [text, setText] = useState("");

  // Handle text change in textarea
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handle button click to convert text (example logic)
  const handleConvertup = () => {
    // Example: convert text to uppercase when button is clicked
    setText(text.toUpperCase());
    props.alert("successfully convert to upper case", "success");
  };
  // Handle button click to convert text (example logic)
  const handleConvertlow = () => {
    // Example: convert text to uppercase when button is clicked
    setText(text.toLowerCase());
    props.alert("successfully convert to lower case", "success");
  };
  const clearall = () => {
    setText("");
    props.alert("successfully clear text", "primary");
  };
  const titlecase = () => {
    let skipWord = [
      "a",
      "an",
      "the",
      "and",
      "but",
      "or",
      "nor",
      "for",
      "so",
      "yet",
      "in",
      "on",
      "at",
      "by",
      "with",
      "about",
      "against",
      "between",
      "during",
      "through",
      "under",
      "over",
      "before",
      "after",
      "from",
      "of",
      "to",
      "up",
      "down",
      "among",
      "along",
      "around",
    ];
    let isavailble = false;
    let currentText = text.split(" ");
    for (let i = 0; i < currentText.length; i++) {
      let word = currentText[i].toLowerCase(); // Added parentheses to call the function
      isavailble = false;
      for (var y of skipWord) {
        if (currentText[i] === y) {
          isavailble = true;
          break;
        }
      }
      if (isavailble === false) {
        currentText[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }
    }
    setText(currentText.join(" ")); // Join the array back into a string and update state
    props.alert("successfully convert to title case", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.alert("successfully copied to clipboard", "success");
  };

  return (
    <>
      <h1>{props.title}</h1>
      <div className={`textarea`}>
        <label htmlFor="mybox" className="form-label">
          Enter text:
        </label>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
          }}
          id="mybox"
          rows="5"
          placeholder="enter text here"
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <button
          className={`btn btn-primary my-3 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleConvertup}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-primary mx-2 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={handleConvertlow}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-primary mx-2 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={titlecase}
        >
          TitleCase
        </button>
        <button
          className={`btn btn-primary mx-2 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={copyText}
        >
          Copy
        </button>
        <button
          className={`btn btn-primary mx-2 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          onClick={clearall}
        >
          Clear
        </button>
        <p class={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {text.split(" ").length - 1} word and {text.length} charecter
        </p>
        <h5 class={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {0.008 * text.length} minetes read
        </h5>
        <h2 class={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          review
        </h2>
        <p class={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {text.length > 0 ? text : "write something herre to review"}
        </p>
      </div>
    </>
  );
}

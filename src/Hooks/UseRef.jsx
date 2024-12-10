import { useState, useRef, useEffect } from "react";

var UseRef = () => {
  var [text, setText] = useState("");
  var prevText = useRef(text);
  useEffect(()=>{
    console.log(prevText);
    prevText.current = text
  })
  return (
    <div>
      <h1>Example of UseRef</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <h2>Current Render is {text}</h2>
      <h3>Previous Render is {prevText.current}</h3>
    </div>
  );
};
export default UseRef;
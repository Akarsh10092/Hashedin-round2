import { useState } from "react";
import "./App.css";
import Palindrom from "./Palindrom";

function App() {


  const [textValue, setTextValue] = useState("");
  const [isPalindrome, setPalindrome] = useState(false);
 

  const checkPalindrome = (text) => {
    const cleanedText = text.toLowerCase().replace(/\W/g, "");
    const isPalin = cleanedText === cleanedText.split("").reverse().join("");
    setPalindrome(isPalin);
  };

 

  return (
    <>
      <div>
        <p>Palindrome Question</p>
        <input
          value={textValue}
          placeholder="Enter Text"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button onClick={() => checkPalindrome(textValue)}>
          Check palindrome
        </button>
        {isPalindrome ? (
          <p>The text "{textValue}" is a palindrome.</p>
        ) : (
          <p>The text "{textValue}" is not a palindrome.</p>
        )}
      </div>
      <Palindrom/>
    </>
  );
}

export default App;

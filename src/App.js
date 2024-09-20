import {
  useState,
  useRef
} from "react"; 
import "./app.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); 
    inputRef.current.value = ""
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault(); 
    // resultRef.current.innerText = 0
    setResult(0)
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Calculator with</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          result: {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="buttonsContainer">
          <button onClick={plus} className="normal">add</button>
          <button onClick={minus} className="normal">subtract</button> 
          <button onClick={times} className="normal">multiply</button> 
          <button onClick={divide} className="normal">divide</button> 
          <button onClick={resetInput} className="special">resetInput</button> 
          <button onClick={resetResult} className="special">resetResult</button> 
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 

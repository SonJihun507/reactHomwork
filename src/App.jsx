import "./App.css";
import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);

  
  const addCount = () => {
    setCount(count + 1);
  };
  
  
  const minusCount = () => {
	  setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <div>
        <button onClick={minusCount}>-</button>
        
        Count: {count}
        
        <button onClick={addCount}>+</button>
        <button className="never-push" onClick={resetCount}>절대 누르고 싶어지는 빨간버튼</button>
      </div>
    </>
  );
}

export default App;
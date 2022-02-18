import React,{useState} from 'react'
import "./App.css"


function App() {
  const [add, setAdd]= useState(0)

  function Plus(){
    setAdd(add +1)
  }

  const Minus = () => {
    setAdd(add -1)
  }

  return (
    <div className="Main_Container">
      <div className="Holder">
        <button onClick={Minus}>-</button>
        <h2>{add}</h2>
        <button onClick={Plus}>+</button>
      </div>
    </div>
  );
}
export default App;
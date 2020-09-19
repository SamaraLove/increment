import React, {useState} from "react";
import './App.css';

function App() {
  const [value, setValue] = useState(0)
// value = 0;


  return (
    <div className="App">
      <header className="increment">
        <p>
          {value}
        </p>

        <button onClick={()=> { setValue(value + 1) }}>increase</button>
        <button onClick={()=> { setValue(value - 1) }}>decrease</button>

      </header>
    </div>
  );
}

export default App;



// function increase_no(){
//   // return value
//   // document.getElementById("value").innerHTML = i;
//   var value = parseInt(document.getElementById('number').value, 10);
//   value += 1
//   document.getElementById('number').value = value;
// }

// function decrease_no(){
//   var value = parseInt(document.getElementById('number').value, 10);
//   value -= 1
//   document.getElementById('number').value = value;
// }
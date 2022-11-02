import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';


function App() {

  //create state
  const [boxes, setBoxes] = useState(["red", "green", "blue"])

  const addBoxColor = (colorName) => {
    // console.log("hello we got", colorName)
    //add colorname from Form component
    setBoxes([...boxes, colorName])
  }
  // const changeBoxSize = (size) => {
  //   setBoxes([...boxes, size])
  // }
  
  return (
    <div className="App">
      <h1>Box Generator</h1>
      {/* {JSON.stringify(boxes)} */}
      
      <Form addBoxColor={addBoxColor}/>
      <Display boxes={boxes}/>
    </div>
  );
}

export default App;

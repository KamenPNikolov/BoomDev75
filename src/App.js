import "./App.css";
import {useState} from "react";

function App() {
  
  const [text,setText]= useState(localStorage.getItem("priorValue"));

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." value = {text} onChange={(event)=>{
                              setText((text)=>{
                                console.log(event.target.value);
                                return event.target.value; 
                              });
                            }}/>
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick = {()=>{localStorage.setItem("priorValue",text);}}>Save</button>
        <button className="button is-large" onClick = {()=>{localStorage.setItem("priorValue","");}}>Clear</button>
      </div>
    </div>
  );
}

export default App;

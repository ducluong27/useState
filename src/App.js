import data from "./data"
import './App.css';
import { useState } from "react";
import List from "./list";

function App() {
  const [people,setPeople]=useState(data)
  return (
    
    <div className="App">
      <h3>{people.length} birthday to day</h3>
      <List people={people}/>
      <button onClick={()=>setPeople()}>clear all</button>
    </div>
  );
}

export default App;

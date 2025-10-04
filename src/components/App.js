
import React from "react";
import {Link,Routes,Route} from "react-router-dom";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h1>Item List</h1>
       <Link to="/items/1">Item 1</Link>
        <Link to="/items/2">Item 2</Link>
         <Link to="/items/3">Item 3</Link>

         <Routes>
          <Route path="/items/1" element={<Item1/>}/>
          <Route path="/items/2" element={<Item2/>}/>
          <Route path="/items/3" element={<Item3/>}/>
          </Routes>
 </div>
  )
}

export default App

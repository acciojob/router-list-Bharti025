
import React from "react";
import {Link,Routes,Route} from "react-router-dom";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       <Link to="/item1">Item 1</Link>
        <Link to="/item2">Item 2</Link>
         <Link to="/item3">Item 3</Link>
   
         <Routes>
          <Route path="/item1" element={<Item1/>}/>
          <Route path="/item2" element={<Item2/>}/>
          <Route path="/item3" element={<Item3/>}/>
          </Routes>
 </div>
  )
}

export default App

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Home"

function App() {

  return(
   
    <div className='App'>
      <Router basename="/CodeX-Compiler"> 
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
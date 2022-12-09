import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Admin from "./Containers/Admin/Admin";

function App() {
  return (
    <div className="text-center">
      <header className="mb-5">
        <Navbar/>
      </header>
      <div className="fs-3">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/pages/admin' element={<Admin/>}/>
          <Route path='/pages/about'/>
          <Route path='/pages/python'/>
          <Route path='/pages/javascript'/>
          <Route path='/pages/java'/>
          <Route path='/pages/contacts'/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Admin from "./Containers/Admin/Admin";
import Page from "./Components/Page/Page";

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
          <Route path='/pages/:pageName' element={(
            <Page key={Math.random()}/>
          )} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

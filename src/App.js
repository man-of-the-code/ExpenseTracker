import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={ <Home /> } ></Route>
          <Route path="/general" element={ <FetchData cat="general" /> } ></Route>
          <Route path="/business" element={ <FetchData cat="business" /> } ></Route>
          <Route path="/entertainment" element={ <FetchData cat="entertainment" /> } ></Route>
          <Route path="/health" element={ <FetchData cat="health" /> } ></Route>
          <Route path="/science" element={ <FetchData cat="science" /> } ></Route>
          <Route path="/sports" element={ <FetchData cat="sports" /> } ></Route>
          <Route path="/technology" element={ <FetchData cat="technology" /> } ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Home from "./home";
import { AppContext } from "../context/appContext";
function App() {
  const [data, setData] = React.useState("");

  return (
    <AppContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

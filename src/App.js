import React from "react";
import { Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:tool_id" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import "./App.css";
import React from "react";
import "./index.css";
import Inputform from "./components/pages/inputform";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./components/pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Landing} />
        <Route path="add-split" componet={Inputform} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

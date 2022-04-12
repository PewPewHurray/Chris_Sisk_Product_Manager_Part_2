import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Main from './Views/Main';
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<Detail/>} path="/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

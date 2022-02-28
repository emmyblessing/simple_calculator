import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Calculator from './components/Calculator';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Calculator />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

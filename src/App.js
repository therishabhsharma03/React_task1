import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { React } from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import Task_1 from './components/Task_1';
function App() {
  return (
    <div >
          <Task_1 />
    </div>
  );
}

export default App;

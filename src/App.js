import './App.css';
import LogIn from "./components/LogIn";
import Dashboard from './components/Dashboard'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/signin" element={<LogIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

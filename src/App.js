import './App.css';
import Nav from './components/Nav';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate // Import the Navigate component for redirection
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
       msg: message,
       type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [btnmode, setbtnmode] = useState('Enable Dark Mode'); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      setbtnmode('disable Dark Mode');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!!!", "success");
    } else {
      setMode('light');
      setbtnmode('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!!!", "success");
    }
  };

  return (
    <>
      <Router>
        <Nav title="TextMaster" mode={Mode} toggleMode={toggleMode} btnmode={btnmode}/>   
        <Alert alert={alert}/>

        <div className='container'>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} /> {/* Redirect root path to /Home */}
            <Route path="/Home" element={<TextForm mode={Mode} showAlert={showAlert} heading="Enter text to analyze..."/>} /> {/* Home route */}
            <Route path="/About" element={<About mode={Mode}/>} /> {/* About route */}
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;

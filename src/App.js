import './App.css';
import Navbar from './components/Navbar';
import MagicalForm from './components/MagicalForm';
import React, { useState } from 'react' //imrs short-hand property
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
// let count = 0;
// let counter = (() => {
//   return ++count;
// }, 100);
function App() {
  const [mode, setMode] = useState('white');
  const toggleMode = () => {
    if (mode === 'black') {
      setMode('white');
      showAlert('Light mode has been enabled', 'Succes')
      document.title = 'My App- Light Mood Enabled';
    }
    else {
      setMode('black')
      showAlert('Dark mode has been enabled', 'Succes')
      document.title = 'My App- Dark Mood Enabled';
      // setInterval(() => {
      //   document.title='This is Feb';
      // }, 1000);
      // setInterval(() => {
      //   document.title='Visit this Web';
      // }, 1500);
    }
  }
  const [alert, changeAlert] = useState(null);
  const showAlert = (message, type) => {
    changeAlert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   changeAlert(null);
    // }, 1000);
  }
  return (
    <>
      <Router>
        <div className="container">
          <Navbar logo="Logo" siteTitle="siteTitle" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="user">
            Hello,{myFunct(user)}
          </div>
          <Routes>
            <Route path="/" element={<MagicalForm />}>
            </Route>
            <Route path="/about" element={<AboutUs />}>
            </Route>
          </Routes>
          {/* <div className="count">
        {counter}
      </div> */}
        </div>
      </Router>
    </>
  );
}
<script src="https://kit.fontawesome.com/db45597dc1.js" crossorigin="anonymous"></script>
function myFunct(user) {
  return user.firstName + ' ' + user.lastName;
}
let user = {
  firstName: "Ali",
  lastName: "Ahmed"
}
export default App;

import './App.css';
import Navbar from './components/Navbar';
import MagicalForm from './components/MagicalForm';
import React, { useState } from 'react' //imrs short-hand property
import Alert from './components/Alert';
// let count = 0;
// let counter = (() => {
//   return ++count;
// }, 100);
function App() {
  const [mode, setMode] = useState('white');
  const toggleMode = () => {
    if(mode==='black'){
      setMode('white');
      showAlert('Light mode has been enabled','Succes')
    }
    else{
      setMode('black')
      showAlert('Dark mode has been enabled','Succes')
    }
  }
  const [alert,changeAlert]=useState(null);
  const showAlert=(message,type)=>{
    changeAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      changeAlert(null);
    }, 1000);
  }
  return (
    <>
      <div className="container">
        <Navbar logo="Logo" siteTitle="siteTitle" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="user">
          Hello,{myFunct(user)}
        </div>
        {/* <div className="count">
        {counter}
      </div> */}
        <MagicalForm />
      </div>
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

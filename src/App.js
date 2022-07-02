import './App.css';
import Navbar from './components/Navbar';
import MagicalForm from './components/MagicalForm';
let count = 0;
let counter = (() => {
  return ++count;
}, 100);
function App() {
  return (
    <>
      <div className="container">
        <Navbar logo="Logo" siteTitle="siteTitle" />
        <div className="user">
          Hello,{myFunct(user)}
        </div>
        {/* <div className="count">
        {counter}
      </div> */}
      <MagicalForm/>
      </div>
    </>
  );
}
function myFunct(user) {
  return user.firstName + ' ' + user.lastName;
}
let user = {
  firstName: "Ali",
  lastName: "Ahmed"
}
export default App;

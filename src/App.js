import './App.css';
function myFunct(user) {
  return user.firstName + ' ' + user.lastName;
}
let user = {
  firstName: "Ali",
  lastName: "Ahmed"
}
let count = 0;
let counter = (() => {
  return ++count;
}, 100);
function App() {
  return (
    <>
    <div className="container">
      <nav id="navbar">
        <li className="item" id="item1"><a href="#">Home</a></li>
        <li className="item" id="item2"><a href="#">Services</a></li>
        <li className="item" id="item3"><a href="#">Contact Us</a></li>
        <li className="item" id="item4"><a href="#">About Us</a></li>
      </nav>
      <div className="heading">
        MyFirstHeading
      </div>
      <div className="user">
        Hello,{myFunct(user)}
      </div>

      <div className="count">
        {counter}
      </div>
    </div>
    </>
  );
}

export default App;

import React,{useState} from 'react'

//Seach on google for react hooks
export default function MagicalForm(props) {
  const convertToUpper=(e)=>{
    setText(text.toUpperCase());
    e.preventDefault();
  }
  const convertToLower=(e)=>{
    setText(text.toLowerCase());
    e.preventDefault();
  }
  const handleOnChange=(event)=>{
    console.log("Changed");
    setText(event.target.value);
  }
  const [text,setText]=useState('Enter text here');
  return (
    <div className='container'>
      <div className='box-container'>
        <textarea name="text-area" id="input-box" value={text} onChange={handleOnChange} cols="45" rows="10"></textarea>
        <div id="action-btn-container">
          <div id="drop-down-container">
            <button id="convert-btn" className="convert-btn btn">Convert To</button>
            <div id="drop-down-content" className="drop-content">
              <a href="/" id="UPPER" className="upper-btn drop-down-link" onClick={convertToUpper}>UPPER CASE</a>
              <a href="/" id="lower" className="lower-btn drop-down-link" onClick={convertToLower}>lower case</a>
            </div>
          </div>
        </div>
      </div>
      {/* <button id="upper" class="upper-btn btn">UpperCase</button> */}
    </div>
  )
} 
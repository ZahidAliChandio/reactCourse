import React, { useState } from 'react'

//Seach on google for react hooks
export default function MagicalForm(props) {
  const convertToUpper = (e) => {
    setText(text.toUpperCase());
    e.preventDefault();
  }
  const convertToLower = (e) => {
    setText(text.toLowerCase());
    e.preventDefault();
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const clearText = (e) => {
    setText('');
    e.preventDefault();
  }
  const extractNumbers = (e) => {
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join('');
    setText(res);
    e.preventDefault();
  }
  const [text, setText] = useState('');
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  })
  const changeMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
    }
    else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }
  return (
    <div className='form-container'>
      <div className="heading" style={myStyle}>
        Enter Some Text
      </div>
      <div className='box-container' style={myStyle}>
        <textarea name="text-area" id="input-box" value={text} onChange={handleOnChange} cols="60" rows="10" style={myStyle}></textarea>
        <div id="drop-down-container">
          <button id="convert-btn" className="convert-btn btn">Convert To</button>
          <div id="drop-down-content" className="drop-content">
            <a href="/" id="UPPER" className="upper-btn drop-down-link" onClick={convertToUpper} style={myStyle}>UPPER CASE</a>
            <a href="/" id="lower" className="lower-btn drop-down-link" onClick={convertToLower} style={myStyle}>lower case</a>
          </div>
        </div>
        <button id="clear-btn" className="clear-btn btn" onClick={clearText}>Clear Text</button>
        <button id="numbers-btn" className="numbers-btn btn" onClick={extractNumbers}>Extract Numbers</button>
        <button id="mode-btn" className="mode-btn btn" onClick={changeMode}>Change Mode</button>
        <h1 className='counter-heading'>Text Summary</h1>
        {/* Average time to read one word 0.008 */}
        <p> {text.split(' ').length} words {text.length} Characters </p>
        <p> Almost it will take {text.split(' ').length * 0.008} minutes to read this para</p>
      </div>
    </div>
  )
}
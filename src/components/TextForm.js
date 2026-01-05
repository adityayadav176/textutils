import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
     const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}> Convert to lowercase </button>
        </div>
        <div className="container my-3">
           <h2>Your Text summary</h2>
           <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

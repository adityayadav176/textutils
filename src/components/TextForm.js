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
    const handleClierClick = () => {
        let newText = "";
        setText(newText);
    };
    const handleExtraspaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="my-box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}> Convert to lowercase </button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClierClick}> Clear text </button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}> Copy text </button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleExtraspaces}> Remove Extra Spaces </button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text || "Nothing to Preview"}</p>
            </div>
        </>
    );
}

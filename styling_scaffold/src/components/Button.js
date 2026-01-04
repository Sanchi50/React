import React from 'react';
import ReactDOM from 'react-dom';

function Button({ label }) {

    // Add inline css to the button.
  return (<button style={{
    backgroundColor:"blue",
    color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "6px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer"

  }}
  >{label}</button>
);
}

export default Button;
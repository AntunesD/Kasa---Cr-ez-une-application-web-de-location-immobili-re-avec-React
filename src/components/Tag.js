import React from "react";


function Tags({ elements }) {
    return (
      <ul className="tags">
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    );
  }
  
  export default Tags;
  
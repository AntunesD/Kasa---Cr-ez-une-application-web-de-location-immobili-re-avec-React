import React, { useState } from "react";

const Collapse = ({ title, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <button onClick={toggleCollapse}>
        {title}
        <i className={`fa-solid fa-chevron-up ${isCollapsed ? "" : "rotate"}`}></i>
      </button>
      
        <ul className={`${isCollapsed ? "collapse_ferme" : "collapse_ouvert"}`} >
          {Array.isArray(description) ? (
            description.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li  >{description}</li>
          )}
        </ul>
     
    </div>
  );
};

export default Collapse;

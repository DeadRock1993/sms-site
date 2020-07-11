import React from "react";

const Inputs = (props) => {
  return (
    <div className="inputs">
      <input
        type="text"
        name="name"
        id="name"
        className="textInput"
        placeholder="ФИО"
        onChange={props.handleChange}
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        className="textInput"
        placeholder="Телефон"
        onChange={props.handleChange}
      />
      <button onClick={props.handleClick} className="add-btn">
        +
      </button>
    </div>
  );
};

export default Inputs;

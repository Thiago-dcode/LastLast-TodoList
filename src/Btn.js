import React from "react";

const Btn = ({handleActive, length, handleDeleteAll}) => {

  const checkLenght = () =>{

    return length ? true: false
  }

  return (
    <div className="div-btn-active" >
     
      { checkLenght() && <button onClick={handleDeleteAll} id="btn-delete">REMOVE ALL</button>}
      <button id="btn-active" onClick={handleActive}>REMOVE SELECTED</button >
    </div>
  );
};

export default Btn;

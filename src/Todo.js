import React from "react";

const Todo = ({ todo, handleDelete, handleSelect }) => {
  return (
    <div className="todo">
      {todo.map((div) => {
        return (
          <div className="todo-div" key={div.id}>
            <div className="txt">
              <h3>{div.txt}</h3>
              <div className="dates">
              <p>Start:  <span>{div.date}</span></p>
              
              {div.daysLeft > 1 && <p className="days">  {div.daysLeft } days to be done</p>}
              {div.daysLeft === 1 && <p  className="days"> {div.daysLeft } day to be done</p>}


              {(div.daysLeft === 0 && div.lastDay)&& <p  className="days"> today</p>}
    
              
              
              {div.lastDay && (<p> Finish: <span>{div.lastDay}</span></p>)}
              </div>
             
            </div>
            <div className="btn">
              <button
                onClick={(e) => {
                  handleSelect(div, e.target);
                }}
                className="btn-v"
              ></button>
              <button
                onClick={() => {
                  handleDelete(div.id);
                }}
                className="btn-x"
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;

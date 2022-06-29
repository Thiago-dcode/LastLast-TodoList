import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { GetDate } from "./GetDate";
import Btn from "./Btn";
import { useLocalStorage } from "./useLocalStoreage";

function App() {
  const [id, setId] = useLocalStorage("id", 0);
  const [input, setInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [days, setDaysleft] = useState(0);
  const [currentDate, setCurrentDate] = useLocalStorage("day", GetDate("min"));
  const [todo, setTodo] = useLocalStorage("todo", []);

  const getInput = (target) => {
    setInput(target);
  };
  const getDateInput = (target) => {
    if (target[0] === "2") setDateInput(GetDate(target));
  };
  const handleInput = () => {
    if (input !== "") {
      console.log(dateInput);
      setId(id + 1);
      const newTodo = {
        id: id,
        txt: input,
        date: GetDate("todo"),
        lastDay: dateInput,
        daysLeft: days,
        active: false,
      };
      const finaTodo = [...todo, newTodo];
      setTodo(finaTodo);

      setInput("");
      setDaysleft(0);
      setDateInput("");
      document.getElementById("input").value = "";
    }
  };
  const handleSelect = (td, target) => {
    const div = target.parentElement.parentElement;
    if (target.className !== "btn-v-active") {
      td.active = true;
      target.className = "btn-v-active";
      div.className = "todo-div-active";
    } else {
      td.active = false;
      div.className = "todo-div";
      target.className = "btn-v";
    }
    styleDeleteSelectBtn();
  };
  const handleDelete = (id) => {
    const newTodo = todo.filter((td) => td.id !== id);
    setTodo(newTodo);
  };
  const handleDeleteAll = () => {
    setTodo([]);
  };
  const handleActive = () => {
    const todoActive = todo.filter((td) => !td.active);
    setTodo(todoActive);
  };
  const styleDeleteSelectBtn = () => {
    const btnActive = document.getElementById("btn-active");

    const isActive = todo.filter((td) => td.active);
    if (isActive.length === 0) btnActive.style.display = "none";
    else btnActive.style.display = "block";
  };
  useEffect(() => {
    styleDeleteSelectBtn();
    if (!todo.length) setId(0);
    if (dateInput) {
      const daysLeft = Math.ceil(
        (new Date(dateInput).getTime() - new Date(currentDate).getTime()) /
          1000 /
          60 /
          60 /
          24
      );
      console.log(daysLeft);
      if (!isNaN(daysLeft)) setDaysleft(daysLeft);
    }
    if (currentDate !== GetDate("min")) {
      setCurrentDate(GetDate("min"));
      const todoDayUpdate = todo.map((td) => {
        return {
          ...td,
          daysLeft: td.daysLeft - 1,
        };
      });
      const todoDayUpdateFiltered = todoDayUpdate.filter(
        (td) => td.daysLeft >= 0 && td.lastDay
      );
      console.log(todoDayUpdateFiltered);
      setTodo(todoDayUpdateFiltered)
    }
  });

  return (
    <div className="todo-list">
      <div id="title">
        <h1>TODO LIST APP</h1>
      </div>

      <AddTodo
        getInput={getInput}
        getDateInput={getDateInput}
        handleInput={handleInput}
      />
      <Btn
        handleActive={handleActive}
        handleDeleteAll={handleDeleteAll}
        length={todo.length}
      />
      <Todo
        todo={todo}
        handleSelect={handleSelect}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

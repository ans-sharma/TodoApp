import React, { useState, useEffect } from "react";
import OneTodo from "./OneTodo";
import AddTodos from "./AddTodos";

export default function Todos() {
  let initTodo;
  if (localStorage.getItem("allTodos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("allTodos"));
  }

  function delTodo(todo) {
    console.log("del todo ", todo);
    setTodo(
      allTodos.filter((e) => {
        return e !== todo;
      })
    );
  }

  function addingTodos(text, desc) {
    let sno;
    if (allTodos.length <= 0) {
      sno = 1;
    } else {
      sno = allTodos[allTodos.length - 1].sno + 1;
    }
    let newTodo = {
      sno: sno,
      title: text,
      desc: desc,
      active: true,
    };
    console.log(newTodo);
    setTodo([...allTodos, newTodo]);
  }

  const [allTodos, setTodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <div className="container">
      {/* {console.log("working")} */}
      {/* it works */}
      <AddTodos addingTodos={addingTodos}></AddTodos>
      {allTodos.length<=0?<div className="alert alert-danger text-center">No more Todos</div>
      :allTodos.map((x) => {
        return <OneTodo todo={x} key={x.sno} onDel={delTodo} />;
      })}
      {/* <OneTodo title={allTodos[1].title}/> */}
    </div>
  );
}

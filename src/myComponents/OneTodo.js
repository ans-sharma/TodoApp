import React from "react";

export default function OneTodo(props) {
  let Style = {
    textAlign: "right",
  };
  return (
    <div className="alert alert-primary">
      <div>
        <h5>
          {props.todo.sno}: {props.todo.title}
        </h5>

        <h6>Description: {props.todo.desc}</h6>
      </div>
      <div style={Style}>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.onDel(props.todo);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

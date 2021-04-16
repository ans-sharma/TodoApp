import React, { useState } from "react";

export default function AddTodos(props) {
  const [text, setText] = useState("")
  const [desc, setDesc] = useState("")
  const submit = (e) => {
    e.preventDefault()
    if(!text || !desc){
      alert("Todo or Description can not be empty");
    }
    else{
      props.addingTodos(text, desc);
      setDesc("");
      setText("");
    }
  }
  return (
    <div onSubmit={submit} className="my-3">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Todo</label>
          <input
            type="text"
            className="form-control my-2"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            id="todo"
            placeholder="Enter Todo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Todo Descripton</label>
          <input
            type="tes=xt"
            className="form-control my-2"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            id="desc"
            placeholder="Todo Desc"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";

const Demo = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    id: "",
    text: "",
  });
  const changeHandler = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    console.log(newTodo.id);
    setList([...list, newTodo]);
    setMessage({
      id: "",
      text: "",
    });
  };
  const handleDelete = (id) => {
    const newTodos = list.filter((eachId) => {
      return id !== eachId.id;
    });
    setList(newTodos);
  };
  const handleEdit = (id) => {};
  return (
    <div>
      <input
        type="text"
        id="task"
        value={message.text}
        placeholder="Enter your task!.. "
        onChange={changeHandler}
      />
      <button onClick={handleSubmit}>add</button>
      <hr />
      <div>
        <ul>
          {list.map((eachItem) => {
            const { id, text } = eachItem;
            return (
              <li key={id}>
                <span>{text}</span>
                <button onClick={() => handleEdit(id)}>edit</button>
                <button
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Demo;

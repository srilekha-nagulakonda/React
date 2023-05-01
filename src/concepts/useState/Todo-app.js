import React from "react";
import { useState } from "react";
const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    id: "",
    text: "",
  });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
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
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };
  const handleDelete = (id) => {
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    setList(newTodos);
  };
  const changeEditState = (id) => {
    setEditingItem({
      ...editingItem,
      id: id,
      isEditing: true,
    });
    let editableItem = list.find((eachObj) => eachObj.id === id);
    setMessage({
      ...message,
      text: editableItem.text,
      id: editableItem.id,
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("previous list", list);
    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editingItem.id) {
        return {
          text: message.text,
          id: message.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newTodos);
    setMessage({
      text: "",
      id: "",
    });
    setEditingItem({
      id: "",
      isEditing: false,
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          id="text"
          name="text"
          value={message.text}
          placeholder="Enter Your Task!.."
          onChange={changeHandler}
        />
        {editingItem.isEditing ? (
          <button onClick={handleEdit}>edit</button>
        ) : (
          <button onClick={handleSubmit}>add</button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h4>Their is no items.. </h4>}
      <ul>
        {list.map((eachObj) => {
          const { id, text } = eachObj;
          return (
            <li key={id}>
              <span>{text} </span>
              <button onClick={() => changeEditState(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;

import React, { useReducer } from "react";
const reducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "DELETE_PERSON") {
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      ...state,
      data: newPersons,
    };
  }
  return state;
};
const initialState = {
  data: [
    { id: "1", firstName: "sri", email: "sri@gmail.com" },
    { id: "2", firstName: "rowdy", email: "rowdy@gmail.com" },
  ],
};

const Final = () => {
  // console.log(useReducer(reducer, initialState));
  // console.log(useReducer(initialState, reducer)); both are same
  const [state, dispatch] = useReducer(reducer, initialState); //dispatch is changing a function like set
  const handleDelete = (id) => {
    dispatch({
      //this function go to reducer
      type: "DELETE_PERSON", //type is for identification - what function done by dispatch
      payload: id,
    });
  };
  const handleEdit = (id) => {
    dispatch({
      type: "UPDATE_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>Current Users Length: {state.data.length}</h1>
      {state.data.map((eachItem) => {
        const { id, firstName, email } = eachItem;
        return (
          <div key={id}>
            <h2>{firstName}</h2>
            <p>{email}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => handleEdit(id)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default Final;

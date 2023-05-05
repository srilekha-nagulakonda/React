import React, { useReducer, useEffect, useState } from "react";
const reducer = (state, action) => {
  if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  if (action.type === "DELETE") {
    const newUsers = state.userData.filter(
      (eachUser) => eachUser.id !== action.payload
    );
    return {
      ...state,
      userData: newUsers,
    };
  }
  if (action.type === "ONCLICK_EDIT") {
    return {
      ...state,
      isEditing: action.payload,
    };
  }
  if (action.type === "UPDATE_USER") {
    const newUsers = state.userData.map((eachUser) => {
      if (eachUser.id === action.payload.id) {
        return {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        };
      } else {
        return eachUser;
      }
    });
    return {
      ...state,
      userData: newUsers,
    };
  }
  return state;
};
const Index = () => {
  const fetchUserData = async (URL) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({ type: "UPDATE_USER_DATA", payload: data });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
    }
  };
  useEffect(() => {
    fetchUserData("https://jsonplaceholder.typicode.com/users");
  }, []);
  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
    isEditing: { status: false, id: "", name: "", email: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateData = (id, name, email) => {
    dispatch({ type: "UPDATE_USER", payload: { id, name, email } });
    dispatch({
      type: "ONCLICK_EDIT",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };
  if (state.isLoading) {
    return (
      <div>
        <h3>LOADING</h3>
      </div>
    );
  }
  return (
    <div>
      <h2>User Information</h2>
      {state.isEditing?.status && (
        <EditFormContainer
          id={state.isEditing.id}
          commingTitle={state.isEditing.name}
          commingEmail={state.isEditing.email}
          updateData={updateData}
        />
      )}
      {state.userData.map((eachUser) => {
        const { id, name, email } = eachUser;
        return (
          <div key={id} style={{ background: "lightblue" }}>
            <h3>{name}</h3>
            <p>{email}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "ONCLICK_EDIT",
                  payload: { status: true, id: id, name: name, email: email },
                })
              }
            >
              edit
            </button>
            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};
const EditFormContainer = ({ id, commingTitle, commingEmail, updateData }) => {
  const [title, setTitle] = useState(commingTitle || "");
  const [email, setEmail] = useState(commingEmail || "");
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => updateData(id, title, email)}>
          Update Data
        </button>
      </form>
    </>
  );
};
export default Index;

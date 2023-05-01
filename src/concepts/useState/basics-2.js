import React, { useState } from "react";

// const Index = () => {
//   const initialObj = {
//     firstName: "srilekha",
//     lastName: "Nagulakonda",
//     age: "21",
//   };
//   const [data, setData] = useState(initialObj);
//   const changeFirstName = () => {
//     setData({
//       ...data,
//       firstName: "sri",
//     });
//   };
//   const changeLastName = () => {
//     setData({
//       ...data,
//       lastName: "nag",
//     });
//   };
//   return (
//     <div>
//       <h1>my name is {data.firstName}</h1>
//       <button onClick={changeFirstName}>change name</button>
//       <h1>my name is {data.lastName}</h1>
//       <button onClick={changeLastName}>change LastName</button>
//       <h1>Age: {data.age}</h1>
//     </div>
//   );
// };

const Index = () => {
  const dataArray = [
    {
      id: 1,
      firstName: "srilekha",
      lastName: "Nagulakonda",
      age: "21",
    },
    {
      id: 2,
      firstName: "sri",
      lastName: "Nagu",
      age: "19",
    },
  ];
  const [data, setData] = useState(dataArray);
  const handleDelete = (comingId) => {
    // console.log(comingId);
    const filterData = data.filter((eachItem) => {
      return eachItem.id !== comingId;
    });
    setData(filterData);
  };
  return (
    <div>
      <ul>
        {data.map((eachObj, index) => {
          const { firstName, lastName, age, id } = eachObj;
          return (
            <li key={index}>
              <div>
                <div>
                  my name is <strong>{firstName}</strong>
                </div>
                <div>
                  my lastname is <strong>{lastName}</strong>
                </div>
                <div>
                  my age is <strong>{age}</strong>
                </div>
                <button
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  Delete Me
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Index;

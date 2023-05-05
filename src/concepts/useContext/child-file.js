import SubChildClass from "./subchild-file";
const ChildClass = (props) => {
  console.log(props.userDetails);
  return (
    <div>
      <h2>child class</h2>
      <SubChildClass />
    </div>
  );
};
export default ChildClass;

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input />
    </div>
  );
};

export default Input;

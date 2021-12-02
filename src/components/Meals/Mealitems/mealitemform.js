import React, { useRef } from "react";
import classes from "./mealitemform.module.css";
import Input from "../../UI/input";

const MealItemForm = (props) => {
  var inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.onsubmit(inputRef.current.value);
    inputRef.current.value = 1;
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;

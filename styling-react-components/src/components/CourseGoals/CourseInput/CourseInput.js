import { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";
// import styled from "styled-components";
// import styles from "./CourseInput.module.css"; // USING CSS MODULES

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     // color: ${(props) => (props.invalid ? "red" : "black")}; [OPTION B] USING STYLED COMPONENT IMPLEMENTED BELOW
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid #ccc;
//     // border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")}; [OPTION B] USING STYLED COMPONENT IMPLEMENTED BELOW
//     // background: ${(props) => (props.invalid ? "salmon" : "transparent")}; [OPTION B] USING STYLED COMPONENT IMPLEMENTED BELOW
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   // REMOVE SYNTAX BELOW IF YOU USE OPTION B
//   &.invalid input {
//     border-color: red;
//     background-color: salmon;
//   }

//   // REMOVE SYNTAX BELOW IF YOU USE OPTION B
//   &.invalid label {
//     color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* [OPTION 1] Using Inline CSS Condition
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            backgroundColor: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        /> */}

      {/* [OPTION 2] Using backtick (``), you may insert javascript syntax inside ${} */}
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        {/* <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}> instead of styles.form-control | USING CSS MODULES */}
        {/* <FormControl className={!isValid && "invalid"}> [OPTION A] USING STYLED COMPONENT DECLARED ABOVE*/}
        {/* <FormControl invalid={!isValid}> [OPTION B] USING STYLED COMPONENT DECLARED ABOVE*/}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
        {/* </FormControl> USING STYLED COMPONENT DECLARED ABOVE*/}
      </div>
      <Button type="submit">Add Goal</Button>

      {/* [OPTION 3] Using styled components
      You may search on google or run on terminal: npm install --save styled-components
      See Button.js inside UI folder */}
    </form>
  );
};

export default CourseInput;

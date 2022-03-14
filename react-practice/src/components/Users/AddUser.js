import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // USING useRef instead of useState
  // import { useRef } from "react";
  // const usernameInputRef = useRef();
  // const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    // USING useRef instead of useState
    // const usernameRef = usernameInputRef.current.value;
    // const ageRef = ageInputRef.current.value;

    // USING useRef instead of useState
    // if (usernameRef.trim().length === 0 || ageRef.trim().length === 0) {
    //   setError({
    //     title: "Invalid input",
    //     message: "Please enter a valid name and age (non-empty values).",
    //   });
    //   return;
    // }

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // USING useRef instead of useState
    // if (ageRef < 1) {
    //   setError({
    //     title: "Invalid age",
    //     message: "Please enter a valid age (age > 0).",
    //   });
    //   return;
    // }

    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0).",
      });
      return;
    }

    // USING useRef instead of useState
    // props.onAddUser(usernameRef, ageRef);

    props.onAddUser(enteredUsername, enteredAge);

    // USING useRef instead of useState
    // usernameInputRef.current.value = "";
    // ageInputRef.current.value = "";

    setEnteredUsername("");
    setEnteredAge("");
  };

  // Remove this handler when using useRef
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // Remove this handler when using useRef
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername} // Remove this handler when using useRef
            onChange={usernameChangeHandler} // Remove this handler when using useRef
            // ref={usernameRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge} // Remove this handler when using useRef
            onChange={ageChangeHandler} // Remove this handler when using useRef
            // ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

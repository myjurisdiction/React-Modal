import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

function Form(props) {
  const [userInputs, setUserInputs] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState();

  function usernameChangeHandler(event) {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        username: event.target.value,
      };
    });
  }

  function ageChangeHandler(event) {
    setUserInputs((prevState) => {
      return {
        ...prevState,
        age: event.target.value,
      };
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (userInputs.username.length === 0 && userInputs.age.length === 0) {
      setError({
        title: "Invalid Input !",
        message: "Please enter a valid value !",
      });
      return;
    }
    // console.log(userInputs);
    props.addUser(userInputs);
    setUserInputs({
      username: "",
      age: "",
    });
  }

  function onClickHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={onClickHandler}
        ></ErrorModal>
      )}
      <form onSubmit={formSubmitHandler}>
        <label>Username: </label>
        <input
          type="text"
          onChange={usernameChangeHandler}
          value={userInputs.username}
        ></input>
        <label> Age: </label>
        <input type="number" onChange={ageChangeHandler}></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Form;

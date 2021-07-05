import "./App.css";
import Form from "./Components/Form/Form";
import UserList from "./Components/Users/UserList";
import { useState } from "react";

const USERS = [];

function App() {
  let [users, setUser] = useState(USERS);

  function addUserHandler(userObject) {
    setUser((prevState) => {
      userObject = { ...userObject, id: Date.now() };
      return [...prevState, userObject];
    });
  }

  function deleteCardHandler(id) {
    setUser((prevState) => {
      users = prevState.filter((user) => user.id !== id);
      return users;
    });
  }

  return (
    <div className="App">
      <p>WELCOME TO CROWD GENERATION</p>
      <Form addUser={addUserHandler} />
      <UserList items={users} onDeleteCard={deleteCardHandler} />
    </div>
  );
}

export default App;

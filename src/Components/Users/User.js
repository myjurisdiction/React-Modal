import "./User.css";

function User(props) {
  function deleteCardHandler() {
    props.onDelete(props.id);
  }
  return (
    <div className="user" onClick={deleteCardHandler}>
      <p>
        Hi, I am {props.username} and i am {props.age} years old...
      </p>
    </div>
  );
}

export default User;

import User from "./User";

function UserList(props) {
  function onDeleteCardHandler(id) {
    props.onDeleteCard(id);
  }
  return (
    <div>
      {props.items.map((user) => (
        <User
          username={user.username}
          age={user.age}
          key={user.id}
          id={user.id}
          onDelete={onDeleteCardHandler}
        />
      ))}
    </div>
  );
}

export default UserList;

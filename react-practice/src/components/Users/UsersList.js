import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const content = (user) => {
    let output = user.username;

    if (parseInt(user.age) === 1) output += ` (${user.age} year old)`;
    else output += ` (${user.age} years old)`;

    return output;
  };

  return (
    <Card className={classes.users}>
      {props.users.length === 0 && <p>No users.</p>}
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user, index) => (
            <li key={index}>{content(user)}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UsersList;

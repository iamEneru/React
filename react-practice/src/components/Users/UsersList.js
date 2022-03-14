import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const ageYears = (age) => {
    if (parseInt(age) === 1) return <span>({age} year old)</span>;
    else return <span>({age} years old)</span>;
  };

  return (
    <Card className={classes.users}>
      {props.users.length === 0 && (
        <p style={{ textAlign: "center", padding: "10px" }}>No users.</p>
      )}
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user, index) => (
            <li key={index}>
              {user.username} {ageYears(user.age)}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UsersList;

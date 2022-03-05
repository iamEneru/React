import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((item, index) => (
        <ExpenseItem
          // key={item.id} if you have an id, use this instead of key=index
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>

    /* JS Tricks */
    /* {props.items.length === 0 && <p>No expenses found.</p>}
      {props.items.length > 0 &&
        props.items.map((item, index) => (
          <ExpenseItem
            // key={item.id} if you have an id, use this instead of key=index
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */

    /* Using Ternary */
    /* {props.items.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        props.items.map((item, index) => (
          <ExpenseItem
            // key={item.id} if you have an id, use this instead of key=index
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )} */
  );
};

export default ExpensesList;

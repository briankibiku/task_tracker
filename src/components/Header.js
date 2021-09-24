import PropTypes from "prop-types"; // impt to import this
import Button from "./Button";

// rafce to create a react component using and arrow function
const Header = ({ title, toggleAddTaskForm, showAddTask }) => {
  return (
    <header className="header">
      {/* inline css styling */}
      <h1 style={{ color: "black" }}>{title}</h1>
      <Button
        onClick={toggleAddTaskForm}
        color={!showAddTask ? "green" : 'red'}
        text={!showAddTask ? "Add" : "Hide"}
      />
      {/* <h1 style={headerStyle}>{props.title}</h1> */}
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// css style variable
// const headerStyle = { color: 'red' }

export default Header;

import PropTypes from "prop-types";
import classes from "./AppHeader.module.scss";

const AppHeader = (props) => {
  return (
    <header className={classes.headerContainer}>
      <h2>ManjiFC {props.icon}</h2>
    </header>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  icon: PropTypes.object.isRequired,
};

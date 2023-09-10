import PropTypes from "prop-types";
import bgImage from "../assets/images/jungle2.jpg";
import JungleMusic from "./UI/JungleMusic";
import classes from "./AppBackground.module.scss";

const AppBackground = (props) => {
  const { height } = props;
  return (
    <div
      className={classes.appBackground}
      style={{
        height: `calc(100% - ${height}px)`,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <p className={classes.heading}>Manjii</p>
      <p className={classes.heading}>Fried</p>
      <p className={classes.heading}>Chicken</p>
      <JungleMusic />
    </div>
  );
};

export default AppBackground;

AppBackground.propTypes = {
  height: PropTypes.number.isRequired,
};

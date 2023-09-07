import PropTypes from "prop-types";
import bgImage from "../assets/images/jungle2.jpg";
import JungleMusic from "./UI/JungleMusic";

const AppBackground = (props) => {
  const { height } = props;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          color: "white",
          height: `calc(100% - ${height}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${bgImage})`,
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "Manji",
            padding: "0.5rem",
          }}
        >
          Manjii Fried Chicken
        </span>
        <JungleMusic />
      </h1>
    </>
  );
};

export default AppBackground;

AppBackground.propTypes = {
  height: PropTypes.number.isRequired,
};

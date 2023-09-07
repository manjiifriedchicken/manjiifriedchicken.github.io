import PropTypes from "prop-types";
import bgImage from "../assets/images/jungle.jpg";

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
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${bgImage})`,
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
        <audio id="audio" loop autoPlay>
          <source src="/tothejungle.mp3" type="audio/mpeg" />
        </audio>
      </h1>
    </>
  );
};

export default AppBackground;

AppBackground.propTypes = {
  height: PropTypes.number.isRequired,
};

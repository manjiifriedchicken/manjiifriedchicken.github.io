import PropTypes from "prop-types";

const AppBackground = (props) => {
  const { height } = props;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          color: "black",
          height: `calc(100% - ${height}px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Manji",
        }}
      >
        Manjii Fried Chicken
      </h1>
    </>
  );
};

export default AppBackground;

AppBackground.propTypes = {
  height: PropTypes.number.isRequired,
};

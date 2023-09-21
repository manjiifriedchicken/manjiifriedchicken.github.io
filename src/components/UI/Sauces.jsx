import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./Sauces.module.scss";
import sauceImage from "../../assets/sauces.png";

const Sauces = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes.sauceContainer}>
      <motion.div
        className={classes.sauceOpener}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={sauceImage}
          alt="sauces"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      <motion.div
        animate={{
          height: isOpen ? "fit-content" : "0vh",
          width: isOpen ? "212px" : "0vw",
          padding: isOpen ? 16 : 0,
        }}
        style={{
          position: "fixed",
          top: "92px",
          right: "16px",
          background: "#C64E1C",
          color: "white",
          overflow: "hidden",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {props.sauces.map((sauce, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                width: 180,
                justifyContent: "space-between",
              }}
            >
              <h3>{sauce.name}</h3>
              <p>{sauce.price}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Sauces;
Sauces.propTypes = {
  sauces: PropTypes.object.isRequired,
};

import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./Sauces.module.scss";

const Sauces = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className={classes.sauceContainer}>
      <div className={classes.sauceOpener} onClick={() => setIsOpen(!isOpen)}>
        Sauces
      </div>
    </motion.div>
  );
};

export default Sauces;
Sauces.propTypes = {
  sauces: PropTypes.object.isRequired,
};

import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./MenuCard.module.scss";
import CloseIcon from "./UI/CloseIcon";
import MenuItem from "./UI/MenuItem";

const MenuCard = (props) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  return (
    <motion.div
      className={`${classes.card} ${isCardOpen ? classes.card__open : ""}`}
      style={{
        backgroundColor: props.category.background_color,
        color: props.category.color,
        zIndex: isCardOpen ? 0 : 10,
      }}
      animate={{
        bottom: isCardOpen ? 0 : props.cardIndex * 60 + "px",
        height: isCardOpen ? "100%" : "60px",
        overflow: isCardOpen ? "auto" : "hidden",
      }}
      transition={{
        delay: 0,
        duration: 0.3,
      }}
    >
      <div
        className={classes.card__header}
        onClick={() => {
          setIsCardOpen(!isCardOpen);
          props.setAnyActive(!props.anyActive);
        }}
      >
        <h2 className={classes.card__title}>{props.category.name}</h2>
        <CloseIcon
          svgClass={`${classes.card__closeIcon}`}
          svgFill={props.category.color}
          openStatus={isCardOpen}
        />
      </div>
      <div className={classes.card__body}>
        {props.category.items.map((item, index) => {
          return <MenuItem key={index} item={item} classes={classes} />;
        })}
      </div>
    </motion.div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  category: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
  anyActive: PropTypes.bool.isRequired,
  setAnyActive: PropTypes.func.isRequired,
};

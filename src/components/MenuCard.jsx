import PropTypes from "prop-types";
import { motion } from "framer-motion";
import classes from "./MenuCard.module.scss";
import CloseIcon from "./UI/CloseIcon";
import MenuItem from "./UI/MenuItem";

const MenuCard = (props) => {
  const animateSettings = {
    bottom:
      props.activeMenu.get() === props.cardIndex
        ? 0
        : props.activeMenu.get() !== false &&
          props.activeMenu.get() < props.cardIndex
        ? (props.cardIndex - 1) * 48 + "px"
        : props.cardIndex * 48 + "px",
    height: props.activeMenu.get() === props.cardIndex ? "100%" : "48px",
    overflow: props.activeMenu.get() === props.cardIndex ? "auto" : "hidden",
  };
  return (
    <motion.div
      className={classes.card}
      style={{
        backgroundColor: props.category.background_color,
        color: props.category.color,
        zIndex: props.activeMenu.get() === props.cardIndex ? 0 : 1,
      }}
      animate={animateSettings}
      transition={{
        delay: props.activeMenu.get() === props.cardIndex ? 0.3 : 0,
        duration: 0.3,
      }}
    >
      <div
        className={classes.card__header}
        onClick={() => {
          if (props.activeMenu.get() !== props.cardIndex) {
            props.activeMenu.set(props.cardIndex);
          } else {
            props.activeMenu.set(false);
          }
        }}
      >
        <h2 className={classes.card__title}>{props.category.name}</h2>
        <CloseIcon
          svgClass={`${classes.card__closeIcon}`}
          svgFill={props.category.color}
          openStatus={props.activeMenu.get() === props.cardIndex}
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
  activeMenu: PropTypes.object.isRequired,
};

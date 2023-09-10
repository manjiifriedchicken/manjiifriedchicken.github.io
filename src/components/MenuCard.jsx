import PropTypes from "prop-types";
import { motion } from "framer-motion";
import classes from "./MenuCard.module.scss";
import CloseIcon from "./UI/CloseIcon";
import MenuItem from "./UI/MenuItem";

const MenuCard = ({ category, cardIndex, activeMenu, menuLength }) => {
  const screenSize = window.innerHeight;
  const animateSettings = {
    height:
      activeMenu.get() === cardIndex
        ? screenSize - (menuLength - 1) * 48 + "px"
        : "48px",
    overflow: activeMenu.get() === cardIndex ? "scroll" : "hidden",
    zIndex: activeMenu.get() === cardIndex ? 0 : 1,
  };
  return (
    <motion.div
      className={classes.card}
      style={{
        backgroundColor: category.background_color,
        color: category.color,
      }}
      animate={animateSettings}
      transition={{
        duration: 0.3,
      }}
    >
      <div
        className={classes.card__header}
        onClick={() => {
          if (activeMenu.get() !== cardIndex) {
            activeMenu.set(cardIndex);
          } else {
            activeMenu.set(false);
          }
        }}
      >
        <h2 className={classes.card__title}>{category.name}</h2>
        <CloseIcon
          svgClass={`${classes.card__closeIcon}`}
          svgFill={category.color}
          openStatus={activeMenu.get() === cardIndex}
          fill={category.color}
        />
      </div>
      <div className={classes.card__body}>
        {category.items.map((item, index) => {
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
  menuLength: PropTypes.number.isRequired,
};

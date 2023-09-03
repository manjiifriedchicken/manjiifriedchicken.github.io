import PropTypes from "prop-types";

import { useState } from "react";
import classes from "./MenuCard.module.scss";
import CloseIcon from "./UI/CloseIcon";
import MenuItem from "./UI/MenuItem";

const MenuCard = (props) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  return (
    <div
      className={`${classes.card} ${isCardOpen ? classes.card__open : ""}`}
      style={{
        backgroundColor: props.category.background_color,
        color: props.category.color,
        bottom: isCardOpen
          ? 0
          : props.anyActive
          ? props.cardIndex * -60 + "px"
          : props.cardIndex * 60 + "px",
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
        />
      </div>
      <div className={classes.card__body}>
        {props.category.items.map((item, index) => {
          return <MenuItem key={index} item={item} classes={classes} />;
        })}
      </div>
    </div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  category: PropTypes.object.isRequired,
  cardIndex: PropTypes.number.isRequired,
  anyActive: PropTypes.bool.isRequired,
  setAnyActive: PropTypes.func.isRequired,
};

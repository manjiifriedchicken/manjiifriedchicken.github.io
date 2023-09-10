import PropTypes from "prop-types";
import classes from "./DrinkItem.module.scss";
const DrinkItem = (props) => {
  const variantColor = props.categoryColor + "CC";
  return (
    <div className={classes.drinkItem}>
      <p className={classes.drinkTitle}>{props.item.name}</p>
      <p className={classes.drinkPrice} style={{ color: variantColor }}>
        {props.item.price}
      </p>
    </div>
  );
};

export default DrinkItem;

DrinkItem.propTypes = {
  item: PropTypes.object.isRequired,
  categoryColor: PropTypes.string.isRequired,
  categoryBackground: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import classes from "./MenuItem.module.scss";
import VariantSelector from "./VariantSelector";
const MenuItem = (props) => {
  return (
    <div className={classes.card__item}>
      {props.item.image ? (
        <div className={classes.card__item__image}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
      ) : null}
      <h3 className={classes.card__item__header}>{props.item.name}</h3>
      <div className={classes.card__item__body}>
        {props.item.description ? (
          <p className={classes.card__item__description}>
            {props.item.description}
          </p>
        ) : null}
        {props.item.variants ? (
          <div className={classes.card__item__variant}>
            <VariantSelector item={props.item} />
          </div>
        ) : (
          <div className={classes.card__item__price}>
            <p>{props.item.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

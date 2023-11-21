import PropTypes from "prop-types";
import classes from "./MenuItem.module.scss";
import VariantSelector from "./VariantSelector";
import { useState } from "react";

const MenuItem = (props) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const isVarianted = props.item.variants ? true : false;
  const variantColor = props.categoryColor + "CC";
  return (
    <div className={classes.card__item}>
      {props.item.image ? (
        <div className={classes.card__item__image}>
          <img
            src={props.item.image}
            alt={props.item.name}
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      ) : null}
      <h3 className={classes.card__item__header}>
        <p>{props.item.name}</p>
        {isVarianted ? (
          <p className={classes.variantName} style={{ color: variantColor }}>
            <span>{props.item.variants[selectedVariant].name}</span>
            &nbsp;-&nbsp;
            <span>{props.item.variants[selectedVariant].price}</span>
          </p>
        ) : (
          <p className={classes.card__item__price}>{props.item.price}</p>
        )}
      </h3>
      <div className={classes.card__item__body}>
        <p className={classes.card__item__description}>
          {props.item.description
            ? props.item.description
            : ""}
        </p>
        {props.item.variants ? (
          <div className={classes.card__item__variant}>
            <VariantSelector
              item={props.item}
              color={props.categoryColor}
              background={props.categoryBackground}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  categoryColor: PropTypes.string.isRequired,
  categoryBackground: PropTypes.string.isRequired,
};

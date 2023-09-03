import PropTypes from "prop-types";
import { useState } from "react";
import classes from "./VariantSelector.module.scss";
const VariantSelector = (props) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  return (
    <div className={classes.card__item__variant}>
      {props.item.variants.map((variant, index) => {
        return (
          <div
            key={index}
            className={classes.card__item__variant__item}
            onClick={() => {
              setSelectedVariant(index);
            }}
          >
            <p className={classes.card__item__variant__name}>{variant.name}</p>
          </div>
        );
      })}
      <div className={classes.card__item__price}>
        {props.item.variants[selectedVariant].price}
      </div>
    </div>
  );
};

export default VariantSelector;

VariantSelector.propTypes = {
  item: PropTypes.object.isRequired,
};

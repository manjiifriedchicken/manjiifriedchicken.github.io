import PropTypes from "prop-types";
import classes from "./VariantSelector.module.scss";
const VariantSelector = (props) => {
  return (
    <div className={classes.card__item__variant}>
      {props.item.variants.map((variant, index) => {
        return (
          <div
            key={index}
            className={classes.card__item__variant__item}
            style={{
              backgroundColor:
                props.selectedVariant === index ? props.color : "",
              color: props.selectedVariant === index ? props.background : "",
              borderColor: props.color,
            }}
            onClick={() => {
              props.setSelectedVariant(index);
            }}
          >
            {variant.name}
          </div>
        );
      })}
    </div>
  );
};

export default VariantSelector;

VariantSelector.propTypes = {
  item: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  selectedVariant: PropTypes.number.isRequired,
  setSelectedVariant: PropTypes.func.isRequired,
};

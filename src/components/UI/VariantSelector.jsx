import PropTypes from "prop-types";
import classes from "./VariantSelector.module.scss";
const VariantSelector = ({ item, selectedVariant, setVariant }) => {
  return (
    <div className={classes.variantSelector}>
      {item.variants.map((variant, index) => (
        <div
          key={index}
          className={`${classes.variant} ${selectedVariant?.name == variant.name ? classes.selected : ""}`}
          onClick={() => setVariant(variant)}
        >
          {variant.name}
        </div>
      ))}
    </div>
  );
};
VariantSelector.propTypes = {
  item: PropTypes.object.isRequired,
  selectedVariant: PropTypes.object.isRequired,
  setVariant: PropTypes.func.isRequired,
};
export default VariantSelector;

import classes from "./MenuItem.module.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import VariantSelector from "./VariantSelector";
const MenuItem = ({ item, type, isKofte }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  useEffect(() => {
    if (item.variants?.length > 0) {
      setSelectedVariant({
        name: item.variants[0].name || item.name,
        price: item.variants[0].price || item.price,
        description: item.variants[0]?.description || "",
      });
    }
  }, [item]);

  const placeholder = `data:image/png;base64,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`;

  return (
    <div
      className={`${classes.menuPageItem} ${
        type === "food" ? classes.food : classes.drink
      }`}
    >
      <div className={classes.menuItemImageContainer}>
        {type === "food" ? (
          <img
            src={item.image || placeholder}
            alt={item.name}
            className={`${classes.menuPageItemImage} ${
              type === "drink" ? classes.drink : classes.food
            }`}
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className={`${classes.menuPageItemImage} ${
              type === "drink" ? classes.drink : classes.food
            }`}
          />
        ) : null}

        {item.variants?.length > 0 && (
          <VariantSelector
            item={item}
            selectedVariant={selectedVariant}
            setVariant={setSelectedVariant}
          />
        )}
      </div>
      <div className={classes.menuPageItemContent}>
        <h3 className={classes.menuPageItemTitle}>
          {item.name}
          {item.variants?.length > 0 &&
            selectedVariant?.name != item.variants[0]?.name &&
            ` - ${selectedVariant?.name}`}
        </h3>
        <p className={classes.menuPageItemDescription}>
          {item.description || ""}
        </p>
        {item.variants?.length > 0 &&
        selectedVariant?.name != "Sandwich" &&
        selectedVariant?.description ? (
          <p className={classes.menuPageAdditionalInfo}>
            {selectedVariant?.description || ""}
          </p>
        ) : null}
        <div className={classes.menuPageItemFooter}>
          <p className={classes.menuPageItemPrice}>
            {selectedVariant?.price || item.price || null}
          </p>
          {isKofte && <p className={classes.menuPriceItemKofte}>Lütfen etinizin pişme derecesini belirtiniz.</p>}
        </div>
      </div>
    </div>
  );
};
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  isKofte: PropTypes.bool,
};

export default MenuItem;

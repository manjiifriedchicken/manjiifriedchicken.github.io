import classes from "./MenuItem.module.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import VariantSelector from "./VariantSelector";
const MenuItem = ({ item, type }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  useEffect(() => {
    if (item.variants?.length > 0) {
      setSelectedVariant({
        name: item.variants[0].name || item.name,
        price: item.variants[0].price || item.price,
        description: item.variants[0].description || item.description,
      });
    }
  }, [item]);

  return (
    <div className={`${classes.menuPageItem} ${type === "food" ? classes.food : classes.drink}`} >
      <div className={classes.menuItemImageContainer}>
        <img
          src={item.image || "/public/items/8-1.png"}
          alt={item.name}
          className={`${classes.menuPageItemImage} ${
            type === "drink" ? classes.drink : classes.food
          }`}
        />
        {item.variants?.length > 0 && <VariantSelector
          item={item}
          selectedVariant={selectedVariant}
          setVariant={setSelectedVariant}
        />}
      </div>
      <div className={classes.menuPageItemContent}>
        <h3 className={classes.menuPageItemTitle}>
          {item.name}
          {item.variants?.length > 0 && selectedVariant?.name != item.variants[0]?.name &&
            ` - ${selectedVariant?.name}`}
        </h3>
        <p className={classes.menuPageItemDescription}>
          {item.description || ""}
        </p>
        {item.variants?.length > 0 && selectedVariant?.name != item.variants[0].name ? (
            <p className={classes.menuPageAdditionalInfo}>
              {selectedVariant?.description || ""}
            </p>
          ) : null}
        <div className={classes.menuPageItemPrice}>
          {selectedVariant?.price || item.price || null}
        </div>
      </div>
    </div>
  );
};
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default MenuItem;

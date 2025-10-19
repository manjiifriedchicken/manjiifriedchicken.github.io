import classes from "./MenuButton.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuButton = ({item}) => {
  return ( 
    <Link to={`/${item.slug}`} className={classes.menuButton}>
      <img src={item.image || item.items[0]?.image || ""} alt={item.name} />
      <p>{item.name}</p>
    </Link>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  item: PropTypes.object.isRequired,
};
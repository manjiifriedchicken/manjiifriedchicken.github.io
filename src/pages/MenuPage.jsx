import { useLoaderData } from "react-router-dom";
import classes from "./MenuPage.module.scss";
import MenuItem from "../components/UI/MenuItem.jsx";
import { InfoIcon } from "lucide-react";
const MenuPage = () => {
  const menuPage = useLoaderData();
  return (
    <div className={classes.menuPage}>
      <h2 className={classes.menuPageTitle}>{menuPage.name}</h2>
      <div
        className={`${classes.menuPageItems} ${
          menuPage.type === "food" ? classes.food : classes.drink
        }`}
      >
        {menuPage.items.map((item, index) => (
            <MenuItem key={index} item={item} type={menuPage.type} isKofte={menuPage.name === "Köfte Burgerler"}/>
        ))}
      </div>
      {menuPage.description && <p className={classes.menuPageDescription}><InfoIcon/>{menuPage.description}</p>}
    </div>
  );
};

export default MenuPage;

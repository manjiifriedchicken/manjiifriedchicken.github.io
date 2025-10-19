import { menu, sauces } from "../menu.ts";
import Sauces from "../components/UI/Sauces";
import { Link } from "react-router-dom";

import classes from "./Index.module.scss";

function Index() {
  const menuItems = Array.from(menu);
  return (
    <div className={classes.main}>
      <Sauces sauces={sauces} />
      <div className={classes.logo}></div>
      <div className={classes.menuItems}>
        {menuItems.map((item) => (
          <Link to={`/${item.slug}`} key={item.slug} className={classes.menuItem}>
          {item.image ? <img src={item.image} alt={item.name} className={classes.menuItemImage} /> : null}
          <p className={classes.menuItemName}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;

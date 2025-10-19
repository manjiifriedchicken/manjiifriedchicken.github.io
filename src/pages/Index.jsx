import { menu } from "../menu.ts";

import classes from "./Index.module.scss";
import MenuButton from "../components/UI/MenuButton";

function Index() {
  const menuItems = Array.from(menu);
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <p>Manjii</p>
        <p>Fried</p>
        <p>Chicken</p>
      </div>
      <div className={classes.menuItems}>
        {menuItems.map((item) => (
          <MenuButton key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Index;

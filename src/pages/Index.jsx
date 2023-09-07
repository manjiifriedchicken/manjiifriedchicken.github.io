import menu from "../assets/menu.json";
import MenuCard from "../components/MenuCard";
import AppBackground from "../components/AppBackground";

import { useHookstate } from "@hookstate/core";
import classes from "./Index.module.scss";

function App() {
  const menuItems = Array.from(menu).reverse();
  const activeMenu = useHookstate(false);
  const menuLength = menuItems.length;
  return (
    <div className={classes.main}>
      <AppBackground height={48 * (menuLength - 1)} />
      {menuItems.map((item, index) => {
        return (
          <MenuCard
            key={index}
            category={item}
            cardIndex={index}
            activeMenu={activeMenu}
          />
        );
      })}
    </div>
  );
}

export default App;

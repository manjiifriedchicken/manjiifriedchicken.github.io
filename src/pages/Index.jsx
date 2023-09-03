import "../assets/manjifont.ttf";
import menu from "../assets/menu.json";
import MenuCard from "../components/MenuCard";
import AppBackground from "../components/AppBackground";

import { useState } from "react";
import classes from "./App.module.scss";

function App() {
  const [menuItems] = useState(Array.from(menu).reverse());
  const [anyActive, setAnyActive] = useState(false);
  const menuLength = menuItems.length;
  return (
    <div className={classes.main}>
      <AppBackground height={60 * menuLength} />
      {menuItems.map((item, index) => {
        return (
          <MenuCard
            key={index}
            category={item}
            cardIndex={index}
            anyActive={anyActive}
            setAnyActive={setAnyActive}
          />
        );
      })}
    </div>
  );
}

export default App;

import menu from "../assets/menu.json";
import MenuCard from "../components/MenuCard";
import AppBackground from "../components/AppBackground";
import { motion } from "framer-motion";

import { useHookstate } from "@hookstate/core";
import classes from "./Index.module.scss";

function App() {
  const menuItems = Array.from(menu);
  const activeMenu = useHookstate(false);
  const menuLength = menuItems.length;
  const screenHeight = window.innerHeight;
  return (
    <div className={classes.main}>
      <AppBackground height={48 * (menuLength - 1)} />
      <motion.div
        style={{
          position: "fixed",
          width: "100%",
          height: menuLength * 48 + "px",
          bottom: 0,
        }}
        animate={{
          height:
            activeMenu.get() !== false
              ? screenHeight + "px"
              : menuLength * 48 + "px",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {menuItems.map((item, index) => {
          return (
            <MenuCard
              key={index}
              category={item}
              cardIndex={index}
              activeMenu={activeMenu}
              menuLength={menuLength}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default App;

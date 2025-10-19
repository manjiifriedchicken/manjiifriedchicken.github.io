import { Outlet, useLocation, Link } from "react-router-dom";
import classes from "./Layout.module.scss";
import { ChevronLeft } from "lucide-react";
import { sauces } from "../../menu.ts";
import Sauces from "./Sauces.jsx";
const Layout = () => {
  const location = useLocation();
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <Link to="/" className={classes.headerBack} style={{visibility: location.pathname === "/" ? "hidden" : "visible"}}>
          <ChevronLeft />
        </Link>
        <p>Manjii Fried Chicken</p>
      </header>
      <div className={classes.content}>
        <Outlet />
      </div>
      <Sauces sauces={sauces} />

    </div>
  );
};

export default Layout;

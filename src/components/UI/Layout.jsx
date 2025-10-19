import { Outlet, useLocation, Link } from "react-router-dom";
import classes from "./Layout.module.scss";
import { ChevronLeft } from "lucide-react";
import { sauces } from "../../menu.ts";
import Sauces from "./Sauces.jsx";
import { useEffect } from "react";
const Layout = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <Link to="/" className={classes.headerBack} style={{visibility: location.pathname === "/" ? "hidden" : "visible"}}>
          <ChevronLeft color="black" />
        </Link>
        <Link to="/" className={classes.headerLogo}><h1>Manjii Fried Chicken</h1></Link>
      </header>
      <div className={classes.content}>
        <Outlet />
      </div>
      <Sauces sauces={sauces} />

    </div>
  );
};

export default Layout;

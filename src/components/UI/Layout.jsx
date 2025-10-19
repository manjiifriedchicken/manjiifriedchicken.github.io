import { Outlet,useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return ( <div>
    <h1>{location.pathname}</h1>
    <Outlet />
  </div> );
}
 
export default Layout;
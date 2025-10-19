import { useLoaderData, useLocation } from "react-router-dom";

const MenuPage = () => {
  const location = useLocation();
  const menuPage = useLoaderData();
  return ( <div>
    <h1>{menuPage.name}</h1>
    <p>{menuPage.description}</p>
    <img src={menuPage.image} alt={menuPage.name} />
    <div>
      {menuPage.items.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
    {location.pathname}
  </div> );
}
 
export default MenuPage;
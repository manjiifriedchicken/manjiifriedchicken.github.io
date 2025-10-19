import { useLoaderData } from "react-router-dom";

const MenuPage = () => {
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
  </div> );
}
 
export default MenuPage;
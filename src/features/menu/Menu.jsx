import { useLoaderData } from "react-router-dom";
import { menuList } from "../../services/apiFood";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((item) => (
        <MenuItem key={item.idCategory} item={item} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await menuList();
  return menu;
}
export default Menu;

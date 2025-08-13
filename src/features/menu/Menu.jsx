import { useLoaderData } from "react-router-dom";
import { menuList } from "../../services/apiFood";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useLoaderData();
  const query = useSelector(state => state.search.query);

  const filteredMenu = menu.filter(item =>
    item.strCategory.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {filteredMenu.map(item => <MenuItem key={item.idCategory} item={item} />)}
    </ul>
  );
}

export async function loader() {
  const menu = await menuList();
  return menu;
}
export default Menu;

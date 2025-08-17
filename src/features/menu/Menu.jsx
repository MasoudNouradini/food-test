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
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6">
      {filteredMenu.map(item =>
        <li
          key={item.idCategory}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <MenuItem item={item} />
        </li>
      )}
    </ul>
  );
}

export async function loader() {
  const menu = await menuList();
  return menu;
}
export default Menu;

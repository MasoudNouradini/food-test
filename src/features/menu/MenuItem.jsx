import { formatToCurrency } from "../../utils/helpFile";

function MenuItem({ item }) {
  const {
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
    price
  } = item;
  return (
    <li className="flex gap-2 py-2">
      <img src={strCategoryThumb} alt={strCategory} className="h-24" />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{strCategory}</p>
        <p className="line-clamp-1 text-sm capitalize italic text-stone-500">
          {strCategoryDescription}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm">{formatToCurrency(price)}</p>
          <button className="rounded bg-secondary px-3 py-1 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

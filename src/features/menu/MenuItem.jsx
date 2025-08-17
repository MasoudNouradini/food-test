import { useDispatch } from "react-redux";
import { formatToCurrency } from "../../utils/format";
import { addItem } from "../cart/cartSlice";
import toast from "react-hot-toast";

function MenuItem({ item }) {
  const {
    idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
    price
  } = item;
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      id: idCategory,
      strCategory,
      quantity: 1,
      price,
      totalPrice: price * 1
    };
    dispatch(addItem(newItem));
    toast.success(`${item.strCategory} added to cart!`);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* تصویر */}
      <img
        src={strCategoryThumb}
        alt={strCategory}
        className="w-full sm:w-28 h-28 object-cover rounded-lg flex-shrink-0"
      />

      {/* متن و دکمه */}
      <div className="flex flex-col justify-between grow">
        <div>
          <p className="font-semibold text-lg">
            {strCategory}
          </p>
          <p className="mt-1 text-sm text-stone-500 line-clamp-2">
            {strCategoryDescription}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="font-medium text-secondary">
            {formatToCurrency(price)}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

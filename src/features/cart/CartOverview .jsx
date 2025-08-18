import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { formatToCurrency } from "../../utils/format";
import { CirclePlus, CircleMinus, Trash } from "lucide-react";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
  selectTotalPriceCart
} from "./cartSlice";

function CartOverview({ title, onConfirm, variant = "small" }) {
  const cart = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(selectTotalPriceCart);
  const dispatch = useDispatch();

  if (!totalPrice)
    return (
      <p className="font-semibold text-center py-4 text-gray-500">
        Your shopping cart is empty!
      </p>
    );

  const containerClass =
    variant === "small"
      ? "w-full sm:max-w-xs p-4 sm:p-3"
      : "w-full max-w-2xl p-6";

  return (
    <div
      className={`${containerClass} bg-white rounded shadow-md hover:shadow-lg transition`}
    >
      {cart.map(item =>
        <div
          key={item.id}
          className="grid grid-cols-[1fr_auto_auto] items-center border-b py-1 text-sm gap-x-2 sm:gap-x-4"
        >
          <span className="truncate">
            {item.strCategory}
          </span>

          <div className="flex items-center gap-x-1 sm:gap-x-2">
            <CirclePlus
              onClick={() => dispatch(increaseItemQuantity(item.id))}
              className="w-5 h-5 cursor-pointer hover:text-secondary transition"
            />
            {item.quantity <= 1
              ? <Trash
                  className="w-5 h-5 cursor-pointer hover:text-red-500 transition"
                  onClick={() => dispatch(deleteItem(item.id))}
                />
              : <CircleMinus
                  onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  className="w-5 h-5 cursor-pointer hover:text-secondary transition"
                />}
          </div>

          <span className="text-right whitespace-nowrap">
            {item.quantity} × {formatToCurrency(item.price * item.quantity)}
          </span>
        </div>
      )}

      <div className="mt-2 font-bold text-sm flex justify-between">
        <span>Total Price:</span>
        <span>
          {formatToCurrency(totalPrice)}
        </span>
      </div>

      {onConfirm
        ? <button
            onClick={onConfirm}
            className="mt-2 bg-secondary text-white rounded p-2 w-full text-center hover:bg-secondary/90 transition"
          >
            {title}
          </button>
        : <Link
            to="/cart"
            className="mt-2 bg-secondary text-white rounded p-2 w-full text-center hover:bg-secondary/90 transition flex justify-center items-center"
          >
            {title}
          </Link>}
    </div>
  );
}

export default CartOverview;

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

function CartPreview({ title }) {
  const cart = useSelector(state => state.cart.cart);
  const totalPrice = useSelector(selectTotalPriceCart);
  const dispatch = useDispatch();

  if (!totalPrice)
    return <p className="font-semibold">Your shopping cart is empty!</p>;
  return (
    <div>
      {cart.map(item =>
        <div
          key={item.id}
          className="grid grid-cols-[1fr_auto_auto] items-center border-b py-1 text-sm gap-x-4"
        >
          <span className="truncate">
            {item.strCategory}
          </span>

          <div className="flex items-center gap-x-2">
            <CirclePlus
              onClick={() => dispatch(increaseItemQuantity(item.id))}
              className="size-5 cursor-pointer"
            />
            {item.quantity <= 1
              ? <Trash
                  className="size-5 cursor-pointer"
                  onClick={() => dispatch(deleteItem(item.id))}
                />
              : <CircleMinus
                  onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  className="size-5 cursor-pointer"
                />}
          </div>

          <span className="text-right whitespace-nowrap">
            {item.quantity} × {formatToCurrency(item.price * item.quantity)}
          </span>
        </div>
      )}
      <div className="mt-2 font-bold text-sm">
        Total Price:
        {formatToCurrency(totalPrice)}
      </div>
      <Link
        to="/cart"
        className="text-center flex justify-center items-center mt-2  bg-secondary rounded p-1"
      >
        {title}
      </Link>
    </div>
  );
}

export default CartPreview;

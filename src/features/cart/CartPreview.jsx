import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { formatToCurrency } from "../../utils/helpFile";
import { CirclePlus, CircleMinus, Trash } from "lucide-react";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity
} from "./cartSlice";

function CartPreview() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  function handleIncrease(id) {
    dispatch(increaseItemQuantity(id));
  }
  function handleDeacrease(id) {
    dispatch(decreaseItemQuantity(id));
  }
  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }
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
              onClick={() => handleIncrease(item.id)}
              className="size-5 cursor-pointer"
            />
            {item.quantity <= 1
              ? <Trash
                  className="size-5 cursor-pointer"
                  onClick={() => handleDeleteItem(item.id)}
                />
              : <CircleMinus
                  onClick={() => handleDeacrease(item.id)}
                  className="size-5 cursor-pointer"
                />}
          </div>

          <span className="text-right whitespace-nowrap">
            {item.quantity} × {formatToCurrency(item.price)}
          </span>
        </div>
      )}
      <div className="mt-2 font-bold text-sm">
        Total Price:
        {formatToCurrency(
          cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
        )}
      </div>
      <Link
        to="/cart"
        className="text-center flex justify-center items-center mt-2  bg-secondary rounded p-1"
      >
        go to cart
      </Link>
    </div>
  );
}

export default CartPreview;

/*
   {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}

*/

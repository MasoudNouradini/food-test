import CartPreview from "./cartPreview";

import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleConfirm() {
    toast.success("Your order has been placed successfully!");

    dispatch(clearCart());
    navigate("/");
  }

  return (
    <div className="flex justify-center mt-6 px-4">
      <CartPreview
        title="Confirm & Continue Shopping"
        onConfirm={handleConfirm}
        variant="large"
      />
    </div>
  );
}

export default Cart;

import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartOverview from "../../features/cart/CartOverview ";

function CartButtonPreview() {
  const totalQuantity = useSelector(state =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        {totalQuantity > 0 &&
          <p className="absolute -top-2 -right-2 text-xs bg-secondary text-white px-2 py-0.5 rounded-full">
            {totalQuantity}
          </p>}
      </div>

      <AnimatePresence>
        {showPreview &&
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl rounded-xl p-4 z-50"
          >
            <CartOverview title="View Cart" variant="small" />
          </motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default CartButtonPreview;

import { Link } from "react-router";

function HeroLeft() {
  return (
    <div className="order-2 md:order-1 flex flex-col justify-center">
      <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold max-w-xl">
        be the fastest in delivery your
        <span className="text-secondary md:whitespace-nowrap"> food</span>
      </h2>
      <p className="mt-6 text-sm text-gray-600 max-w-md">
        Fresh meals delivered to your doorstep. Order now and enjoy fast,
        healthy, and delicious choices.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/cart"
          className="p-3 bg-text rounded text-secondary text-center"
        >
          Order Now
        </Link>
        <Link
          to="/menu"
          className="p-3 bg-secondary rounded text-text text-center"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}

export default HeroLeft;

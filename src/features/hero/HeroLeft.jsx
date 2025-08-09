import { Link } from "react-router";

function HeroLeft() {
  return (
    <div className="order-2 md:order-1 flex flex-col justify-center">
      <h2 className="capitalize text-3xl lg:text-5xl font-semibold max-w-xl ">
        be the fastest in delivery your
        <span className="text-secondary whitespace-nowrap"> food</span>
      </h2>
      <p className="mt-6 text-sm text-gray-600 max-w-md">
        Fresh meals delivered to your doorstep. Order now and enjoy fast,
        healthy, and delicious choices.
      </p>
      <div className="mt-8 flex gap-4">
        <Link to="/cart" className="p-2 bg-text rounded text-secondary">
          Order Now
        </Link>
        <Link to="/menu" className="p-2 bg-secondary rounded text-text">
          View Menu
        </Link>
      </div>
    </div>
  );
}

export default HeroLeft;

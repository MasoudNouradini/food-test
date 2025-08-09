import foodImage from "../../assets/foodImage.png";
function HeroRight() {
  return (
    <div className="order-1 md:order-2 relative flex justify-center md:justify-end items-center">
      <svg
        className="pointer-events-none absolute -right-10 top-6 md:top-8 w-[340px] h-[340px] md:w-[420px] md:h-[420px]"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="360" cy="60" r="36" fill="#FFB84D" opacity="0.95" />
        <circle cx="320" cy="200" r="70" fill="#FFE8C6" opacity="0.95" />
        <circle cx="380" cy="340" r="22" fill="#FFB84D" opacity="0.95" />
        <circle cx="240" cy="300" r="46" fill="#FFD79B" opacity="0.95" />
      </svg>

      <div className="hidden md:block absolute right-0 top-0 h-full w-[45%] bg-yellow-50"></div>

      <div className="relative z-10 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
        <img
          src={foodImage}
          alt="Delicious meals"
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}

export default HeroRight;

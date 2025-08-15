import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <section className="px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 h-[520px]">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}

export default Hero;

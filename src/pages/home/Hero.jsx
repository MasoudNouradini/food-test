import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <section className="px-4 md:px-6 py-6 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-6">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
}

export default Hero;

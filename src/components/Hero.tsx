import HeroImg from '../images/hero.jpg';

function LineDecoration() {
  return (
    <span className="lg:w-64 md:w-44 inline-block w-20 border-b-2 border-white border-opacity-50 border-solid" />
  );
}

export default function Hero() {
  return (
    <section className="lg:h-96 md:h-72 h-96 place-items-center sm:gap-9 relative grid content-center gap-12 overflow-hidden">
      <div className="gradient-mask-b-70 absolute inset-0">
        <img src={HeroImg} alt="UPO" className="object-cover w-full h-full" />
      </div>
      <h1 className="font-Mont lg:text-5xl relative z-10 text-3xl tracking-wider text-center text-white">
        University Philharmonic Orchestra
      </h1>
      <div className="z-10 flex items-center gap-3">
        <LineDecoration />
        <span className="font-Mont text-opacity-80 lg:text-xl text-lg text-white">HKUSTSU</span>
        <LineDecoration />
      </div>

      {/* musical clef overlay */}
      <span className="lg:text-99xl text-9xl font-Mont -rotate-12 text-opacity-20 left-1/20 top-1/2 absolute text-white -translate-y-1/2 select-none">
        &#x1d11e;
      </span>
    </section>
  );
}

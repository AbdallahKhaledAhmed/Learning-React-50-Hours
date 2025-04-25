import HeroProfilePicture from "./comps/HeroProfilePicture";

const Hero = () => {
  return (
    <div className="w-full mt-10 ml-7 flex gap-5">
      <HeroProfilePicture />
      <div className="flex items-start flex-col w-full h-full">
        <h2 className="font-bold text-2xl ">Abdallah WebDev</h2>
        <p className="mb-2">1M Subscribers</p>
        <p>
          This is a short description of the YouTube channel. It gives an
          overview of the content and what viewers can expect.
        </p>
        <a
          href="https://github.com/AbdallahKhaledAhmed"
          target="_blank"
          className="mt-4 bg-red-600 text-white font-semibold px-4 py-2 rounded cursor-pointer hover:bg-red-400"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Hero;

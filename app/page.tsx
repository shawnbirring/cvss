import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={"/main.jpg"}
        width={1920}
        height={1080}
        alt="main"
        className="w-full"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to HairStyle Studio
        </h1>
        <p className="text-lg md:text-xl mt-4">
          We are passionate about creating stunning hairstyles that make you
          look and feel fabulous.
        </p>
        <p className="text-lg md:text-xl mt-4">
          Whether you need a haircut, color, or styling for a special occasion,
          our experienced stylists are here to bring out the best in you.
        </p>
      </div>
    </div>
  );
}

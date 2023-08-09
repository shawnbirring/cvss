import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Image
        src={"/main.jpg"}
        width={1000}
        height={1000}
        alt="main"
        className="w-full"
      />
      <div className="text-center py-7">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to HairStyle Studio
        </h1>
        <p className="text-lg md:text-xl mt-4">
          We are passionate about creating stunning hairstyles that make you
          look and feel fabulous.
        </p>
      </div>
    </>
  );
}

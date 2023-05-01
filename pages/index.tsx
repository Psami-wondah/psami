import Image from "next/image";
import { Nunito } from "next/font/google";
import h from "@/public/heart.svg";

const inter = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center  bg-gradient-to-br from-purple-500 to-red-500">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Amayi is beautiful
          </h1>
          <p className="mt-4 text-lg text-center text-gray-600">
            And she deserves all the love in the world
          </p>
          <div className="mt-8 flex justify-center gap-4 items-center">
            <a
              href="#"
              className="px-6 py-2 text-lg font-bold text-white bg-pink-500 rounded-full hover:bg-pink-600"
            >
              Show your love
            </a>
            <Image src={h} alt="heart" className="w-max heart" />
          </div>
        </div>
      </div>
    </main>
  );
}

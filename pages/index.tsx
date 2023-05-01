import Image from "next/image";
import { Nunito } from "next/font/google";
import h from "@/public/heart.svg";

const inter = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center  bg-gradient-to-br from-blue-500 to-gray-500">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Chris 🥤 is Gay
          </h1>
        </div>
      </div>
    </main>
  );
}

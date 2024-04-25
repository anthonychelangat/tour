import DashBoardHeader from "@/components/DashBoardHeader";
import SideBar from "@/components/sideBar/sideBar";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <div className="grid grid-cols-5 ">
      <div className="pl-8  col-span-1 text-[white] bg-[#161629]">
        <div className="flex justify-between">
          <div className="flex justify-center flex-col items-center py-5">
            <p className="text-4xl font-extrabold text-blue-700">TOURER</p>
            <Image
              className="my-2 w-[5rem] aspect-square rounded-[50%]"
              src="/elise.jpg"
              width={50}
              height={50}
            />
            <p className="font-bold">Chelangat Anthony</p>
            <p className="text-gray-400">chelangatanthony@gmail.com</p>
          </div>
        </div>
        <SideBar />
      </div>
      <div className="pr-8 col-span-4 bg-gray-100">
        <DashBoardHeader />
        {children}
      </div>
    </div>
  );
}

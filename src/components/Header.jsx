import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-6xl mb-4 text-gray-100 mx-auto flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">TourUg</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <a className="py-2 px-3 hover:bg-gray-400 hover:rounded-lg " href="#">
            <h2 className="uppercase">usd</h2>
          </a>
          <Image
            className="w-30 aspect-square rounded-[50%]"
            src=""
            alt=""
            width={24}
            height={24}
          />
          <div className="relative">
            <IoNotificationsOutline className="text-2xl" />
            <span className="absolute rounded-full  bg-red-500 top-0 right-0 ">
              4
            </span>
          </div>
        </div>

        <Link className="py-2 px-3 hover:bg-gray-400" href="">
          List Your Property
        </Link>

        <div className="py-2 px-3 flex items-center gap-4">
          <Link
            className="bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-400"
            href="/register">
            Register
          </Link>
          <Link
            className="bg-gray-100 text-gray-700 hover:bg-gray-400 py-2 px-3"
            href="/login">
            Login
          </Link>
          <Link
            className="lg:hidden py-2 px-3 hover:bg-gray-400 flex items-center gap-4"
            href="#">
            <Image
              className="w-30 aspect-square rounded-[50%]"
              src="/elise.jpg"
              alt=""
              width={24}
              height={24}
            />
            <h4>Your Account</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;

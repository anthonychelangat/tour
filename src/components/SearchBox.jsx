import { IoNotificationsOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <form className=" flex items-center justify-center ">
        <div className="flex flex-center gap-1 bg-gray-200 px-4 py-3 border-2 border-solid border-orange-700">
          <IoNotificationsOutline className="text-2xl" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Where are you going?"
          />
        </div>
        <div className="flex flex-center gap-1 bg-gray-200 px-4 py-3 border-2 border-solid border-orange-700">
          <IoNotificationsOutline className="text-2xl" />
          <input
            className="bg-transparent outline-none"
            type="calender"
            placeholder="Check in - Check Out"
          />
        </div>
        <div className="bg-gray-200 px-4 py-3 border-2 border-solid border-orange-700 flex items-center gap-1">
          <IoNotificationsOutline className="text-2xl" />
          <input
            className="bg-transparent outline-none"
            type="number"
            placeholder="2 Adults"
          />
          <input
            className="bg-transparent outline-none"
            type="number"
            placeholder="0 children"
          />
        </div>
        <button className="font-bold px-6 py-3 border-2 border-solid border-orange-700 bg-blue-500">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

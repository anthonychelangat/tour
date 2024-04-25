import Image from "next/image";

const Offers = () => {
  return (
    <div
      className="sm:grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2
    2xl:grid-cols-2 max-w-6xl mx-auto py-4">
      <div
        className="bg-cover bg-center bg-no-repeat group cursor-pointer sm:hover:shadow-slate-400 
        sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
        transition-shadow duration-200 py-3 px-4"
        style={{
          backgroundImage: 'url("/9.jpg")',
          height: "25vh",
          width: "78vh",
        }}>
        <h3 className="text-xl font-bold mb-2 text-gray-900 ">
          Seize the moment
        </h3>
        <p>Save more than 15% when you signup before </p>
        <p>november 2024</p>
        <button className="font-bold mt-5 bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg">
          Find Gateway Deals
        </button>
      </div>
      <div
        className="cursor-pointer sm:hover:shadow-slate-400 
      sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
      transition-shadow duration-200 flex items-center justify-between ">
        <div className="pl-3 px-4">
          <h3 className="text-xl font-bold mb-2 text-gray-900 ">
            Planning a trip to Rwenzori Mountain
          </h3>
          <p>Get a quick ride to kasese where exploration awaits you</p>
          <button className="font-bold mt-5 bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-lg">
            Explore Rwenzori
          </button>
        </div>
        <Image
          className="overflow-none"
          src="/bg.jpg"
          width={128}
          height={300}
        />
      </div>
    </div>
  );
};

export default Offers;

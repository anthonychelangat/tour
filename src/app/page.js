import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import Destination from "@/components/Destinations";
import Offers from "@/components/Offers";

export default function Home() {
  const items = [
    {
      title: "Kampala",
      image: "/bg.jpg",
    },
    {
      title: "Mbale",
      image: "/9.jpg",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
    },
    {
      title: "Queen Elizabeth national Park",
      image: "/elise.jpg",
    },
  ];
  return (
    <div>
      <div
        className=" bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/bg.jpg")', height: "50vh" }}>
        <div className="max-w-6xl text-gray-50 mx-auto  flex flex-col gap-8">
          <div>
            <div className="my-12">
              <div className="mb-4">
                <h1 className="text-4xl">Make yourself at home</h1>
                <h1 className="text-4xl">In paradise</h1>
              </div>
              <p className="text-xl">Choose from cabins, houses and more</p>
            </div>
            <Link
              className="py-4 px-4 text-xl bg-blue-500 hover:bg-blue-700 rounded-lg"
              href="#">
              Discover vacation rentals
            </Link>
          </div>
        </div>
      </div>
      <SearchBox />
      <div className="max-w-6xl mx-auto text-gray-900 mt-12">
        <h1 className="text-2xl font-bold">Offers</h1>
        <p className="text-gray-500 mt-1">
          Promotions, Deals and special offers for you
        </p>
        <div className="mt-4">
          <Offers />
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-gray-900 mt-12">
        <h1 className="text-2xl font-bold">Trending Destinations</h1>
        <p className="text-gray-500 mt-1">
          Most popular choices for travelors in Uganda
        </p>
        <div className="mt-2">
          <Destination items={items} />
        </div>
      </div>
    </div>
  );
}

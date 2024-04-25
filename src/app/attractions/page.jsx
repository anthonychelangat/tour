import { IoNotificationsOutline } from "react-icons/io5";
import Attractions from "@/components/Attractions";
import AllAttractions from "@/components/AllAttractions";
import PlacesNav from "@/components/placesNav/PlacesNav";

const attractions = () => {
  const items = [
    {
      title: "Kampala",
      image: "/bg.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Mbale",
      image: "/9.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Queen Elizabeth national Park",
      image: "/elise.jpg",
      activities: "105 activities",
    },
  ];

  const allItems = [
    {
      title: "Kampala",
      image: "/bg.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Kampala",
      image: "/bg.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Kampala",
      image: "/bg.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Mbale",
      image: "/9.jpg",
      activities: "105 activities",
    },
    {
      title: "Sipi Falls",
      image: "/14.jpg",
      activities: "105 activities",
    },
    {
      title: "Queen Elizabeth national Park",
      image: "/elise.jpg",
      activities: "105 activities",
    },
  ];

  return (
    <div>
      <div className="bg-blue-700 py-8 text-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Attractions, activities and</h1>
          <h1 className="text-4xl font-bold mb-10">experiences</h1>
          <p className="">
            Discover new attractions and experiences to match your
          </p>
          <p className="mb-6">interests and travel style</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <form className="flex items-center border-2 border-solid border-orange-700">
            <div className="flex items-center gap-1">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="outline-none py-3 px-1"
                type="text"
                placeholder="Where are you going"
              />
            </div>
            <div className="flex items-center gap-1">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="outline-none py-3 px-1"
                type="text"
                placeholder="Select your day"
              />
            </div>
            <button className="py-3 px-4 bg-blue-500 text-gray-50">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="font-bold text-xl">Destinations</h1>
          <div>
            <Attractions items={items} />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto py-10 border border-solid border-b-gray-500 border-t-gray-500">
          <h1 className="text-gray-900 text-xl mb-4 font-bold">
            We've got you covered
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <IoNotificationsOutline className="text-4xl" />
              <div>
                <p className="font-bold">Explore top attractions</p>
                <p>
                  Experience the best of your destination, with attractions,
                  tours, activities and more
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <IoNotificationsOutline className="text-4xl" />
              <div>
                <p className="font-bold">Fast and flexible</p>
                <p>
                  Book tickets online in minutes, with free cancellation on many
                  attractions
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <IoNotificationsOutline className="text-4xl flex" />
              <div>
                <p className="font-bold">Support when you need it</p>
                <p>
                  ExploreUg global Customer Service team is here to help 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="font-bold text-xl">Explore more destinations</h1>
          <p className="text-gray-600 py-4">
            Find things to do in places around Uganda
          </p>
          <PlacesNav />
          <div>
            <AllAttractions items={allItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default attractions;

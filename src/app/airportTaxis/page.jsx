import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import EmailSubscribe from "@/components/EmailSubscribe";

const airportTaxis = () => {
  return (
    <div>
      <div className="bg-gray-300 pt-8 pb-2 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">Book your airport taxi</h1>
          <p className="mt-2 mb-6">
            Easy airport transfers to and from your accommodation
          </p>
        </div>
        <div className="flex items-center gap-4 mb-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <input type="radio" />
            <p>one way</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" />
            <p>return</p>
          </div>
        </div>

        <div className="flex justify-center max-w-6xl mx-auto">
          <form className="flex items-center ">
            <div className="flex items-center gap-1 border-2 border-solid border-orange-700">
              <IoNotificationsOutline className="text-2xl ml-4" />
              <input
                className="bg-transparent outline-none py-3 px-1"
                type="text"
                placeholder="Enter pickup location"
              />
            </div>
            <div className="flex items-center gap-1 border-2 border-solid border-orange-700">
              <IoNotificationsOutline className="text-2xl ml-4" />
              <input
                className="bg-transparent outline-none py-3 px-1"
                type="text"
                placeholder="Enter destination"
              />
            </div>
            <div className="flex items-center gap-1 border-2 border-solid border-orange-700">
              <IoNotificationsOutline className="text-2xl ml-4" />
              <input
                className="bg-transparent outline-none py-3 px-1"
                type="date"
                placeholder="2/12/2024"
              />
            </div>
            <div className="flex items-center gap-1 border-2 border-solid border-orange-700">
              <IoNotificationsOutline className="text-2xl ml-4" />
              <input
                className="bg-transparent outline-none py-3 px-1"
                type="time"
                placeholder="Time"
              />
            </div>
            <div className="flex items-center gap-1 border-2 border-solid border-orange-700">
              <IoNotificationsOutline className="text-2xl ml-4" />
              <input
                className="bg-transparent w-20 outline-none py-3 px-1"
                type="number"
                value="1"
                placeholder="person"
              />
            </div>
            <button className="py-3 px-4 bg-blue-500 hover:bg-blue-700 text-gray-50 border-2 border-solid border-orange-700">
              Search
            </button>
          </form>
        </div>

        <div className="max-w-6xl mx-auto pt-40 ">
          <div className="flex items-center gap-10 justify-between">
            <div className="flex gap-6">
              <IoNotificationsOutline className="text-6xl flex items-center" />
              <div>
                <p className="font-bold">Flight tracking</p>
                <p>
                  Your driver tracks your flight and waits for you if it's
                  delayed
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <IoNotificationsOutline className="text-6xl flex items-center" />
              <div>
                <p className="font-bold">One clear price</p>
                <p>
                  Your price is confirmed upfront – no extra costs, no cash
                  required
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <IoNotificationsOutline className="text-6xl flex items-center" />
              <div>
                <p className="font-bold">Tried and trusted</p>
                <p>
                  We work with professional drivers and have 24/7 customer care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8">
        <p className="text-center text-2xl mb-8 font-bold">
          Airport transfers made easy
        </p>
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image
              className="flex items-center"
              src="/taxi-book.svg"
              width={80}
              height={80}
            />
            <div>
              <p className="font-bold mb-2">Booking your airport taxi</p>
              <p>
                Confirmation is immediate. If your plans change, you can cancel
                for free up to 24 hours before your scheduled pick-up time
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="flex items-center"
              src="/taxi-meet.svg"
              width={80}
              height={80}
            />
            <div>
              <p className="font-bold mb-2">Meeting your driver</p>
              <p>
                You'll be met on arrival and taken to your vehicle. Your driver
                will track your flight, so they'll wait for you even if it's
                delayed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              className="flex items-center"
              src="/taxi-arrive.svg"
              width={80}
              height={80}
            />
            <div>
              <p className="font-bold mb-2">Arriving at your destination</p>
              <p>
                Get to your destination quickly and safely – no waiting in line
                for a taxi, no figuring out public transport
              </p>
            </div>
          </div>
        </div>
      </div>

      <EmailSubscribe />
    </div>
  );
};

export default airportTaxis;

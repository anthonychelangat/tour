import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import EmailSubscribe from "@/components/EmailSubscribe";

const carRentals = () => {
  return (
    <div className="">
      <div className="bg-blue-700 text-gray-100">
        <div className="max-w-6xl py-10 mx-auto">
          <h1 className="text-3xl font-bold pt-6">Car hire for any kind</h1>
          <h1 className="text-3xl font-bold pb-6">of trip</h1>
          <p className="text-gray-200">
            Great deals at great prices, from the biggest
          </p>
          <p className="text-gray-200">car hire companies</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <form className="flex justify-center ">
            <div className="flex items-center border-2 border-solid border-orange-500">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="bg-transparent outline-none py-3 px-2"
                type="text"
                placeholder="Pick up location"
              />
            </div>
            <div className="flex items-center border-2 border-solid border-orange-500">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="bg-transparent outline-none w-24 py-3 px-2"
                type="text"
                placeholder="Pick up date"
              />
            </div>
            <div className="flex items-center border-2 border-solid border-orange-500">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="bg-transparent outline-none w-24 py-3 px-2"
                type="text"
                placeholder="Time"
              />
            </div>
            <div className="flex items-center border-2 border-solid border-orange-500">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="bg-transparent outline-none w-24 py-3 px-2"
                type="text"
                placeholder="Drop off date"
              />
            </div>
            <div className="flex items-center border-2 border-solid border-orange-500">
              <IoNotificationsOutline className="text-2xl" />
              <input
                className="bg-transparent outline-none w-24 py-3 px-2"
                type="text"
                placeholder="Time"
              />
            </div>
            <button className="py-3 px-6 border-2 border-solid text-gray-200 border-orange-500 bg-blue-500 font-bold">
              Search
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="my-5 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input type="checkBox" />
              <p>Drop car off at a diffrent location</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkBox" />
              <p>Driver is between 18 - 40</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Image
              className="w-12"
              src="/CustomerService.png"
              width={100}
              height={50}
            />
            <div>
              <h4 className="font-bold text-xl text-gray-900">
                We are here for you
              </h4>
              <p className="text-gray-500">Providing customer service in</p>
              <p className="text-gray-500">over 10 languages</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image
              className="w-12"
              src="/FreeCancellation.png"
              width={100}
              height={50}
            />
            <div>
              <h4 className="font-bold text-xl text-gray-900">
                Free cancellation
              </h4>
              <p className="text-gray-500">On most bookings for upto</p>
              <p className="text-gray-500">48 hours of pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image
              className="w-12"
              src="/Reviews.png"
              width={100}
              height={50}
            />
            <div>
              <h4 className="font-bold text-xl text-gray-900">
                5 million + Reviews{" "}
              </h4>
              <p className="text-gray-500">By verified customers</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-6xl mx-auto py-10">
          <p className="text-xl font-bold pb-4">Frequently asked Questions</p>
          <div className="flex items-center justify-between">
            <div className=" px-6">
              <select className="py-3 w-full px-4">
                <option value="qt-2" selected>
                  <p className="font-bold text-gray-900">
                    Why should i book a car in Uganda using this website
                  </p>
                </option>
                <option></option>
              </select>
              <select className="py-3 w-full px-4">
                <option value="qt-2" selected>
                  <p className="font-bold text-gray-900">
                    Why should i book a car in Uganda using this website
                  </p>
                </option>
                <option></option>
              </select>
              <select className="py-3 w-full px-4">
                <option value="qt-2" selected>
                  <p className="font-bold text-gray-900">
                    Why should i book a car in Uganda using this website
                  </p>
                </option>
                <option></option>
              </select>
            </div>
            <div className="py-4 px-6">
              <select className="py-3 w-full px-4">
                <option value="qt-2" selected>
                  <p>Why should i book a car in Uganda using this website</p>
                </option>
                <option></option>
              </select>
              <select className="py-3 px-4 w-full">
                <option value="qt-2" selected>
                  <p>Why should i book a car in Uganda using this website</p>
                </option>
                <option></option>
              </select>
              <select className="py-3 w-full px-4">
                <option value="qt-2" selected>
                  <p>Why should i book a car in Uganda using this website</p>
                </option>
                <option></option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <EmailSubscribe />
    </div>
  );
};
export default carRentals;

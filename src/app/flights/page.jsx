import { IoNotificationsOutline } from "react-icons/io5";

const flights = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-screen">
        <h1 className="text-3xl my-20 font-bold">Where do you want to go?</h1>
        <div>
          <div className="flex items-center gap-4">
            <div>
              <select className="py-3 px-4">
                <option value="one" selected>
                  One Way
                </option>
                <option value="return">Return</option>
                <option value="multicity">Multi City</option>
              </select>
              <input className="" type="hidden" value="one" />
            </div>
            <div>
              <select className="py-3 px-4">
                <div className="flex items-center justify-between">
                  <option className="my-2" value="adults" selected>
                    <div>
                      Adults <span className="text-gray-400 pl-3">18+</span>
                    </div>
                  </option>
                  <div>
                    <button className="py-2 px-2 bg-blue-700 text-gray-200 rounded-lg">
                      -
                    </button>
                    <p>0</p>
                    <button className="py-2 px-2 bg-blue-700 text-gray-200 rounded-lg">
                      +
                    </button>
                  </div>
                </div>

                <option className="my-2" value="business">
                  Students <span>over 18</span>
                </option>
                <option className="my-2" value="business">
                  Youth <span>12-17</span>
                </option>
                <option className="my-2" value="business">
                  Children <span>2-11</span>
                </option>
                <option className="my-2" value="business">
                  Toddlers in own seat <span>under 6 month</span>
                </option>
                <option className="my-2" value="business">
                  Infants on lap <span>under 2</span>
                </option>
              </select>
              <input className="" type="hidden" value="adults" />
            </div>
            <div>
              <select className="py-3 px-4">
                <option value="economy" selected>
                  Economy
                </option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
              <input className="" type="hidden" value="economy" />
            </div>
          </div>
          <div className="mt-12">
            <form
              className="flex items-center justify-between bg-gray-100 rounded-lg 
            border border-solid border-orange-700 ">
              <div className="flex items-center gap-2 px-2">
                <IoNotificationsOutline />
                <input
                  className="outline-none py-2 bg-transparent"
                  type="text"
                  value="Entebbe"
                />
              </div>
              <div className="flex items-center gap-2 px-2">
                <IoNotificationsOutline />
                <input
                  className="outline-none py-2 bg-transparent"
                  type="text"
                  placeholder="To.."
                />
              </div>
              <div className="flex items-center gap-2 px-2">
                <IoNotificationsOutline />
                <input
                  className="outline-none py-2 bg-transparent"
                  type="calender"
                  placeholder="12/May/2024"
                />
              </div>
              <div className="flex items-center gap-2 px-2">
                <IoNotificationsOutline />
                <input
                  className="outline-none py-2 bg-transparent"
                  type="calender"
                  placeholder="18/April/2024"
                />
              </div>
              <button className="py-2 px-4 bg-blue-500 rounded-lg text-bold text-gray-100 text-xl">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default flights;

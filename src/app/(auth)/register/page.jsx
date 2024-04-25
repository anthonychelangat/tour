const register = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center py-10">
        <div>
          <div>
            <p className="font-bold mb-6 text-2xl">Create an account</p>
            <form>
              <div className="mb-2">
                <p className="font-semibold mb-1">Email Address</p>
                <input
                  className="focus:border-blue-700 w-80 outline-none py-2 px-4 border-2 boder-solid border-gray-500 bg-transparent"
                  type="email"
                  placeholder="Enter your Email address"
                />
              </div>
              <div className="mb-2">
                <p className="font-semibold mb-1">Password</p>
                <input
                  className=" focus:border-blue-700 w-80 outline-none py-2 px-4 border-2 boder-solid border-gray-500 bg-transparent"
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div>
                <p className="font-semibold mb-1">Repeat Password</p>
                <input
                  className=" focus:border-blue-700 w-80 outline-none py-2 px-4 border-2 boder-solid border-gray-500 bg-transparent"
                  type="password"
                  placeholder="Enter your Password Again"
                />
              </div>
              <button className="w-80 py-3 mt-6 px-4 text-gray-50 hover:bg-blue-700 bg-blue-500">
                Register With Email
              </button>
            </form>
          </div>
          <p className="text-center mb-6 mt-4">or use one of these options</p>
          <div className="flex items-center justify-center gap-6">
            <form>
              <button className="hover:border-blue-700 py-4 px-4 border-2 border-solid border-gray-500">
                Google
              </button>
            </form>
            <form>
              <button className="hover:border-blue-700 py-4 px-4 border-2 border-solid border-gray-500">
                Google
              </button>
            </form>
            <form>
              <button className="hover:border-blue-700 py-4 px-4 border-2 border-solid border-gray-500">
                Google
              </button>
            </form>
          </div>
          <div className="mt-6">
            <p className="text-center">By signing in or creating an account,</p>
            <p className="text-center mb-3">
              you agree with our Terms & conditions
            </p>
            <p className="text-center">All rights reserved.</p>
            <p className="text-center">
              Copyright (2006 - 2024) - Booking.com™
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default register;

const EmailSubscribe = () => {
  return (
    <div>
      <div className="bg-blue-900  text-gray-50 py-10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="font-bold text-2xl">Stay in the know</h1>
          <p>
            Sign up to get marketing emails from Booking.com, including
            promotions, rewards, travel experiences and information about
            Booking.com’s and Booking.com Transport Limited’s products and
            services.
          </p>
          <form>
            <input
              className="outline-none py-3 px-4 "
              type="email"
              placeholder="Enter your email here"
            />
            <button className="bg-blue-500 ml-4 py-3 px-4 text-bold">
              Subscribe
            </button>
          </form>
          <p>
            You can opt out any time. <a>See our privacy statement.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-700 text-gray-200 pt-10 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center ">
            <Link
              href=""
              className="py-2 px-4 mb-6 hover:bg-gray-400 border-2 border-solid border-gray-200 
              rounted-lg">
              List your property
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link class href="">
              <p>Mobile Version</p>
            </Link>
            <Link href="">
              <p>Your Account</p>
            </Link>
            <Link href="">
              <p>Make Changes Online to your booking</p>
            </Link>
            <Link href="">
              <p>Customer Service Help</p>
            </Link>
            <Link href="">
              <p>Become an Affiliate</p>
            </Link>
            <Link href="">
              <p>For Business</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-between mt-8 text-blue-600">
        <div className="space-y-2">
          <Link href="">
            <p>Countries</p>
          </Link>
          <Link href="">
            <p>Regions</p>
          </Link>
          <Link href="">
            <p>Hotels</p>
          </Link>
          <Link href="">
            <p>Districts</p>
          </Link>
          <Link href="">
            <p>Airports</p>
          </Link>
          <Link href="">
            <p>Cities</p>
          </Link>
          <Link href="">
            <p>Places of interest</p>
          </Link>
        </div>
        <div className="space-y-2">
          <Link href="">
            <p>Homes</p>
          </Link>
          <Link href="">
            <p>Villas</p>
          </Link>
          <Link href="">
            <p>Apartments</p>
          </Link>
          <Link href="">
            <p>Resorts</p>
          </Link>
          <Link href="">
            <p>Hostels</p>
          </Link>
          <Link href="">
            <p>B&B</p>
          </Link>
          <Link href="">
            <p>Guest Houses</p>
          </Link>
        </div>
        <div className="space-y-2">
          <Link href="">
            <p>Unique places to stay</p>
          </Link>
          <Link href="">
            <p>All destinations</p>
          </Link>
          <Link href="">
            <p>All flight destinations</p>
          </Link>
          <Link href="">
            <p>All car rental car locations</p>
          </Link>
          <Link href="">
            <p>All vacation destinations</p>
          </Link>
          <Link href="">
            <p>Reviews</p>
          </Link>
          <Link href="">
            <p>Seasonal and holiday deals</p>
          </Link>
          <Link href="">
            <p>Travellor review awards </p>
          </Link>
        </div>
        <div className="space-y-2">
          <Link href="">
            <p>Customer help</p>
          </Link>
          <Link href="">
            <p>Partner Help</p>
          </Link>
          <Link href="">
            <p>Careers</p>
          </Link>
          <Link href="">
            <p>Sustainablilty</p>
          </Link>
          <Link href="">
            <p>Press center</p>
          </Link>
          <Link href="">
            <p>Safety Resource Center</p>
          </Link>
          <Link href="">
            <p>Investor Relations</p>
          </Link>
          <Link href="">
            <p>Terms & Conditions</p>
          </Link>
          <Link href="">
            <p>Partner Dispute</p>
          </Link>
          <Link href="">
            <p>How we Work</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;

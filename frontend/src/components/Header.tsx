import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="bg-black flex items-center text-white px-3 font-bold hover:bg-white hover:text-black"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Header;

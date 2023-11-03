import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-cyan-600 text-white flex flex-col md:flex-row gap-4 justify-between items-center py-4 px-6">
      <Link to={"/"} className="font-bold text-xl">
        Programming Contest
      </Link>
      <Nav />
    </header>
  );
};

export default Header;

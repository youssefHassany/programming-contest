import { Link } from "react-router-dom";

type NavProps = {
  pagePath: string;
  pageName: string;
};

const NavPages = ({ pagePath, pageName }: NavProps) => {
  return (
    <li>
      <Link className="hover:opacity-70 duration-200" to={pagePath}>
        {pageName}
      </Link>
    </li>
  );
};

export default NavPages;

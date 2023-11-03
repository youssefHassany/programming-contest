import NavPages from "./NavPages";

const Nav = () => {
  return (
    <ul className={`flex flex-row gap-4`}>
      <NavPages pagePath="/" pageName="الرئيسية" />
      <NavPages pagePath="/videos" pageName="الفيديوهات" />
      <NavPages pagePath="/rankings" pageName="الترتيب" />
    </ul>
  );
};

export default Nav;

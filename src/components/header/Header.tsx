import logo from "../../assets/logo.png";
import HeaderContent from "./HeaderContent";
import HeaderLastUpdate from "./HeaderLastUpdate";

const Header = (prop: { lastUpddate: string }) => {
  const { lastUpddate } = prop;
  return (
    <div className="flex items-center bg-white drop-shadow-md mb-5 py-3">
      <img className="h-[40px] mx-10" src={logo} alt="Logo" />
      <HeaderContent></HeaderContent>
      <HeaderLastUpdate lastUpddate={lastUpddate} />
    </div>
  );
};

export default Header;

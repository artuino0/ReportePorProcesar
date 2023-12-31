import logo from "../../assets/logo.png";
import HeaderContent from "./HeaderContent";
import HeaderLastUpdate from "./HeaderLastUpdate";

const Header = (prop: { lastUpddate: string }) => {
  const { lastUpddate } = prop;
  return (
    <div className="w-full mx-auto mb-3 py-2 flex items-center bg-white drop-shadow-md">
      <img className="h-[40px] mx-10" src={logo} alt="Logo" />
      <HeaderContent></HeaderContent>
      <HeaderLastUpdate lastUpddate={lastUpddate} />
    </div>
  );
};

export default Header;

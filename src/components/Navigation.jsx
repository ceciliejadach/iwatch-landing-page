import NavigationCategory from "./NavigationCategory";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navigation = () => {
  return (
    <section className="flex justify-between py-5">
      <FaApple style={{ width: "3rem", height: "3rem" }} />
      <div className="flex gap-8">
        <NavigationCategory categorytext="Mac" />
        <NavigationCategory categorytext="Iphone" />
        <NavigationCategory categorytext="Ipod" />
        <NavigationCategory categorytext="iWatch" />
        <NavigationCategory categorytext="Support" />
      </div>
      <div className="flex gap-3 items-center justify-between">
        <CiSearch style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
        <div className="border-l-[1px] border-white h-[18px]"></div>
        <CiShoppingCart style={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
      </div>
    </section>
  );
};

export default Navigation;

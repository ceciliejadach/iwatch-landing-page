import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const PageIndicator = () => {
  return (
    <section className="flex gap-2 items-center self-end">
      <IoIosArrowRoundBack style={{ width: "1.5rem", height: "1.5rem" }} />
      <p>1</p>
      <IoIosArrowRoundForward style={{ width: "1.5rem", height: "1.5rem" }} />
    </section>
  );
};

export default PageIndicator;

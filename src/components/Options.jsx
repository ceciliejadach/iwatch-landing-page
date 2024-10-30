import DifferentWatchOptions from "@/components/DifferentWatchOptions";
import MintWatch from "../images/mint.png";
import NavyWatch from "../images/navy.png";
import PinkWatch from "../images/pink.png";

const Options = () => {
  return (
    <section className="flex gap-4 justify-center">
      <DifferentWatchOptions bgcolor="bg-[#434558]" img={NavyWatch} alt="Billede af iwatch med navyfarve rem" />
      <DifferentWatchOptions bgcolor="bg-[#6ADDCC]" img={MintWatch} alt="Billede af iwatch med mintfarve rem" />
      <DifferentWatchOptions bgcolor="bg-[#F9CDC4]" img={PinkWatch} alt="Billede af iwatch med pinkfarve rem" />
    </section>
  );
};

export default Options;

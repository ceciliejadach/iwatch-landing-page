import Navigation from "@/components/Navigation";
import Options from "@/components/Options";
import NavyWatch from "../images/navy.png";
import Image from "next/image";
import BuyNowButton from "@/components/BuyNowButton";
import ColorOptions from "@/components/ColorOptions";
import PageIndicator from "@/components/PageIndicator";

// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

export default function Home() {
  return (
    <main className="bg-[#B6CCDA] max-w-screen-xl mx-auto ">
      <div>
        <Navigation />
        <div className="grid grid-cols-[1fr_1fr_0.1fr] items-center">
          <h1 className="text-white text-6xl leading-tight">
            <strong>The Perfect Moment</strong> <br />
            Between Past And Future.
          </h1>
          <Image src={NavyWatch} alt="iwatch med navyrem" className="justify-self-center col-start-2" />
          <ColorOptions className="justify-self-center col-start-3 " />
        </div>
        <BuyNowButton />
        <div className="grid grid-cols-[1fr_1fr_0.1fr]">
          <PageIndicator />
          <Options className="justify-self-center" />
          <div></div>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useState } from "react";

import Image from "next/image";
import NavyWatch from "../images/navy.png";
import Watch from "@/components/Watch";
import MintWatch from "../images/mint.png";
import PinkWatch from "../images/pink.png";
import ColorOptions from "@/components/ColorOptions";

const WatchOptions = () => {
  const [isSelectedWatch, setSelectedWatch] = useState("+png");
  return (
    <section className="grid grid-cols-[2fr_0.1fr] gap-4 justify-center">
      <Image src={NavyWatch} alt="iwatch med navyrem" className="justify-self-center col-start-1" />
      <ColorOptions />
      <div className="justify-self-center flex gap-4">
        <Watch bgcolor="bg-[#434558]" img={NavyWatch} alt="Billede af iwatch med navyfarve rem" />
        <Watch bgcolor="bg-[#6ADDCC]" img={MintWatch} alt="Billede af iwatch med mintfarve rem" />
        <Watch bgcolor="bg-[#F9CDC4]" img={PinkWatch} alt="Billede af iwatch med pinkfarve rem" />
      </div>
    </section>
  );
};

export default WatchOptions;

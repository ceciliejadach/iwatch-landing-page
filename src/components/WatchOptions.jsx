"use client";
import { useState } from "react";

import Image from "next/image";
import NavyWatch from "../images/navy.png";
import Watch from "@/components/Watch";
import MintWatch from "../images/mint.png";

import OceanWatch from "../images/ocean.png";
import ColorOptions from "@/components/ColorOptions";

const WatchOptions = () => {
  const [isSelectedWatch, setSelectedWatch] = useState(NavyWatch);

  return (
    <section className="grid grid-cols-[2fr_0.1fr] gap-4 justify-center">
      <Image src={isSelectedWatch} alt="iwatch med navyrem" className="justify-self-center col-start-1" />
      <ColorOptions setSelectedWatch={setSelectedWatch} navyWatch={NavyWatch} mintWatch={MintWatch} oceanWatch={OceanWatch} />
      <div className="justify-self-center flex gap-4">
        <Watch isSelectedWatch={isSelectedWatch} setSelectedWatch={setSelectedWatch} bgcolor="bg-[#434558]" img={NavyWatch} alt="Billede af iwatch med navyfarve rem" />
        <Watch isSelectedWatch={isSelectedWatch} setSelectedWatch={setSelectedWatch} bgcolor="bg-[#6ADDCC]" img={MintWatch} alt="Billede af iwatch med mintfarve rem" />
        <Watch isSelectedWatch={isSelectedWatch} setSelectedWatch={setSelectedWatch} bgcolor="bg-[#C9E3FF]" img={OceanWatch} alt="Billede af iwatch med pinkfarve rem" />
      </div>
    </section>
  );
};

export default WatchOptions;

import Color from "./Color";

const ColorOptions = ({ setSelectedWatch, navyWatch, mintWatch, oceanWatch }) => {
  return (
    <section className="flex flex-col items-center gap-1 self-center">
      <Color
        onClick={() => {
          setSelectedWatch(navyWatch);
        }}
        color="bg-[#434558]"
      />
      <div className=" border-dotted border-l-[2px] border-white  h-[22px]"></div>
      <Color
        onClick={() => {
          setSelectedWatch(mintWatch);
        }}
        color="bg-[#6ADDCC]"
      />
      <div className=" border-dotted border-l-[2px] border-white  h-[22px]"></div>
      <Color
        onClick={() => {
          setSelectedWatch(oceanWatch);
        }}
        color="bg-[#C9E3FF]"
      />
    </section>
  );
};

export default ColorOptions;

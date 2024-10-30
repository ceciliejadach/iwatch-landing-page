import Color from "./Color";

const ColorOptions = () => {
  return (
    <section className="flex flex-col items-center gap-1">
      <Color color="bg-[#434558]" />
      <div className=" border-dotted border-l-[2px] border-white  h-[22px]"></div>
      <Color color="bg-[#6ADDCC]" />
      <div className=" border-dotted border-l-[2px] border-white  h-[22px]"></div>
      <Color color="bg-[#F9CDC4]" />
    </section>
  );
};

export default ColorOptions;

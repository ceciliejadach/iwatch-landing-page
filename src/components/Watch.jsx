import Image from "next/image";

const Watch = ({ bgcolor, img }) => {
  return (
    <button>
      <div className="grid grid-columns-subgrid col-span-full row-span-full">
        <Image src={img} className="max-w-24 row-start-1 row-end-4 col-span-full z-10 justify-self-center" />
        <div className={`w-28 h-[4.5rem] ${bgcolor}  opacity-60 row-start-2 row-end-5 col-start-1 rounded-lg`}></div>
      </div>
    </button>
  );
};

export default Watch;

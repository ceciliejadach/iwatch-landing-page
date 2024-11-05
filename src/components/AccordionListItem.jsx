import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const AccordionListItem = ({ headline, text, isOpen, setIsOpen, item }) => {
  return (
    <div className="py-4 w-[40rem]">
      <button
        className="w-full border-solid border-white border-b-[1px]"
        onClick={() => {
          isOpen === item ? setIsOpen(0) : setIsOpen(item);
        }}
      >
        <div className="flex justify-between">
          <span className="text-3xl text-white">{headline}</span>
          <span>{isOpen === item ? <FiMinus className="self-center w-7 h-7 text-white" /> : <GoPlus className="self-center w-7 h-7 text-white" />}</span>
        </div>
      </button>
      {isOpen === item && (
        <section className="text-gray-600 py-4">
          <p>{text}</p>
        </section>
      )}
    </div>
  );
};

export default AccordionListItem;

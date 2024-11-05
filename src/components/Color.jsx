const ColorOption = ({ color, onClick }) => {
  return <button onClick={onClick} className={`w-6 h-6 ${color} rounded-full border-solid border-white border-2 hover:scale-x-125 hover:scale-y-125 `}></button>;
};

export default ColorOption;

const ColorOption = ({ color, onClick }) => {
  return <button onClick={onClick} className={`w-8 h-8 ${color} rounded-full border-solid border-white border-2`}></button>;
};

export default ColorOption;

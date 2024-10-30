const NavigationCategory = ({ categorytext }) => {
  return (
    <button className="grid">
      <a className=" text-white self-center hover:text-[#B6CCDA] hover:bg-white px-6 py-2 rounded-full " href="/">
        {categorytext}
      </a>
    </button>
  );
};

export default NavigationCategory;

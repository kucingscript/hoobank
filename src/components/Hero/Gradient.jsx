const Gradient = () => {
  return (
    <>
      <div className="absolute z-[0] w-[30%] h-[30%] ss:top-0 top-16 pink__gradient" />
      <div className="absolute z-[1] ss:w-[70%] ss:h-[50%] w-[50%] h-[40%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />
    </>
  );
};

export default Gradient;

const FeatureDiv = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description } = props;
  return (
    <div className="bg-[#413f3f] w-[90%] msm:w-[65%] md:w-[55%] lg:w-[45%] px-[0.5rem] py-[1rem] md:p-[2rem] text-white font-primary flex flex-col items-center justify-center md:gap-[1rem] rounded-[1rem]">
      <h1 className="content-head text-[1.5rem] formsm:text-[2rem] vsm:text-[2.5rem] lg:text-[2.8rem]">{title}</h1>
      <p className="content-para text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] text-center">{description}</p>
    </div>
  );
};

export default FeatureDiv;

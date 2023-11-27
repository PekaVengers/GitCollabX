const FeatureDiv = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description } = props;
  return (
    <div className="bg-[#413f3f] w-[90%] msm:w-[50%] md:w-[45%] px-[0.5rem] py-[1rem] md:p-[2rem] text-white font-primary flex flex-col items-center justify-center md:gap-[1rem] rounded-[1rem]">
      <h1 className="content-head text-[1.5rem]">{title}</h1>
      <p className="content-para text-[1rem] text-center">{description}</p>
    </div>
  );
};

export default FeatureDiv;

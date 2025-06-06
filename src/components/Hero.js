const Hero = ({text}) => {
  return (
    <>
      <div className="container-fluid bg-dark ">
        <div className="row ">
          <div className="col  p-5">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

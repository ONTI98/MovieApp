const Hero = ({ text, backdrop }) => {
  return (
    <>
      <div className="container-fluid bg-dark " id="hero-container">
        <div className="row ">
          <div className="col p-5">
            <h1 >{text}</h1>
            <div
              id="hero-image"
              style={{ backgroundImage: `url(${backdrop})` }}
            ></div>
          </div>
          <div className="backdrop-image"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import Hero from "./Hero";
const About = () => {
  return (
    <>
    <div>
      <Hero text="About this application" />
    </div>
      

      <div className="container">
        <div className="row">
          <div className="col m-5 lead">
            <p>
              Content covering all the information you need about this
              application
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

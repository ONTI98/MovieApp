import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to the app" />
      <div className="container">
        <div className="row">
          <div className="col m-5 lead ">
            <p >Welcome to the application home page</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

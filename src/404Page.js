import { FaSadTear } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col m-5 p-5">
          <header>
            <h1>404</h1>
          </header>
          <FaSadTear size={80} />
          <h1>Page not found</h1>
          <p className="lead p-2">The page you are trying to view does not exist.</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

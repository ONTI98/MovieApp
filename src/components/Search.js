import Hero from "./Hero";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//link for searching movie:https://api.themoviedb.org/3/search/movie?query=Dog&include_adult=false&language=en-US&page=1

const Search = ({ searchText, searchResults }) => {
  const results = searchResults.map((response) => {
    return (
      <>
        <div className="col">
          <div className="card mt-5 p-0 bg-dark">
            <img
              src={`https://image.tmdb.org/t/p/w500/${response.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title ">
                {response.title}
              </h5>

              <Link to="#" className="btn btn-primary ">
                Movie details
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Hero  className="" text={`searching for ${searchText}`} />

      <div className="container ">
        <div className="row justify-content-center row-cols-2 row-cols-lg-5 row-cols-md-3">
          {results}
        </div>
      </div>
    </>
  );
};

export default Search;

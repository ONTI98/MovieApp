import Hero from "./Hero";
import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";

//link for searching movie:https://api.themoviedb.org/3/search/movie?query=Dog&include_adult=false&language=en-US&page=1

const Search = ({ searchText, searchResults }) => {
  const results = searchResults.map((response) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${response.poster_path}`;

    //handling the exeption that there isnno image.
    //will return the results

    if (response.poster_path) {
      return (
        <div className="col">
          <div className="card  h-50 mt-5 p-0 bg-dark">
            <img src={posterUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{response.title}</h5>
              <Link to={`/movie/${response.id}`} className="btn btn-primary ">
                Movie details
              </Link>
            </div>
          </div>
        </div>
      );
      //if there is no poster
    } else {
      return (
        <div className="col text-center">
          <div className="card-body mt-5 pt-5 pb-5  text-dark  bg-light rounded ">
            <div className="icon">{<FaFilm size={75} />}</div>
            <div className="card-body">
              <h5 className="card-title">{response.title}</h5>
              <Link to={`/movie/${response.id}`} className="btn btn-primary  ">
                Movie details
              </Link>
            </div>
          </div>
        </div>
      );
    }
  });
  if (searchResults.length === 0) {
    return (
      <>
        <Hero text={`no search results for ${searchText}`} />
        <div className="container text-center ">
          <div className="row m-5">
            <div className="col lead">
              <p>Try searching for a different title </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Hero className="" text={`searching for ${searchText}`} />
        <div className="container">
          <div className="row justify-content-center row-cols-2 row-cols-lg-5 row-cols-md-3 ">
            {results}
          </div>
        </div>
      </>
    );
  }
};

export default Search;

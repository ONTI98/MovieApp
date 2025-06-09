import { useParams } from "react-router-dom";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

//api=6e98202366e84040d483b4a1464c6649
// https://api.themoviedb.org/3/movie/{id}?api_key=6e98202366e84040d483b4a1464c6649'
const Movie = () => {
  const { id } = useParams(); //this will automatically get the id from the url
  console.log(id);

  const [details, setDetails] = useState([]); //set a default state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6e98202366e84040d483b4a1464c6649`
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setLoading(false);
      });
  }, [id]); //id is the dependency

  //create a function to display details based on the loading state/condition
  function showDetails() {
    const image_url = `https://image.tmdb.org/t/p/w500/${details.poster_path}`;
    const backdropUrl = `https://image.tmdb.org/t/p/original/${details.backdrop_path}`;

    //if loading, return the "loding text in the hero section"
    if (loading) {
      return (
        <>
          <Hero text="Loading ..." />
        </>
      );
    }
    if (details) {
      return (
        <>
          {/* new prop for the hero */}
          <Hero text={`${details.title}`} backdrop={backdropUrl} />
          <div className="container text-center ">
            <div className="row row-cols-sm-1 row-cols-lg-2 row-cols-1 justify-content-center">
              <div className="col p-5  ">
                <img
                  src={image_url}
                  alt=""
                  className="img-fluid rounded shadow-sm "
                />
              </div>
              <div className="col  p-5 lead">
                <p> {details.title}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return showDetails();
};

export default Movie;

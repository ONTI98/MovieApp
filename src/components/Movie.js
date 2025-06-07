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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6e98202366e84040d483b4a1464c6649`
    )
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setDetails(data)
      });
  }, [id]);


  return (
    <>
      <Hero text={`About ${details.title}`} />
      <div className="container text-center">
        <div className="row row-cols-2 justify-content-center">
            <div className="col border ">
                <p> About this movie</p>
            </div>
            <div className="col border">
               <img src="{}" alt=""/> 
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Movie;

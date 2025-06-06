import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./components/Movie";

function App() {
  //states/hooks

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  //making an API request using the fetch api,useEffect
  const key = "6e98202366e84040d483b4a1464c6649";
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>{
      setSearchResults(data.results)
    })
  },[searchText])
 

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/search" exact>
            <Search searchText={searchText} searchResults={searchResults} />
          </Route>
          <Route  path="" exact>
            <Movie/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

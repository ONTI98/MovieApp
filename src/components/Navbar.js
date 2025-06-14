import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  //change the searchtext to the keyup event
  const changeSearchText = (event) => {
    setSearchText(event.target.value);
  };
  //define the on submit function
  const submitSearchText = (event) => {
    event.preventDefault();
    history.push("/search");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Scope
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* on submit,follow this function */}
            <form className="d-flex" onSubmit={submitSearchText}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={changeSearchText}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

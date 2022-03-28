import "./Navbar.css";
import logo from "./img/logo.png"; // Tell webpack this JS file uses this image
import mag from './img/magnificant.png'
import NavBarCover from "../UI/NavBarCover";
import './btn-style.css'
const Navbar = () => {
  const navitem = ["home", "explore", "about", "blog", "community"];
  return (
    <NavBarCover>
      <div className={`nav-back`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar navbar-dark ">
            <a className="navbar-brand" href="/">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="m-3">
                  <img src={logo} alt="Mars_NFT_Logo" />
                </div>
                Mars
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                {navitem.map((expense, index) => (
                  <li
                    key={index}
                    className="nav-item text-capitalize"
                    data-aos="zoom-out-right"
                    data-aos-delay={index * 100}
                  >
                    <a className="nav-link" href="/">
                      {expense} <span className="sr-only">(current)</span>
                    </a>
                  </li>
                ))}
              </ul>
              <form className="form-inline my-2 my-lg-0 ms-auto position-relative">
                <input
                  className="My-input mr-sm-2"
                  type="search"
                  placeholder="Collection, item or user ..."
                  aria-label="Search"
                />
                <button
                  className="my-2 my-sm-0 position-absolute mag-style"
                  type="submit"
                >
                  <img src={mag} alt=""/>
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </NavBarCover>
  );
};
export default Navbar;

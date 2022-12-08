import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import LogoImg from "../../assests/logo/logo.png";

import "./Header.css";
function Header() {
  return (
    <Navbar bg="light" expand="lg" className="bg-white ">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoImg} classNane="w-fluid" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="w-100 nav-input-div">
            <div className="nav-input-inside-div">
              <input
                type="text"
                placeholder="Search for your favorite groups in ATG"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="search-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className="w-100 nav-loginTxt-div">
            <h6>
              Create account.<span> It’s free!</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="nav-arrow-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </h6>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

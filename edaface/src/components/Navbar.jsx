import React from "react";
import "./CSS/Navbar.css";
import logo from "./img/logo.png";
import bannergirl from "./img/bannerheade.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaUserCircle, FaWallet } from "react-icons/fa";

function Navbar() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row" >
          <div className="container my-2">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="col-lg-3 col-md-12 col-12">
                <img src={logo} alt="" className="navbar-brand" />

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
              </div>

              <div className="col-lg-9 col-md-12 col-12">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <a className="nav-link" href="#">
                        Art{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Collitible
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        Gaming
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        Explore
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <div className="form-group has-search">
                          <span className="form-control-feedback">
                            <FontAwesomeIcon
                              className="icon-search"
                              icon={faSearch}
                              beat
                            />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <button className="btn btn-create">Create</button>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <FaUserCircle />
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <FaWallet />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* banner */}


        <div className="card mx-auto py-5 banner-box" id="head-banner">
          <div className="container">
            <div className="row"  >
              <div className="col-lg-6 col-md-12 col-12">
                <div className="text-center">
                  <h1 className="banner-head">
                    <span style={{ color: "#2D699B" }}>Discover</span> <br />
                    Digital art & Collect NFTs
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur eveniet possimus architecto. Optio accusamus
                    animi natus cum corrupti quisquam aut, sapiente quis
                    consequatur totam ratione consectetur, beatae, sequi quia
                    tempora!
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src={bannergirl}
                    className="card-img-top img-fluid girl-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <img
                          src={bannergirl}
                          className="rounded-circle round-girl"
                          alt="..."
                        />
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="banner-row">
                          <h6 className="card-text">Blue Studio NFT</h6>
                          <p className="card-text">by iorem ipsum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
}

export default Navbar;

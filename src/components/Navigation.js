import React, { Component } from "react";
import "../App.css";

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="/">
            <img
              src="https://tarangansolutions.com/im/logo_final.png"
              alt=""
              style={{ width: "150px" }}
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <div className="form-inline my-2 my-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <div className="dropdown">
              <a href="/Services">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  aria-expanded="false"
                  >
                  Services
                 
                </button></a>
                

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a className="dropdown-item" href="/Development">
                      Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="Digital">
                      Digital
                    </a>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Products
                </a>
              </li>
              <li className="nav-ites">
                <a className="nav-link" href="/">
                  Training
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Career
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Digital
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </div>
          </div>
          </div>
        </nav>
      </div>
      
    );
  }
}

export default Navigation;

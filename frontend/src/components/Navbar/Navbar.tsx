import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-extended white">
        <div className="nav-wrapper white">
          <ul>
            <li>
              <a href="#!" className="title grey-text text-darken-1">
                Google Drive
              </a>
            </li>
          </ul>
          <div className="search-wrapper">
            <i className="material-icons">search</i>
            <input type="search" name="Search" placeholder="Search Drive" />
          </div>
          <ul className="right">
            <li>
              <a href="#!">
                <i className="material-icons grey-text text-darken-1">apps</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons grey-text text-darken-1">notifications</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/40532/profile/profile-80.jpg"
                  className="circle"
                ></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-wrapper nav-2">
          <ul>
            <li>
              <a className="waves-effect waves-light btn btn-flat white-text">New</a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a href="#!">
                <i className="material-icons grey-text text-darken-1">view_list</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons grey-text text-darken-1">info</i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons grey-text text-darken-1">settings</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

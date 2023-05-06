import React from 'react';
import './SideNav.css';

const SideNav: React.FC = () => {
  return (
    <ul className="side-nav fixed floating transparent z-depth-0">
      <li className="active">
        <a href="#">
          <i className="material-icons blue-text text-darken-1">dashboard</i>My Drive
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">devices</i>Computers
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">people</i>Shared with me
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">access_time</i>Recent
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">camera</i>Google Photos
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">star</i>Starred
        </a>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">delete</i>Trash
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">cloud</i>Backups
        </a>
      </li>
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <a href="#">
          <i className="material-icons">storage</i>Upgrade storage
        </a>
      </li>
    </ul>
  );
};

export default SideNav;

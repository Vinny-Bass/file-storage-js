import React from 'react';
import './MainContent.css';

const MainContent: React.FC = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <p className="subheader">Folders</p>
        <div className="card-panel folder">
          <i className="material-icons left">folder</i> Folder
        </div>
        <div className="card-panel folder">
          <i className="material-icons left">folder</i> Folder
        </div>
      </div>
    </div>
  );
};

export default MainContent;

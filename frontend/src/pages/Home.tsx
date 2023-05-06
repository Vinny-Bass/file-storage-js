import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SideNav from '../components/SideNav/SideNav';
import MainContent from '../components/MainContent/MainContent';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <MainContent />
    </>
  );
};

export default Home;

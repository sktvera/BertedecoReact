import React from 'react'
import Header from '../../Components/Header/Header';
import HomeServices from '../../Components/HomeServices/HomeServices';
import HomePublicity from '../../Components/HomePublicity/HomePublicity';
import HomeProcedures from '../../Components/HomeProcedures/HomeProcedures';
import "./Assets/styles.css";

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <HomeServices />
      <HomeProcedures />
      <HomePublicity />
    </div>
  )
}

export default Home
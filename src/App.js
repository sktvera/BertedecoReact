import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';

import Footer from './Components/Footer/Footer';

import "./app.css"


//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/BertedecoReact' element={<Home/>}/>
        {/*  
          <Route path='/Employees' element={<Employees/>}/>
          <Route path="/EmployeesSettings/:id/edit" element={<EmployeesSettings />} />
          <Route path="/EmployeesNew/new" element={<EmployeesNew />} /> */}
        </Routes>
        <Footer />
      </div>
      </Provider>
  )
} 

export default App
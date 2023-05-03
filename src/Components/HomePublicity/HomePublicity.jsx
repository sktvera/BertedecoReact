import React from 'react'
import { Link } from 'react-router-dom'
import styleHome from './Assets/Img/styleHome.jpg'
import './Assets/styles.css'


const HomePublicity = () => {
  return (
    <div className='homePublicity'>
        <img src={styleHome} alt="" />
        <div style={{ backgroundColor: 'rgba(146, 146, 146, 0.452)', width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '20px' }} />
        <div className='homePublicity_info'>
            <h1>Asesoria online de la mano de un especialista creativo via Email un asesor responderá de inmediato a la solicitud.</h1>
            <p>¡Descubre aquí como puedes hacerlo!</p>
              <div className='homePublicity-info_more'>
                <Link to='/form'>ver más</Link>
              </div>
              <div>
                <div style={{ height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                </div>
                <div className='downloadApp'><p>Asesoria especializada en diseño de interiores</p></div>
              
              </div>
        </div>
    </div>
  )
}

export default HomePublicity
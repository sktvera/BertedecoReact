import React from 'react'
import { Link } from 'react-router-dom'
import eco from './Assets/Img/eco.jpg'
import meet from './Assets/Img/meet.jpg'
import shipping from './Assets/Img/shipping.jpg'
import products from './Assets/Img/products.jpg'
import questions from './Assets/Img/questions.jpg'
import size from './Assets/Img/size.jpg'
import ecoDesing from './Assets/Img/ecoDesing.jpg'
import './Assets/styles.css'

const HomeProcedures = () => {
  return (
      <div className='homeProcedures'>
        <div className='homeProcedures_row1'>
            <div className='homeProcedures-row1_width30 margin_rightBottom'>
                <Link to='/procedures' className='procedureHome_info'>
                    <h1>elije el complemento adecuedo para ti</h1>
                    <p>En esta sección encontrarás información detallada sobre cada uno de nuestros productos, materiales Eco-Amigables, Asesoria online de la mano de especialistas creativos y diseños especializados hechos a medida para cada uno de tus muebles. </p>
                </Link>
            </div>
            <div className='homeProcedures-row1_width35 margin_rightBottom cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={shipping} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>Retiros y Envios</h3>
                    <p>+2 cedes </p>
                    <div className='homeProcedure_button'>
                        <Link to='/procedure/3'>más detalles</Link>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row1_width35 margin_bottom cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={meet} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>Nosotros</h3>
                    <p>Conoce a Berte-Deco</p>
                    <div className='homeProcedure_button'>
                        <Link to='/procedure/2'>más detalles</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='homeProcedures_row2'>
            <div className='homeProcedures-row2_width30 margin_right cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '103.4%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '103.4%' }}>
                    <img src={eco} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>muebles eco-amigables</h3>
                    <p>+15 Productos</p>
                    <div className='homeProcedure_button'>
                        <Link to='/procedure/1'>más detalles</Link>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row2_width35'>
                <div className='homeProcedures-row2_height60 margin_rightBottom cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={ecoDesing} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>Diseño de interiores</h3>
                        <p>+10 Especialistas</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/7'>más detalles</Link>
                        </div>
                    </div>
                </div>
                <div className='homeProcedures-row2_height40 margin_right cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={products} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>Top Prodcutos</h3>
                        <p>+10 productos estrella</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/4'>más detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row2_width35'>
                <div className='homeProcedures-row2_height60 margin_bottom cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={size} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>Hecho a la medida</h3>
                        <p>+8 Asesores</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/6'>más detalles</Link>
                        </div>
                    </div>
                </div>
                <div className='homeProcedures-row2_height40 cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={questions} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>preguntas frecuentes</h3>
                        <p>+10 Asesores</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/5'>más detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default HomeProcedures
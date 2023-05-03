import React, { useRef }  from 'react'
import logos from './Assets/Img/logos.png'
import desingCoat from './Assets/Img/desingCoat.jpg'
import bigTable from './Assets/Img/bigTable.jpg'
import factory from './Assets/Img/factory.jpg'
import interiorDesign from './Assets/Img/interiorDesign.jpg'
import javaTable from './Assets/Img/javaTable.jpg'
import littleTable from './Assets/Img/littleTable.jpg'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import './Assets/styles.css'
import { Link } from 'react-router-dom'

const activities = [
    {
        id: 1,
        img: bigTable,
        title: 'accesorios',
        destiny: 'xxx'
    },
    {
        id: 2, 
        img: factory,
        title: 'hecho a medida',
        destiny: 'xxx'
    },
    {
        id: 3, 
        img: interiorDesign,
        title: 'diseño ideal',
        destiny: 'xxx'
    },
    {
        id: 4,
        img: javaTable,
        title: 'balance',
        destiny: 'xxx'
    },    
    {
        id: 5,
        img: littleTable,
        title: 'diferencial',
        destiny: 'xxx'
    },
    {
        id: 6, 
        img: bigTable,
        title: 'accesorios',
        destiny: 'xxx'
    },
    {
        id: 7, 
        img: factory,
        title: 'hecho a medida',
        destiny: 'xxx'
    },
    {
        id: 8,
        img: interiorDesign,
        title: 'diseño ideal',
        destiny: 'xxx'
    },
    {
        id: 9, 
        img: javaTable,
        title: 'balance',
        destiny: 'xxx'
    }
   
]

const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 500vw;
`

const ServicesTop = () => {
    const constraintsRef = useRef()


  return (
    <div className='turismTop'>
        <div className='turismTop_principal'>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', top: 0, width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} className='turismTop-principal_background'/>     
            <div className='turismTop-principal_img'>
                <img src={desingCoat} alt="" />
            </div>
            <div className='turismTop-logo_img'><img src={logos} alt="" /></div>
            <div className='turismTop-principal_text'>
                <h1>Los muebles<span>mas</span>unicos</h1>
            </div>
        </div>
        <MotionConstraints className='turismTop_cards' ref={constraintsRef}>
            <MotionBox className='turismTop-cards_slider' drag='x' dragConstraints={constraintsRef}>
            {
                activities.map((activity) => {
                    if (activity.country !== 'Colombia') {
                        return (
                            <div key={activity.id}>
                                <div className='international_activity'>
                                    <div className='international-activity_img'>
                                        <img src={activity.img} alt={activity.title} />
                                    </div>
                                    <div className='international-activity_title'>
                                        <Link to={`/tour/${activity.id}`} key={activity.id}>
                                            <h2>{activity.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
            </MotionBox>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '20px', height: '97%', position: 'absolute', top: 0,  right: -20, borderRadius: '30%', boxShadow: '-15px 0px 8px rgba(0, 0, 0, 0.5)' }} className='div_right'/>
        </MotionConstraints>
    </div>
  )
}

export default ServicesTop
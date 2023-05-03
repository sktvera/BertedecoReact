import React, { useEffect, useRef, useState } from 'react'
import mirror from './Assets/Img/mirror.jpg'
import couch from './Assets/Img/couch.jpg'
import tableDetail from './Assets/Img/table-detail.jpg'
import lamp from './Assets/Img/lamp.jpg'
import desing from './Assets/Img/desing.jpg'
import kenia from './Assets/Img/kenia.jpg'
import shipping from './Assets/Img/shipping.jpg'
import extent from './Assets/Img/extent.jpeg'
import HomeServicesCard from '../HomeServicesCard/HomeServicesCard'

import './Assets/styles.css'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const elements = [
    {id: 1, title: 'Sofas y Sillones', description: 'Tu sala con un estilo difereten', img: couch, link: '/couch'},
    {id: 2, title: 'Mesas', description: 'El mejor complemento para tu hogar, mesas en todos los tamaños', img: tableDetail, link: '/transport'},
    {id: 3, title: 'Lamparas', description: 'La claridad de tu hogar gracias a nuestra iluminacion diferencial', img: lamp, link: '/simCard'},
    {id: 4, title: 'Asesoria', description: 'Diseña tu espacio de la mano de un profesional creativo', img: desing, link: '/nurses'},
    {id: 5, title: 'Espejos', description: 'maneras inovadoras de darle ese toque de aplitud, que le hace falta a tu hogar', img: mirror, link: '/flights'},
    {id: 6, title: 'Abanicos', description: 'el complemento ideal para cualquier espacio', img: kenia, link: '/turism'},
    {id: 7, title: 'Retiros y Envios', description: 'Compra protegida, la mejor logistica a tu servicio', img: shipping, link: '/doctors'},
    {id: 8, title: 'Hecho a la medida', description: 'Muebles magicos hechos a medida', img: extent, link: '/recovery'},
]

const HomeServices = () => {
    const carouselCards = useRef(null)

    const [principalImg, setPrincipalImg] = useState(elements[elements.length - 1].img)
    const [bacgroundImg, setBacgroundImg] = useState(elements[elements.length - 1].img)
    const [principalTitle, setPrincipalTitle] = useState(elements[elements.length - 1].title)
    const [principalDescription, setPrincipalDescription] = useState(elements[elements.length - 1].description)
    const [principalLink, setPrincipalLink] = useState(elements[elements.length - 1].link)

    const nextFunc = () => {
        if(carouselCards.current.children.length > 0){
            const firstCard = carouselCards.current.children[0]
            
            setPrincipalImg(firstCard.children[0].children[0].getAttribute('src'))
            setBacgroundImg(firstCard.children[0].children[0].getAttribute('src'))
            setPrincipalTitle(firstCard.children[0].children[2].getElementsByTagName('h4')[0].innerHTML)
            setPrincipalDescription(firstCard.children[0].children[2].getElementsByTagName('p')[0].innerHTML)
            setPrincipalLink(firstCard.getAttribute('href'))

            carouselCards.current.style.transition = `300ms ease-out all`
            const widthCard = carouselCards.current.children[0].offsetWidth
            carouselCards.current.style.transform = `translateX(-${widthCard}px)`

            const transition = () => {
                carouselCards.current.style.transition = 'none'
                carouselCards.current.style.transform = `translateX(0)`

                /*El primer card lo coloco al final*/
                carouselCards.current.appendChild(firstCard)

                carouselCards.current.removeEventListener('transitionend', transition)
            }
            carouselCards.current.addEventListener('transitionend', transition)
        }
    }
    const backFunc = () => {
        if(carouselCards.current.children.length > 0) {
            const lastCard = carouselCards.current.children[carouselCards.current.children.length - 1]

            carouselCards.current.insertBefore(lastCard, carouselCards.current.firstChild)

            const lastCardLength = carouselCards.current.children.length - 1

            const getLastCard = carouselCards.current.children[lastCardLength].children[0]
            const getLinkLastCard = carouselCards.current.children[lastCardLength]

            setPrincipalImg(getLastCard.children[0].getAttribute('src'))
            setBacgroundImg(getLastCard.children[0].getAttribute('src'))
            setPrincipalTitle(getLastCard.children[2].getElementsByTagName('h4')[0].innerHTML)
            setPrincipalDescription(getLastCard.children[2].getElementsByTagName('p')[0].innerHTML)
            setPrincipalLink(getLinkLastCard.getAttribute('href'))

            carouselCards.current.style.transition = 'none'
            const widthCard = carouselCards.current.children[0].offsetWidth
            carouselCards.current.style.transform = `translateX(-${widthCard}px)`

            setTimeout(() => {
                carouselCards.current.style.transition = `300ms ease-out all`
                carouselCards.current.style.transform = `translateX(0)`
            }, 30)
        }
    }


  return (
    <div className='homeServices'>
        <img className='homeServices_backgroundImg' src={bacgroundImg} alt="Background" />
        <div className='homeServices-backgroundImg_dark'/>
        <div className='homeServices_'>
            <div className='homeServices_left'>
                <div className='homeServices-left_img'>
                    <img src={principalImg} alt="" />
                </div>
                <Link to={principalLink}>VER MÁS</Link>
            </div>
            <div className='homeServices_right'>
                <div className='homeServices-right_text'>
                    <h1>{principalTitle}</h1>
                    <p>{principalDescription}</p>
                    <div className='homeServices-right_arrows'>
                        <div className='homeServices-right_arrow' onClick={backFunc}>
                            <IconButton><ArrowLeft2 size="32" color="white"/></IconButton>
                        </div>
                        <div className='homeServices-right_arrow' onClick={nextFunc}>
                            <IconButton><ArrowRight2 size="32" color="white"/></IconButton>
                        </div>
                    </div>
                </div>
                <div className='homeServices-right_card' ref={carouselCards}>
                    {
                        elements.map((element, index) => {
                            return (
                                <Link key={index} to={element.link}>
                                    <HomeServicesCard img={element.img} title={element.title} description={element.description} linkCard={element.link}/>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeServices
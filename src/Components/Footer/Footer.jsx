import { Facebook, Instagram, Whatsapp, Youtube } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'
import Mastercard from './Assets/Img/Mastercard.png'
import Visa from './Assets/Img/Visa.png'
import Paypal from './Assets/Img/Paypal.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='paymentMethod'>
                <h4>Métodos De Pago</h4>
                <div className='paymentMethod_cards'>
                    <div className='paymentMethod_visa'><img src={Visa} alt="Visa" /></div>
                    <div className='paymentMethod_mastercard'><img src={Mastercard} alt="Master Card" /></div>
                </div>
                <div className='paymentMethod_paypal'><img src={Paypal} alt="Paypal" /></div>
            </div>
          
            <div className='aboutUs'>
                <h4>Sobre Nosotros</h4>
                <div className='aboutUs_p'>
                    <p>Berte-Deco, es más que una tienda virtual de muebles, un espacio diseñado para brindar una variedad de objetos decorativos gracias a esto tu casa sera un verdadero hogar con elegancia y estilo.</p>
                </div>
                <Link to='/aboutus'>Ver Más</Link>
            </div>
            <div className='moreInfo'>
                <div className='moreInfo_social'>
                    <a href='https://www.facebook.com/BerteDeco'>
                        <Facebook size="45" color="white"/>
                    </a>
                    <a href='https://www.instagram.com/berte_deco/'>
                        <Instagram size="45" color="white"/>
                    </a>
                    <a href='https://www.youtube.com/channel/UCU9X8B3PadNSd3VLAYS2xXQ'>
                        <Youtube size="45" color="white"/>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=3188088170&text&type=phone_number&app_absent=0">
                        <Whatsapp size="45" color="white"/>
                    </a>
                </div>
                <div className='moreInfo_text'>
                    <p>Medellin, Antioquia, Colombia</p>
                    <a href='https://api.whatsapp.com/send/?phone=3183731442&text&type=phone_number&app_absent=0' className='moreInfo_whatsapp'>WhatsApp</a>
                    <a href='https://api.whatsapp.com/send/?phone=3183731442&text&type=phone_number&app_absent=0'>+57 318 3731442</a>
                    <p className='moreInfo_mail'>veeraa1270@gmail.com</p>
                </div>
            </div>
        </div>
        <p className='lineFooter' style={{ backgroundColor: '#fff', color: 'black', fontFamily: 'Inter', fontWeight: 600, height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>© BERTEDECO - All rights reserved SKTVERA-DEV</p>
    </div>
  )
}

export default Footer
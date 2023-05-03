import React from 'react'
import { Link } from 'react-router-dom'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './Assets/styles.css'


const ButtonClient =()=>{


    const info = [
        {id: 1,  description: 'Tan facil como dar un click, Asesoría online.'},
       
    ]
    

    return(
        <div className='contained_Client'>
        
       

        
        <div className='turismHeader_content-icon'>
            {
                info.map((content) => {
                    return ( <Link to='/form'>
                        <div key={content.id} className='content-icon'>
                            <div className='iconWpp'>
                     
                           <WhatsAppIcon/>
                           
                            </div>
                            <div className='textWpp'>
                                <h3>{content.description}</h3>
                            </div>
                        </div>
                         </Link>
                    )
                })
            }
        </div>
       
        </div>
    )
}

export default  ButtonClient
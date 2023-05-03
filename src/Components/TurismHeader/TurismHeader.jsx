import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import headerModeTailor from './Assets/Img/headerModeTailor.jpg'
import './Assets/styles.css'
import sillon from './Assets/Img/sillon.jpg'
import silla from './Assets/Img/silla.jpg'
import mesa from './Assets/Img/mesa.jpg'
import armario from './Assets/Img/armario.jpg'

const info = [
    {id: 1, img: sillon, description: 'Sillones hechos a la medida'},
    {id: 2, img: silla, description: 'Sillas hechas a la medida'},
    {id: 3, img: mesa, description: 'Mesas y escritorios hechos a medida'},
    {id: 4, img: armario, description: 'Armarios hechos a medida'}
]

const TurismHeader = () => {

    const [filter, setFilter] = useState([])
    console.log('filter', filter)

    const URL = process.env.REACT_APP_URL_API_DATA

    const handleFilter = async (e) => {
        const searcher = e.target.value
        await axios.get(URL).then((response) => {
            const resp = response.data
            const filter = resp.filter((filt) => {
                return filt.destiny.toLowerCase().includes(searcher.toLocaleLowerCase())
            })
            searcher === '' ? setFilter([]) : setFilter(filter)
        }).catch((err) => console.log(err))
    }

  return (
    <div className='turismHeader'>
        <img src={headerModeTailor} alt="" />
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', top: 0, width: '100%', height: '100%', position: 'absolute' }}/>
        <div className='turismHeader_info'>
            <div className='turismHeader-info_input'>
                <div className='turismHeader_searchFormControl' variant="filled" color="error">
                    
                </div>
                <div className='div_results'>
                    {filter.length !== 0 &&
                        <div className='results'>
                            {
                                filter.map((dest, index) => {
                                    return (
                                        <div key={index} className='dest'>
                                            <div className='dest_img'>
                                                <img src={dest.img} alt={dest.destiny} />
                                            </div>
                                            <p>{dest.destiny}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
            <div className='turismHeader-info_text'>
                <h1>Tu hogar hecho a la medida perfecta!</h1>
            </div>
        </div>
        <div className='turismHeader_content'>
            {
                info.map((content) => {
                    return (
                        <div key={content.id} className='content'>
                            <div className='content_img'>
                                <img src={content.img} alt="" />
                            </div>
                            <div className='content_text'>
                                <h3>{content.description}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TurismHeader
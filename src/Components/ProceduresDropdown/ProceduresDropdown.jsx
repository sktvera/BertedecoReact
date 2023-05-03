import React from 'react'
import abanico_kenia_one from './Assets/Img/abanico-kenia-0.jpg'
import abanico_kenia_two from './Assets/Img/abanico-kenia-1.jpg'
import abanico_kenia_three from './Assets/Img/abanico-kenia-2.jpg'

import bandeja_one from './Assets/Img/bandeja-naos-0.jpg'
import bandeja_two from './Assets/Img/bandeja-naos-1.jpg'
import bandeja_three from './Assets/Img/bandeja-naos-2.jpg'

import camino_one from './Assets/Img/camino-victoria-0.jpeg'
import camino_two from './Assets/Img/camino-victoria-1.jpeg'
import camino_three from './Assets/Img/camino-victoria-2.jpeg'

import cuchara_one from './Assets/Img/cuchara-0.jpg'
import cuchara_two from './Assets/Img/cuchara-1.jpg'
import cuchara_three from './Assets/Img/cuchara-2.jpg'

import escalera_one from './Assets/Img/escalera-0.jpg'
import escalera_two from './Assets/Img/escalera-1.jpg'
import escalera_three from './Assets/Img/escalera-2.jpg'

import espejo_one from './Assets/Img/espejo-1-0.jpg'
import espejo_two from './Assets/Img/espejo-1-1.jpg'
import espejo_three from './Assets/Img/espejo-1-2.jpg'
import espejo_four from './Assets/Img/espejo-2-0.jpg'
import espejo_five from './Assets/Img/espejo-2-1.jpg'
import espejo_six from './Assets/Img/espejo-2-2.jpg'

import espejo_samara_one from './Assets/Img/espejo-samara-0.jpg'
import espejo_samara_two from './Assets/Img/espejo-samara-1.jpg'
import espejo_samara_three from './Assets/Img/espejo-samara-2.jpg'

import estante_one from './Assets/Img/estante-0.jpg'
import estante_two from './Assets/Img/estante-1.jpg'
import estante_three from './Assets/Img/estante-2.jpg'

import needImg from './Assets/Img/image-needed.png'
import lampara_one from './Assets/Img/lampara-0.jpg'
import lampara_two from './Assets/Img/lampara-1.jpg'
import lampara_three from './Assets/Img/lampara-2.jpg'

import mesa_detail_one from './Assets/Img/mesa-detalle-1.jpg'
import mesa_detail_two from './Assets/Img/mesa-detalle-2.jpg'
import mesa_detail_three from './Assets/Img/mesa-detalle-3.jpg'
import mesa_detail_four from './Assets/Img/mesa-detalle-3.jpg'

import mesa_big_one from './Assets/Img/mesa-grande-1-0.jpg'
import mesa_big_two from './Assets/Img/mesa-grande-1-1.jpg'
import mesa_big_three from './Assets/Img/mesa-grande-1-2.jpg'
import mesa_big_four from './Assets/Img/mesa-grande-2-0.jpg'
import mesa_big_five from './Assets/Img/mesa-grande-2-1.jpg'
import mesa_big_six from './Assets/Img/mesa-grande-2-2.jpg'

import mesa_java_one from './Assets/Img/mesa-java-0.jpg'
import mesa_java_two from './Assets/Img/mesa-java-1.jpg'
import mesa_java_three from './Assets/Img/mesa-java-2.jpg'

import little_mesa_one from './Assets/Img/mesita-1-0.jpg'
import little_mesa_two from './Assets/Img/mesita-1-1.jpg'
import little_mesa_three from './Assets/Img/mesita-1-2.jpg'

import puff_one from './Assets/Img/puff-tai-0.jpeg'
import puff_two from './Assets/Img/puff-tai-1.jpg'
import puff_three from './Assets/Img/puff-tai-2.jpg'

import silla_one from './Assets/Img/silla-wishbone-0.jpg'
import silla_two from './Assets/Img/silla-wishbone-1.jpg'
import silla_three from './Assets/Img/silla-wishbone-2.jpg'

import './Assets/styles.css'
import ProcedureCategoryDropdown from '../ProcedureCategoryDropdown/ProcedureCategoryDropdown'

const proceduresNav = [
    {
        id: 1,
        img: silla_one,
        name: 'Sofas y Sillones',
        procedureDrop: [
            {id: 1, img: silla_one, title: 'silla'},
            {id: 2, img: silla_two, title: 'silla'},
            {id: 3, img: silla_three, title: 'silla'},
        ]
    },
    {
        id: 2,
        img: puff_one,
        name: 'Puff',
        procedureDrop: [
            {id: 1, img: puff_one, title: 'puff'},
            {id: 2, img: puff_two, title: 'puff'},
            {id: 3, img: puff_three, title: 'puff'},  
        ]
    },
    {
        id: 3,
        img: little_mesa_one,
        name: 'Mesas',
        procedureDrop: [
            {id: 1, img: little_mesa_one, title: 'mesa pequeña'},
            {id: 2, img: little_mesa_two, title: 'mesa pequeña'},
            {id: 3, img: little_mesa_three, title: 'mesa pequeña'},
            {id: 4, img: mesa_java_one, title: 'mesa java'},
            {id: 5, img: mesa_java_two, title: 'mesa java'},
            {id: 6, img: mesa_java_three, title: 'mesa java'},
            {id: 7, img: mesa_big_one, title: 'mesa grande'},
            {id: 8, img: mesa_big_two, title: 'mesa grande'},
            {id: 9, img: mesa_big_three, title: 'mesa grande'},
            {id: 10, img: mesa_big_four, title: 'mesa grande'},
            {id: 11, img: mesa_big_five, title: 'mesa grande'},
            {id: 12, img: mesa_big_six, title: 'mesa grande'},
            {id: 13, img: mesa_detail_one, title: 'mesa detalle'},
            {id: 14, img: mesa_detail_two, title: 'mesa detalle'},
            {id: 15, img: mesa_detail_three, title: 'mesa detalle'},
            {id: 16, img: mesa_detail_four, title: 'mesa detalle'}
            
        ]
    },
    {
        id: 4,
        img: lampara_one,
        name: 'Lamparas',
        procedureDrop: [
            {id: 1, img: lampara_one, title: 'lampara'},
            {id: 2, img: lampara_two, title: 'lampara'},
            {id: 3, img: lampara_three, title: 'lampara'}
        ]
    },
    {
        id: 5,
        img: estante_one,
        name: 'Estanteria',
        procedureDrop: [
            {id: 1, img: estante_one, title: 'estanteria'},
            {id: 2, img: estante_two, title: 'estanteria'},
            {id: 3, img: estante_three, title: 'estanteria'}
            
        ]
    },
    {
        id: 6,
        img: espejo_samara_one,
        name: 'Espejos',
        procedureDrop: [
            {id: 1, img: espejo_samara_one, title: 'Espejo samara'},
            {id: 2, img: espejo_samara_two, title: 'Espejo samara'},
            {id: 3, img: espejo_samara_three, title: 'Espejo samara'},
            {id: 4, img: espejo_one, title: 'Espejo'},
            {id: 5, img: espejo_two, title: 'Espejo'},
            {id: 5, img: espejo_three, title: 'Espejo'},
            {id: 5, img: espejo_four, title: 'Espejo'},
            {id: 5, img: espejo_five, title: 'Espejo'},
            {id: 5, img: espejo_six, title: 'Espejo'}
        ]
    },
    {
        id: 7,
        img: escalera_one,
        name: 'Escaleras',
        procedureDrop: [
            {id: 1, img: escalera_one, title: 'Escaleras'},
            {id: 2, img: escalera_two, title: 'Escaleras'},
            {id: 3, img: escalera_three, title: 'Escaleras'}
        ]
    },
    {
        id: 8,
        img: cuchara_one,
        name: 'Cucharas',
        procedureDrop: [
            {id: 1, img: cuchara_one, title: 'cucharas'},
            {id: 2, img: cuchara_two, title: 'cucharas'},
            {id: 3, img: cuchara_three, title: 'cucharas'}
        ]
    },
    {
        id: 9,
        img: camino_one,
        name: 'Camino',
        procedureDrop: [
            {id: 1, img: camino_one, title: 'camino'},
            {id: 2, img: camino_two, title: 'camino'},
            {id: 3, img: camino_three, title: 'camino'}
        ]
    },
    {
        id: 10,
        img: abanico_kenia_one,
        name: 'Abanico Kenia',
        procedureDrop: [
            {id: 1, img: abanico_kenia_one, title: 'abanico kenia'},
            {id: 2, img: abanico_kenia_two, title: 'abanico kenia'},
            {id: 3, img: abanico_kenia_three, title: 'abanico kenia'}
        ]
    },
    {
        id: 11,
        img: bandeja_one,
        name: 'Bandeja',
        procedureDrop: [
            {id: 1, img: bandeja_one, title: 'bandeja'},
            {id: 2, img: bandeja_two, title: 'bandeja'},
            {id: 3, img: bandeja_three, title: 'bandeja'}
        ]
    }
]


const ProceduresDropdown = ({ dropdMenu, lickCategoryClicked, ClickedCategory }) => {
  return (
    <div className={dropdMenu ? 'cardProceduresDropdown_Burguer' : 'cardProceduresDropdown'}>
        <div className='cardProceduresDropdown_'>
            {proceduresNav.map((procedureCategory) => {
                return (
                    <ProcedureCategoryDropdown 
                    categoryProceduresImg={procedureCategory.img} 
                    categoryProceduresTitle={procedureCategory.name} 
                    catego={procedureCategory.procedureDrop} 
                    dropdMenu={dropdMenu} 
                    idCategory={procedureCategory.id} 
                    lickCategoryClicked={lickCategoryClicked} 
                    linkCategory={`procedure/${procedureCategory.id}`} 
                    ClickedCategory={ClickedCategory}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default ProceduresDropdown
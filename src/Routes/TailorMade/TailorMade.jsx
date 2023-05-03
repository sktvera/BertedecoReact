import React from 'react'
import TurismHeader from '../../Components/TurismHeader/TurismHeader'
import ServicesTop from '../../Components/ServicesTop/ServicesTop'
import ButtonClient from '../../Components/ButtonClient/ButtonClient'

const Turism = () => {
  return (
    <div>
        <TurismHeader />
        <div style={{ height: '60px' }} />
        <ButtonClient/>
        <ServicesTop />
    </div>
  )
}

export default Turism
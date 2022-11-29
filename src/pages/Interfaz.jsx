import React from 'react'
import { Link } from 'react-router-dom'
import './Interfaz.css'

const Interfaz = () => {
    return (
        <>
            <div className='container'>
                <div className='title'>
                    <h2>WELCOME TO CHINICUIL</h2>
                </div><br />
                <div>
                    <img src='images/molcajete.jpg' className='xolo' />
                    <div className='btn'>
                        <Link className='navlink color-text' to="/menu2"><h4 className='color-text'>Menú en Español</h4></Link><br />
                    </div>
                    <div className='btn2'>
                        <Link className='navlink color-text' to="/menu3"><h4 className='color-text'>English Menu</h4></Link>
                    </div>
                    <div className='title'>
                        <h2>THE BEST MEXICAN FOOD IN HOLBOX</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interfaz

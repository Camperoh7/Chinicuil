import React from 'react'
import { Link } from 'react-router-dom'
import './Interfaz.css'

const Interfaz = () => {
    return (
        <>
            <div className='card container'>
                <h2 className='logo'>CHINICUIL</h2>
                <img src='images/ch1.jpeg' className='xolo' />
                    <Link className='navlink' to="/menu5">
                        <button className='btn'>Menú Español</button>
                    </Link>
                    <Link className='navlink' to="/menu4">
                        <button className="btn2">English Menu</button>
                    </Link>   
                <img src='images/ch3.jpeg' className='xolo' />
            </div>
        </>
    )
}

export default Interfaz

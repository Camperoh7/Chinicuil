import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Interfaz from '../pages/Interfaz'
import Menu2 from '../pages/Menu2'
import Menu3 from '../pages/Menu3'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Interfaz />} />
            <Route path="/menu2" element={<Menu2 />} />
            <Route path="/menu3" element={<Menu3 />} />
        </Routes>
    )
}

export default RoutesIndex
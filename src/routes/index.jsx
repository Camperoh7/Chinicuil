import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Interfaz from '../pages/Interfaz'
import Menu5 from '../pages/Menu5'
import Menu4 from '../pages/Menu4'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Interfaz />} />
            <Route path="/menu5" element={<Menu5 />} />
            <Route path="/menu4" element={<Menu4 />} />
        </Routes>
    )
}

export default RoutesIndex
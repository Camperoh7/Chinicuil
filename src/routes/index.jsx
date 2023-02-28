import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Interfaz from '../pages/Interfaz'
import Menu4 from '../pages/Menu4'
import Menu3 from '../pages/Menu3'

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Interfaz />} />
            <Route path="/menu4" element={<Menu4 />} />
            <Route path="/menu3" element={<Menu3 />} />
        </Routes>
    )
}

export default RoutesIndex
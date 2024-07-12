import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Homepage'

const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  )
}

export default MainRouter
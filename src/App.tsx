import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

import { Main } from './pages/Main'
import { NotFound } from './pages/NotFound'
import { Footer } from './components/layout/Footer'

const App = () => {
    return (
        <HelmetProvider>
            <div className="flex items-center justify-center h-screen w-screen animated-gradient">
                <div
                    className="h-max md:h-auto rounded-xl absolute z-10 mx-auto p-10
                        bg-gray-100 drop-shadow-2xl text-center fly-in">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <div className="flex mt-5 justify-center">
                            <BackButton />
                        </div>
                    </Router>
                    <Footer>NR</Footer>
                </div>
            </div>
        </HelmetProvider>
    )
}

const BackButton = () => {
    const location = useLocation()
    return location.pathname !== '/' ? (
        <Link to="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 back-button"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
            </svg>
        </Link>
    ) : null
}

export default App

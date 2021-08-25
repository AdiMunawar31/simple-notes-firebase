import React, { useEffect } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Layout({ children, title }) {
    useEffect(() => {
        document.title = `${title}`
    })
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

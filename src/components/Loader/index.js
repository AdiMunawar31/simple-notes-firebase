import React from 'react'
import './loader.css'

export default function Loader() {
    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
            <div className="py-2 px-5 rounded-lg flex items-center flex-col">
                <div className="loader-dots block relative w-24 h-5 mt-2">
                    <div className="absolute top-0 mt-1 w-5 h-5 rounded-full bg-blue-500" />
                    <div className="absolute top-0 mt-1 w-5 h-5 rounded-full bg-blue-500" />
                    <div className="absolute top-0 mt-1 w-5 h-5 rounded-full bg-blue-500" />
                    <div className="absolute top-0 mt-1 w-5 h-5 rounded-full bg-blue-500" />
                </div>
                <div className="text-yellow-200 text-md font-light mt-2 text-center">
                    Please wait...
                </div>
            </div>
        </div>

    )
}

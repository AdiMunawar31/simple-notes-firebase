import React from 'react'

export default function Button({ title, loading }) {
    if (loading) {
        return <button className="bg-gradient-to-br from-gray-600 via-gray-500 to-gray-800 delay-100 transform hover:scale-95 text-gray-200 font-bold p-2 rounded cursor-not-allowed w-80" disabled><span><i className="fas fa-circle text-red-500 animate-bounce delay-1000 -ml-3"></i> Loding...</span></button>
    }
    return <button className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-800 transform hover:scale-95 delay-100 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>{title}</span></button>

}

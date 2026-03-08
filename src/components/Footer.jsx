import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-blue-300/90 py-1 shadow-2xl w-full fixed bottom-0 left-0 z-50">
            <div className="text-center text-sm">
                &copy; 2026 All right reserved Shopingo. <br className='md:hidden' /> Designed by <a href='https://newthinkcybersolutions.vercel.app' target='_blank' className="text-red-700">NewThink Cyber Solutions</a>.
            </div>
        </footer>
    )
}

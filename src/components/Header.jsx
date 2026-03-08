import React from 'react'

export default function Header({ searchItem, searchInput, setSearchInput }) {
    return (
        <header className="bg-blue-300/90 py-3 shadow-2xl w-full sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                {/* Logo */}
                <h1 className="text-red-700 text-2xl sm:text-3xl md:text-4xl font-semibold font-serif">
                    ShopinGo
                </h1>

                {/* Search */}
                <form onSubmit={searchItem} className="w-full sm:w-auto">

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full sm:w-72 md:w-96 bg-white text-black text-base sm:text-lg rounded border-2 px-3 py-1 focus:outline-none"
                    />

                </form>

            </div>

        </header>
    )
}
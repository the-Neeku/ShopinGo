import React from 'react'

export default function ProductCard({ details, selectedProduct }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:m-0.5 hover:bg-gray-200" onClick={() => selectedProduct(details.id, details.category)}>
            <img className="w-full h-60" src={details.thumbnail} />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">{details.title}</h2>
                <div className="flex gap-4 mt-2">
                    <span className="text-xl font-bold text-green-600">
                        ${details.price}
                    </span>

                    <span className="text-red-500">
                        {details.discountPercentage}% OFF
                    </span>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function ProductCategory({ productCategory, productFilter, getProduct, setShowCategory }) {
    let category = productCategory.map((v, i) => (
        <li className='text-[20px] p-2 bg-[#ccc] mb-3 cursor-pointer rounded-[10px] shadow hover:m-0.5 hover:mb-3' key={i} onClick={() => productFilter(v.slug)}>{v.name}</li>
    ));
    return (
        <div className='mx-3'>
            <h2 className="text-center text-[25px] font-semibold font-serif mb-6">Product Category <span onClick={() => setShowCategory(false)} className="float-end text-red-800 font-bold text-4xl cursor-pointer">&times;</span></h2>
            <ul>
                <li className='text-[20px] p-2 bg-[#ccc] mb-3 cursor-pointer rounded-[10px] shadow hover:m-0.5 hover:mb-3' onClick={() => getProduct()}>All Categories</li>
                {category}
            </ul>
        </div>
    )
}

import React, { useState } from 'react'
import Heading from '../Heading/Heading'

const Products = () => {

    const Categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All');

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" heading="Products" />

                {/* tabs */}
                <div className='flex gap-3 justify-center mt-10'>
                    {Categories.map(Category=> {
                        return (
                            <button key={Category} 
                            className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                            ${activeTab === Category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                            onClick={()=>setActiveTab(Category)}>
                                {Category}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products

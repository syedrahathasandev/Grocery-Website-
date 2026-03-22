import React from 'react'
import Heading from '../Heading/Heading'

const Products = () => {

        const Categories = ['All','Fruits','Vegetables','Dairy','SeaFood']

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading="Products"/>

        {/* tabs */}
        <div className='flex gap-3 justify-center mt-10'>
            {Categories.map(Category=>{
                return(
                    <button key={Category} className='bg-zinc-100 px-5 py-2 text-lg'>
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

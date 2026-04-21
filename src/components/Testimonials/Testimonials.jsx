import React from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Testimonials = () => {
  return (
    <section>
      <div className='max-w-[1400px] px-10 mx-auto py-20'>
        <Heading highlight="Customers" heading="Saying" />

        <div className='flex justify-end gap-x-3  py-5'>

         <button className='text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-ornage-400 hover:to-orange-500 hover:text-white cursor-pointer'>
             <IoIosArrowBack />
          </button>

          <button className='text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-ornage-400 hover:to-orange-500 hover:text-white cursor-pointer'>
             <IoIosArrowForward />
          </button>

        </div>

        <div className='bg-zinc-100 rounded-xl p-8'>
            <div>
              <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4'>
                
              </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials

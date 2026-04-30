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

          <button className='text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowForward />
          </button>

        </div>

        {/* <div className='bg-zinc-100 rounded-xl p-8'>
          <div className='flex items-center gap-5'>

            <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 flex items-center justify-center'>
            </div>

            <h5 className='text-xl font-bold'>Name</h5>
            <p className='text-zinc-600'>Profession</p>
            <span>Stars</span>
          </div>

           <div className='mt-10'>
          <p className='text-zinc-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor et voluptatem ipsum quas sit corporis neque reiciendis quasi magnam iure.</p>
        </div>
        </div> */}

      </div>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: 'Emily Johnson';
    Profession: Food Blogger',
    rating : 3,
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
  },
  {
    id: 2,
    name: 'David Smith';
    Profession: 'Chef',
    rating: 3,
    para: 'As a chef, qulity ingredients are everything. FreshBasket consistenly delivers the best vegetables, herbs, and pantry staples, Highly recommended!',
  },
  {
    id: 3,
    name: 'Alya Zahra';
    Profession: 'Model',
    rating: 3,
    para: 'Shopping online with FreshBasket has saved me so much time. Itrust them for my familys weekly groceries-always fresh, affordable,and reliable',
  },
  {
    id: 4,
    name: 'Carlos Mendes';
    Profession: 'Fitness Cocach',
    rating: 3,
    para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
  },
  {
    id: 5,
    name: 'Natch Phongchal';
    Profession: 'Nutritionist',
    rating: 3,
    para: 'FreshBasket offers high-qulity groceries at reasonable prices. Their Organic section is impressive, and their customer service is top-notch.',
  },

]

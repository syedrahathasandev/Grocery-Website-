import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {



  return (
    <section>
      <div className='max-w-[1400px] px-10 mx-auto py-20'>
        <Heading highlight="Customers" heading="Saying" />

        <div className='flex justify-end gap-x-3  py-5'>

          <button className='custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-ornage-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowBack />
          </button>

          <button className='custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
            <IoIosArrowForward />
          </button>

        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            review.map(item => {
              return (
                <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
                  <div className='flex items-center gap-5'>

                    <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 flex items-center justify-center'>
                    </div>

                    <h5 className='text-xl font-bold'>{item.name}</h5>
                    <p className='text-zinc-600'>{item.Profession}</p>
                    <span>{item.rating}</span>
                  </div>

                  <div className='mt-10'>
                    <p className='text-zinc-600'>{item.para}</p>
                  </div>
                </SwiperSlide>

              )
            })
          }
        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: 'Emily Johnson',
    Profession: 'Food Blogger',
    rating: 3,
    para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast.',
    image: Customer1,
  },
  {
    id: 2,
    name: 'David Smith',
    Profession: 'Chef',
    rating: 3,
    para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best products.',
    image: Customer2,
  },
  {
    id: 3,
    name: 'Alya Zahra',
    Profession: 'Model',
    rating: 3,
    para: 'Shopping online has saved me so much time. Always fresh and reliable.',
    image: Customer3,
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    Profession: 'Fitness Coach',
    rating: 3,
    para: 'I appreciate the selection of healthy foods and clean-label products.',
    image: Customer4,
  },
  {
    id: 5,
    name: 'Natch Phongchal',
    Profession: 'Nutritionist',
    rating: 3,
    para: 'FreshBasket offers high-quality groceries at reasonable prices.',
    image: Customer5,
  },
]

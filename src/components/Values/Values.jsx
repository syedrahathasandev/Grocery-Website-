import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

  const LeftValues = Value.map(item=>{
    return(
      <div>
        <div>
          <span>{item.icon}</span>
        </div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.para}</p>
        </div>
      </div>
    )
  } )

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading="Value" />

        <div className='flex items-center justify-between gap-10'>

          {/* Left side (Values) */}
          <div className='grid grid-cols-2 gap-8'>
            {Value.map((item) => (
              <div key={item.id} className='p-5 shadow-lg rounded-xl'>
                <div className='text-orange-500 text-2xl mb-3'>
                  {item.icon}
                </div>
                <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
                <p className='text-sm text-zinc-600'>{item.para}</p>
              </div>
            ))}
          </div>

          {/* Right side (Image) */}
          <div>
            <img src={Basket} alt="basket" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Values


const Value = [
  {
    id: 1,
    title: 'Trust',
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaHeart />
  },
  {
    id: 2,
    title: 'Always Fresh', // fixed spelling
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaLeaf />
  },
  {
    id: 3,
    title: 'Food Safety',
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaShieldAlt />
  },
  {
    id: 4,
    title: '100% Organic',
    para: 'It is a long established fact that a reader will be distracted by the readable.',
    icon: <FaSeedling />
  },
]
import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-Veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
const Category = () => {
  return (
   <section>
    <div className='py-20'>
        <Heading  highlight="Shop" heading="by Category"/>
    </div>
   </section>
  )
}

export default Category 


const category = [
    {
        id: 1,
      title: 'Fruits & Veggies',
      description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
      image: FruitsCat

    },
    {
        id: 2,
      title: 'Fruits & Veggies',
      description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
      image: FruitsCat

    },
    {
        id: 3,
      title: 'Meat & SeaFood',
      description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
      image: SeaFoodCat

    },
]

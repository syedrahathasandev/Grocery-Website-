import React from 'react'
import { FaHeart, FaPlug } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = () => {
    return (
        <div>
            {/* card icons  */}
            <div>
                <span>
                    <FaHeart />
                </span>
                <button>
                    <FaPlug />
                </button>
            </div>

            {/* card image  */}
            <div>
                <img src="" />
            </div>

            {/* card content  */}
            <div>
                <h3>Title</h3>
                <p>3.00</p>
                <Button content="Shop Now" />
            </div>

        </div>
    )
}

export default Cards

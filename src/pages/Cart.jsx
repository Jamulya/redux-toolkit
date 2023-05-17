import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove=(id) => {
        
    }

  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
            {products.map((product) => (
            <div key={product.id} className='cartCard'>
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button className='btn'>remove</button>

            </div>
            ))}
          
            <div>
                <h5>total:</h5>
            </div>

        </div>
    </div>
  )
}

export default Cart
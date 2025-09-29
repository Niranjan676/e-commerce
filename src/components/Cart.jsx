import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../context/Context'

function Cart() {
    const {cartProduct, handleRemoveFromCart, quantityUpdate} = useContext(AppContext)

    const [subtotal, setSubtotal] = useState(0)
    const [grossTotal, setGrossTotal] = useState(0)
    const [shipping, setShipping] = useState(0)

    useEffect(()=>{
        let cartTotal = 0
        cartProduct.forEach((item)=> {
            cartTotal += item.quantity * item.price
        })
        setSubtotal(cartTotal.toFixed(2))

        if(cartTotal > 0){
            setShipping(50)
            setGrossTotal(cartTotal += shipping)
        }else{
            setGrossTotal(0)
            setShipping(0)
        }
        setGrossTotal(cartTotal.toFixed(2))

    }, [cartProduct])

  return (
    <div className='grid grid-cols-3 px-5 py-4 gap-4'>
        <div className='col-span-2'>
            <div className='border-r-2 border-zinc-400'>
                {cartProduct.map((item)=>(
                <div className='bg-white px-10 py-5 rounded-md mb-5 flex gap-5 mr-5' key={item.id}>
                    <img src={item.image} className='h-40 w-40'></img>
                    <div className='border-l-4'>
                        <h1 className='ml-5'>{item.title}</h1>
                        <h3 className='ml-5'>{item.category}</h3>
                        <h3 className='ml-5'>Price: <span className='text-red-500'>{item.price}$</span></h3>
                        <div className='ml-5 mt-2'>
                            <button className='bg-gray-400 w-6 font-bold text-lg mr-1 rounded-full' onClick={()=>quantityUpdate(item.id, "decrement")}>-</button>
                            <input type='text' value={item.quantity} className='border w-10 text-center'/>
                            <button className='bg-gray-400 w-6 font-bold text-lg ml-1 rounded-full' onClick={()=>quantityUpdate(item.id, "increment")}>+</button>
                        </div>
                        <button className='ml-5 mt-5 bg-red-500 px-4 py-2 text-white text-xl rounded-md' onClick={()=>handleRemoveFromCart(item.id)}>Remove from cart</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className='col-span-1'>
            <h1 className='text-xl font-bold'>Total Products: {cartProduct.length}</h1>
            <h1 className='text-xl font-bold'>Total Items: {cartProduct.length}</h1>
            <h1 className='text-xl font-bold'>Shipping Charges: {shipping}</h1>
            <h1 className='text-xl font-bold'>Sub Total: {subtotal}</h1>
            <hr className='bg-slate-600 h-[2px] border-0 mt-2'></hr>
            <h1 className='text-xl font-bold'>Gross Total: {grossTotal}</h1>
            <button className='bg-indigo-500 px-4 py-2 text-white font-bold text-xl rounded-md mt-5'>Proceed to Pay</button>
        </div>
    </div>
  )
}

export default Cart
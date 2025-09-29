import React, { useEffect, useState, useContext } from 'react'
import Navbar from './Navbar'
import { AppContext } from '../context/Context'

function Products() {
  const { handleAddToCart, searchTerm } = useContext(AppContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("Error", error))
  }, [])

  // ✅ Filter products by category
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm)
  )

  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-4 p-5 gap-4'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className='bg-white border border-indigo-600 px-4 py-2 rounded-md flex flex-col items-center'
              key={product.id}
            >
              <img src={product.image} className='h-40 w-40' alt={product.title} />
              <h1 className='font-bold'>{product.title}</h1>
              <h3>{product.category}</h3>
              <h3 className='text-lg font-semibold'>
                Price: <span className='text-red-500'>{product.price}$</span>
              </h3>
              <button
                className='bg-indigo-500 px-4 py-2 text-xl font-semibold rounded-md text-white my-4'
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <p className='text-center col-span-4 text-lg text-gray-600'>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  )
}

export default Products

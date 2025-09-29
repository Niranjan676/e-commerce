import { createContext, useState } from "react";

export const AppContext = createContext({
    cartProduct : [],
    handleAddToCart : () => {},
    handleRemoveFromCart : () => {},
    quantityUpdate: () => {}, 
    searchTerm: "",
    setSearchTerm: ()=>{}
})

function AppProvider({children}){

    const [cartProduct, setCartProduct] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const handleAddToCart = (product) => {
        const alreadyInCart = cartProduct.some((item)=> item.id === product.id)
        if(alreadyInCart){
            alert("Products are already added to cart")
            return;
        }else{
            const productCopy = [...cartProduct]
            //console.log(productCopy)
            productCopy.push({...product, quantity: 1})
            setCartProduct(productCopy)
        }
    }

    const handleRemoveFromCart = (id) =>{
        const removeProduct = cartProduct.filter((item) => item.id !== id)
        setCartProduct(removeProduct)
    }

    const quantityUpdate = (id, type) => {
        const cartCopy = [...cartProduct]
        const itemCopy = cartCopy.findIndex((item) => item.id === id)
        if(itemCopy >= 0){
            let item = cartCopy[itemCopy]
            //console.log(item)
            if(type === 'increment'){
                item.quantity += 1
            }else if(type === 'decrement'){
                if(item.quantity > 1){
                    item.quantity -= 1
                }else{
                    handleRemoveFromCart(id)
                    return
                }
            }
            setCartProduct(cartCopy);
        }
    }


    return <AppContext.Provider value={{ cartProduct, handleAddToCart, handleRemoveFromCart, quantityUpdate, searchTerm, setSearchTerm }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider;
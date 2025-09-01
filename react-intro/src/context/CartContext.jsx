import { createContext, useContext, useState } from "react";

export const CartContext = createContext();


// Provider Component - It is used to register the context and provide the value to the context
export default function CartProvider({children}) {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const isProductAlreadyInCart = cart.find((item) => item.id === product.id);
		if(isProductAlreadyInCart){
			alert("Product already in cart");
			return;
		}
		setCart([...cart, product]);
	}

	const value = {
		cart,
		addToCart,
	}

	// Provider Component - It is used to store/register the methods and properties/variables to the context
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
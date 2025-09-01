import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		console.error('useCart must be used within an CartProvider');
	}
	return context;
}
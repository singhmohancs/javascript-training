import { useCart } from "../../hooks/useCart";
import { ProductCard } from "./components";
import { useEffect, useState } from "react";



export default function ProductListPage() {
	const {cart, addToCart} = useCart();
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await fetch('https://dummyjson.com/products');
		const data = await response.json();
		setProducts(data.products);
	}

	const addToCartHandler = (product) => {
		addToCart(product);
	}

	useEffect(() => {
		getProducts();
	}, []);

	console.log('render the component:: ProductListPage');


	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Products - {cart?.length}</h1>
			<div className="grid grid-cols-4 gap-4">	
			{products.map((product) => <ProductCard product={product} key={product.id} addToCart={addToCartHandler} />)}
			</div>
		</div>
	);
}
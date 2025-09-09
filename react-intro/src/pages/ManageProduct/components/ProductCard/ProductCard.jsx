import { Link } from "react-router";

export default function ProductCard({product, addToCart}) {
	const {id, title, price, quantity, discount, thumbnail} = product;
	const addToCartHandler = (e, product) => {
		e.stopPropagation();
		e.preventDefault();
		addToCart(product);
	}
	return (
		<div key={id} className="border border-gray-300 rounded-md p-4">
			<Link to={`/products/${id}`}>
			<img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
					<h2 className="text-lg font-bold mb-2">{title}</h2>
					<p className="text-gray-500 mb-2">${price}</p>
					{ discount > 0 && <p className="text-green-500 mb-2">Discount: {discount}%</p> }
					<p className="text-gray-500 mb-2">Quantity: {quantity}</p>
					{ quantity ===0 ? 'Out of Stock' : <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md" onClick={(e)=>addToCartHandler(e, product)}>Add to Cart</button>}
				</Link>
				</div>
	)
}

import { useCart } from "../../hooks/useCart";

const PRODUCTS = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
		quantity: 10,
	},
	{
		id: 2,
		name: "Product 2",
		price: 200,
		quantity: 20,
	},
	{
		id: 3,
		name: "Product 3",
		price: 300,
		quantity: 30,
	},
	{
		id: 4,
		name: "Product 4",
		price: 400,
		quantity: 40,
	},
	{
		id: 5,
		name: "Product 5",
		price: 500,
		quantity: 50,
	}
]


export default function ManageProductPage() {
	const {cart, addToCart} = useCart();


	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Products - {cart?.length}</h1>
			<div className="grid grid-cols-3 gap-4">	
			{PRODUCTS.map((product) => (
				<div key={product.id} className="border border-gray-300 rounded-md p-4">
					<h2 className="text-lg font-bold mb-2">{product.name}</h2>
					<p className="text-gray-500 mb-2">${product.price}</p>
					<p className="text-gray-500 mb-2">Quantity: {product.quantity}</p>
					<button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md" onClick={()=>addToCart(product)}>Add to Cart</button>
				</div>
			))}
			</div>
		</div>
	);
}
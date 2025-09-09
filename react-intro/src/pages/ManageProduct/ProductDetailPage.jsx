import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../../hooks/useCart";

export default function ProductDetailPage() {
	const params = useParams();
	const { productId } = params;
	const { addToCart } = useCart();
	const [productDetail, setProductDetail] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	const discountedPrice = useMemo(() => {
		if (!productDetail) return 0;
		return (productDetail.price - (productDetail.price * productDetail.discountPercentage / 100)).toFixed(2);
	}, [productDetail]);

	const getProduct = async () => {

		// @TODO: We will use axios instead of fetch
		const response = await fetch(`https://dummyjson.com/products/${productId}`);
		const data = await response.json();
		setProductDetail(data);
		setSelectedImage(data.images[0]);
	}

	const setThumbnail = (image) => {
		setProductDetail({ ...productDetail, thumbnail: image });
		setSelectedImage(image);
	}

	useEffect(() => {
		getProduct();
	}, []);

	if (!productDetail) return <div>Loading...</div>;

	const { title, price, quantity, discountPercentage, thumbnail, images, brand, rating } = productDetail;
	return (
		<div className="flex gap-4">
			<div className=" flex flex-col gap-2">
				<div className="border border-gray-300 rounded-md p-4">
					<img src={thumbnail} alt={title} className="w-full h-96 object-cover" />
				</div>
				<div className="grid grid-cols-4 gap-2">
					{images.map((image, index) => (<div key={index} className={`cursor-pointer flex flex-row gap-2 border  rounded-md p-4 ${selectedImage === image ? 'border-blue-500' : 'border-gray-300'}`} onClick={() => setThumbnail(image)}><img src={image} alt={title} className="w-full h-24 object-cover" /></div>))}
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h2 className="text-lg font-bold mb-2">{title}</h2>
				<p className="text-gray-500 mb-2">Rating: {rating}</p>
				<p className="text-gray-500 mb-2">Brand: {brand}</p>
				<div className="flex flex-row gap-2 items-center"><span className="text-black text-lg">${discountedPrice}</span><span className="text-gray-500 text-sm line-through">${price}</span></div>
				{discountPercentage > 0 && <p className="text-green-500 mb-2">Discount: {discountPercentage}%</p>}
				<p className="text-gray-500 mb-2">Quantity: {quantity}</p>
				{quantity === 0 ? 'Out of Stock' : <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md" onClick={() => addToCart(productDetail)}>Add to Cart</button>}
			</div>
		</div>
	)
}
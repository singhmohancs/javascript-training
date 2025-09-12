import { useMemo, useState } from "react";

export default function UseMemoPage() {
	const [count, setCount] = useState(0);
	const [dark, setDark] = useState(false);
	console.log('render the component:: UseMemoPage');


	// slow function
	const getDoubleOfNumber = (num) => {
		console.log('Calculating.......');
		for (let i = 0; i < 2000000000; i++) {} // waste time
		return num * 2;
	}

	 const doubleCount = useMemo(() => getDoubleOfNumber(count), [count]);
	//const doubleCount = getDoubleOfNumber(count);


	const themeStyle = {
		backgroundColor: dark ? 'black' : 'white',
		color: dark ? 'white' : 'black',
		padding: '20px',
		borderRadius: '10px',
		border: '1px solid black',
		width: '300px',
		height: '100px',
		display: 'flex',
		justifyContent: 'center',
	}


	return <div className="flex flex-col gap-2 items-center justify-center bg-gray-100 p-4 rounded-md">
		<button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Increase Count</button>
		<button onClick={() => setDark(!dark)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Toggle Theme</button>
		<div className="text-lg font-bold">Count: {count}</div>
		<div style={themeStyle} className="text-lg font-bold">Double Count: {doubleCount}</div>
	</div>;
}
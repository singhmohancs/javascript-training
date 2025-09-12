import React, { useCallback, useState } from "react";

const AddButton = React.memo(({ onAdd }) => {
	console.log('AddButton rendered');
	return <button onClick={onAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>;
});

export default function UseCallbackPage() {
	const [qtn, setQtn] = useState(0);
	const [note, setNote] = useState('');

	// Same function reference untill setQtn is changed
	const handleAdd = useCallback(() => {
		console.log('handleAdd');
		setQtn(qtn + 1);
	}, [qtn]);	


	return <div className="flex flex-col gap-2 items-center justify-center bg-amber-400 p-4 rounded-md w-[500px] mx-auto">
		<h3>Qtn: {qtn}</h3>
		<input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your notes" className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
		<AddButton onAdd={handleAdd} />
	</div>;
}
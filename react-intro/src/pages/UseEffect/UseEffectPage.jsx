import { useEffect, useState } from 'react';
import { Button } from '../../components';
import styles from './style.module.css';

export default function UseEffectPage() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	const [width, setWidth] = useState(window.innerWidth);
	
	// React’s Virtual DOM Diffing Algorithm (Deep View Update)
	// 1. Useffect is used to detect changes in the state or props
	// 2. Useffect is used to perform side effects in a functional component
  // 3. UseEffect is used to detect the lifecycle methods(componentDidMount, componentDidUpdate, componentUnmount) of a component

	const clickHandler = () => {
		console.log('button clicked');
		setCount(count + 1);
	}

	const inputHandler = (e) => {
		console.log(e.target.value);	
		setName(e.target.value);
	}

	const getUser = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await response.json();
		console.log(data);
	}

	// Case 1:
	// Dependency array is not present
	// It runs every time when the component is rendered
	useEffect(() => {
		console.log('I do not have a dependency array, so i am running every time when the component is rendered');
	}); 

	// Case 2:
	// Detect component mount
	// It runs only once when the component is mounted
	// To detect component mount, we can use an empty dependency array
	useEffect(() => {
		console.log('I am mounted, I am running only once when the component is mounted');
		
		getUser();
	}, []); 

	// Case 3:
	// Detect component update
	// It runs every time when the component is updated
	// To detect component update, we can use a dependency array
	useEffect(() => {
		console.log('I am updated, I am running every time when the name is updated', name);
	}, [name]); 

	// Case 4:
	// Detect component unmount
	// It runs only once when the component is unmounted
	// To detect component unmount, we can return a function from the useEffect
	useEffect(() => {
		const onResize = () => {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", onResize);
		// cleanup function from the useEffect hook
		return () => {
			console.log('I am unmounted, I am running only once when the component is unmounted');
			window.removeEventListener("resize", onResize);
		};
	}, []);


	// dependency array is an array of dependencies that are used to detect changes in the state or props(optional)
	// if the dependency array is empty, the useEffect will be called only once
	// if the dependency array is not empty, the useEffect will be called whenever the dependency array changes


	return (
		<div className={styles.useEffectPage} id="useEffectPage">
			<div className={styles.useEffectContainer}>
				
				<Button className={styles.useEffectButton} onClick={clickHandler}>+</Button>
				<span>{count}</span>

				<input type="text" onChange={inputHandler} className={styles.useEffectInput} />
				<span>{name}</span>
			</div>
			<div className={styles.useEffectContainer}>
				<span>Window Width: {width}px</span>
			</div>
		</div>
	)
}
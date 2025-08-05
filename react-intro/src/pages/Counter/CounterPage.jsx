import { useEffect, useState } from 'react';
import { Button } from '../../components';
import styles from './style.module.css';

export default function CounterPage() {
	const [count, setCount] = useState(0); // returns an array with 2 elements
	const [isGreaterThan10, setIsGreaterThan10] = useState(false);
	
	//1. count is the state variable
	//2. setCount is the function to update the state variable

	
	//let count = 0; // local variable // this is not a state variable

	const increaseCount = () => {
		console.log('button clicked');
		// setCount(count + 1);

		setCount((prevCount) => {
			const count = prevCount + 1
			if(count >= 10) {
				setIsGreaterThan10(true);
			}
			return count;
		});
		
		// use count
	}

	const decreaseCount = () => {
		console.log('button clicked');
		setCount(count - 1);
		console.log('count', count);
	}


	// We will study it later
	useEffect(() => {
		console.log('I am outside', count);
	}, [count]);


	return (
		<div className={styles.counterPage}>
		<div className={styles.counterContainer}>
			<Button className={styles.counterButton} onClick={increaseCount}>+</Button>
			<span className={styles.counterCount}>{count}</span>
			<Button className={styles.counterButton} onClick={decreaseCount}>-</Button>
		</div>

		{isGreaterThan10 && <div>Count is greater than 10 {count}</div>}
		</div>
	)
}
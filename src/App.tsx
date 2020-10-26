import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './css/App.css';
import {
	addAction,
	minusAction,
	handleInputChange,
	multiplyAction,
	handleIncreaseBy,
	handleDecreaseBy,
} from './redux/actions';
import { AppState } from './redux/types';

function App() {
	const { count, input, increaseBy, decreaseBy } = useSelector(
		(state: AppState) => state.counter,
	);

	const dispatch = useDispatch();

	const handleAdd = () => dispatch(addAction());
	const handleMinus = () => dispatch(minusAction());
	const handleMultiply = () => dispatch(multiplyAction(input));

	return (
		<>
			<p>Result: {count}</p>
			<br />
			<button onClick={handleAdd}>Increase by:</button>
			<input
				type='number'
				value={increaseBy}
				onChange={(e) => dispatch(handleIncreaseBy(+e.target.value))}
			/>
			<br />
			<button onClick={handleMinus}>Decrease by:</button>
			<input
				type='number'
				value={decreaseBy}
				onChange={(e) => dispatch(handleDecreaseBy(+e.target.value))}
			/>
			<br />
			<button onClick={handleMultiply}>Multiply by:</button>
			<input
				type='number'
				placeholder='Multiply result with . . .'
				onChange={(e) =>
					dispatch(handleInputChange(parseInt(e.target.value, 10)))
				}
			/>
		</>
	);
}

export default App;

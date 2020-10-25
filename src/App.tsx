import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './css/App.css';
import {
	addAction,
	minusAction,
	handleInputChange,
	multiplyAction,
} from './redux/actions';
import { AppState } from './redux/types';

function App() {
	const { count, input } = useSelector((state: AppState) => state.counter);

	const dispatch = useDispatch();

	const handleAdd = () => dispatch(addAction());
	const handleMinus = () => dispatch(minusAction());
	const handleMultiply = () => dispatch(multiplyAction(input));

	return (
		<>
			<section>
				<p>Result: {count}</p>
			</section>
			<section>
				<button onClick={handleAdd}>ADD 1</button>
				<button onClick={handleMinus}>MINUS 1</button>
			</section>
			<section>
				<input
					type='number'
					placeholder='Multiply result with . . .'
					onChange={(e) =>
						dispatch(handleInputChange(parseInt(e.target.value, 10)))
					}
				/>
				<button onClick={handleMultiply}>MULTIPLY</button>
			</section>
		</>
	);
}

export default App;

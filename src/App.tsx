import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './css/App.css';
import { addAction, minusAction, handleInputChange } from './redux/actions';
import { AppState } from './redux/types';

function App() {
	const { count } = useSelector((state: AppState) => state.counter);
	console.log('count :', count);
	const dispatch = useDispatch();

	const handleAdd = () => dispatch(addAction());
	const handleMinus = () => dispatch(minusAction());

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
					onChange={(e: any) => dispatch(handleInputChange(e.target.value))} // TODO: why ((event: React.ChangeEvent<HTMLInputElement>) => was not helpful here???
				/>
				<button>MULTIPLY</button>
			</section>
		</>
	);
}

export default App;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './css/App.css';
import { addAction, minusAction } from './redux/actions';
import { AppState } from './redux/types';

function App() {
	const { count } = useSelector((state: AppState) => state.counter);
	console.log('count :', count);
	const dispatch = useDispatch();

	const handleAdd = () => dispatch(addAction());
	const handleMinus = () => dispatch(minusAction());

	return (
		<>
			<p>Result: {count}</p>
			<button onClick={handleAdd}>ADD 1</button>
			<button onClick={handleMinus}>MINUS 1</button>
		</>
	);
}

export default App;

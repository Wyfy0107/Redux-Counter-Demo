import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './css/App.css';
import { fetchDogImage } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogImage());
  }, [dispatch]);

  return <div></div>;
}

export default App;

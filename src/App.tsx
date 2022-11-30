import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { fetchNews } from './store/actions/newsActions';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <div>hello</div>
  );
}

export default App;

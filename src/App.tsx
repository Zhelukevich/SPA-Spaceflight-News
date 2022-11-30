import React, { useEffect } from 'react';
import { News } from './components/News';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchNews } from './store/actions/newsActions';
import NewsSlice from './store/slice/newsSlice';

function App() {
  const dispatch = useAppDispatch()
  const { error, loading, news } = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <ul>
      {
        news.map(news => <News key={news.id} news={news} />)
      }
    </ul>
  );
}

export default App;

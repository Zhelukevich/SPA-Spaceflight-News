import React, { useEffect } from 'react';
import { News } from './components/News';
import { Layout } from './components/Layout';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchNews } from './store/actions/newsActions';
import styles from './app.module.css'

function App() {
  const dispatch = useAppDispatch()
  const { error, loading, news } = useAppSelector(state => state.news)
  console.log(news);



  useEffect(() => {
    news
    dispatch(fetchNews())
  }, [])

  return (
    <Layout>
      {
        loading && <span className={styles.loading}>Loading...</span>
      }

      {
        error && <span className={styles.error}>{error}</span>
      }

      <ul className={styles.list}>
        {
          news.map(news => <News key={news.id} news={news} />)
        }
      </ul>
    </Layout>
  );
}

export default App;

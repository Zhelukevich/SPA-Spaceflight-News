import React, { useEffect, useState } from 'react';
import { News } from './components/News';
import { Layout } from './components/Layout';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchNews } from './store/actions/newsActions';
import styles from './app.module.css'
import { Header } from './components/Header';

function App() {
  const dispatch = useAppDispatch()
  const { error, loading, news } = useAppSelector(state => state.news)
  const [filtered, setFiltered] = useState(news);

  useEffect(() => {
    setFiltered(news)
  }, [news])

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <>
      <Header setFiltered={setFiltered} />
      <Layout>
        {loading && <span className={styles.loading}>Loading...</span>}

        {error && <span className={styles.error}>{error}</span>}

        <ul className={styles.list}>
          {filtered.map(news => <News key={news.id} news={news} />)}
        </ul>
      </Layout>
    </>
  );
}

export default App;

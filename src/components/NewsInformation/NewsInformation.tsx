import React from 'react';
import { INews } from '../../models/models';
import styles from './newsInformation.module.css'

interface INewsInformationProps {
  news: INews;
}

export function NewsInformation({ news }: INewsInformationProps) {
  return (
    <div className={styles.information}>
      <a href={news.url}>
        <h2 className={styles.title}>{news.title}</h2>
      </a>
      <p className={styles.text}>{news.summary}</p>
    </div>
  )
}
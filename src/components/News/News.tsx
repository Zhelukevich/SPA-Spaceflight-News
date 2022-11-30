import React from 'react';
import { INews } from '../../models/models';
import { NewsInformation } from '../NewsInformation';
import styles from './news.module.css';


interface INewsProps {
  news: INews;
}

export function News({ news }: INewsProps) {
  return (
    <li className={styles.item}>
      <div>
        <img
          src={news.imageUrl}
          alt="Spaceflight"
          className={styles.img}
        />
      </div>
      <NewsInformation news={news} />
    </li>
  )
}
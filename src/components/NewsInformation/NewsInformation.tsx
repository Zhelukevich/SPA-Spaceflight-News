import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { INews } from '../../models/models';
import { deleteNews } from '../../store/slice/newsSlice';
import { Controls } from './Controls';
import styles from './newsInformation.module.css'

interface INewsInformationProps {
  news: INews;
}

export function NewsInformation({ news }: INewsInformationProps) {



  return (
    <div className={styles.information}>
      <a href={news.url} target="_blank">
        <h2 className={styles.title}>{news.title}</h2>
      </a>
      <p className={styles.text}>{news.summary}</p>
      <Controls news={news} />
    </div>
  )
}
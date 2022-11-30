import React from 'react'
import { INews } from '../../models/models'


interface INewsProps {
  news: INews;
}

export function News({ news }: INewsProps) {
  return (
    <li>
      <h2>{news.title}</h2>
      <p>{news.summary}</p>
      <img src={news.imageUrl} alt="Spaceflight" />
      <a href={news.url}>Read the news</a>
    </li>
  )
}
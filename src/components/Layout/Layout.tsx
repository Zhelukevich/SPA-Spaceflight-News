import React from 'react';
import styles from './layout.module.css';

type ILayoutProps = {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}
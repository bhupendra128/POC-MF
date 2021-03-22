import React from 'react';

import styles from './app.module.css';
import { Header } from '@NX-MF-POC/header';
import { Editorial } from '@NX-MF-POC/editorial';


export function App() {
  return (
    <div className={styles.app}>
      <main>
        <Header />
        <Editorial/>
      </main>
    </div>
  );
}

export default App;

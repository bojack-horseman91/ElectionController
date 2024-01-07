// FullScreenSpinner.js

import React from 'react';
import styles from './FullScreenSpinner.module.css';

const FullScreenSpinner = () => (
  <div className={styles.overlay} style={{width:"100%"}}>
    <div className={styles.spinner} ></div>
  </div>
);

export default FullScreenSpinner;

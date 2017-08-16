import React, { Component } from 'react';
import styles from './Card.css';

const Card = ({ title, summary }) => (
  <div className={styles.container}>
  	<h3>{title}</h3>
  	<p>{summary}</p>
  </div>
);

export default Card;
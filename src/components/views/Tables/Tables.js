import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + `/tables/booking/new`}>Book a table</Link>
    <Link to={process.env.PUBLIC_URL + `/tables/booking/:id`}>Edit booking</Link>
    <Link to={process.env.PUBLIC_URL + `/tables/events/new`}>Add new event</Link>
    <Link to={process.env.PUBLIC_URL + `/tables/events/:id`}>Edit event</Link>
  </div>
);

export default Tables;

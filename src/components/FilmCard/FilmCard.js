import React from 'react';
import classes from './FilmCard.module.css';

const FilmCard = ({ imageUrl, title, year, quality }) => (
  <div className={[classes.moviecard, classes.item].join(' ')}>
    <img className={classes.movieheader} src={imageUrl}/>
    <div className={classes.moviecontent}>
      <div className={classes.moviecontentheader}>
        <div className={classes.movietitle}>{title}</div>
      </div>
      <div className={classes.movieinfo}>
        <div className={classes.infosection}>
          <label>Date & Time</label>
          <span>{year}</span>
        </div>
        <div className={classes.infosection}>
          <label>Screen</label>
          <span>03</span>
        </div>
        <div className={classes.infosection}>
          <label>Row</label>
          <span>F</span>
        </div>
        <div className={classes.infosection}>
          <label>Quality</label>
          <span>{quality}</span>
        </div>
      </div>
    </div>
  </div>
);

export default FilmCard;

import React from 'react';
import classes from './FilmCard.module.css';
import { Badge } from 'reactstrap';

const FilmCard = ({ imageUrl, title, year, quality }) => (
  <div className={[classes.moviecard, classes.item].join(' ')}>
    <img className={classes.movieheader} src={imageUrl}/>
    <div className={classes.moviecontent}>
      <div className={classes.moviecontentheader}>
        <div className={[classes.movietitle, "text-truncate"].join(' ')}>{title}</div>
      </div>
      <div className={classes.movieinfo}>
        <div className={classes.infosection}>
          <span><Badge>{year}</Badge></span>
        </div>
        <div className={classes.infosection}>
          <span><Badge color='success'>{quality}</Badge></span>
        </div>
      </div>
    </div>
  </div>
);

export default FilmCard;

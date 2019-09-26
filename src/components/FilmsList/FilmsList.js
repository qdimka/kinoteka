import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import classes from './FilmsList.module.css';
import FilmContentLoader from '../FilmCard/FilmCardContentLoader';

const FilmsList = ({ films, loading }) => (
  <div className={classes.films}>
    {
      loading
        ? [...Array(10).keys()]
          .map(el => (<FilmContentLoader/>))
        : films
          .map(film => (
            <FilmCard title={film.title}
                      year={film.year}
                      imageUrl={film.imageUrl}
                      quality={film.quality}/>))
    }
  </div>
);

export default FilmsList;
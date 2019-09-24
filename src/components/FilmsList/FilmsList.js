import React, { Component } from 'react';
import FilmCard from "../FilmCard/FilmCard";
import classes from './FilmsList.module.css';
import FilmContentLoader from "../FilmCard/FilmCardContentLoader";

class FilmsList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className={classes.header}>
          Films
        </div>
        <div className={classes.films}>
          {
            this.props.loading
              ? [...Array(10).keys()]
                .map(el => (<FilmContentLoader/>))
              : this.props.films.items
                .map(film => (
                  <FilmCard title={film.title}
                            url={film.url}
                            description={film.t_magnet_url}/>
                ))
          }
        </div>
      </div>
    );
  }
}

export default FilmsList;
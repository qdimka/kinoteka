import React from 'react';
import FilmCard from "../FilmCard/FilmCard";
import classes from './FilmsList.module.css';
import FilmContentLoader from "./FilmContentLoader";

const FilmsList = (props) => (
    <div>
        <div className={classes.header}>
            Films
        </div>
        <div className={classes.films}>
            {
                props.loading ?
                    (<FilmContentLoader />)
                    : props.films.items.map(film => (
                        <FilmCard title={film.title}
                                  url={film.image}
                                  description={film.description}/>
                    ))
            }
        </div>
    </div>
);

export default FilmsList;
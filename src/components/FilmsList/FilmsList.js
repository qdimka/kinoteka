import React from 'react';
import FilmCard from "../FilmCard/FilmCard";

const FilmsList = (props) => (
    <div>
        <div className="header">
            Films
        </div>
        <div className="films">
            {
                props.films.items.map(film => (
                    <FilmCard title={film.title}
                            url={film.image}
                            description={film.description}  />
                ))
            }
        </div>
    </div>
);

export default FilmsList;
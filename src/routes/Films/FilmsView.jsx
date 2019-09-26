import React, { useEffect } from 'react';
import FilmsList from '../../shared/components/FilmsList/FilmsList';

const FilmsView = ({ films, getFilms, loading }) => {
  useEffect(() => getFilms(), []);

  return (
    <FilmsList loading={loading} films={films}/>
  );
};

export default FilmsView;
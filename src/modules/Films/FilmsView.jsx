import React, { useEffect } from 'react';
import FilmsList from '../../shared/components/FilmsList/FilmsList';
import Filters from '../../shared/components/Filters/Filters';
import ScrollableContent from '../../shared/components/ScrollableContent/ScrollableContent';

const FilmsView = ({ films, getFilms, loading }) => {
  useEffect(() => getFilms(), []);

  return (
    <>
      <Filters/>
      <ScrollableContent>
        <FilmsList loading={loading} films={films}/>
      </ScrollableContent>
    </>
  );
};

export default FilmsView;
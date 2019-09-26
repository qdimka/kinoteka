import React, { useEffect } from 'react';
import FilmsList from '../../shared/components/FilmsList/FilmsList';

const SerialsView = ({ loading, getSerials, serials }) => {
  console.log({ loading, getSerials, serials });
  useEffect(() => getSerials(), []);

  return (
    <FilmsList loading={loading} films={serials}/>
  );
};

export default SerialsView;
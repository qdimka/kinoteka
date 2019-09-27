import React, { useEffect } from 'react';
import FilmsList from '../../shared/components/FilmsList/FilmsList';
import Filters from '../../shared/components/Filters/Filters';
import ScrollableContent from '../../shared/components/ScrollableContent/ScrollableContent';

const SerialsView = ({ loading, getSerials, serials }) => {
  console.log({ loading, getSerials, serials });
  useEffect(() => getSerials(), []);

  return (
    <>
      <ScrollableContent>
        <FilmsList loading={loading} films={serials}/>
      </ScrollableContent>
    </>
  );
};

export default SerialsView;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFilmsList } from '../../actions/films';
import FilmsList from '../../components/FilmsList/FilmsList';

const mapDispatchToProps = (dispatch) => ({
  getFilms: () => dispatch(getFilmsList())
});

const mapStateToProps = (state) => ({
  films: state.films.films,
  loading: state.films.loading
});

const Films = ({ films, getFilms, loading }) => {
  useEffect(() => getFilms(), []);

  return (
    <FilmsList loading={loading} films={films}/>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
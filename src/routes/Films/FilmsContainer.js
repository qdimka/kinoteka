import { connect } from 'react-redux';
import getFilmsList from './FilmsActions';
import FilmsView from './FilmsView';

const mapDispatchToProps = (dispatch) => ({
  getFilms: () => dispatch(getFilmsList())
});

const mapStateToProps = (state) => ({
  films: state.films.films,
  loading: state.films.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsView);
import { connect } from 'react-redux';
import { getFilmsList } from './FilmsActions';
import FilmsView from './FilmsView';

const mapDispatchToProps = (dispatch) => ({
  getFilms: () => dispatch(getFilmsList())
});

const mapStateToProps = (state) => ({
  films: state.films.items,
  loading: state.films.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsView);
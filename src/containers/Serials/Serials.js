import React, { useEffect } from 'react';
import FilmsList from '../../components/FilmsList/FilmsList';
import { getSerials } from '../../actions/serials';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  getSerials: () => dispatch(getSerials())
});

const mapStateToProps = (state) => ({
  serials: state.serials.serials,
  loading: state.serials.loading
});

const Serials = ({ loading, getSerials, serials }) => {
  useEffect(() => getSerials(), []);

  return (
    <FilmsList loading={loading} films={serials}/>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Serials);
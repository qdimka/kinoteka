import { connect } from 'react-redux';
import SerialsView from './SerialsView';
import { getSerials } from './SerialsActions';

const mapDispatchToProps = (dispatch) => ({
  getSerials: () => dispatch(getSerials())
});

const mapStateToProps = (state) => ({
  serials: state.serials.serials,
  loading: state.serials.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(SerialsView);
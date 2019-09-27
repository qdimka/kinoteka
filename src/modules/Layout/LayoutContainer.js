import { connect } from 'react-redux';
import LayoutView from './LayoutView';
import { Toggle } from './LayoutActions';

const mapStateToProps = state => ({ isOpen: state.layout.isOpen });

const mapDispatchToProps = (dispatch) => ({
  toggle: (isOpen) => dispatch(Toggle(isOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutView);
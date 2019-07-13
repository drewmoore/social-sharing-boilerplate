import { connect } from 'react-redux';

import { toggleVisibility } from '../../actions/visibility';
import template from './template';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleVisibility: () => (
    dispatch(toggleVisibility)
  )
});

const VisibilityFilter = connect(mapStateToProps, mapDispatchToProps)(template);

export default VisibilityFilter;

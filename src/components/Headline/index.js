import { connect } from 'react-redux';

import template from './template';

const mapStateToProps = (state) => ({
  visible: state.visibilityFilter.visible
});

const Headline = connect(mapStateToProps)(template);

export default Headline;

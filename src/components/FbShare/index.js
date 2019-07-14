import { connect } from 'react-redux';

import template from './template';

const mapStateToProps = ({ visibilityFilter }) => ({
  shareUrl: `https://social-sharing-boilerplate.herokuapp.com?visibile=${visibilityFilter.visible}`
});

const FbShare = connect(mapStateToProps)(template);

export default FbShare;

import { connect } from 'react-redux';

import template from './template';

const APP_HOST = 'https://social-sharing-boilerplate.herokuapp.com/';

const share = (visible) => (
  FB.ui({
    method: 'share',
    href: `${APP_HOST}?visibile=${visible}`,
  }, (response) => {})
);

const mapStateToProps = ({ visibilityFilter }) => ({
  share: () => {  share(visibilityFilter.visible); }
});

const FbShare = connect(mapStateToProps)(template);

export default FbShare;

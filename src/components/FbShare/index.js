import { connect } from 'react-redux';

import { config } from '../../config';
import template from './template';

const share = (visible) => (
  FB.ui({
    method: 'share',
    href: `${config.APP_HOST}?visible=${visible}`,
  }, (response) => {})
);

const mapStateToProps = ({ visibilityFilter }) => ({
  share: () => {  share(visibilityFilter.visible); }
});

const FbShare = connect(mapStateToProps)(template);

export default FbShare;

import { connect } from 'react-redux';

import { config } from '../../config';
import template from './template';

const hashtag = '#killinit';

const share = (visible) => (
  FB.ui({
    method: 'share',
    href: `${config.APP_HOST}?visible=${visible}`,
    quote: `Hey look, I made this thing ${visible ? 'visible' : 'invisible'}`,
    hashtag
  }, (response) => {})
);

const mapStateToProps = ({ visibilityFilter }) => ({
  share: () => {  share(visibilityFilter.visible); }
});

const FbShare = connect(mapStateToProps)(template);

export default FbShare;

import { connect } from 'react-redux';

import { config } from '../../config';
import template from './template';

const hashtag = '#killinit';

const mapStateToProps = ({ visibilityFilter }) => ({
  visible: visibilityFilter.visible
});

const mapDispatchToProps = (dispatch) => ({
  share: (visible) => {
    window.FB.ui({
      method: 'share',
      href: `${config.APP_HOST}?visible=${visible}`,
      quote: `Hey look, I made this thing ${visible ? 'visible' : 'invisible'}`,
      hashtag
    })
  }
});

const FbShare = connect(mapStateToProps, mapDispatchToProps)(template);

export default FbShare;

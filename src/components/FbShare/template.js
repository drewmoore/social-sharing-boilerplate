import React from 'react';

const template = ({ shareUrl }) => (
  <div
    className="fb-share-button"
    data-href={shareUrl}
    data-layout="button"
    data-size="small"
  >
    <a
      target="_blank"
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&amp`}
      className="fb-xfbml-parse-ignore"
    >
      Share
    </a>
  </div>
);

export default template;

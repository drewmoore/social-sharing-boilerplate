const locale = 'en_US';

const title = 'Social Sharing Boilerplate';
const fbDescription = ({ visible } = {}) => (
  `A Boilerplate for Doing Stuff on React and Sharing the Results.
  In this case, text is ${(typeof visible !== 'undefined' && !visible) ? 'invisible' : 'visible'}.`
);
const fbOgImage = process.env.APP_HOST + 'images/fb-og-image.png';

const render = (config, state, currentUrl) => (`
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>

      <meta property="og:url"           content="${currentUrl}" />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content="${title}" />
      <meta property="og:description"   content="${fbDescription(state.visibilityFilter)}" />
      <meta property="og:image"         content="${fbOgImage}" />
    </head>
    <body>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            appId            : ${process.env.FB_APP_ID},
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v3.3'
          });
        };
      </script>
      <script async defer src="https://connect.facebook.net/${locale}/sdk.js"></script>

      <div id="root"></div>
      <script src="js/main.js"></script>
      <script>renderApp('${JSON.stringify(config)}', '${JSON.stringify(state)}');</script>
    </body>
    </html>
`);

module.exports = render;

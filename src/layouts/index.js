const locale = 'en_US';

const render = (config, state) => (`
  <!doctype html>
  <html>
    <head>
      <title>Social Sharing Boilerplate</title>
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

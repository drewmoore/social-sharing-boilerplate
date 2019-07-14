const locale = 'en_US';

const render = () => (`
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
    </body>
    </html>
`);

module.exports = render;

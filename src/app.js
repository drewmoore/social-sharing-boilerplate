const express = require('express');

const app = express();
const port = process.env.PORT;

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>Social Sharing Boilerplate</title>
      </head>
      <body>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"></script>

        <div id="root"></div>
        <script src="js/main.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static('public'));
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

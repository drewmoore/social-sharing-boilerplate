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
        <div id="root"></div>
        <script src="js/main.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static('public'));
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

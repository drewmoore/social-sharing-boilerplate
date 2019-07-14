const express = require('express');

const render = require('./layouts');

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const router = express.Router();

const clientConfig = Object.freeze({
  APP_HOST: process.env.APP_HOST
});

router.get('/', (req, res) => (
  res.send(render(clientConfig))
));

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

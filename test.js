const OpenApiValidator = require('express-openapi-validator');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  OpenApiValidator.middleware({
    apiSpec: './src/api.yml',
    validateRequests: true,
    validateResponses: true,
  }),
);

app.post('/v1s/tenants/users', (req, res) => {
  res.json({ id: 12345, name: 'test' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // format error
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.listen(7071, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${7071}`);
});

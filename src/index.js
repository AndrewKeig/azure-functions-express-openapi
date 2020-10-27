const createHandler = require('azure-aws-serverless-express');
const express = require('express');
const bodyParser = require('body-parser');
const { error, validate } = require('./express');
const { tenantUsers } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(validate);
app.post('/v1/tenants/users', tenantUsers);
app.use(error);

module.exports = createHandler(app);

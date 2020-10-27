const OpenApiValidator = require('express-openapi-validator');

// eslint-disable-next-line no-unused-vars
module.exports.error = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
};

module.exports.validate = OpenApiValidator.middleware({
  apiSpec: './src/api.yml',
  validateRequests: true,
  validateResponses: true,
});

const swaggerJsDocs = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API for Shop application",
      version: "1.0.0",
      description: "Good luck developers 😁",
    },
  },
  apis: ["./modules/product/swagger/*.js"],
};

const swaggerDocs = swaggerJsDocs(swaggerOptions);

module.exports = swaggerDocs;

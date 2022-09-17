const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();
const port = 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // development tool
  })
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

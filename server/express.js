const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const schema = require('./schema');
const app = express();
const port = 3001;

app.use(cors());

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

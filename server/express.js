const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const app = express();
const port = 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // development tool
    graphiql: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

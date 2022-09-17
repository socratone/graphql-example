const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');
const { companies, users } = require('./datas');

const CompayType = new GraphQLObjectType({
  name: 'Company',
  // 아래에 정의된 UserType을 사용하기 때문에 함수로 감싼다.
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return users.filter((user) => user.companyId === parentValue.id);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompayType,
      resolve(parentValue, args) {
        return companies.find(
          (company) => company.id === parentValue.companyId
        );
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return users.find((user) => user.id === args.id);
      },
    },
    company: {
      type: CompayType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return companies.find((company) => company.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

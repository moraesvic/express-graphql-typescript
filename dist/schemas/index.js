"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const data_1 = require("./data");
const User_1 = require("./typedefs/User");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new graphql_1.GraphQLList(User_1.UserType),
            resolve: (parent, args) => data_1.users,
        },
    },
});
const RootMutation = new graphql_1.GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        addUser: {
            type: User_1.UserType,
            args: {
                name: { type: graphql_1.GraphQLString },
            },
            resolve: (parent, args) => {
                data_1.users.push({ id: data_1.users.length, name: args.name });
                return data_1.users.at(-1);
            },
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

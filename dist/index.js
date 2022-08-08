"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_graphql_1 = require("express-graphql");
const schemas_1 = require("./schemas");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.get("/", (req, res) => {
    res.send("It works! Now go to '/graphql' to start experimenting!");
});
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schemas_1.schema,
    graphiql: true,
}));
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`listening at port ${port}`);
});

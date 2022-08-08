import express from "express";
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas";

const app = express();
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("It works! Now go to '/graphql' to start experimenting!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`listening at port ${port}`);
});

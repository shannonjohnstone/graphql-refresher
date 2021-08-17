import express from "express"

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World!")
});

app.listen(3000, () => console.log(`Express Graphql Server Running! http://localhost:3000`));
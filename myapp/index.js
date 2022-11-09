const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  console.log(response);
  response.send("Hello World");
});

app.get("/date", (Request, Response) => {
  let date = new Date();
  Response.send(`Today's date is ${date}`);
});

app.get("/page", (Request, Response) => {
  Response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);

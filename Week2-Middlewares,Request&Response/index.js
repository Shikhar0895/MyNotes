const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

function middlewar1(req, res, next) {
  console.log(`from inside middlewar1 : ${req.headers.counter}`);
  next();
}

// app.use(middlewar1);
app.use(bodyParser.json());
function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function CalcProduct(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

function givePage(req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname + "/index.html");
}

function handleFirstRequest(req, res) {
  //   var counter = req.query.counter;
  //   console.log(req.query);
  //   console.log(req.headers);
  console.log(req.body);
  var counter = req.query.counter;
  if (counter < 1000) {
    var calculatedSum = calculateSum(counter);
    var calculatedProduct = CalcProduct(counter);
    //server sending data as simpleText
    //var answer = `the sum is ${calculatedSum}`;
    var answer = {
      sum: calculatedSum,
      product: calculatedProduct,
    };

    res.send(answer);
  } else {
    res.status(411).send("You have entered a very big number");
  }
}

// app.get("/handleSum", handleFirstRequest);
app.get("/handleSum", handleFirstRequest);
app.get("/givePage", givePage);

function started() {
  console.log(`App listening on port:${port}`);
}
app.listen(port, started);

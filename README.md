
# Middlewares, Requests & Responses
## how to setup an HTTP server in NodeJS?
```javascript

const express = require("express");
const app = express();
const port = 3000;

function started(){
    console.log(`App is listening to port: ${port}`)
}

app.listen(port, started)

/*Step2 : Up untill this point of code server is ready to take on HTTP request from browser, from Postman or from another nodejs process*/


```
## How are the request send from client and received at server end that needs to be configured 

```javascript
//defining a route and a handler function 
app.get('/', handleHomeRoute)

function handleHomeRoute(req, res){
    res.send("<h1>Welcome to ur homePage</h1>")

}

```

## One can send data throught the request in the form of 
<ol>
<li>Query Params</li>
<li>Headers</li>
<li>Body</li>
</ol>

### QueryParams
<p>Followed by route, a question mark <b>"?"</b> , param name = value </br>
FOR EXAMPLE: //http://localhost:3000/?param=Shikhar's
</p>

``` javascript
//http://localhost:3000/?param=Shikhar's
function handleHomeRoute(req, res){
    let param = req.query.param
    res.send(`<h1>Welcome to ${param} homePage</h1>`)

}
```

### Headers
<p>Generally Headers are used to pass in metadata of the website and not computational data.
For sending data through headers we can use POSTMAN where headers are sent using POST method
</p>

``` javascript
app.post("/", handleHomeRoute);

function handleHomeRoute(req, res) {
  var param = req.headers.header1;

  res.send(`<h1>Welcome to ${param} homePage</h1>`);
}
```
### Not proposed to send any sort of computational data in HEADERS, HEADERS are meant to send metadata of the page
------
### Body
<ol>
<li>Data sent through body is of type POST request and thus requires POSTMAN to make a POST request</li>
<li>Data can be of type HTML, JSON, SImple text</li>
</ol>

```javascript
//Sending HTML
app.use(bodyParser.text({ type: "text/html" }));
app.post("/givePage", handleBodyInput);

function handleBodyInput(req, res) {
  var body = req.body;
  console.log(body);
  res.send(body);
}

```
```javascript
//Sending JSON
app.use(bodyParser.json());
app.post("/givePage", handleBodyInput);

function handleBodyInput(req, res) {
  var body = req.body;
  console.log(body);
  res.send(body);
}

```





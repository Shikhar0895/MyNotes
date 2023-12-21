var sendObj = {
  method: "GET",
};

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  result.json().then(logResponseBody);
}

fetch("http://localhost:3000/handleSum?counter=25", sendObj)
  .then((response) => response.json())
  .then((data) => console.log(data));

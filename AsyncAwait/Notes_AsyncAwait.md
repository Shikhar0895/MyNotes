# Promises and Async/Await

### Creating a promise using Promise constructor

```javascript
const p1 = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise Resolved Successfully");
  } else {
    reject("Promise rejected");
  }
});
```

Now there are two ways to extract data from a promise

```javascript
//1st method - chaining the resolved and rejected value
p1.then((res) => console.log(res)).catch((err) => {
  console.error(err);
});

//2nd method - passing two callbacks comma separated
p1.then(
  (resolvedValue) => {
    console.log("Resolved:", resolvedValue);
  },
  (rejectedReason) => {
    console.log("Rejected:", rejectedReason);
  }
);
```

## Async

Async await is more like a syntactical sugar which enhances the readability and maintainability when working with asynchronous operation.

<ul>
<li> A function when marked asynchronous implicitly returns a promise if the value returned is not of type promise
</ul>

```javascript
async function getData() {
  return "A string";
}

console.log(getData());
```

![Alt text](image.png)

<ul>
<li>
Async function returns a promise.
<li>This promise contains data that needs to be extracted</li> 
 <li> Now this promise is settled or fullfilled using <b>.then().catch()</b> chaining.
</li>
</ul>

```javascript
async function getData() {
  return "A string";
}

getData()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

On settling promise if the promise get resolved successfully .then method takes executes a callback which has response object.
If promise gets rejected callback in the .catch() is executed which has access to error object

## Async Await combo

1. at this point JS engine suspends the execution pops of the handlePromise from the callstack ,
2. after 5 sec when promise is settled execution will be resumed
3. Intercepts await keyword , waits for 5 sec, when promise is settled logs are printed onto the console.

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 5000);
});

async function handlePromise() {
  const val = await p1;
  console.log("random");
}

handlePromise();
```

## difference in behaviour when handling promise without using ASYNC/AWAIT

Key difference is that in this way of handling promises, JS engine doesn't wait for promise to get resolved and prints random , and after 5 sec when promise is settled , the resolved data is logged onto the console

```javascript
function getData() {
  p1.then((res) => console.log(res));
  console.log("random");
}
getData();
```

## In case of multiple promises,

1. P1 - 5sec , P2 - 10sec , P3 - 7 sec - p1 resolved , P2 and P3 resolved
2. P1 - 5s, P2 -7s, P3 - 10s - P1 resolved , p2 resolved , p3 resolved
3. P1 - 10s , P2 - 3s, P3 - 4s --10s hold P1 resolved , p2 and p3 resolved

## Real life example of Async await

```javascript
const API_URL = "";

async function makeApiCall() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
}
makeApiCall();
```

## catching error can be done in 2 ways --

1. tryCatch block

```javascript
async function makeApiCall() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

makeApiCall();
```

2. catch chaining

```javascript
makeApiCall().catch((err) => console.error(err));
```

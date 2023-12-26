const pf = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise Resolved Successfully");
  } else {
    reject("Promise rejected");
  }
});

// p1.then((res) => console.log(res)).catch((err) => console.error(err));
// p2.then(
//   (resolvedValue) => {
//     console.log("Resolved:", resolvedValue);
//   },
//   (rejectedReason) => {
//     console.log("Rejected:", rejectedReason);
//   }
// );

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise rejected successfully");
//   }, 5000);
// });

// function getData() {
//   return p2.then((res) => console.log(res)).catch((err) => console.error(err));
// }

// console.log(getData());
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Promise1 resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Promise2 resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Promise3 resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 3000);
});

async function handlePromise() {
  const val = await p1; //at this point JS engine suspends the execution pops of the handlePromise from the callstack
  console.log(val);
  console.log("random1");

  const val2 = await p2;
  console.log(val2);
  console.log("random2");

  const val3 = await p3;
  console.log(val3);
  console.log("random3");
}

// handlePromise();

// function getData() {
//   p1.then((res) => console.log(res));
//   console.log("random");
// }

// getData();
/**------------------------------------------------------ */

const API_URL = "https://api.github.com/uers/shikhar0895";

async function makeAPIcall() {
  const data = await fetch(API_URL);
  //await fetch suspends the function execution until promise is resolved,
  //once resolved it returs a response object which is resolved into JSON
  const jsonVal = await data.json();
  console.log(jsonVal);
}

makeAPIcall().catch((err) => console.error(err));

const p1 = new Promise(() => {
  setTimeout(() => {
    console.log("P1 resolved");
  }, 2000);
});

const p2 = new Promise(() => {
  setTimeout(() => {
    console.log("P2 resolved");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Couldn't settle the promise");
  }, 4000);
});

let PromiseAllmethod = Promise.all([p1, p2, p3]);
let PromiseRacemethod = Promise.race([p1, p2, p3]);
let PromiseAnymethod = Promise.any([p1, p2, p3]);
let PromiseResolvemethod = Promise.resolve([p1, p2, p3]);

// console.log(`PromiseAllmethod: ${PromiseAllmethod}`);
console.log(`PromiseRacemethod: ${PromiseRacemethod}`);
// console.log(`PromiseAnymethod: ${PromiseAnymethod}`);
// console.log(`PromiseResolvemethod: ${PromiseResolvemethod}`);

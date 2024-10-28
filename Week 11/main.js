//Callbacks
function fetchData(callback) {
  console.log("Fetching data...");

  // Simulating an asynchronous operation like an API call
  setTimeout(() => {
    console.log("Data fetched successfully!");
    callback(); // Calling the callback function after the data is fetched
  }, 2000); // Simulating 2-second delay
}

function processData() {
  console.log("Processing the fetched data...");
}

// Calling fetchData and passing processData as a callback
fetchData(processData);

// Callback Hell
function task1(callback) {
  // Do something
  callback();
}

function task2(callback) {
  // Do something else
  callback();
}

function task3() {
  // Final task
}

task1(function () {
  task2(function () {
    task3();
  });
});

// Promises

/*
Pending – The initial state, before the operation has completed.
Fulfilled – The operation was successful, and the promise has a value.
Rejected – The operation failed, and the promise has a reason for the failure.
*/

let myPromise = new Promise((resolve, reject) => {
  let success = true; // Mimic success or failure
  if (success) {
    resolve("Promise fulfilled");
  } else {
    reject("Promise rejected");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value; // 'Promise fulfilled'
  })
  .then((newValue) => {
    console.log("logging new value " + newValue);
  })
  .catch((error) => {
    console.log(error); // 'Promise rejected'
  });

let fetchData1 = new Promise((resolve, reject) => {
  console.log("Fetching data...");

  // Simulating an asynchronous operation, like an API call
  setTimeout(() => {
    let success = true; // Simulate success or failure

    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error: Data fetching failed.");
    }
  }, 2000); // Simulating a 2-second delay
});

// Handling the promise
fetchData1
  .then((message) => {
    console.log(message); // Runs when the promise is resolved
    // You can continue working with the data here
  })
  .catch((error) => {
    console.log(error); // Runs if the promise is rejected
  });

const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    //   console.log(response);
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(users);

/////////// ES8 2017 Async/await ///////////////

const myUsers = {
  userList: [],
};

// async function fetchFun(params) {}
const fetchFun = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFun = async () => {
  const data = await fetchFun();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFun();

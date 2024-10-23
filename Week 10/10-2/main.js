// Web storage API
/* Not a part of DOM - refers to window API 
Available to JS via the global variable WINDOW
*/

// window.alert("Hello World");
// alert("hello class");
// window.alert(window.location);

const myObject = {
  name: "John doe",
  hobbies: ["eat", "sleep", "code"],
  logName() {
    console.log(this.name);
  },
};

// // Session storage
// sessionStorage.setItem("MySessionStore", JSON.stringify(myObject));
// const MySessionData = sessionStorage.getItem("MySessionStore");
// console.log(MySessionData);

// local storage
localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
const key1 = localStorage.key(0);
const key = localStorage.length;
console.log(key1);
console.log(myLocalData.hobbies);
localStorage.clear();
localStorage.removeItem("myLocalStore");

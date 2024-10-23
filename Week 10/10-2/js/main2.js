// import hello, { howdy as h, namaste as n } from "./greetings.js";
import * as Greetings from "./greetings.js";
import User from "./user.js";

// console.log(hello());
// console.log(howdy());
// console.log(namaste());
// console.log(h());
// console.log(n());

console.log(Greetings.hello());
console.log(Greetings.howdy());
console.log(Greetings.namaste());

const user1 = new User("user1@gmail.com", "John Doe");
console.log(user1);
console.log(user1.greeting());

// Higher order functions
/* A higher order functions is a function that does at lease on of the following 
- takes one or more functions as an argument 
- returns a function as a result 
*/

import { posts } from "./posts.js";
posts.forEach((post) => {
  console.log(post);
});

console.clear();

// filter Post
const filterPost = posts.filter((post) => {
  return post.userId === 1;
});

console.log(filterPost);

// Map
const mappedPosts = filterPost.map((post) => {
  return post.id * 10;
});

console.log(mappedPosts);

// Reduce
const reducePostValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducePostValue);

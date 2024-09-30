const professor = {
  name: "sam",
  email: "sam@gmail.com",
  location: "FHSU",
  courses: [
    { title: "font-end1", students: 30 },
    { title: "back-end1", students: 20 },
  ],
  courseList() {
    console.log(`courses taught by professor ${this.name}`);
    professor.courses.forEach((course) => {
      console.log(
        `Course name: ${course.title.toUpperCase()} and no of students: ${
          course.students
        }`
      );
    });
  },
};

professor.courseList();

let keys = Object.keys(professor);
let values = Object.values(professor);
let entries = Object.entries(professor);

console.log(keys); // ["name", "email", "location"]
console.log(values); // ["Sam", "sam@gmail.com"]
console.log(entries); // [["name", "Sam"], ["email", "sam@gmail.com"], ["location", "FHSU"]]

// Loop
keys.forEach((key) => {
  console.log(key);
});

// for (let key in professor) {
//   console.log(`${key}: ${professor[key]}`);
// }

let myArray = ["x", "y", "z"];
console.log(myArray[0]);

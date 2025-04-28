// let a = ["Varun", "Arun", "VA"];

// // const [1,2,3] = a;

// console.log(a);

// const user = {
//   fName: "Varun",
//   lName: "Mysuru",
//   greet:  () =>{
//     console.log(`My name is ${this.fName}`);
//   },
// };

// user.greet();

// const user = {
//   name: "Varun",
//   lName: "Arun",
//   greet: function () {
//     console.log(this);
//   },
// };

// user.greet(); // Hello, Varun (after 1 sec)

// const learning = () => {
//   //   let fName = "V";
//   console.log(this);
// };
// learning();

function L() {
  console.log(this);
}
L();

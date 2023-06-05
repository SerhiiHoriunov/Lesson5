//////////////////////// 1 ///////////////////////////////
// const student = {
//     name: "name",
//     special: "special",
//     gpa: "GPA",
//     studentInfo: function (mcNumber) {
//         console.group(`${name}, info:`);
//         console.log(`Name is: ${this.name}`);
//         console.log(`Special is: ${this.special}`);
//         console.log(`GPA is: ${this.gpa}`);
//         console.log(`Missed classes: ${mcNumber}`);
//         console.groupEnd();
//     },
// };

// const student1 = {
//     name: "Sergo",
//     special: "devOps",
//     gpa: "10",
// };

// const student2 = {
//     name: "Alina",
//     special: "marketing",
//     gpa: "11",
// };

// const student3 = {
//     name: "Lesya",
//     special: "developer",
//     gpa: "9",
// };

// //call
// student.studentInfo.call(student1, '5');
// student.studentInfo.call(student2, '2');
// student.studentInfo.call(student3, '3');

//apply
// student.studentInfo.apply(student1, ['5']);
// student.studentInfo.apply(student2, ['2']);
// student.studentInfo.apply(student3, ['1']);

//bind
// student.studentInfo.bind(student3, '1')();
// student.studentInfo.bind(student1, '11')();
// student.studentInfo.bind(student2, '7')();

/////////////////////////////// 2 /////////////////////////////////

// const showInfo = {
//     showDefinition() {
//         console.log(this.definition);
//         alert(this.definition);
//     },
// };

// const html = {
//     definition: "HTML це стандартизована мова гіпертекстової розмітки документів для перегляду веб-сторінок у браузері",
// };

// const css = {
//     definition: "CSS це каскадні таблиці стилів для опису зовнішнього вигляду веб-сторінок у браузері",
// };

// document
//     .querySelector("#html")
//     .addEventListener("click", showInfo.showDefinition.bind(html));

// document
//     .querySelector("#css")
//     .addEventListener("click", showInfo.showDefinition.bind(css));

////////////////////////// 3 ///////////////////////////

// function Shop(fruit, price, quantity) {
//     const cost = price * quantity;
//     console.log(`${fruit}: ${cost.toFixed(2)} грн`);
// }

// const fruit = [
//     ["Banana", 30, 4.5],
//     ["Cherry", 58, 1.3],
//     ["Orange", 89, 3.4],
// ];

// Shop(fruit[0][0], fruit[0][1], fruit[0][2]);
// Shop(fruit[1][0], fruit[1][1], fruit[1][2]);
// Shop(fruit[2][0], fruit[2][1], fruit[2][2]);

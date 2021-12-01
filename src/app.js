import rendersForms from "./scss/Modules/renderForms";

import renderName from "./scss/Modules/renderName";
import saveData from "./scss/Modules/saveUser";
import show from './scss/Modules/show';
rendersForms()

renderName()
show()
require('bootstrap');

//
// function User(first,last){
//     this.name = first;
//     this.lname= last;
//     this.showInfo = function (){
//         console.log(`${this.name}: ${this.lname}`)
//     }
// }
//
//
// class User{
//     constructor(first,last) {
//         this.name = first;
//         this.lname= last;
//     }
//     showInfo(){ console.log(`${this.name} ${this.lname}`)
//             }
// }
// const person1 = new User('Jonas', 'Jonaitis')
// const person2 = new User('Petras', 'Petrauskas')
//
//
// class Teacher extends User{
//     constructor(first, last, subject) {
//         super(first, last)
//         this.subject= subject;
//     }
//     showInfo() {
//         console.log(`${this.name} ${this.lname} ${this.subject}`)
//     }
// }
// const teacher1 = new Teacher('Vardenis', "pavardenis", 'php')
// person1.showInfo()
// person2.showInfo()
// teacher1.showInfo()
//
// //----------------------
//
// function books (name, pages, year){
//     this.name = name;
//     this.pages = pages;
//     this.year = year;
//     this.showInfo = function (){
//         console.log(`Knyga: "${this.name}", ${this.pages} psl., Metai: ${this.year}`)
//     }
// }
// const book1 = new books('Holivudas', '250', 2021)
// const book2 = new books('Tvinpyksas', '123', 1954)
// const book3 = new books('Raudonkepuraite', '547', 1547, books.prototype.showBook = function (){
//     console.log(this.name);
// })
// book1.showInfo()
// book2.showInfo()
// book3.showBook()
// //----------------------------------------------


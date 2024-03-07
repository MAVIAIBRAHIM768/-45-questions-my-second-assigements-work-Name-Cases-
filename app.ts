// 1st,lowercase ,2nd,uppercase and 3rd,titlecase,

// 1st, lower case
let personName: string="ameer mavia";
console.log("lowercase:", personName.toLowerCase());

// 2nd upper case

console.log("UPPERCASE:",personName. toLocaleUpperCase());

// 3RD TITLE CASE.

console.log("titlecse:",personName.
replace(/\bw/g, c => c.toUpperCase()));
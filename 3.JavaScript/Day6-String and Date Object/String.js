// String

// const str1 = "Javascript";
// const str2 = "Javascript is awesome";
// const day = 18;
// const str3 = `Strike is coming soon`;

// console.log(str1, str2, str3);
// console.log(`Strike is coming on ${day}th october`);

// console.log(str3.length); //counts spsces as well
// console.log(str1[2]);

// str1[2] = "N"; // immutable
// console.log(str1);

// // uppercase
// console.log(str1.toUpperCase()); // returns a new string
// console.log(str1.toLowerCase()); // returns a new string

// const str = "Javascript is awesome is javascript";

// console.log(str.indexOf("Awe")); // should be contegious, returns first occurence, in real world we convert both to lower or upper
// console.log(str.lastIndexOf("scr")); // returns the last occurence
// console.log(str.includes("awesome")); // returns true or false based on presence or absebse

// slice
// console.log(str.slice(1, 4)); // start index, end index, end is not included

// console.log(str.slice(-5, -1));
// console.log(str.slice(-5)); //returns last 5 elements

// subString also work as same as slice, the only difference is you can't give negative index to sub String method.
// console.log(str.substring(1, 9));

// const a = "Rohit";
// const b = "Aditya";
// const c = a + " " + b;
// console.log(c);
// console.log(`${a} ${b}`);

// console.log(24 + " Rohan");
// console.log(10 + "rohan" + 20);
// console.log(20 + 12 + "rihana"); // evaluated from left to right 20+12=32+rihana=32rihana, no converted to string

// replace and replaceAll
const str = "     javascript    is awesome    is javascript    ";
// console.log(str.replace("java", "Type")); // replaces first occurence
// console.log(str.replaceAll("java", "Type")); // replaces all occurence

// console.log(str.trim()); // remove whitespaces from start and end
// console.log(str.trimStart()); // remove whitespaces from start
// console.log(str.trimEnd()); // remove whitespaces from end

// split method

let names = "sunny,anmol,sakshi,garima,simran";
console.log(names.split(","));

// let tag = prompt("Какой тег вы хотите найти?", "h2");
// let regexp = new RegExp(`<${tag}>`);

// console.log(regexp);

// let str = 'Любо, братцы, любо!';

// console.log(str.match(/любо/));
// console.log(str.match(/любо/i));
// console.log(str.match(/любо/g));
// console.log(str.match(/любо/gi));

// let str = 'i must learning English';
// let newStr = str.replace(/must/, 'should');

// console.log(newStr);



// let regExp = /english/i;
// console.log(regExp.test(newStr));



// let str = '+7(903)-123-45-67';
// let regExp = /\d/g;
// let arr = str.match(regExp); 
// console.log(arr);

// let newStr = arr.join('');
// console.log(newStr);

// let str = 'Существует ли стандарт CSS4?'
// let regExp = /CSS\d/;
// let newStr = str.match(regExp);

// console.log(newStr);


// let str = '+7(903)-123-45-67';
// console.log(str.replace(/\D/g, ''));

// let str = 'Mary had a little lamb';
// console.log(/^Mary/.test(str));
// console.log(/lamb$/.test(str));

// let time = '12:45';
// console.log(/^\d\d:\d\d$/.test(time));

// let str = `Винни: 1
// Пятачок: 2
// Слон: 3`;

// let arr = str.match(/\d$/gm);

// let newStr = arr.join(',');
// console.log(newStr);

// let str = 'Hello, Java';
// let str1 = 'Hello, JavaScript';

// let regExp = /\bJava\b/;
// console.log(regExp.test(str));
// console.log(regExp.test(str1));


// let str = '1 23 34 566 3 5 09 34';
// let regExp = /\b\d\d\b/g;
// console.log(str.match(regExp));


// let str = 'xo-xo-xo';
// console.log(str.replace(/xo/gi, (match, offset) => offset));

let regexp = /javascript/g;  
alert( regexp.test("javascript"));
alert( regexp.test("javascript")); 
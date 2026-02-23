
let js = "amazing";

console.log(23);

let firstName = "Stellar";
console.log(firstName);

// Values and Variables

/*
let country = "Nigeria";
let continent = "Africa";
let population = 600;

console.log(country);
console.log(continent);
console.log(population);


// Datatypes

let isIsland = false;

let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


LECTURE: let, const and var

let language;


language = "Yoruba"
const country = "Nigeria"
const continent = "Africa";
let isIsland = false;
isIsland = true;

console.log(typeof isIsland);
console.log(typeof continent);
console.log(typeof country);
console.log(typeof language);
*/

// Coding Challenge #1
// Test Data 1
/* 
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Test Data 2
let markMass1 = 95;
let johnMass1 = 85;
let markHeight1 = 1.88;
let johnHeight1 = 1.76;
let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / johnHeight1 ** 2;
console.log(markBMI1, johnBMI1);
let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);
*/ 

// Basic Operators
let country = "Nigeria";
let continent = "Africa";
let population = 10;
let language = "Yoruba"
console.log(population / 2);
population++;
console.log(population);
console.log(population > 200);
console.log(population < 33);
let description = 
country +
" is in"
continent + 
" and its"
population + 
" million people speak" 
language;
console.log(description);

// Strings and Template Literals
const newMe = "Oluwatobiloba";
const birthYear = 2002;
const year = 2026;
const job = "lawyer, developer and fashion designer.";
const Stellar = `I'm ${newMe}, a ${year - birthYear} years old. I am a ${job}`;
console.log(Stellar);

// Assignment on template literals
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description1);

// What if and else statement
const ass = 23;
const noAss = 0;
if (ass >= 1) {
    console.log("Yes");
} else {
    console.log("No");
};

// Ass on if else statement
if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is lower than the average`);
};

// Coding Challenge #2
// Test Data
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
};

// Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Equality operators
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) 
    console.log("Only 1 border!");
else if (numNeighbours > 1)
    console.log("More than 1 border");
else console.log("No borders");

// Logical operators
 if (language === 'english' && population < 50 && !isIsland)  
  { console.log(`You should live in ${country} :)`); 
  } else {console.log(`${country} does not meet your criteria :`);};

  // Coding Challenge #3 
const scoDolphins = (96 + 108 + 89) / 3;
const scoKoalas = (88 + 91 + 110) / 3;
console.log(scoDolphins, scoKoalas);
if (scoDolphins > scoKoalas) {
    console.log("Dolphins won")
} else if (scoKoalas > scoDolphins) {
    console.log("Koalas won")
} else if (scoDolphins === scoKoalas) {
    console.log("We have a draw")
};

// The Switch Statement
const day = "wednesday";
switch (day) {
    case 'monday':
        console.log('A cool day!!!');
        break;
    case 'tuesday':
        console.log('I am me');
        break;
    case 'wednesday':
        console.log('wednesday is cool');
        break;
};

const natLanguage = 'spanish';
switch (natLanguage) {
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D')
        break;
};

if (natLanguage == 'chinese') {
   console.log('MOST number of native speakers!');
} else if (natLanguage == 'spanish')
   {
   console.log('2nd place in number of native speakers');    
} else if (natLanguage == 'english') {
   console.log('3rd place');
};

// The Conditional (Ternary) Operator 
console.log(`${country}'s population is ${population > 33 ? 'above' :  
'below'} average`);


// Coding Challenge #4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); 
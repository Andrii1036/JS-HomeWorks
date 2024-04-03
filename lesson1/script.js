// -----------------------------Task1-----------------------------------------------------------------------------------
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let var1='hello';
let var2='owu';
let var3='com';
let var4='ua';
let var5=1;
let var6=10;
let var7=-999;
let var8=123;
let var9=3.14;
let var10=2.7;
let var11=16;
let var12=true;
let var13=false;

console.log('------Task 1--------');

console.log(`var1=${var1}`);
console.log(`var2=${var2}`);
console.log(`var3=${var3}`);
console.log(`var4=${var4}`);
console.log(`var5=${var5}`);
console.log(`var6=${var6}`);
console.log(`var7=${var7}`);
console.log(`var8=${var8}`);
console.log(`var9=${var9}`);
console.log(`var10=${var10}`);
console.log(`var11=${var11}`);
console.log(`var12=${var12}`);
console.log(`var13=${var13}`);

// ------------------------------Task2-------------------------------------------------------------------
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName='Andrii';
let middleName='Volodimirovich';
let lastName='Kovalyk';
let space = ' '
let person =  lastName+space+firstName+space+middleName;

console.log('--------Task 2------------')

console.log(person)

//-------------------Task3------------------------------------------------------
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log('--------------Task 3-------------')

console.log(`data type of variable a(100) - ${typeof(a)}`)
console.log(`data type of variable b('100') - ${typeof(b)}`)
console.log(`data type of variable c(true) - ${typeof(c)}`)

//-----------------------------Task4---------------------------------------
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('enter your name')
let fatherName=prompt('enter your middle name')
let age=+prompt("enter your age")

console.log('----------Task4--------------')

console.log(`Hello,my name is ${name} ${fatherName} and I'm ${age} year old`)
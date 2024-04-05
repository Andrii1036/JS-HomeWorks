// Масиви та об'єкти:
// ------------------task 1.1-----------------------------------------
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [1, 2, '3', true, {name: 'Andrii', age: 33}, false, 'js', [1, 2, 3, 4], -15, 0];

console.log('------------task 1.1--------------------------');
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// ------------------task 1.2-----------------------------------------
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'Harry Potter and the philosopher\'s Stone', pageCount: 254, genre: 'fantasy'};
let book2 = {title: 'Harry Potter and the Chamber of Secrets', pageCount: 272, genre: 'fantasy'};
let book3 = {title: 'Harry Potter and the Prisoner of Azkaban', pageCount: 360, genre: 'fantasy'};

console.log('--------------task 1.2---------------------')
console.log(book1)
console.log(book2)
console.log(book3)

// ------------------task 1.3-----------------------------------------
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: 'Head First HTML and CSS',
    pageCount: 740,
    genre: 'technical literature',
    authors: [{name: 'Eric Freeman', age: 33}, {name: 'Elisabeth Robson', age: 33}]
};
let book12 = {
    title: 'Head First JavaScript Programming',
    pageCount: 704,
    genre: 'technical literature',
    authors: [{name: 'Eric Freeman', age: 33}, {name: 'Elisabeth Robson', age: 33}]
};
let book13 = {
    title: 'The Modern JavaScript Tutorial - Part I',
    pageCount: 697,
    genre: 'technical literature',
    authors: [{name: 'Ilya Kantor', age: 33}]
};

console.log('-----------------task 1.3-------------------------')
console.log(book11)
console.log(book12)
console.log(book13)

// ------------------task 1.4-----------------------------------------
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Andrii', username: 'Andrii1036', password: 'wewefewfwf'},
    {name: 'Misha', username: 'Misha1036', password: '3245252352'},
    {name: 'Olya', username: 'Olya1036', password: 'rth54ugddfhr'},
    {name: 'Katya', username: 'Katya1036', password: '346yewrg'},
    {name: 'Artem', username: 'Artem1036', password: '34egryer45'},
    {name: 'Kristina', username: 'Kristina1036', password: '43345dagadg'},
    {name: 'Masha', username: 'Masha1036', password: '5346ggdfg4'},
    {name: 'Alina', username: 'Alina1036', password: 'dgsdhfbds'},
    {name: 'Oleg', username: 'Oleg1036', password: ';lnlbsadrhdg'},
    {name: 'Igor', username: 'Igor1036', password: 'earyeryqe4'},
];

console.log('-----------------task 1.4--------------------------------')
console.log(`user ${users[0].username} password is '${users[0].password}'`);
console.log(`user ${users[1].username} password is '${users[1].password}'`);
console.log(`user ${users[2].username} password is '${users[2].password}'`);
console.log(`user ${users[3].username} password is '${users[3].password}'`);
console.log(`user ${users[4].username} password is '${users[4].password}'`);
console.log(`user ${users[5].username} password is '${users[5].password}'`);
console.log(`user ${users[6].username} password is '${users[6].password}'`);
console.log(`user ${users[7].username} password is '${users[7].password}'`);
console.log(`user ${users[8].username} password is '${users[8].password}'`);
console.log(`user ${users[9].username} password is '${users[9].password}'`);
//
// Логічні розгалуження:

// ------------------------task 2.1------------------------------------------------
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

console.log('---------------------task2.1-------------')
console.log('завдання закоментоване допоки до нього не дойде черга, щоб не заважало перевіряти інші завдання')


// let x = prompt('enter a numeric value')
//
// let hasLetter =/\D?[^-0-1-2-3-4-5-6-7-8-9]/g.test( `${x}`)
//
// if (x) {
//     if (x.includes(' ')) {
//         alert('Please enter your value without "space" ')
//     } else if (x != 0) {
//         if (hasLetter) {
//             alert('Please use only numeric value')
//         }else {
//             alert('Вірно')
//         }
//     } else if (x == 0) {
//         alert('Невірно')
//     } else {
//         console.log('jhfjhj')
//     }
//
// } else {
//     alert('Please enter your value')
// }


// -----------------------task2.2-----------------------------------
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).

console.log('---------------------task2.2-------------')
console.log('завдання закоментоване допоки до нього не дойде черга, щоб не заважало перевіряти інші завдання')


// let time= +prompt('enter the minute value in the interval 0-59 ')
//
// if(time>=0&&time<15){
//     alert('this is the first quarter')
// }else if(time>=15&&time<30){
//     alert('this is the second quarter')
// }else if(time>=30&&time<45){
//     alert('this is the third quarter')
// }else if(time>=45&&time<60){
//     alert('this is the fourth quarter')
// }else{
//     alert('Please enter correct value')
// }


// -----------------------task2.3---------------------------------------------------------
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).

console.log('---------------------task2.3-------------')
console.log('завдання закоментоване допоки до нього не дойде черга, щоб не заважало перевіряти інші завдання')

// let day = +prompt('Enter day number');
//
// if (day >= 1 && day <= 10) {
//     alert('this is the first decade of the month')
// } else if (day >= 11 && day <= 20) {
//     alert('this is the second decade of the month')
// } else if (day >= 21 && day <= 30) {
//     alert('this is the third decade of the month')
// } else if (day == 31) {
//     alert('this is the last day of the month')
// }else{
//     alert('Please enter correct value from1 to 31')
// }

// -----------------------task 2.4------------------------------------------------------------------
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

console.log('---------------------task2.4-------------')
console.log('завдання закоментоване допоки до нього не дойде черга, щоб не заважало перевіряти інші завдання')

// let dayOfWeak = prompt('Please Enter the numeric value of the day of the week')
//
// switch (dayOfWeak) {
//     case '1':
//         document.write('Monday')
//         break;
//     case '2':
//         document.write('Tuesday')
//         break;
//     case '3':
//         document.write('Wednesday')
//         break;
//     case '4':
//         document.write('Thursday')
//         break;
//     case '5':
//         document.write('Friday')
//         break;
//     case '6':
//         document.write('Saturday')
//         break;
//     case '7':
//         document.write('Sunday')
//         break;
//     default:
//         alert('Enter valid value')
// }


// --------------------------task 2.5---------------------------------------------------------
// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

console.log('---------------------task2.5-------------')
console.log('завдання закоментоване допоки до нього не дойде черга, щоб не заважало перевіряти інші завдання')

// let var1 = +prompt('Enter first number');
// let var2 = +prompt('Enter second number');
//
// if(var1>var2){
//     alert(`the number ${var1} is the largest`)
// }else if(var1<var2){
//     alert(`the number ${var2} is the largest`)
// }else if(var1==var2){
//     alert('the numbers are the same')
// }else{
//     alert('Please use only numeric symbol')
// }
//

// ------------------------task 2.6------------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
// тобто ті, які приводиться до false, а це 0 null undefined і тд).

console.log('---------------------task2.6-------------')

let x;//потрвбно присвоїти значення

if (!x) {
    x = 'default'
    console.log('since the variable "x" has a falsy value, it is assigned the value "default"')
} else {
    console.log('everything is fine variable "x" has a true value')
}
//
//// ------------------------task 2.7------------------------------
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість
//     довша за 5 місяців вивести в консоль "Супер".

console.log('-----------------task 2.7-------------------')

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`Супер тривалість курсу "${coursesAndDurationArray[0].title}" довша ніж 5 місяців`)
} else {
    console.log(`нажаль курс "${coursesAndDurationArray[0].title}" занадто короткий`)
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`Супер тривалість курсу "${coursesAndDurationArray[1].title}" довша ніж 5 місяців`)
} else {
    console.log(`нажаль курс "${coursesAndDurationArray[1].title}" занадто короткий`)
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`Супер тривалість курсу "${coursesAndDurationArray[2].title}" довша ніж 5 місяців`)
} else {
    console.log(`нажаль курс "${coursesAndDurationArray[2].title}" занадто короткий`)
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`Супер тривалість курсу "${coursesAndDurationArray[3].title}" довша ніж 5 місяців`)
} else {
    console.log(`нажаль курс "${coursesAndDurationArray[3].title}" занадто короткий`)
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`Супер тривалість курсу "${coursesAndDurationArray[4].title}" довша ніж 5 місяців`)
} else {
    console.log(`нажаль курс "${coursesAndDurationArray[4].title}" занадто короткий`)
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`Супер тривалість курсу "${coursesAndDurationArray[5].title}" довша ніж 5 місяців`)
} else {
    console.log(`нажаль курс "${coursesAndDurationArray[5].title}" занадто короткий`)
}
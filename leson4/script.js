// ---------------------task1---------------------------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) {
    let area = a * b
    return area
}

console.log('---------------task 1------------------')
console.log(areaRectangle(5, 8))

// ---------------------task2---------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    let area = 3.14 * r * r
    return area
}

console.log('-------------task 2------------')
console.log(areaCircle(5))

// -------------task3-------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    let area = 3.14 * r * r * h
    return area
}

console.log('-------------task 3------------')
console.log(areaCylinder(5, 3))

// --------------------task4-----------------------
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function itemOfArr(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}

console.log('--------------task4-------------')
itemOfArr(arr1)

// ---------------------------task5-------------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<h2>---------------Task 5------------</h2>`)
    if (text) {
        document.write(`<p>${text}</p>`)
    } else {
        alert('Please enter some text')
    }
}

createParagraph('Hello word')

// --------------------task6---------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUL(...txt) {
    document.write(`<h2>---------------Task 6------------</h2>`)
    document.write(`<ul>`)
    for (let txtElement of txt) {
        document.write(`<li>${txtElement}</li>`)
    }
    document.write(`</ul>`)
}

createUL('Andrii', 'Masha', 'Oleg', 'Olena')

function createUL2(txt) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}

createUL2('Okten')


// --------------------task7---------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUL3(txt, liCount) {
    document.write(`<h2>---------------Task 7------------</h2>`)
    document.write(`<ul>`)
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`)
}

createUL3('Okten', 5)

// --------------------task8---------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr2 = [1, 2, 'Andrii', true, '5', false, 'Okten']

function createUL4(arr) {
    document.write(`<h2>---------------Task 8------------</h2>`)
    document.write(`<ul>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

createUL4(arr2)

// --------------------task9---------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let arr3 = [
    {
        id: 1,
        name: 'Andrii',
        age: 33
    },
    {
        id: 2,
        name: 'Igor',
        age: 30
    },
    {
        id: 3,
        name: 'Oleg',
        age: 35
    }
]

function userBlock(arr) {
    document.write(`<h2>---------------Task 9------------</h2>`)
    document.write(`<div style="display: flex;justify-content: space-between;padding: 50px;flex-wrap: wrap">`)
    for (let arrElement of arr) {
        document.write(`
                  <div style="width: calc(30%);display: flex;border: 2px solid black; flex-direction: column;align-items: center">
                    <h2>${arrElement.id} - ${arrElement.name}</h2>
                    <h3>${arrElement.age} year old</h3>
                  </div>
        `)
    }
    document.write(`</div>`)
}

userBlock(arr3)

// --------------------task10---------------------------
// - створити функцію яка повертає найменьше число з масиву

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -15, -12, -5, 11, 12, 15, 17, 18, 19, 100, -1]
let minimal = 0

function minimalValue(arr) {
    document.write(`<h2>---------------Task 10------------</h2>`)
    document.write(`<p>${numberArr}</p>`)
    for (let arrElement of arr) {
        if (arrElement <= minimal) {
            minimal = arrElement
        }
    }
    document.write(`<p>minimal value is ${minimal}</p>`)
}

minimalValue(numberArr)

// --------------------task11---------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sum = 0

function sumArr(arr) {
    document.write(`<h2>---------------Task 11------------</h2>`)
    document.write(`<p>${numberArr}</p>`)
    for (let arrElement of arr) {
        sum += arrElement
    }
    document.write(`<p>sum of all array elements are ${sum}</p>`)
}

sumArr(numberArr)

// --------------------task12---------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let newArr = []

function swap(arr, index1, index2) {
    document.write(`<h2>---------------Task 12------------</h2>`)
    document.write(`<p>${numberArr} - початковий масив</p>`)
    for (let i = 0; i < numberArr.length; i++) {
        newArr[i] = arr[i]
    }
    newArr[index1] = arr[index2]
    newArr[index2] = arr[index1]

    document.write(`індекси які потрібно поміняти місцями:${index1} і ${index2}`)
    document.write(`<p>${newArr} - змінений масив</p>`)
}

swap(numberArr, 0, 8)

// --------------------task13---------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let currencyValuesArr = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    document.write(`<h2>---------------Task 13------------</h2>`)
    if (Array.isArray(currencyValues)) {
        let sum=undefined
        for (let currencyValuesItem of currencyValues) {
            if (currencyValuesItem.currency == exchangeCurrency) {
                sum = sumUAH / currencyValuesItem.value
                document.write(`<p>${sumUAH} гнр. це ${sum} доларів по курсу ${currencyValuesItem.value}</p>`)
            }
        }
        if(!sum){
            document.write(`нажаль валюти ${exchangeCurrency} не знайдено`)
        }
    }else{
        document.write(`Щось пішло не так(((`)
    }
}

exchange(10000, currencyValuesArr, 'USD')


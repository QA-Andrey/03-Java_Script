// // // 1. Написать скриптик, который сосчитает и выведет результат от 
// // // возведения 2 в степень 10, начиная со степени 1.

for (power = 1; power <=10; power++ ){
        console.log ('2 в степени', power, '=', 2**power)
}


// // // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень,
// // //  в которую будет возводиться число 2

let power = function (b){
    for (i=1; i<=b; i++) {
        console.log ('2 в степени ', i, '= ', Math.pow(2,i))
    }
}
power (4)


// // // 2. Написать скрипт, который выведет 5 строк в консоль таким образом,
// // //  чтобы в первой строчке выводилось :), во второй :):) и так далее

let smile = ''
for (i=1; i<=5; i++){
    console.log (smile + ':)')
    smile = smile + ':)'
}


// // 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// // которая и будет выводиться в консоль (как в условии смайлик),
// //  а также количество строк для вывода 
// // e.g. function printSmile(stroka, numberOfRows)

let printSmile = function (a, b){
        for (d=0; d<b; d++){
            console.log (a)
        a = a + ':)'
        }
}

printSmile (':)', '4')


// // 2**. Добавить в задание 2* 2 проверки
// // 1 - что введенное количество строк является ЧИСЛОм;
// // 2 - что введенное количество строк - положительное число.

let printSmile = function (a, b){
    if (isNaN (b)) {
        console.log ("Пожалуйста, введите цифровое значение.")
    }
    else if (b<0) {
        console.log ('Пожалуйста, введите количество строк больше 0.')
    }
    else {
        for (d=0; d<b; d++){
            console.log (a)
        a = a + ':)'
        }
}
}

printSmile (':)', 3)
printSmile (':)', -3)
printSmile (':)', '3')
printSmile (':)', 'qq')


// // 3**. Написать функцию, которая принимает на вход слово.
// // Задача функции посчитать и вывести в консоль, сколько в слове гласных,
// // и сколько согласных букв. e.g. function getWordStructure(word)
// // В консоли: 
// // Слово (word) состоит из  (число) гласных и (число) согласных букв

// // Проверки: 'case', 'Case', 'Check-list'

let vow = ['a', 'e', 'i', 'o', 'u']
let cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j','k','l','m','n','p','q', 'r', 's', 't', 'v', 'w','x', 'y', 'z']

let structure = function (word) {
    let word1 = word.toLowerCase().split('')
    let vowIntersection = word1.filter (x=> vow.includes(x))
    let consIntersection = word1.filter (x=> cons.includes (x))

    console.log('Слово', word, 'состоит из', vowIntersection.length, 'гласных и ', consIntersection.length, 'согласных.' )
}

structure ('case')
structure ('Case')
structure ('Check-list')


// // 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// // e.g. function isPalindrom(word)
// // Проверки: 'abba', 'Abba'

let isPalindrom = function (word) {
    let word1 = word.toLowerCase ()
    let a = word1.split ('')
    let b = a.reverse ()
    let d = b.join ('')
    
    console.log (word1 === d)
}

isPalindrom ('abba')
isPalindrom ('Abba')
const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 1ый вариант записи
// for (i=0; i<enterprises.length; i++) {
//   a = 0
//   for (k=0; k<enterprises[i].departments.length; k++) {
//   a += enterprises[i].departments[k].employees_count
//   }
//   if (a>0) {
//     console.log (enterprises[i].name, '('+ a + ' сотрудников)')
//   }
//   else {
//     console.log (enterprises[i].name, '(нет сотрудников)')
//   }
//   for (j=0; j<enterprises[i].departments.length; j++) {
//     if (a>0) {
//     console.log ('-',  enterprises[i].departments[j].name, '('+ enterprises[i].departments[j].employees_count +' сотрудников)')
//     }
//     else (console.log ('-',  enterprises[i].departments[j].name, '(нет сотрудников)'))
//   }
// }


// 2ой вариант записи

// enterprises.forEach (company => {
//     if (company.departments) {
//     a = 0
//     company.departments.forEach (dept => {
//     a += dept.employees_count
//     })
//     if (a>0){
//       console.log (company.name, '(' + a + ' сотрудников)')
//     }
//     else {
//       console.log (company.name, '(нет сотрудников)')
//     }
//         company.departments.forEach (dept => {
//           if (a>0) {
//             console.log ('-', dept.name, '(' + dept.employees_count + ' сотрудников)')
//           }
//           else {
//             console.log ('-', dept.name, '(нет сотрудников)')
//           }
//         })
//     }
// })




// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, 
// к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

// console.log (enterprises[0].departments[0].id)

// var loopEnd = false
// var lastLoop = false

// let getEnterpriseName = function (data) { 
//   for (i=0; i<enterprises.length; i++) {
//     for (j=0; j<enterprises[i].departments.length;j++){
//       if (enterprises[i].departments[j].id == data || enterprises[i].departments[j].name == data ) {
//           loopEnd = true
//           console.log (enterprises[i].name)
//       break}

//       else if (i == enterprises.length-1 && j == enterprises[i].departments.length-1) { 
//           lastLoop = true}
      
//     } 
//   if (loopEnd) {
//       break}
//   else if (lastLoop) {
//       console.log ('There is no such department!')}
//   }
//   }
// getEnterpriseName ("Отдел маркетинга")



// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// max = 0
// enterprises.forEach (item => {
//   if (item.id > max) {
//     max = item.id
//   }
//   item.departments.forEach (depts => {
//   if (depts.id > max) {
//     max = depts.id
//   }
//   })
// })
//   console.log (max)

// const addEnterprise = function (company) {enterprises.push (
//   {
//   id: max+1,
//   name: company,
//   departments: [],
//   }
// )}

// addEnterprise ('Предприятие 4')
// console.log (enterprises)


// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия,
//  в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")

// newMax = 0
// enterprises.forEach (item => {
//   if (item.id > newMax) {
//     newMax = item.id
//   }
//   item.departments.forEach (depts => {
//   if (depts.id > newMax) {
//     newMax = depts.id
//   }
//   })
// })

// let addDepartment = function (compID, deptName) {
//   a = enterprises.findIndex (item => item.id === compID)
//   if (enterprises[a]) {
//       enterprises[a].departments.push ({id: newMax+1, name: deptName, employees_count:0})
//       console.log (enterprises[a].name, enterprises[a].departments)
//   }
//   else {
//     console.log ('There is no Enterprise with this ID')
//   }
// }

// addDepartment (1, 'Название нового отдела')


// 5. Написать функцию для редактирования названия предприятия. 
// Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

// let editEnterpriseName = function (compID, newName) {
//     a = enterprises.findIndex (item => item.id === compID)
//     if (enterprises[a]) {
//       enterprises[a].name = newName
//       console.log (enterprises)
//     }
//     else {
//       console.log ('There is no Enterprise witр this ID')
//     }
//   }

// editEnterpriseName (5, 'Test')


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

const editDepartmentName = function (deptID, newName) {
  enterprises.forEach (comp => {
    a = comp.departments.findIndex ( dept => dept.id === deptID)
    // console.log (a)
    if (a == -1) { }
    else {
      comp.departments[a].name = newName
      console.log (comp.departments)
    }
  })
 console.log ('There is no department with this ID')
}

 editDepartmentName (1, 'Test')


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)


// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)


const company = [
  {
    id: 1,
    name: "Компания",
    parent: null,
    users_count: 10,
    children: [
      {
        id: 2,
        name: "Отдел тестирования",
        parent: 1,
        users_count: 7,
        children: [
          {
            id: 2,
            name: "Тестирование Web",
            parent: 2,
            users_count: 5,
          },
          {
            id: 3,
            name: "Тестирование Mobile",
            parent: 2,
            users_count: 0,
          },
        ]
      },
      {
        id: 4,
        name: "Отдел маркетинга",
        parent: 1,
        users_count: 30,
      },
      {
        id: 5,
        name: "Администрация",
        parent: 1,
        users_count: 25,
        children: [
          {
            id: 6,
            name: "Бухгалтерия",
            parent: 5,
            users_count: 10,
          },
          {
            id: 7,
            name: "Менеджмент",
            parent: 5,
            users_count: 15,
            children: [
              {
                id: 8,
                name: "Подраздел менеджмента 1",
                parent: 7,
                users_count: 5,
              },
              {
                id: 9,
                name: "Подраздел менеджмента 2",
                parent: 7,
                users_count: 10,
              }
            ]
          },
          {
            id: 10,
           	name: "HR",
          	parent: 5,
            users_count: 1,
          }
        ]
      },
    ]
  }
]


let childrenRecursion = function (obj, data) {
  for (key in obj) {
    if (obj[key].parent == null) {
    console.log (obj[key].name, obj [key].users_count)
    }
    else {
    console.log (data, obj[key].name, obj [key].users_count)
    }
    childrenRecursion (obj[key].children, data + '--')
  }
}
   
childrenRecursion (company, '')



/* 
Написать функцию: 

Функция строит древовидный список компании.
При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.

Пример:

Компания (10)
-- Отдел тестирования (7)
---- Тестирование Web (5)
---- Тестирование Mobile (0)
-- Отдел маркетинга (30)
-- Администрация (25)
---- Бухгалтерия (10)
---- Менеджмент (15)
------ Подраздел менеджмента 1 (5)
------ Подраздел менеджмента 2 (10)
---- HR (1)
*/




//     item.children.forEach (kid => {
//         console.log ('--', kid.name, '(' + kid.users_count + ')')
//         if (kid.children) {
//           kid.children.forEach ( child2 => {
//             console.log ('----', child2.name, '(' + child2.users_count + ')')
//             if (child2.children) {
//               child2.children.forEach ( child3 => console.log ('------', child3.name, '(' + child3.users_count + ')'))
//             }  
//           }) 
//         }
//     })
//   }
// })


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела.
// Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

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

const deleteDepartment = function (deptID) {
    b = -2
    enterprises.forEach (compnay => {
    a = compnay.departments.findIndex (dept => dept.id == deptID)
        if (a>-1) {
            if (compnay.departments[a].employees_count > 0) {
                console.log ('You can not delete this department as it has employees')
                b = a 
            }
            else {
                compnay.departments.splice(a,1)
                b = a      
                console.log (compnay.name, compnay.departments)
            }
            
    }    
  })
  if (b == -2) {
  console.log ('There is no department with this ID')
  }
  }
  deleteDepartment (10)
  
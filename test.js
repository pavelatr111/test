// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] }
  ];
  
  const min = (arr) => {
      return arr[0] === null ? 0 : arr[0];
    };
  
  const max = (arr) => {
      return arr[1] === null ? Infinity : arr[1];
    };
  
  
  //фильтрация
  function filtered(arrayCourses, arrayRange) {
    return arrayCourses.filter(item => {
      return min(item.prices) <= max(arrayRange) && max(item.prices) >= min(arrayRange)
    });
  }
  
  //Варианты цен (фильтры), которые ищет пользователь
  let requiredRange1 = [0, 0];
  let requiredRange2 = [100, 350];
  let requiredRange3 = [200, null];
  
  
  console.log(filtered(courses, requiredRange1));
  console.log(filtered(courses, requiredRange2));
  console.log(filtered(courses, requiredRange3));
  
  //сортировка
  
  function sortedCheap (arrayCourses) {
    
    return arrayCourses.sort((courseA, courseB) => {
     return min(courseA.prices) - min(courseB.prices)
    })
    
  
  }
  
  console.log(sortedCheap(courses));
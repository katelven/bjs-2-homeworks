function parseCount(number) {
    let parse = Number.parseInt(number, 10);
    if (isNan(parse)) {
      throw new Error("Невалидное значение");
    }
    return parse;
  }

  function validateCount(number) {
      try {
          return parseCount(number);
      } catch (Error) {
        return Error;
      }
  }
  
  ///задача 2
  class Triangle {
      constructor(a, b, c) {
        if ((a > (b + c)) || (b > (a + c)) || (c > (a + b))) {
          throw new Error("Треугольник с такими сторонами не существует");
        }
      }
    
      getPerimeter() {
        return a + b + c;
      }
    
      getArea() {
        let halfPerimeter = getPerimeter() / 2;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
        return Number(area.toFixed(3));
      }
    }
    
    function getTriangle(a, b, c) {
      try {
        let triangle = new Triangle(a, b, c);
        return triangle;
      } catch (Error) {
        return {
          getPerimeter() {
            return "Ошибка! Треугольник не существует"
          },
    
          getArea() {
            return "Ошибка! Треугольник не существует"
          },
        }
      }
    }
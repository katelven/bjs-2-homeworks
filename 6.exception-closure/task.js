function parseCount(number) {
    let parse = Number.parseInt(number, 10);
    if (isNaN(parse)) {
      throw new Error("Невалидное значение");
    }
    return parse;
  }

  function validateCount(number) {
      try {
          return parseCount(number);
      } catch (error) {
        return Error;
      }
  }
  
  ///задача 2
  class Triangle {
      constructor(a, b, c) {
        if ((a > (b + c)) || (b > (a + c)) || (c > (a + b))) {
          throw new Error("Треугольник с такими сторонами не существует");
        }
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
      }
    
      getPerimeter() {
        return this.side1 + this.side2 + this.side3;
      }
    
      getArea() {
        let halfPerimeter = getPerimeter() / 2;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
        return Number(area.toFixed(3));
      }
    }
    
    function getTriangle(a, b, c) {
      try {
        return new Triangle(a, b, c);;
      } catch (error) {
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
function checkTriangle(x, y, z) {


    if (x == y && y == z)
      console.log("Equilateral Triangle");
  
  
    else if (x == y || y == z || z == x)
      console.log("Isosceles Triangle");
  
  
    else
      console.log("Scalene Triangle");
  }
  
  let x = 8, y = 7, z = 9;
  
  checkTriangle(x, y, z);
  

    
/* L*W = 3*4.5 =13.5
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
   
   let area;
   // Write your code here
   area = length * width  
   return area;
}
let result = getArea(3,4.5)
console.log(result);

function getPerimeter(length, width) {
   let perimeter;
   // Write your code here
   perimeter =  2 + (length * width)
   return perimeter;
}
 let answer = getPerimeter(3,4.5)
console.log(answer);
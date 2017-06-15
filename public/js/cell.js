/* jshint esversion: 6*/

//Constructor Function
function Cell(width, height, color){
  this.width = width || 100;
  this.height = height || 100;
  this.color = color || 'red';
}

// const Cell = {
//   width: 100,
//   height: 100,
//   color: 'red'
// };

// Factory Function
// function createCell(width, height, color){
//   const Cell = {
//     width: width,
//     height: height,
//     color: color
//   };
//   return Cell;
// }

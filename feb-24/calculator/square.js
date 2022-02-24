// var calcluator = calcluator || {};

// calcluator.square = function(g){
//   return calcluator.mul(g,g);
// };

define(['calculator/multi'],function(multi){
  return function(g){
    return multi(g,g);
  };
});
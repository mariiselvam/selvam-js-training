require(['calculator/add' , 'calculator/sub' , 'calculator/multi' , 'calculator/divi'], function(add , sub , multiple , divide){
  console.log(add(10,20));
  console.log(sub(20,10));
  console.log(multiple(10,5));
  console.log(divide(20,10));
});

require(['calculator/square'], function (squ){
  console.log(squ(5));
});
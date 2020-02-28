function eat(food) {
  if (typeof food === "string"){
    return food + ' tasted really good.';
  } else {
    return "nah";
  }
  
}

console.log(eat("bananas"));


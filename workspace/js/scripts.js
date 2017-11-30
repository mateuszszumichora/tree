function drawTree(poziom){
for(var i=0;i<=poziom;i++){
  var star = "";
  for(var j=0;j<=i-1;j++){
    star += "*";
  }
  console.log(star);
}
}
console.log(drawTree(5));
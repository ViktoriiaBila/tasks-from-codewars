function mygcd(x,y){
  let d = 1;
  
  if (x>y) {
    d = y;
  } else if (y>x) {
    d = x;
  } else {
    return x;
  }

  while (d >= 1) {
    if ((Number.isInteger(x/d)) && (Number.isInteger(y/d))) {
      return d;
    }
    d = d - 1;
  }
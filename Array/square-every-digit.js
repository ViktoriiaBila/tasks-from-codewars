function squareDigits(num){
  return Number(String(num).split('').reduce((a,c) => (a += String(Number(c)**2)),''));
}
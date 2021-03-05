function findShort(s){
  return s.split(' ').reduce((a,c) => {return (a.length > c.length) ? c : a;}).length;
}
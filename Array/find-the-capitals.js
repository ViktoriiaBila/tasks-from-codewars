function capital(capitals){
  let strCapitals = [];
  for (let i=0; i < capitals.length; i++) strCapitals[i] = (capitals[i].state) ? 
  `The capital of ${capitals[i].state} is ${capitals[i].capital}` : 
  `The capital of ${capitals[i].country} is ${capitals[i].capital}`;
  return strCapitals;
}
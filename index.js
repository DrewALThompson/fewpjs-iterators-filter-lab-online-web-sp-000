function findMatching(drivers, string){
  return drivers.filter(name => {
    return name.toLowerCase() == string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(name => {
    return name.shift(2).toLowerCase() === string.toLowerCase();
  });
}

function matchName(){}
function findMatching(drivers, string){
  return drivers.filter(name => {
    return name.toLowerCase() == string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(name => {
    return name.substring(0, 2).toLowerCase() === string.toLowerCase();
  });
}

function matchName(drivers, string){
  console.log(drivers);
}
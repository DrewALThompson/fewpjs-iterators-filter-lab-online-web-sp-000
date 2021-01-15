function findMatching(drivers, string){
  return drivers.filter(name => {
    return name.toLowerCase() == string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(name => {
    console.log(string + " " + name);
    return name
  })
}

function matchName(){}
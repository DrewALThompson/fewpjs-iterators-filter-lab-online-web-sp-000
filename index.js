function findMatching(drivers, string){
  return drivers.filter(name => {
    return name.toLowerCase() == string.toLowerCase();
  });
}

function fuzzyMatch(){}

function matchName(){}
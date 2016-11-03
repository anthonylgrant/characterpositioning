function countIndices(characters) {
 var obj = {}
 for (var i = 0; i < characters.length; i += 1) {
  var char = characters[i];

  if (char === ' ')
    continue;

  if (obj[char]) {
    obj[char].push(i);
  } else {
    obj[char] = [i] ;
  }
  }
  return obj;

}

console.log(countIndices("lighthouse in the house"))

//iterates, checks to see if it's true
//if true, then pushes index value into array, if false
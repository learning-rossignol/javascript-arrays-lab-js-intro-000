var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
destructivelyAppendKitten = (k) => {
  kittens.push( k); return kittens;
}

destructivelyPrependKitten = (name) => {
  kittens.unshift( name); return kittens;
}

destructivelyRemoveLastKitten = () => {
  kittens.pop; return kittens;
}

destructivelyRemoveFirstKitten = () => {
  kittens.shift(); return kittens;
}

appendKitten = (name) => [...kittens, name]

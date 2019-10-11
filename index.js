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

appendKitten = (name) => [...kittens, name];

prependKitten = (name) => [name, ...kittens];

removeLastKitten = () => kittens.slice(0, kittens.length);

removeFirstKitten = () => kittens.slice(1);

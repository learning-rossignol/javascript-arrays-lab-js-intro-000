var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
destructivelyAppendKitten = (k) => {
  kittens.push( k); return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift( name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop; return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(); return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
}
prependKitten = (name) => [name, ...kittens];

removeLastKitten = () => kittens.slice(0, kittens.length);

removeFirstKitten = () => kittens.slice(1);

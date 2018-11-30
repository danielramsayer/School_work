let countdown = (Num) => {
  if (Num <= 0) return;
  console.log(Num)
  countdown(Num - 1)
}
countdown(10)

let Recu = [
  {id: 'GreatGreatGrandparent', 'parent': null},
  {id: 'GreatGrandparent', 'parent': 'GreatGreatGrandparent'},
  {id: 'Grandparent', 'parent': 'GreatGrandparent'},
  {id: 'Parent', 'parent': 'Grandparent'},
  {id: 'Child', 'parent': 'Parent'}
]

let makeTree = (Recu, parent) => {
  let node = {}
  Recu
    .filter(R => R.parent === parent)
    .forEach(R => node[R.id] = makeTree(Recu, R.id))
  return node
}

console.log(JSON.stringify(makeTree(Recu, null), null, 2))

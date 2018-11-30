//Please note this is for

var fs = require('fs');

var output = fs.readFileSync('testTxt.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quanitity: line[3]
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output,null,2))

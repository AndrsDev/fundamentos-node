const fs = require('fs')
const stream = require('stream')
const util = require('util')

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// let data = ''
// readableStream.setEncoding('utf-8')
// readableStream.on('data', (chunk) => {
//   data += chunk;
// })

// readableStream.on('end', (chunk) => {
//   console.log(data)
// })

// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal?')


const Transform = stream.Transform;
class Upper {
  constructor() { 
    Transform.call(this); 
  }
  _transform(chunk, codif, callback) {
    let chunkUpper = chunk.toString().toUpperCase();
    this.push(chunkUpper);
    callback();
  }
}
util.inherits(Upper, Transform)

let upper = new Upper();

readableStream
  .pipe(upper)
  .pipe(process.stdout)



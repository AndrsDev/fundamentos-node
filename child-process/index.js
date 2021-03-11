const { exec, spawn } = require('child_process');

// exec('ls -la', (err, stdout, sterr) => {
//   if(err) {
//     console.error(err);
//     return
//   }

//   console.log(stdout);
// })

let process = spawn('ls', ['-la']);
console.log('id: ', process.pid)
console.log('Is connected?: ', process.connected)
process.stdout.on('data', (data) => {
  console.log('Is killed?: ', process.killed)
  console.log(data.toString())
})
process.on('exit', () => {
  console.log('Process finished.')
})
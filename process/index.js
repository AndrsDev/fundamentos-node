
process.on('beforeExit', () => {
  console.log('Process is about to finish.')
})

process.on('exit', () => {
  console.log('Process finished.')
  setTimeout(() => {
    console.log('This message will never be seen!')
  }, 0);
})

process.on('uncaughtException', (err, origin) => {
  console.error('Ups, we forgot to catch an error.')
  console.error(err)
})

setTimeout(() => {
  console.log('This message will be seen!')
}, 0);

callDontExist()
console.log('This code is not reached because the above error.')
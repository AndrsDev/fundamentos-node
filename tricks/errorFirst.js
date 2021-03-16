function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a)
    } catch (e){
      callback(e)
    }
  }, 1000);
}

asincrona((err, data) => {
  if(err){
    console.log('----- There is an error -----')
    console.error(err);
    return;
  }

  console.log(data)
})
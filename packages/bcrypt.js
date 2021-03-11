import bcrypt from 'bcrypt'

const password = '123456password!'
bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash)

  bcrypt.compare(password, hash, (err, res) => {
    console.log(res)
  })
})

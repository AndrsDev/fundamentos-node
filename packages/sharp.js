import sharp from 'sharp'

sharp('./files/original.jpg')
  .resize(250)
  .toFile('./files/resized.jpg')
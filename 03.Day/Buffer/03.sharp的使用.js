const sharp = require("sharp");


sharp('./sun.jpg')
  .resize(200, 200)
  .toFile("sunCopy.jpg")
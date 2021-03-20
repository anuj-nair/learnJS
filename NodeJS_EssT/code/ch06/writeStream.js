const fs = require("fs")

const writeStream = fs.createWriteStream("./assets/myFile.txt","UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8");

//readStream.on("data",data => {
//    writeStream.write(data);
//});

//process.stdin.pipe(writeStream)


readStream.pipe(writeStream)

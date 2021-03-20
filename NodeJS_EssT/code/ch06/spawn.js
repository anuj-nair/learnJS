const cp = require("child_process")

const questionApp = cp.spawn("node",["questions.js"]);



questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Somewhere \n");
questionApp.stdin.write("Nothing \n");

questionApp.stdout.on("data",data=>{
  console.log(`from the question app: ${data}`);
});

questionApp.on("close",()=>{
  console.log(`questionApp process excited`);
});


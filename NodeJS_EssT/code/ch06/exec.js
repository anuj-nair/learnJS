const cp = require("child_process");

cp.exec("lst",(err,data,stderr)=>{
  if (err){
//    throw err;
    console.log(stderr)
  }
  console.log(data)
});

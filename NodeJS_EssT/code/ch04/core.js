const path = require("path");
const util = require("util");
const v8 = require("v8")

// The core path module
//const dirUploads = path.join(__dirname,'www','files','uploads');
//console.log(dirUploads);

// The core util module
//util.log(path.basename(__filename));
//util.log("^ The name of the currentfile");

const { log }  = require("util");
// The core v8 module
log(v8.getHeapStatistics());

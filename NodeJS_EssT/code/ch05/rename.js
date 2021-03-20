const fs =require("fs")

fs.renameSync("./assets/colors.json","./assets/colorData.json");

fs.rename("./assets/notes.md","./storage-files/notes.md",err=>{
	if(err){
		throw err;
	}
});

setTimeout(()=>{
	fs.unlinkSync("./storage-files/colors.md");
},4000);

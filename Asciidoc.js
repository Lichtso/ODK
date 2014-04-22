var fs = require("fs"),
	exec = require("child_process").exec;

var sourcePath = "asciidoc/", destinationPath = "html/";

if(!fs.existsSync(sourcePath)) {
	console.log("ERROR: Input directory not found.");
	process.exit(1);
}
var sourceDir = fs.readdirSync(sourcePath);

if(!fs.existsSync(destinationPath))
	fs.mkdirSync(destinationPath);

function generateDoc(name) {
	exec("asciidoc -o "+destinationPath+name+".html "+sourcePath+name+".txt", function(error, stdout, stderr) {
		if(error !== null) {
			console.log("ERROR: "+error);
			process.exit(1);
		}else
			console.log(name);
	});
}

for(var i = 0; i < sourceDir.length; i ++) {
	var result = sourceDir[i].match(/(\w+)\.txt$/);
	if(!result) continue;
	generateDoc(result[1]);
}
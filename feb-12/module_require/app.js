// module.exports & require run in node (cmd)

const mod = require("./module1");
console.log("Fullname" , mod.fullName("jack", "jack@123"));
console.log("Mail-id" , mod.mail("jack@123"));

const {arrnum} = require("./module1");
console.log("arr",arrnum(["1","2","3"]));



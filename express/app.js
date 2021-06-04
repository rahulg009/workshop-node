var express = require("express")
var app=express();

app.get("/",function(req,res){
	res.send("hello there")
});

app.get("/hi",function(req,res){
	res.send("bye")
});

app.get("/bye",function(req,res){
	res.send("goodbye!!!");
})



app.listen(3000,function(){
	console.log("connected")
});

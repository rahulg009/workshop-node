var express = require("express"),
	app=express(),
	mongoose=require("mongoose"),
	bodyParser=require("body-parser"),
	logger=require("morgan")


app.set("view engine","ejs")
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/pets', {useNewUrlParser: true, useUnifiedTopology: true});

var dogSchema = new mongoose.Schema({
	name:String,
	breed:String
});

var Dog = mongoose.model("dog",dogSchema);

app.get("/",function(req,res){
	res.render("home");
});

app.get("/dogs",function(req,res){
	Dog.find({},function(err,dogs){
		res.render("dogs",{dogs:dogs})
	})
});

app.post("/createDog",function(req,res){
	Dog.create({
		name:req.body.name,
		breed:req.body.breed
	},function(err,dog){
		res.redirect("/dogs")
	});
});

app.listen(3000,function(){
	console.log("connected");
})

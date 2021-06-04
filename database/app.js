var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/cats', {useNewUrlParser: true, useUnifiedTopology: true});

var catSchema = new mongoose.Schema({
	name:String,
	age:Number
});

var Cat = mongoose.model("cat",catSchema);


Cat.create({
	name:"pikachu",
	age:10
},function(err,cat){
	if(err){
		console.log(err)
	}else{
		console.log(cat)
	}
})



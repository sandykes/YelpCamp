var express= require('express');
var MongoClient  = require('mongodb').MongoClient;

var app=express();
var bodyParser=require("body-parser");
var port=5000;
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgrounds=[
    {name:"Toronto",image:"https://trca.ca/app/uploads/2015/12/TRCA_CAMPING_HERO_IMAGE.jpg"},
    {name:"London",image:"https://www.styledemocracy.com/wp-content/uploads/2018/07/best-campgrounds-near-toronto.jpg"},        {name:"Moauntain goat",image:"https://img.huffingtonpost.com/asset/5cd4d1152000005b0095b2ce.jpeg?ops=scalefit_630_noupscale"}
   ];

app.get("/",function(req,res){
    res.render("landing");
});
app.get("/campgrounds",function(req,res){
    
    res.render("campgrounds",{campgroundsdata:campgrounds});

});
app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name:name ,image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
    res.render("new");
});
app.listen(port,function(){
  console.log("The YelpCamp server is running on http://localhost:"+port);
});

app.get("/mong",function(req,res){

const uri = "mongodb+srv://raymongo:React2020@cluster0mongo-xnji2.mongodb.net/test?retryWrites=true&w=majorit";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("customerDB").collection("customerCollection");
  // perform actions on the collection object
  var query = {cname: 'rayudu'};
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.length)
    var i = 0;
    for (i = 0; i < result.length; i++) {
            
    console.log("Result : "+ result[i].custid  );
    console.log("Result : "+ result[i].cname   );
    console.log("Result : "+ result[i].ccity   );
    console.log("Result : "+ result[i].ccity   );
    }
    client.close();
  });
    res.render("partials/mong");
});
});

function iterate(item, index) {
    //console.log(`${item}[${index}] has index ${index}`);
    console.log (`${item}[${index}].custid`);
  }
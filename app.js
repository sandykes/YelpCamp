var express= require('express');
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

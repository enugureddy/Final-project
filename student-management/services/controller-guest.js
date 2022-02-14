const dbController = require("./db-guest")
const emailController = require("./mail-service")

dbController.dbController.connection()
var name
var controller ={

    login : function(req,res){
        // var id = req.params.id
        // dbController.dbController.viewmemberadds(res)
        res.render("guest-login")
     },
     verify : function(req,res){
          name = req.body.name
        // dbController.dbController.viewmemberadds(res)
        res.redirect("/guest/enter")
     },
  
    enter : function(req,res){
       var   aname = name
        dbController.dbController.viewmemberadds(aname,res)
     },

     view:async function(req,res){
        var id=req.params.id
         var ad= await dbController.getbyid(id)
         if(ad!= null){
         var imageurl="/media/"+ad._id+"."+ad.image
         console.log("image:",imageurl)
         res.render("ad-view-g",{data:ad,imageurl:imageurl})}
         else{
             res.render("/guest")
         }
        },
        contact : function(req,res){
            var id =req.params.id
            dbController.dbController.contact(id,res)
        },
        contactpost:function(req,res){
            var id=req.body.aid
            var description=req.body.description
            var email=req.body.email
            mailbody="hi"+"<br><p>a user  has requested more information about the add you posted with </p><br><p>id:<b>" +id+ "</b</p> with message:  "+description+" <br> .kindly login and check the updates "
            emailController.send(email,"mechanicfridge@gmail.com","Action required for ad- Admin",mailbody)
            res.redirect("/guest")

        },
        back : function(req, res){
   
            res.redirect("/guest/enter")
        },
        search : function(req,res){
            var   aname = name
          var zname=req.query.name
             dbController.dbController.smemberadds(aname,zname,res)
          },
        
        logout : function(req, res){
            req.session.destroy( function(err){
                console.log("session destroyed")
            })  
            res.render("guest-login", {title : "Guest Login Page"})
        },
    }

    module.exports = controller
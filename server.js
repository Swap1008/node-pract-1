const express=require('express');
const app=express();
const hbs=require('hbs');

// 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');


hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
// MIddleware
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:"HomePage",
        
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:"About",
        
    });
});



app.listen(3000,()=>{
    console.log("Server Started");
    
});
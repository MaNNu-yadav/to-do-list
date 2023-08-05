import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const itemArray= ["coffee", "bed", "study"];
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const date = new Date();
let day= date.getDay();
let weekDay = days[day];
let fDate = date.getDate();
let month = months[date.getMonth()];




app.get("/", (req, res)=>{
    res.render("index.ejs",{
        itemArrayejs:itemArray, weekDays: weekDay, todayDate:fDate, monthjs: month
        
    }
    );
});
app.get("/work",(req,res)=>{
    res.render("index.ejs",{
        itemArrayejs:itemArray, weekDays:"work List", todayDate:"" , monthjs:""});
});


app.post("/", (req,res)=>{
    const inputItem= req.body.newItem;
    if (inputItem != "") {
        itemArray.push(inputItem);
        
    }
        res.redirect("/");
});


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});

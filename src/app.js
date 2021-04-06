const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8000;

// public static path
const staticpath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.set("view engine",'hbs');
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));

// routing
app.get("/", (req ,res) => {
    res.render("index");
})
app.get("/about", (req ,res) => {
    res.render("about");
})
app.get("/weather", (req ,res) => {
    res.render("weather");
})
app.get("*", (req ,res) => {
    res.render("404",{
        errormsg:"Please Try Again !!!.",
    });
})
app.listen(port,() =>{
    console.log(`server running on port no ${port}`);
})
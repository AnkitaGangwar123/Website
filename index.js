import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Homepage
app.get("/" , (req, res) => {
    res.render("index.ejs");
});

// Handle contact page
// Here writing the correct end-point is important else it will show error "CANNOT GET followed by the path"
// This end-point must match with the one specified in href of anchor tag
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Benefits and drawbacks
app.get("/proscons" , (req, res) => {
    res.render("pros_cons.ejs");
});

// All about EV batteries
app.get("/allaboutbatteries" , (req, res) => {
    res.render("ev_batt.ejs");
});

//Future
app.get("/future" , (req, res) => {
    res.render("future.ejs");
});

//Initiatives
app.get("/initiatives" , (req, res) => {
    res.render("initiatives.ejs");
});

app.listen(port , () => {
    console.log("Server listening on port " + port);
});
const express = require("express");
const app = express();


const Token = require("./middleware/token");
const Validation = require("./middleware/validation");

app.use(DateGenerator);

const middleware = [Token, Validation];

app.get("/profile",middleware, (req, res) => {
  console.log("User loged");
  res.send("<h1> SUcess</h1>");
});


function DateGenerator(req,res,next){
console.log(new Date());
next();
}


const PORT = process.env.PORT || 3001;

app.listen(PORT);

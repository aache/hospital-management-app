const express = require('express');
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*Login-Auth User Details */ 
const Login = {
    usernames : new Array ("Administrator","Manager","Developer"),
    passwords : new Array ("password1","password2","password3")
}

app.get('/mock/mock-login-auth',(req,res) => {
    console.log(req);  
    console.log(req.query.usernames);  
    console.log(req.query.passwords);

    var valid=false;
    for(var i = 0; i < Login.usernames.length; i++){
    if((req.query.username)==Login.usernames[i] && (req.query.password)==Login.passwords[i]){
        valid=true;
        break;  
    }   
}

res.send(valid);

const primary_data = {
    id :  10 
}
/* Dashboard Primary Data */
app.get('/mock/mock-primary', (req, res) => res.send(primary_data))

/* Dashboard Green Data */
const green_data = {
    id : 15
}

app.get('/mock/mock-green',(req,res) => res.send(green_data))

/* Dashboard Yellow Data */
const yellow_data = {
    id : 20
}
app.get('/mock/mock-yellow',(req,res) => res.send(yellow_data))

/* Dashboard Red Data */
const red_data={
    id : 25
}
app.get('/mock/mock-red',(req,res) => res.send(red_data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
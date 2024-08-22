//install jsonwebtoken
const jwt = require("jsonwebtoken");


//create a secret
const SECRET = "aVeryComplexSecret";


//create payload
const payload = {
    "id": 123456789,
    "email": "abc@gmail.com"
}


//create token
// const token = jwt.sign(payload, SECRET, issued at(option object));    //we can also give the expiry to it
const token = jwt.sign(payload, SECRET);
console.log(`Token: ${token}`);


//verify it
jwt.verify(token ,SECRET, (err, decodedToken) => {
    if(err){
        console.log("error:", err.message);
    }
    else{
        console.log(`Decoded: ${decodedToken}`)    //object
        console.log("Decoded: ", decodedToken)     //iat: issued at = represents the time
    }
});
//tamper the token and verfiy it again


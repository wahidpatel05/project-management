import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

let myusername = process.env.MY_USERNAME
console.log("value",myusername)

console.log("start of an awesome project");

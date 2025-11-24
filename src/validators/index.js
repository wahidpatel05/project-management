import { body } from "express-validator";


const userRegisterValidator = () =>{
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username cannot be empty")
            .isLowercase()
            .withMessage("Username must be in lowercase")
            .isLength({min:3})
            .withMessage("username must be atleast 3 characters"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password cannot be empty")
            .isStrongPassword({minLength: 8, minLowercase: 1, minSymbols: 1, minUppercase: 1})
            .withMessage("Password must contain an uppercase, minimum length of 8 a special character and Uppercase"),
        body("full name")
            .trim()
            .notEmpty()
            .withMessage("full name cannot be empty")
        
    ]
}
const userLoginValidator = () =>{
    return[
        body("email")
            .trim()
            .isEmail()
            .withMessage("Email is invalid"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
    ]
}
export {
    userRegisterValidator,
    userLoginValidator
}
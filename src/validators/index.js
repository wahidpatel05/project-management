import { body } from "express-validator";

const userRegisterValidator = () => {
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
            .withMessage("Username must be lowercase")
            .isLength({ min: 3 })
            .withMessage("Username must be at least 3 characters"),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password cannot be empty")
            .isStrongPassword({
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1,
            })
            .withMessage(
                "Password must contain uppercase, lowercase, symbol, and at least 8 chars"
            ),

        body("fullName")
            .trim()
            .notEmpty()
            .withMessage("Full name cannot be empty"),
    ];
};

const userLoginValidator = () => {
    return [
        body("email")  // <-- identifier (email or username)
            .trim()
            .notEmpty()
            .withMessage("Email or username is required"),
            // ❌ removed isEmail() so username login works

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
    ];
};

export { userRegisterValidator, userLoginValidator };

import { body, validationResult } from "express-validator";

const validationRules = () => {
  return [
    body("name")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("user name can't be empty")
      .bail()
      .isLength({ min: 2, max: 20 })
      .withMessage("Name must be between 2 and 20 characters long")
      .bail(),
    body("email")
      .trim()
      .normalizeEmail()
      .not()
      .isEmpty()
      .withMessage("must complete email field!")
      .isEmail()
      .withMessage("email must be valid!")
      .bail(),
    body("password")
      .isLength({ min: 6, max: 30 })
      .withMessage("Password must be between 6 and 30 characters"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

export { validationRules, validate };

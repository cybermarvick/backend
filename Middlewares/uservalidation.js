const yup = require("yup")

const emailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const uservalidationschema = yup.object({
    firstname: yup.string().required("firstname is required").max(15, "firstname  cannot be more than 15 characters"),
    lastname: yup.string().required("lastname is required"),
    email: yup.string().matches(emailregex, "must be a valied email").required("email is required"),
    password: yup.string().min(5, "password is too short").required("password is required")
})

module.exports = {uservalidationschema}
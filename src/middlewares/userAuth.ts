import { expressjwt } from "express-jwt"




export const requireSignin = expressjwt({
    algorithms:["HS256"],
    secret: "123456",
    requestProperty:'auth'
})


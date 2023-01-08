import { Request, Response } from "express";
import { client } from "../config/database";
import  bcrypt  from 'bcrypt';
import  jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()


// creer un user
export const createUser = async(req: Request, res: Response) => {

   let { firstName, lastName, email, password } = req.body

    //  password = await bcrypt.hash(password,10)

    client.query(`INSERT INTO users(firstName,lastName,email,password) VALUES($1,$2,$3,$4)`,
    [firstName,lastName,email,password])
     .then(user => res.json(user.rows[0]))
     .catch(err => res.json({err}))
   

}

// recuperer la liste d'utilisaeurs
export const getAllUsers = (req: Request, res: Response) => {

     client.query(`SELECT * FROM users`)
           .then(users => res.status(200).json(users.rows))
           .catch(err => res.json({err}))
}


// recuperer un user par id
export const showUser = (req: Request, res:Response) => {

     client.query(`SELECT * from users WHERE id = $1`,[req.params.id])
           .then(user => res.status(200).json(user.rows))
           .catch(err => res.status(400).json(err))
}

// pour l'authentification
export const login = async (req: Request, res: Response) => {

   
       let { email, password } = req.body


       client.query(`SELECT * FROM users WHERE email = $1 LIMIT 1`, [email])
             .then(async user => {
                 
                // const passwordSucess = await  bcrypt.compare(password,user.rows[0].password)
               
                if(password != user.rows[0].password) {
                        res.status(401).json({
                        error: 'Email and Password dont Match !'
                    })
                }
                else  {
                    const u = user.rows[0].id
                    const token = jwt.sign({u}, "123456")
    
                    res.cookie('token', token, { expires: new Date( Date.now() + 999999999999)})
    
                    return res.json({
                        token, user
                    })
                }
              
            
             }).catch(err => console.log(err))

}



import { Request, Response } from "express";
import { client } from "../config/database";



// create order
export const createOrder = (req: any, res: any) => {

    let { quantity } = req.body

     
    client.query(`INSERT INTO orders(quantity,product_id,user_id) VALUES($1,$2,$3)`,[quantity,req.params.id,req.auth.u])
          .then(order =>  res.json(order.rows[0]))
          .catch(err => res.json({err}))

    console.log(req.get('Authorization'))

console.log(req.auth.u)
}

// complete order 
export const complteOrder = (req: Request, res: Response) => {

      client.query(`UPDATE orders SET status = true WHERE id = $1` ,[req.params.id])
            .then(order => res.json(order.rows[0]))
            .catch(err => res.json({err}))
}
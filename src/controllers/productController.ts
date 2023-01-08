import { client } from "../config/database";
import { Request, Response } from "express";



// methode pour creer un produit 
export const createProduct = (req: Request, res: Response) => {


    
    let  { name, price, category } = req.body

    
    client.query(`INSERT into products(name,price,category) VALUES($1,$2,$3)`,[name,price,category])
          .then(product => res.status(200).json(product.rows))
          .catch(err => res.status(400).json({ error: true, message: err }))
}

// methode pour recuperer la liste des produit 
export const getAllProduct = (req: Request, res: Response) => {

    client.query("SELECT * FROM products")
          .then(products => res.status(200).json(products.rows))
          .catch(err => res.status(400).json({ error: true, message: err }))
}

// recuperer un produit par id
export const showProduct = (req: Request, res: Response) => {

      client.query(`SELECT * FROM products WHERE id = $1  LIMIT 1`,[req.params.id])
            .then(product => res.status(200).json(product.rows[0]))
            .catch(err => res.status(400).json({error: true, message: err}))
}

// recuperer les produits par category 
export const getProductsByCtagory = (req: Request, res: Response) => {


     client.query(`SELECT * FROM products WHERE category = $1`,[req.body])
           .then(products => res.status(200).json(products.rows))
           .catch(err => console.log(err))

}
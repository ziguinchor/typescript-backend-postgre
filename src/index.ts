import express, { Request, Response } from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { client } from "./config/database";


// middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())



// routes
import { productsRouter } from "./routes/products";
app.use('/api/products',productsRouter)

import { userRouter } from "./routes/users";
app.use('/api/users',userRouter)


import { ordersRouter } from "./routes/orders";
app.use('/api/orders',ordersRouter)




// database
client.connect()
      .then(() => console.log('database connected'))
      .catch((err) => console.error(err))


// server

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started to port ${port} ...`))
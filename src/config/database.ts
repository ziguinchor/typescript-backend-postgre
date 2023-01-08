import { Client, Pool } from 'pg'



export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mydatabase',
    password: 'admin',
    port: 5432,
})


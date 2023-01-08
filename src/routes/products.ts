import { requireSignin } from './../middlewares/userAuth';
import { Router } from 'express'
const router: Router = Router()


import { createProduct, getAllProduct, showProduct, getProductsByCtagory } from './../controllers/productController';



router.post('/create',[requireSignin],createProduct)
router.get('/all',[requireSignin],getAllProduct)
router.get('/:id',[requireSignin],showProduct)
router.get('/category',[requireSignin],getProductsByCtagory)


export const productsRouter: Router = router;




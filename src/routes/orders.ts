import { Router } from "express";
const router: Router = Router()


import { requireSignin } from './../middlewares/userAuth';



import { createOrder, complteOrder } from './../controllers/orderController';



router.post('/create/:id',[requireSignin],createOrder)
router.patch('/completed/:id',[requireSignin],complteOrder)





export const ordersRouter: Router = router;
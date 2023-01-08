import { requireSignin } from './../middlewares/userAuth';
import { Router } from "express"
const router: Router = Router()



import { createUser, getAllUsers, showUser, login } from './../controllers/userController';



router.post('/create',createUser)
router.get('/all',[requireSignin],getAllUsers)
router.get('/:id',[requireSignin],showUser)
router.post('/login',login)





export const userRouter: Router = router
import {Router} from 'express';
import * as userController from './user.controller.js'
const router = Router();

router.get("/",userController.getUsers);
router.post("/addUser",userController.addUser);
router.put("/updateUser",userController.updateUser);
router.delete("/deleteUser",userController.deleteUser);
router.get("/search",userController.searchUser);
router.get("/List",userController.usersList);

export default router;
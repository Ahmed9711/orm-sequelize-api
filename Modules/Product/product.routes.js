import {Router} from 'express';
import * as productController from './product.controller.js';
const router = Router();

router.get("/",productController.getProducts);
router.post("/addProduct",productController.addProduct);
router.put("/updateProduct",productController.updateProduct);
router.delete("/deleteProduct",productController.deleteProduct);
router.get("/search",productController.searchProduct);
router.get("/ProductsUser",productController.productsWithUser);


export default router;
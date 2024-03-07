import { Router } from 'express';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from './controller/product.controller';

const router = Router();

router.route('/products')
    .post(createProduct)
    .get(getProducts);

router.route('/products/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

export default router;
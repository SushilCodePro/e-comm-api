import express from "express";
import ProductController from './product.controller.js'

const productRouter=express.Router();

productRouter.get('/', ProductController.getAllProduct);
// productRouter.post('/', addProduct);
// productRouter.post('/', rateProduct);
// productRouter.get('/', getOneProduct);

export default productRouter;
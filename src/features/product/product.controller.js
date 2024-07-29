// product.controller.js
import products from "./product.modle.js";
const ProductController = {
    getAllProduct: async (req, res) => {
        // Implementation
        console.log('in get all pro');
        res.status(200).send(products);
    },
    addProduct: async (req, res) => {
        // Implementation
    },
    rateProduct: async (req, res) => {
        // Implementation
    },
    getOneProduct: async (req, res) => {
        // Implementation
    }
};

export default ProductController;

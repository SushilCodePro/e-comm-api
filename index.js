import express from 'express';
import cors from 'cors';
import productRouter from './src/features/product/product.routes.js';

const app = express();

// Enable CORS for all routes
app.use(cors());

// app.use(express.json());
app.use('/api/product', productRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

import { Request, Response } from 'express';
import { Product } from '../entity/Product';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, category } = req.body;

        const newProduct = new Product();
        newProduct.name = name;
        newProduct.price = price;
        newProduct.category = category;

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneBy({ id: Number(id) });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;
        const product = await Product.findOneBy({ id: Number(id) });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name ? name : undefined;
        product.price = price ? price : undefined;
        product.category = category ? category : undefined;

        await product.save();
        res.status(200).json({ message: 'Updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneBy({ id: Number(id) });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.remove();

        res.status(200).json({ message: 'deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
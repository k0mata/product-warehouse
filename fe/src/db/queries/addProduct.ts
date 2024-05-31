import { Product } from '../../types/product.ts';

interface AddProductProps {
  product: Product;
}

export const addProduct = async ({ product }: AddProductProps) => {
  try {
    await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
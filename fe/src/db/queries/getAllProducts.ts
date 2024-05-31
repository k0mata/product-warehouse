import { Product } from '../../types/product.ts';

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await fetch('http://localhost:3000/products');

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    return await response.json();
  } catch (error: any) {
    console.log(error);
  }
};
import { FC } from 'react';

import { Product } from '../../types/product.ts';

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
}

const ProductsList: FC<ProductListProps> = ({ products, isLoading }): JSX.Element => {
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>

      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
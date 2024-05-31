import { FC } from 'react';

import { useProducts } from '../../db/data-hooks/useProducts.ts';

import ProductsList from '../components/ProductsList.tsx';
import { AddProductForm } from '../components/AddProductForm.tsx';

export const Product: FC = (): JSX.Element => {
  const { data, isLoading } = useProducts();

  return (
    <>
      <AddProductForm/>
      <ProductsList products={data} isLoading={isLoading}/>
    </>
  );
};

import React, { FC } from 'react';

import { ProductsList } from '../components/ProductsList.tsx';
import { AddProductForm } from '../components/AddProductForm.tsx';

export const Product: FC = (): JSX.Element => {
  return (
    <div>
      <AddProductForm/>
      <ProductsList/>
    </div>
  );
};

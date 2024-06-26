import React, { FC } from 'react';

import { Navigation } from '../layout/Navigation.tsx';
import { ProductsList } from '../components/ProductsList.tsx';
import { AddProductForm } from '../components/AddProductForm.tsx';

export const Product: FC = (): JSX.Element => {
  return (
    <div>
      <Navigation/>
      <AddProductForm/>
      <ProductsList/>
    </div>
  );
};

import React, { FC } from 'react';

import { Navigation } from '../layout/Navigation.tsx';
import { AddProductForm } from '../components/AddProductForm.tsx';

export const Warehouses: FC = (): JSX.Element => {
  return (
    <div>
      <Navigation/>
      <AddProductForm/>
    </div>
  );
};

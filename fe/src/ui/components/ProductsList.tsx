import React, { FC } from 'react';

import { useProducts } from '../../db/data-hooks/useProducts.ts';
import { ListItem } from './ListItem.tsx';

export const ProductsList: FC = (): JSX.Element => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <></>;

  console.log({ data });

  return (
    <>
      <h2 className={'font-bold mt-4'}>Product List</h2>

      <ul role="list" className="divide-y divide-gray-100">
        {data.map((product) => (
          <ListItem
            key={product.id}
            name={product.name}
            isHazardous={product.ishazardous}
            sizePerUnit={product.sizeperunit}
          />
        ))}
      </ul>
    </>
  );
};

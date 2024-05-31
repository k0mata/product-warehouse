import { useQuery } from '@tanstack/react-query';

import { getAllProducts } from '../queries/getAllProducts.ts';

export const useProducts = () =>
  useQuery({
    queryKey: ['all', 'products'],
    queryFn: getAllProducts
  });
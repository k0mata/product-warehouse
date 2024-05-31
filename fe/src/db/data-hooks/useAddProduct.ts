import { QueryClient, useMutation } from '@tanstack/react-query';

import { addProduct } from '../queries/addProduct.ts';

export const useAddProducts = (queryClient: QueryClient) =>
  useMutation({
    mutationKey: ['all', 'products'],
    mutationFn: addProduct,
    onSuccess: () => queryClient.refetchQueries({ queryKey: ['all', 'products'] })
  });
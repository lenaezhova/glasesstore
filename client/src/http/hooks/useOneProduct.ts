import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';

let lastId = '';

export const useOneProduct = (id?: string) => {
  if (id) lastId = id;

  const queryClient = useQueryClient()
  const queryKey: QueryKey = ['product', lastId]
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.Product.infoEndpoints.getOneProduct(lastId),
    retry: 1
  })

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  }
}

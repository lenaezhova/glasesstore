import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';

export const useAllProduct = () => {
  const queryClient = useQueryClient()
  const queryKey: QueryKey = ['allProduct']
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.Product.infoEndpoints.getAllProduct(),
  })

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  }
}

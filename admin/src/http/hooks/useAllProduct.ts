import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesAdminApi} from '@/src/http/api/api';

export const useAllProduct = () => {
  const queryClient = useQueryClient()
  const queryKey: QueryKey = ['allProduct']
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllProduct(),
  })

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  }
}

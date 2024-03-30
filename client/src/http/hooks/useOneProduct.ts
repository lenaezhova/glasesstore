import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';

export const useOneProduct = (id: string | undefined) => {

  const queryClient = useQueryClient()
  const queryKey: QueryKey = ['product', id]
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.Product.infoEndpoints.getOneProduct(id!!),
    retry: 1,
    enabled: !!id,
    staleTime: 100000,
    refetchOnWindowFocus: false
  })

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  }
}

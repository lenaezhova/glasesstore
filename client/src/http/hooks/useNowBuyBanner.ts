import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';

export const useNowBuyBanner = () => {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ['nowBuyBanner'];
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.Product.infoEndpoints.getNowBuyBanner()
  });

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  };
};

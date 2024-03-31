import {QueryKey, useQuery, useQueryClient} from "@tanstack/react-query";
import {$glassesAdminApi} from "@/src/http/api/api";

export const useNowBuyBanner = () => {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ['nowBuyBanner'];
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getNowBuyBanner()
  });

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  };
};

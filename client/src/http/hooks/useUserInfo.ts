import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';

export const useUserInfo = (id?: string) => {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ['usersInfo'];
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.User.infoEndpoints.getUserInfo({id}),
    enabled: !!id
  });

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  };
};

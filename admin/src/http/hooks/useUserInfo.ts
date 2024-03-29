import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesAdminApi} from '@/src/http/api/api';

export const useUserInfo = (id?: string) => {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ['usersInfo'];
  const results = useQuery({
    queryKey,
    queryFn: () => $glassesAdminApi.User.infoAdminEndpoints.getUserInfo({id}),
    enabled: !!id
  });

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey }),
    ...results
  };
};

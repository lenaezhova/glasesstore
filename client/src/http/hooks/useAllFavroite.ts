import {QueryKey, useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';
import {useAuthStore} from "@/modules/user/store/store";
import {message} from "antd";
import {useFavoriteStore} from "@/modules/favorites/store/store";
import {IFavoriteResponse} from "@/src/http/api/User/UserInfoEndpoints/type";

export const useAllFavorite = () => {
  const {userId, isAuth} = useAuthStore();
  const isAuthorized = !!userId && isAuth
  const {productsId, addProductInFavorite} = useFavoriteStore(store => store);
  const queryClient = useQueryClient()
  const queryKey: QueryKey = ['alFavorite', userId]

  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.User.infoEndpoints.getFavorite({userId: userId!!}),
    enabled: isAuthorized,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 100000
  })
  const {mutateAsync} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.addFavorite
  })
  const data: IFavoriteResponse | undefined = isAuthorized ? results.data : {productsId}

  const invalidate = () => {
    if (isAuthorized) {
      return queryClient.invalidateQueries({ queryKey })
    }
  }

  const addInFavoriteAsync = async (productId: string | undefined) => {
    if (!productId) return;
    try {
      if (isAuthorized) {
        await mutateAsync({userId, productId});
        await invalidate();
      } else {
        addProductInFavorite(productId);
      }
      message.success('Товар успешно добавлен в избранное')
    } catch (e) {
      message.error('Ошибка при добавлении товара в избранное');
    }
  }

  const checkProductInFavorite = (id: string | undefined): boolean => {
    if (!id) return false;
    if (isAuthorized) {
      const {data} = results;
      return !!data?.productsId?.find(el => el === id);
    } else {
      return !!productsId.find(el => el === id);
    }
  }

  return {
    addInFavoriteAsync,
    checkProductInFavorite,
    invalidate,
    data: data,
    isLoading: results.isLoading
  }
}

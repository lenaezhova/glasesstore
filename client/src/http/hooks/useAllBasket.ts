import {QueryKey, useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {$glassesApi} from '@/src/http/api/api';
import {useAuthStore} from '@/modules/user/store/store';
import {message} from 'antd';
import {ICartProduct} from '@/src/http/api/User/UserInfoEndpoints/type';
import {useCartStore} from '@/modules/cart/store/store';
import {TBasketTypeAction} from '@/src/http/api/User/UserRegisterEndpoints/type';
import {IProduct} from '@/src/http/api/Product/ProductInfoEndpoints/type';

export const useAllBasket = () => {
  const {userId, isAuth} = useAuthStore();
  const isAuthorized = !!userId && isAuth;
  const {products, addProductInCart, clearCartFromStore} = useCartStore(store => store);
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ['allBasket', userId];

  const results = useQuery({
    queryKey,
    queryFn: () => $glassesApi.User.infoEndpoints.getBasket({userId: userId!!}),
    enabled: isAuthorized,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 100000
  });
  const {mutateAsync} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.addBasket
  });
  const {mutateAsync: mutateClearBasket} = useMutation({
    mutationFn: $glassesApi.User.registerEndpoints.clearBasket
  });
  const data: ICartProduct[] | undefined = isAuthorized ? results.data?.products : products;

  const invalidate = () => {
    if (isAuthorized) {
      return queryClient.invalidateQueries({ queryKey });
    }
  };

  const addInCartAsync = async (request: {
    productId: string | undefined, typeAction: TBasketTypeAction, count?: number
  }) => {
    const {productId, typeAction, count} = request;
    if (!productId) return;
    try {
      if (isAuthorized) {
        await mutateAsync({userId, productId, typeAction, count});
        await invalidate();
      } else {
        addProductInCart({productId, typeAction, count});
      }
      message.success('Товар успешно добавлен в корзину');
    } catch (e) {
      message.error('Ошибка при добавлении товара в корзину');
    }
  };

  const clearBasketAsync = async () => {
    try {
      if (isAuthorized) {
        await mutateClearBasket(userId);
        await invalidate();
      } else {
        clearCartFromStore();
      }
    } catch (e) {
      message.error('Ошибка при удалении корзины');
    }
  };

  const getProductFromCart = (id: string | undefined): ICartProduct | undefined => {
    if (!id) return undefined;
    return data?.find(el => el.productId === id);
  };

  return {
    addInCartAsync,
    getProductFromCart,
    invalidate,
    data,
    isLoading: results.isLoading,
    clearBasketAsync
  };
};

import {TInfoProduct} from '@/src/http/api/Product/ProductAdminGetEndpoints/type';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {categoryProduct} from '@/src/const/category';

export const useCategoryProduct = (info: TInfoProduct) => {
  const queryClient = useQueryClient()
  const results = useQuery({
    queryKey: categoryProduct[info].queryKey,
    queryFn:  () => categoryProduct[info].queryFn(),
    refetchOnWindowFocus: false,

  })

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey: categoryProduct[info].queryKey }),
    ...results
  }
}

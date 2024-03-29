import {QueryKey, useQuery, useQueryClient} from '@tanstack/react-query';
import {IGetResponse} from '@/src/http/api/Product/ProductAdminGetEndpoints/type';
import {$glassesAdminApi} from '@/src/http/api/api';

export type TInfoProduct = 'status' | 'brand' | 'color' | 'design' | 'material' | 'targetGroup' | 'type' | 'typeLens' | 'optics'

const infoProduct: {
  [key: TInfoProduct | string]: {
    queryKey: QueryKey | undefined,
    queryFn: () => Promise<IGetResponse[]>
  }
} = {
  status: {
    queryKey: ['status'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllStatus()
  },
  brand: {
    queryKey: ['brand'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllBrand()
  },
  color: {
    queryKey: ['color'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllColor()
  },
  design: {
    queryKey: ['design'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllDesign()
  },
  material: {
    queryKey: ['material'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllMaterial()
  },
  targetGroup: {
    queryKey: ['targetGroup'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllTargetGroup()
  },
  type: {
    queryKey: ['type'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllType()
  },
  typeLens: {
    queryKey: ['typeLens'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllTypeLens()
  },
  optics: {
    queryKey: ['optics'],
    queryFn: () => $glassesAdminApi.Product.getEndpoints.getAllOptics()
  }
};

export const useInfoProduct = (info: TInfoProduct) => {
  const queryClient = useQueryClient();
  const results = useQuery({
    queryKey: infoProduct[info].queryKey,
    queryFn: () => infoProduct[info].queryFn(),
    refetchOnWindowFocus: false
  });

  return {
    invalidate: () => queryClient.invalidateQueries({ queryKey: infoProduct[info].queryKey }),
    ...results
  };
};

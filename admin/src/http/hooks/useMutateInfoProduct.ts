import {$glassesAdminApi} from '@/src/http/api/api';
import {useMutation} from '@tanstack/react-query';
import {TInfoProduct} from '@/src/http/hooks/useInfoProduct';

const infoProduct: {
  [key: TInfoProduct | string]: {
    queryFn: (name: string) => Promise<void>
  }
} = {
  status: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createStatus({name})
  },
  brand: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createBrand({name})
  },
  color: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createColor({name})
  },
  design: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createDesign({name})
  },
  material: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createMaterial({name})
  },
  targetGroup: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createTargetGroup({name})
  },
  type: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createType({name})
  },
  typeLens: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createTypeLens({name})
  },
  optics: {
    queryFn: (name: string) => $glassesAdminApi.Product.createEndpoints.createOptics({name})
  }
};

export const useMutateInfoProduct = (info: TInfoProduct) => {
  const results = useMutation({
    mutationFn: infoProduct[info].queryFn
  });

  return {
    ...results
  };
};

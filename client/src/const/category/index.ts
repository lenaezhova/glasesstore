import {$glassesApi} from '@/src/http/api/api';
import {IGetResponse, TInfoProduct} from '@/src/http/api/Product/ProductAdminGetEndpoints/type';



export const categoryProduct: {
  [key: string | TInfoProduct]: {
    name: string,
    queryKey: [TInfoProduct],
    queryFn: () => Promise<IGetResponse[]>
  }
} = {
  optics: {
    name: 'Оптика',
    queryKey: ['optics'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllOptics()
  },
  status: {
    name: 'Статус',
    queryKey: ['status'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllStatus()
  },
  brand: {
    name: 'Брэнд',
    queryKey: ['brand'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllBrand()
  },
  color: {
    name: 'Цвет',
    queryKey: ['color'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllColor()
  },
  design: {
    name: 'Дизайн',
    queryKey: ['design'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllDesign()
  },
  material: {
    name: 'Материал',
    queryKey: ['material'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllMaterial()
  },
  targetGroup: {
    name: 'Целевая группа',
    queryKey: ['targetGroup'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllTargetGroup()
  },
  type: {
    name: 'Тип',
    queryKey: ['type'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllTargetGroup()
  },
  typeLens: {
    name: 'Тип линз',
    queryKey: ['typeLens'],
    queryFn: () => $glassesApi.Product.getEndpoints.getAllTypeLens()
  }
}

export const arrayCategoryProduct = Object.values(categoryProduct)

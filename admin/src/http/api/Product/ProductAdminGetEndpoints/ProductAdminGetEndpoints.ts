import $glassesApi from '@/src/http';
import {IBanner, IGetResponse, IProduct} from '@/src/http/api/Product/ProductAdminGetEndpoints/type';
import {getImageUrl} from "@/src/helpers/getImagesUrl";

export default class ProductAdminGetEndpoints {
  static getAllStatus = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/status'
    );

    return data;
  };

  static getAllDesign = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/design'
    );

    return data;
  };

  static getAllBrand = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/brand'
    );

    return data;
  };

  static getAllColor = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/color'
    );

    return data;
  };

  static getAllMaterial = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/material'
    );

    return data;
  };

  static getAllTargetGroup = async ():Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/targetGroup'
    );

    return data;
  };

  static getAllTypeLens = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/typeLens'
    );

    return data;
  };

  static getAllType = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/type'
    );

    return data;
  };

  static getAllOptics = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/optics'
    );

    return data;
  };

  static getAllProducts = async (): Promise<IGetResponse[]> => {
    const {data} = await $glassesApi.get(
      '/product/all/optics'
    );

    return data;
  };

  static getAllProduct = async (): Promise<IProduct[]> => {
    const {data} = await $glassesApi.get(
      '/product/all'
    );
    return data.map((el: {
        imgIds: string[]
      }) => ({
        ...el,
        imagesUrl: el?.imgIds?.map(imgId => getImageUrl(imgId)) || []
      })
    )
  };

  static getNowBuyBanner = async (): Promise<IBanner> => {
    const {data} = await $glassesApi.get(
      '/product/get_banner', {
        params: {
          title: 'NowBuy'
        }
      }
    );
    return data
  };
}

import $glassesApi from '@/src/http';
import {ICreateProductResponse, ICreateResponse} from '@/src/http/api/Product/ProductAdminCreateEndpoints/type';
import {IBanner} from "@/src/http/api/Product/ProductAdminGetEndpoints/type";

export default class ProductAdminCreateEndpoints {

  static createProduct = async (response: ICreateProductResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create',
      {...response}
    );

    return data;
  };

  static createStatus = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/status',
      {...response}
    );

    return data;
  };

  static createDesign = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/design',
      {...response}
    );

    return data;
  };

  static createBrand = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/brand',
      {...response}
    );

    return data;
  };

  static createColor = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/color',
      {...response}
    );

    return data;
  };

  static createMaterial = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/material',
      {...response}
    );

    return data;
  };

  static createTargetGroup = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/targetGroup',
      {...response}
    );

    return data;
  };

  static createTypeLens = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/typeLens',
      {...response}
    );

    return data;
  };

  static createType = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/type',
      {...response}
    );

    return data;
  };

  static createOptics = async (response: ICreateResponse) => {
    const {data} = await $glassesApi.post(
      '/product/create/optics',
      {...response}
    );

    return data;
  };

  static addNowBuyBanner = async (productIds: string[]): Promise<IBanner> => {
    const {data} = await $glassesApi.post(
      '/product/add_banner', {
        title: 'NowBuy',
        productIds
      }
    );
    return data
  };
}

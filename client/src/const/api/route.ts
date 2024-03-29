export const routeAllCategories: string = 'https://dummyjson.com/products/categories';
export const routeProductInCategory = (categoryName: string, offset?: number, limit?: number) => {
  if (categoryName === 'all') {
    return 'https://dummyjson.com/products';
  }
  if (!offset || !limit) {
    return 'https://dummyjson.com/products/category/' + categoryName;
  }
  // return 'https://api.escuelajs.co/api/v1/categories/' + categoryName + `/products/?offset=${offset}&limit=${limit}`;
  return 'https://dummyjson.com/products/category/' + categoryName;

};

export const routeSingleProduct = (id: number) => 'https://dummyjson.com/products/' + id;

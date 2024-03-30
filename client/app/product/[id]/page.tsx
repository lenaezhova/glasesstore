import ProductBody from '@/modules/product/components/ProductBody/ProductBody';

export default function ProductIdPage({params}: {params: {id: string}}) {
  const {id} = params;

  return <ProductBody id={id} />;
}

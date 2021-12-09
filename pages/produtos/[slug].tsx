import {
  ProductPage as ProductPageType,
  ProductSlugs,
  ProductSlugsVariables,
  SlugFilter,
} from '@/generated/schema';
import { contentService } from '@/services';
import ProductSlugsQuery from '@/queries/product-slugs.gql';
import ProductQuery from '@/queries/product.gql';
import { GetStaticPaths } from 'next';
import { ProductOrganism } from '@/components';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await contentService.query<ProductSlugs, {}>({
    query: ProductSlugsQuery,
  });

  if (!data) return { paths: [], fallback: true };

  const paths: string[] = data.allProducts.map((a) => `/produtos/${a.slug}`) || [];

  return {
    paths,
    fallback: true,
  };
};

const ProductPage = ({ product }: any) => {
  return <ProductOrganism product={product} />;
};

export const getStaticProps = async ({ params }: any) => {
  const data = await contentService.query<ProductPageType, any>({
    query: ProductQuery,
    variables: { slug: params.slug as SlugFilter },
  });

  return {
    props: {
      product: data.product,
    },
  };
};

export default ProductPage;

import { Link } from '@/components';
import { ProductRecord } from '@/generated/schema';
import { ProductCardCarousel } from './product-card-image';

type ProductCardProps = {
  product?: ProductRecord;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { title, gallery, intro, slug } = product ?? {};

  return (
    <div className="w-full px-4 py-8">
      <ProductCardCarousel gallery={gallery} />
      <Link className="text-lg" href={`/produtos/${slug}`}>
        <h4 className="font-semibold text-xl mt-2 tracking-wider cursor-pointer">{title}</h4>
      </Link>
      <p className="text-gray-400">{intro}</p>

      <div className="mt-4">
        <Link className="text-lg" href={`/produtos/${slug}`}>
          Ver mais
        </Link>
      </div>
    </div>
  );
};

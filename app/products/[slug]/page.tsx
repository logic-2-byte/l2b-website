import { MARKETPLACE_DATA } from '@/lib/data';
import ProductDetailClient from '@/components/ProductDetailClient';
import type { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = MARKETPLACE_DATA.products;
  return products.map((product) => ({
    slug: String(product.slug),
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = MARKETPLACE_DATA.products.find(p => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Logic2byte",
    };
  }

  return {
    title: `${product.name} | Logic2byte`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}

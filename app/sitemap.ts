import { MetadataRoute } from 'next';
import { MARKETPLACE_DATA } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logic2byte.com';
  
  const staticRoutes = [
    '',
    '/process',
    '/products',
    '/contact',
    '/privacy',
    '/terms'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const productRoutes = MARKETPLACE_DATA.products.map(product => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes];
}

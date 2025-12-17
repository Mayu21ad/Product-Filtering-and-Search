
import { MOCK_PRODUCTS } from '../constants/mockProducts';
import { CATEGORIES, PRICE_RANGES, SORT_OPTIONS } from '../constants/products';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductFilterOptions {
  category?: string;
  priceRange?: [number, number];
  search?: string;
  sort?: string;
}


export function fetchAllProducts(): Promise<Product[]> {
  // Simulate async fetch
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRODUCTS), 300);
  });
}

export function filterProducts(
  products: Product[],
  { category, priceRange, search, sort }: ProductFilterOptions
): Product[] {
  let filtered = [...products];

  if (category && category !== 'All') {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (priceRange && priceRange.length === 2) {
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
  }

  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s)
    );
  }

  if (sort) {
    switch (sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating-asc':
        filtered.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
      case 'rating-desc':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }
  }

  return filtered;
}

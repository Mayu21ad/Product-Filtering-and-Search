// Product categories and filter constants
export const CATEGORIES = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics"
];

export const PRICE_RANGES = [
  { label: 'All', value: [0, Infinity] },
  { label: 'Under $25', value: [0, 25] },
  { label: '$25 to $50', value: [25, 50] },
  { label: '$50 to $100', value: [50, 100] },
  { label: '$100 to $500', value: [100, 500] },
  { label: 'Above $500', value: [500, Infinity] }
];

export const SORT_OPTIONS = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating: High to Low', value: 'rating-desc' },
  { label: 'Rating: Low to High', value: 'rating-asc' }
];

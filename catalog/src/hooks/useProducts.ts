import { useState, useEffect, useCallback } from 'react';
import { fetchAllProducts, filterProducts, Product, ProductFilterOptions } from '../services/productService';

export interface UseProductsParams extends ProductFilterOptions {}

export function useProducts(params: UseProductsParams) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const all = await fetchAllProducts();
      const filtered = filterProducts(all, params);
      setProducts(filtered);
    } catch (e) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}

"use client";
// Product Catalog Page
import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar';
import SearchBar from '../../components/SearchBar';
import ProductGrid from '../../components/ProductGrid';
import ProductActions from '../../components/ProductActions';
import Cart from '../../components/Cart';
import { useRouter } from 'next/navigation';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../services/productService';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';

const DEFAULT_PRICE_RANGE: [number, number] = [0, 1000];

export default function ProductCatalogPage() {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>(DEFAULT_PRICE_RANGE);
  const [sort, setSort] = useState('relevance');
  const [search, setSearch] = useState('');

  const { products, loading, error } = useProducts({ category, priceRange, sort, search });
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

  const handlePreview = (id: number) => {
    router.push(`/product-catalog/${id}`);
  };

  const handleSelect = (product: Product) => {
    setCart((prev) => (prev.find((p) => p.id === product.id) ? prev : [...prev, product]));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Product Catalog
      </Typography>
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sort={sort}
        onSortChange={setSort}
      />
      <Cart items={cart} onRemove={handleRemoveFromCart} />
      {loading ? (
        <CircularProgress sx={{ display: 'block', mx: 'auto', my: 6 }} />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <ProductGrid
          products={products}
          renderActions={(product) => (
            <ProductActions
              onPreview={() => handlePreview(product.id)}
              onSelect={() => handleSelect(product)}
            />
          )}
        />
      )}
    </Container>
  );
}

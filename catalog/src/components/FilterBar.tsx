
import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Slider, Typography, Stack } from '@mui/material';
import { CATEGORIES, PRICE_RANGES, SORT_OPTIONS } from '../constants/products';
import styles from '@/styles/FilterBar.module.css';

interface FilterBarProps {
  category: string;
  onCategoryChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  sort: string;
  onSortChange: (value: string) => void;
}

const minPrice = 0;
const maxPrice = 1000;

const FilterBar: React.FC<FilterBarProps> = ({
  category,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sort,
  onSortChange,
}) => {
  return (
    <div className={styles.filterBarContainer}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" sx={{ width: '100%' }}>
        {/* Category Filter */}
        <FormControl sx={{ minWidth: 160 }} size="small">
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Price Range Filter */}
        <Box sx={{ width: 200 }}>
          <Typography variant="body2" gutterBottom>Price Range</Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <span className={styles.priceRangeExtreme}>{minPrice}</span>
            <Slider
              value={priceRange}
              min={minPrice}
              max={maxPrice}
              step={1}
              onChange={(_, value) => onPriceRangeChange(value as [number, number])}
              valueLabelDisplay="auto"
              disableSwap
              sx={{ flex: 1, mx: 2 }}
            />
            <span className={styles.priceRangeExtreme}>{maxPrice}</span>
          </Box>
        </Box>

        {/* Sort Filter */}
        <FormControl sx={{ minWidth: 160 }} size="small">
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sort}
            label="Sort By"
            onChange={(e) => onSortChange(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
  </div>
  );
};

export default FilterBar;

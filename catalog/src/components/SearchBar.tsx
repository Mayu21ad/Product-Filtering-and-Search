
import React from 'react';
import { InputAdornment, TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '@/styles/SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className={styles.searchBarContainer}>
      <TextField
        size="medium"
        variant="outlined"
        placeholder="Search products by name or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'var(--primary-green)' }} />
            </InputAdornment>
          ),
        }}
        inputProps={{ className: styles.searchInput }}
        sx={{
          maxWidth: 480,
          width: '100%',
          margin: '0 auto',
          background: '#181f1b',
          borderRadius: '8px',
          boxShadow: '0 2px 8px 0 rgba(0,255,153,0.08)',
        }}
      />
    </div>
  );
};

export default SearchBar;

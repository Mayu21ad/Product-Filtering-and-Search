import React from 'react';
import { Button } from '@mui/material';
import styles from '@/styles/ProductActions.module.css';

interface ProductActionsProps {
  onPreview: () => void;
  onSelect: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ onPreview, onSelect }) => (
  <>
    <Button className={styles.previewButton} variant="outlined" size="small" onClick={onPreview}>
      Preview
    </Button>
    <Button className={styles.productButton} variant="contained" size="small" onClick={onSelect}>
      Select
    </Button>
  </>
);

export default ProductActions;

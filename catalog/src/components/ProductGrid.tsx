
import React from 'react';
import { Product } from '../services/productService';
import { Card, CardMedia, CardContent, Typography, CardActions, Rating, Box, Button } from '@mui/material';
import { Grid } from '@mui/material';
import styles from '@/styles/ProductGrid.module.css';


interface ProductGridProps {
  products: Product[];
  renderActions?: (product: Product) => React.ReactNode;
}


const ProductGrid: React.FC<ProductGridProps> = ({ products, renderActions }) => {
  return (
    <Grid container spacing={3} className={styles.fullWidthGrid}>
      {products.map((product) => (
        // @ts-ignore
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card className={styles.productCard}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              className={styles.productCardMedia}
            />
            <CardContent className={styles.productCardContent}>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                {product.description.length > 80
                  ? product.description.slice(0, 80) + '...'
                  : product.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'var(--primary-green)' }}>
                ${product.price}
              </Typography>
            </CardContent>
            <CardActions className={styles.productCardActions}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={product.rating.rate} precision={0.1} readOnly size="small" />
                <Typography variant="caption" sx={{ marginLeft: 1 }}>
                  ({product.rating.count})
                </Typography>
              </Box>
              {renderActions && renderActions(product)}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;

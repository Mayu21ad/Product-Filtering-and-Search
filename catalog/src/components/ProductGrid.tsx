import React from 'react';
import { Product } from '../services/productService';
import { Card, CardMedia, CardContent, Typography, CardActions, Rating, Box } from '@mui/material';
import { Grid } from '@mui/material';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Grid container spacing={3 as any}>
      {products.map((product) => (
        // @ts-ignore
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: 'contain', height: 200, background: '#fafafa' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h6" component="div" noWrap>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {product.description.length > 80
                  ? product.description.slice(0, 80) + '...'
                  : product.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Rating value={product.rating.rate} precision={0.1} readOnly size="small" />
                <Typography variant="caption" sx={{ ml: 1 }}>
                  ({product.rating.count})
                </Typography>
              </Box>
            </CardActions>
          </Card>
  </Grid>
      ))}
  </Grid>
  );
};

export default ProductGrid;

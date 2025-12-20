"use client";

import { useRouter, useParams } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/constants/mockProducts';
import { Container, Typography, Card, CardMedia, CardContent, Box, Button, outlinedInputClasses } from '@mui/material';
import styles from '@/styles/ProductGrid.module.css';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);
  const product = MOCK_PRODUCTS.find((p) => p.id === id);
    
 console.log('params', params);

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h5">Product not found.</Typography>
        <Button onClick={() => router.back()} sx={{ mt: 2 }}>Back</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card className={styles.productCard}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          className={styles.productCardMedia}
          sx={{ width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', height: 220, objectFit: 'contain', background: '#111', borderBottom: '1px solid var(--card-outline)' }}
        />
        <CardContent className={styles.productCardContent}>
          <Typography variant="h4" sx={{ color: 'black', mb: 2 }}>{product.title}</Typography>
          <Typography variant="h6" sx={{ color: 'var(--primary-green)', mb: 2 }}>
            ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 2 }}>{product.description}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="body2" sx={{ color: 'black', mb: 2 }}>
              Category -  {product.category}
            </Typography>
          </Box>
          <Button onClick={() => router.back()} className={styles.productButton} variant="outlined">
            Back to Catalog
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

import React from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const products = [
    {
      id: 1,
      discount: 28,
      image: 'Imagens/33a4bcbab75e9ce724ca78e2f344944f.jpg',
      weight: '125 g',
      name: 'BISCOITO RECHEADO BONO SABOR CHOCOLATE COM BAUNILHA',
      price: '2,99'
    },
    {
      id: 2,
      discount: 28,
      image: 'Imagens/33a4bcbab75e9ce724ca78e2f344944f.jpg',
      weight: '',
      name: 'BISCOITO RECHEADO BONO SABOR CHOCOLATE COM BAUNILHA',
      price: '2,99'
    }
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

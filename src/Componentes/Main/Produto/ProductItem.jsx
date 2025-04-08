import React, { useState } from 'react';

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="for_prod">
      <div className="oferta">
        {product.discount && <p className="desconto">-{product.discount}%</p>}
        <div className="div_img">
          <img src={product.image} alt={product.name} />
        </div>
        {product.weight && <p className="peso">{product.weight}</p>}
      </div>

      <div className="divDescOferta">
        <p className="nome">{product.name}</p>
        <p className="preco">{product.price}</p>
        <div className="for_quant">
          <div className="for_menos" onClick={decreaseQuantity}>
            <p>-</p>
          </div>
          <p>{quantity}</p>
          <div className="mais" onClick={increaseQuantity}>
            <span className="material-symbols-rounded">add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

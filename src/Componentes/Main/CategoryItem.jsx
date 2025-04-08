import React from 'react';

function CategoryItem({ category }) {
  return (
    <div className={category.id === 'promo' ? 'catselected' : ''}>
      <img src={category.icon} alt={category.label} />
      <div className="divNameSection">
        <p>{category.label}</p>
      </div>
    </div>
  );
}

export default CategoryItem;
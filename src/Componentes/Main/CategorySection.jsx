import React from 'react';
import CategoryItem from './CategoryItem';

function CategorySection() {
  const categories = [
    { id: 'promo', icon: 'IconePromocao/iconePromo.png', label: 'Promoções' },
    { id: 'merce', icon: 'iconeMercearia/cafe.png', label: 'Mercearia' },
    { id: 'doces', icon: 'iconesDoces/choco.png', label: 'Doces e Biscoitos' },
    { id: 'horti', icon: 'iconesHortifruit/maca.png', label: 'Hortifruit' },
    { id: 'pada', icon: 'iconesPadaria/croisant.png', label: 'Padaria' },
    { id: 'acou', icon: 'iconesAcougue/frangoc.png', label: 'Açougue' },
    { id: 'frios', icon: 'iconesFrios/queijo.png', label: 'Frios e Congelados' },
    { id: 'casaCozi', icon: 'iconesCasaCozinha/botijão.png', label: 'Casa e Cozinha' },
    { id: 'limpe', icon: 'IconesLimpeza/rodo.png', label: 'Limpeza Doméstica' },
    { id: 'higi', icon: 'iconesHigiene/papel.png', label: 'Higiene pessoal' },
    { id: 'papelaria', icon: 'IconesPepelaria/esqua.png', label: 'Papelaria' },
    { id: 'pet', icon: 'iconesPetShop/pata.png', label: 'PetShop' },
  ];

  return (
    <div id="part_sections">
      <span className="material-symbols-outlined">swipe_left</span>
      <div id="for_sections">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;

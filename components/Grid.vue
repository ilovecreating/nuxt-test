<template>
  <div class="product-grid">
    <div class="card" v-for="(product, index) in products" :key="index">
      <img :src="product.image" alt="" class="product-image" />
      <div class="card-content">
        <h3 class="title">ПЛАТЬЕ С V-ОБРАЗНЫМ ВЫРЕЗОМ, БЕЛЫЙ</h3>
        <div class="price-row">
          <span class="current-price">14 900 RUB</span>
          <span class="old-price">8 000 RUB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { image: "/assets/grid1.png" },
        { image: "/assets/grid2.png" },
        { image: "/assets/grid3.png" },
        { image: "/assets/grid4.png" },
        // добавьте больше товаров по необходимости
      ],
    };
  },
};
</script>

<style scoped>
/* Грид сетка */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  max-width: 1440px;
  box-sizing: border-box;
}

/* Карточка */
.card {
  width: 100%;
  max-width: 333px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}


/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Картинка */
.product-image {
  width: 100%;
  height: auto; /* резиновая картинка */
}

/* Контент внутри карточки */
.card-content {
  padding-top: 15px; /* отступ между картинкой и текстом */
}

/* Заголовок */
.title {
  font-size: 16px;
  margin-bottom: 10px; /* между текстом и ценами, можно регулировать */
}

/* Строка цен */
.price-row {
  display: flex;
  align-items: center;
}

.current-price {
  font-weight: bold;
}

.old-price {
  margin-left: 10px; /* отступ между ценами */
  text-decoration: line-through;
  color: rgba(130,130,130,1);
}
</style>
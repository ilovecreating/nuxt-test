<template>
    <div>
    <div class="container-main">
        <Header />
        </div>
        <ProductCard/>
        <div class="container-main">
              <p class="left-text-main">Похожие товары</p>
              <Grid/>
        </div>
        

        </div>
    <!-- остальной контент -->
  
  
</template>

<script>
import Header from '~/components/Header.vue'
import ProductCard from '~/components/ProductCard.vue'

import Grid from '../components/Grid.vue';
export default {
  components: {
    Header,
    ProductCard,
    Grid
  }
}
</script>

<style>
.container-main {
  max-width: 1440px;
  padding: 22px 32px;
  width: 100%; /* чтобы было адаптивно при меньших экранах */
  margin-left: auto;
  margin-right: auto;
}

.left-text-main {
    text-align: left;
    margin-bottom: 31px;
}
body {
    margin: 0; 
}
</style>
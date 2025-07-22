<template>
  <div class="product-card">
    <!-- <div class="content-wrapper">

    </div> -->
    <!-- Левая часть: слайдер -->
    <div class="left-section">
       <div class="thumbnails">
      <div
        v-for="(thumb, index) in thumbnails"
        :key="index"
        class="thumbnail"
        :class="{ active: index === selectedImageIndex }"
        @click="selectImage(index)"
      >
        <img :src="thumb" alt="Thumbnail" />
      </div>
    </div>

    <!-- Большой слайдер -->
    <div ref="mySwiper" class="swiper-container">
      <div class="swiper-wrapper">
        <!-- В этом случае показываем только выбранное изображение -->
        <div class="swiper-slide">
          <div class="image-ctr">
            <img :src="images[selectedImageIndex]" alt="Main Image" />
          </div>
            <button
                class="nav-button prev"
                @click="prevImage"
                :disabled="selectedImageIndex === 0"
                :class="{ 'active': selectedImageIndex !== 0 }"
            >
                 <img src="/assets/left.svg" alt="left" />
            </button>
            <button
                class="nav-button next"
                @click="nextImage"
                :disabled="selectedImageIndex === images.length - 1"
                :class="{ 'active': selectedImageIndex !== images.length - 1 }"
            >
                <img src="/assets/right.svg" alt="right" />
            </button>
        </div>
      </div>
      <div class="dots-container">
        <div
            v-for="(dot, index) in 3"
            :key="index"
            class="dot"
            :class="{ active: index === selectedImageIndex }"
            @click="selectImage(index)"
        ></div>
    </div>

    </div>

    <!-- Миниатюры под слайдером -->
   

      <!-- Миниатюры под слайдером -->
      
    </div>
    <div class="right-container">
            <div class="">
                <!-- ваш существующий код -->
                <h2 class="product-title">Жакет-удлинённый</h2>
                <p class="price">8900 RUB</p>

                <!-- Размеры -->
                <div class="sizes-section">
                    <p>Размеры</p>
                    <div class="sizes-options">
                    <div
                        v-for="(size, index) in sizes"
                        :key="index"
                        class="size-block"
                        :class="{ selected: selectedSize === size }"
                        @click="selectSize(size)"
                    >
                        {{ size }}
                    </div>
                        

                    </div>
                    <div class="flex-subs">
                        <div class="size-label">мало</div>
                        <div class="size-label">подписка</div>
                    </div>
                </div>

                <!-- Цвет -->
                <div class="colors-section">
                    <p>Цвет</p>
                    <div class="colors-options">
                    <div
                        v-for="(color, index) in colors"
                        :key="index"
                        class="color-block"
                        :style="{ backgroundColor: color }"
                        :class="{ selected: selectedColor === color }"
                        @click="selectColor(color)"
                    ></div>
                    </div>
                </div>

                <!-- Кнопка и SVG -->
                <div class="add-to-cart-section">
                    <button class="add-button">Добавить в корзину</button>
                    <div class="svg-box">
                    <img src="/assets/favourite.svg" alt=""/>
                    
                    </div>
                </div>

                <!-- скрытые блоки -->
                    <div class="toggle-blocks">
                    <!-- Описание -->
                    <div class="section">
                        <button @click.prevent.stop="toggleDescription"><span>Описание </span><img src="/assets/plus.svg" alt="plus"/></button>
                        <div v-if="showDescription" class="content-block description-block">
                        <p>Здесь находится описание товара...</p>
                        </div>
                    </div>

                    <!-- Состав и уход -->
                    <div class="section">
                        <button @click.prevent.stop="toggleCare"><span>Состав и уход</span><img src="/assets/plus.svg" alt="plus"/></button>
                        <div v-if="showCare" class="content-block care-block">
                        <p>Здесь информация о составе и уходе за изделием...</p>
                        </div>
                    </div>
                    </div>
            </div>

    </div>
    <!-- Правая часть: описание -->

</div>
</template>
    
    <!-- Стиль для всего компонента -->
<style scoped>

.container {
  max-width: 1440px;
  padding: 22px 32px;
  width: 100%; /* чтобы было адаптивно при меньших экранах */
  margin-left: auto;
  margin-right: auto;
}


.product-card {
  display: flex;
  gap:20px;
  padding:20px;
}
/* Левая часть */
.left-section {
  display: flex;
}
.thumbnails {
  display: flex;
  flex-direction: column;
  gap:10px;
}
.thumbnail {
  width:50px;
  height:70px;
  cursor:pointer;
  border:2px solid transparent;
}
.thumbnail.active {
  
}
.thumbnail img {
  width:100%;
  height:auto;
}
.main-image img {
  width: 100%;
  height:auto;
}
/* Правая часть */
.right-container {
  flex:1;
  padding-left: 32px;
  padding-right: 32px;
}
.product-title {
  font-size:24px;
  margin-bottom:10px;
}
.price {
  font-size:20px;
  margin-bottom:20px;
}
/* Размеры */
.sizes-section p {
  margin-bottom: 8px;
}
.sizes-options {
  display:flex;
  gap:10px;
}
.size-block {
   padding-left:24px;
   padding-right:27px;
   padding-top: 9px;
   padding-bottom:9px;
   border:1px solid rgba(51, 51, 51, 1);
   cursor:pointer;
   font-size: 10px;
   color: rgba(51, 51, 51, 1);
  user-select:none; 
  transition:.3s all; 
}
.size-block.selected {
  
  
  border-color: rgba(189, 189, 189, 1);
}

/* Цвета */
.colors-section p {
  margin-top:15px; 
  margin-bottom:5px; 
}
.colors-options {
  display:flex; 
  gap:10px; 
}
.color-block {
  width:30px; 
  height:30px; 
  cursor:pointer; 
  border-radius:4px; 
  border:2px solid transparent; 
  transition:.3s all;
  
}
.color-block:first-child {
  border-color:rgba(189, 189, 189, 1);

}
.color-block.selected {
  border-color:rgba(189, 189, 189, 1); 
 
  position: relative;
}
.color-block.selected::after {
  content: "";
  position: absolute;
  left: -1px;
  right: 0;
  width: 34px;
  bottom: -8px;
  height: 2px;
  background-color: rgba(79, 79, 79, 1);
}


.flex-subs {
    display: flex;
    justify-content: space-between;
    max-width: 205px;
}

.size-label {
    font-size: 10px;
    color: rgba(189, 189, 189, 1);
    line-height: 14px;
}
.size-label:first-child {
    padding-left: 20px;
    
}
.size-label:last-child {
    padding-right: 10px;
    
}


/* Кнопка и SVG */
.add-to-cart-section {
  display:flex; 
  align-items:center; 
  gap:10px; 
  margin-top:20px;
  margin-bottom: 40px;
}
.add-button {
  background-color:#000; 
  color:#fff; 
  padding:12px 24px;
  width: 306px;
  height: 44px;
  border:none; 
  border-radius:4px; 
  cursor:pointer; 
  font-size:14px; 
}
.svg-box {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000; /* добавьте нужный стиль границы */
  
}
.svg-box img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
/* Скрытые блоки */
.toggle-blocks button {
    
  background:none;  
  border:none;  
  color:rgba(51, 51, 51, 1);  
  cursor:pointer;  
  padding:0;
   
}
.description-block,
.care-block {
  margin-top:-10px;
  padding-left:10px;
}
.swiper-container {
  width: 100%; /* или любой нужный вам размер */
  height: auto; /* или auto, если хотите адаптивность */
}
.swiper-slide {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  max-width: 100%;
  height: auto;
}
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  width: 40px;
  height: 40px;
  
  border-radius: 50%;
  
  background-color: rgba(0,0,0,0.3);
  
  border: none;
  
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;

  
}
.nav-button img {
  filter: brightness(0) invert(0); /* по умолчанию — чёрное */
  transition: filter 0.3s;
}

/* Когда кнопка активна — изображение чёрное (уже так есть) */
.nav-button.active img {
  filter: brightness(0) invert(0);
}

/* Неактивная кнопка — делаем изображение серым, чтобы было видно, что нельзя нажимать */
.nav-button:disabled,
.nav-button:not(.active) {
  opacity: 0.5; /* делаем серой */
  cursor: not-allowed;
}
.image-ctr img {
  display: block; /* убирает лишние пробелы */
  width: 100%; /* растягивается по ширине контейнера */
  height: auto; /* сохраняет пропорции */
}

/* Позиционирование стрелок слева и справа */
.prev {
  left: 45px; /* чуть левее картинки */
}
.next {
  right: 45px; /* чуть правее картинки */
}


.section {
  border-top: 1px solid #ccc; /* бордер вокруг каждой секции */
  border-bottom: 1px solid #ccc;
  padding: 10px;
}

.section button {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

/* Можно добавить стили для содержимого */
.content-block {
  margin-top: 10px;
}
.section:last-child {
    border-top: none;
}


.dots-container {
  position: absolute; /* чтобы разместить поверх картинки */
  bottom: 20px; /* отступ снизу */
  left:50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1000;
}

/* Сами точки */
.dot {
  width: 12px;
  height: 12px;
  border-radius:50%;
  background-color: white;
  opacity:0.4;
  cursor:pointer;
 
}

/* Активная точка */
.dot.active {
  opacity:1;
}


@media (max-width: 768px) {
  .product-card {
    flex-direction: column; /* Вертикальный порядок */
  }

  /* Сделать левую часть сверху */
  .left-section {
    order: 1;
    margin-bottom: 20px; /* отступ снизу */
  }

  /* Сделать правую часть снизу */
  .right-container {
    order: 2;
  }
  .thumbnails {
    display: none;
  }

  .image-ctr {
    max-width: none; /* убираем ограничение по ширине */
    width: 100vw; /* растягиваем на всю ширину вьюпорта */
    margin-left: calc(-50vw + 50%); /* сдвигаем влево, чтобы выйти за границы контейнера */
    position: relative;
  }
  
  .image-ctr img {
    width:100%;
    height:auto;
    display:block;
  }
  .product-card {
    padding-right: 0px;
    padding-left: 0px;
  }
  /* Можно дополнительно настроить ширину или отступы, если нужно */
}


</style>



<script>
import slider1 from '@/assets/slider1.png';
import slider2 from '@/assets/slider2.png';
import slider3 from '@/assets/slider3.png';


export default {

 data() {

   return {
     images: [slider1, slider2, slider3],
     thumbnails: [slider1, slider2, slider3],
     selectedImageIndex: 0,
     sizes: ['XS', 'S', 'M'],
     selectedSize: null,
     colors: ['#FFFFFF', '#000000',  'rgba(249, 241, 220, 1)'],
     selectedColor: null,
     showDescription:false,
     showCare:false,
   };
 },
 methods: {
     selectImage(index) {
      this.selectedImageIndex = index;
      if (this.swiper) {
        this.swiper.slideTo(index);
      }
    },
  loadImagesAndInitSwiper() {
    const images = this.$el.querySelectorAll('img');
    const promises = Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
          }
        })
    );

    Promise.all(promises).then(() => {
      this.$nextTick(() => {
         if (this.swiper) {
            this.swiper.destroy(true, true);
          }
        import('swiper').then(({ default: Swiper }) => {
          this.swiper = new Swiper(this.$refs.mySwiper, {
            slidesPerView: 1,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            initialSlide: this.selectedImageIndex,
            on: {
              slideChange: () => {
                this.selectedImageIndex = this.swiper.activeIndex;
              },
            },
          });
          this.swiper.update(); // Обновляем размеры
        });
      });
    });
  },
   initSwiper() {
      import('swiper').then(({ default: Swiper }) => {
        this.swiper = new Swiper(this.$refs.mySwiper, {
          slidesPerView:1,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          initialSlide: this.selectedImageIndex,
          on: {
          slideChange: () => {
            // Обновляем индекс при смене слайда
            
            this.selectedImageIndex = this.swiper.activeIndex;
          },
        },
        });
      });
    },
    nextImage() {
      if (this.selectedImageIndex < this.images.length - 1) {
        this.selectedImageIndex++;
      }
    },
    prevImage() {
      if (this.selectedImageIndex > 0) {
        this.selectedImageIndex--;
      }
    },
   toggleDescription() {
     this.showDescription = !this.showDescription;
   },
   toggleCare() {
     this.showCare= !this.showCare;
   },
   selectSize(size) {
     this.selectedSize = size;
   },
   selectColor(color) {
     this.selectedColor= color;
   }
 },
  mounted() {
    // this.loadImagesAndInitSwiper();
    this.initSwiper()
  }
};
</script>
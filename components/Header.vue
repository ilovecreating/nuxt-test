<template>
  <header class="header">
    <div class="container-mobile">
        <nav class="nav left">
        <ul>
          <li><a href="#"><img class="favourite" src="/assets/user.svg" alt="user"></a></li>
          <li><a href="#"><img class="favourite" src="/assets/search.svg" alt="search"></a></li>
        </ul>
      </nav>
      <h1 class="title"><img src="/assets/logo.svg" alt="logo"></h1>
      <nav class="nav right">
        <ul>
          <li><a href="#"><img class="favourite" src="/assets/shop.svg" alt="shop"></a></li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <h1 class="title"><img class="favourite" src="/assets/logo.svg" alt="logo"></h1>
      <nav class="nav">
        <ul>
          <li><a href="#"><img class="favourite" src="/assets/search.svg" alt="search"></a></li>
          <li><a href="#"><img class="favourite" src="/assets/favourite.svg" alt="favourite"></a></li>
          <li><a href="#"><img class="favourite" src="/assets/favourite.svg" alt="user"></a></li>
          <li><a href="#"><img class="favourite" src="/assets/shop.svg" alt="shop"></a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {

  padding: 10px 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center; /* Центрируем содержимое по горизонтали */
  position: relative;
}
.container-mobile {
    display: none;

}
@media (max-width: 769px) {
    .container {
        display: none;
    }
    .container-mobile {
        display: flex;
        align-items: center;
        justify-content: center; /* Центрируем содержимое по горизонтали */
        position: relative;
    }
    .left {
        left: 20px;
    }
}
/* Заголовок по центру */
.title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}

/* Навигация справа */
.nav {
  position: absolute;
  right: 20px; /* Отступ справа */
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.nav a {
  text-decoration: none;
  color: #333;
}
.favourite {
    
}
.nav a:hover {
  text-decoration: underline;
}
</style>
export default {
  // Режим работы: Universal (SSR) или Static (SSG)
  // Для статической генерации используйте target: 'static'
  target: 'server', // или 'static' для статического сайта

  // Заголовки страницы
  head: {
    title: 'Nuxt 2 проект',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Пример проекта на Nuxt 2' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Глобальные CSS
   css: [
    'swiper/css',
    'swiper/css/navigation'
  ],

  // Плагины, которые нужно подключить перед созданием корневого Vue экземпляра
  plugins: [
    // Например, плагины Vue
  ],

  // Автоматическая регистрация компонентов
  components: true,

  // Модули Nuxt.js
  modules: [
    // Например, '@nuxtjs/axios'
  ],

  // Конфигурация сборки Webpack
  build: {
    extend(config, ctx) {
      // Можно расширять конфигурацию Webpack здесь
    }
  }
}
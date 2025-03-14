// src/App.vue
<template>
  <div class="app">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
:root {
  --primary-color: #2c8a43; /* 環境・リサイクルをイメージする緑 */
  --secondary-color: #336699; /* 信頼感のある青 */
  --accent-color: #ff9933; /* アットホームさを表現するオレンジ */
  --light-color: #f5f5f5;
  --dark-color: #333333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  color: var(--dark-color);
  background-color: var(--light-color);
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  color: var(--primary-color);
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #236e35;
}

.btn-secondary {
  background-color: var(--secondary-color);
}

.btn-secondary:hover {
  background-color: #264d73;
}

.btn-accent {
  background-color: var(--accent-color);
}

.btn-accent:hover {
  background-color: #e68a2e;
}
</style>
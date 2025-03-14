<template>
    <header class="header">
      <div class="container header-container">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo.jpg" alt="有限会社二興" />
            <span>有限会社二興</span>
          </router-link>
        </div>
        
        <nav class="nav" :class="{ 'nav-active': menuOpen }">
          <ul class="nav-list">
            <li><router-link to="/" @click="closeMenu">ホーム</router-link></li>
            <li><router-link to="/about" @click="closeMenu">会社概要</router-link></li>
            <li><router-link to="/services" @click="closeMenu">サービス</router-link></li>
            <li><router-link to="/parts" @click="closeMenu">部品販売</router-link></li>
            <li><router-link to="/faq" @click="closeMenu">よくある質問</router-link></li>
            <li><router-link to="/contact" @click="closeMenu">お問い合わせ</router-link></li>
          </ul>
        </nav>
        
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        menuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      closeMenu() {
        this.menuOpen = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
  }
  
  .logo a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--dark-color);
  }
  
  .logo img {
    height: 50px;
    margin-right: 10px;
  }
  
  .logo span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
  }
  
  .nav-list li {
    margin-left: 20px;
  }
  
  .nav-list a {
    text-decoration: none;
    color: var(--dark-color);
    font-weight: 500;
    position: relative;
    padding-bottom: 5px;
  }
  
  .nav-list a:hover, .nav-list a.router-link-active {
    color: var(--primary-color);
  }
  
  .nav-list a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s;
  }
  
  .nav-list a:hover::after, .nav-list a.router-link-active::after {
    width: 100%;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
  }
  
  .hamburger span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: var(--dark-color);
    transition: all 0.3s;
  }
  
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }
    
    .nav {
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      background-color: white;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      height: 0;
      overflow: hidden;
      transition: height 0.3s;
    }
    
    .nav-active {
      height: 300px;
    }
    
    .nav-list {
      flex-direction: column;
      padding: 20px;
    }
    
    .nav-list li {
      margin: 10px 0;
    }
  }
  </style>
<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>有限会社二興</h3>
            <p>〒XXX-XXXX</p>
            <p>○○県○○市○○町1-2-3</p>
            <p>TEL: 012-345-6789</p>
            <p>営業時間: 9:00〜18:00（定休日: 日曜・祝日）</p>
          </div>
          
          <div class="footer-links">
            <h4>サイトマップ</h4>
            <ul>
              <li><router-link to="/">ホーム</router-link></li>
              <li><router-link to="/about">会社概要</router-link></li>
              <li><router-link to="/services">サービス</router-link></li>
              <li><router-link to="/parts">部品販売</router-link></li>
              <li><router-link to="/faq">よくある質問</router-link></li>
              <li><router-link to="/contact">お問い合わせ</router-link></li>
            </ul>
          </div>
          
          <div class="footer-contact">
            <h4>お問い合わせ</h4>
            <p>お車の買取やリサイクル部品についてのご質問は、お気軽にお問い合わせください。</p>
            <router-link to="/contact" class="btn">お問い合わせはこちら</router-link>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} 有限会社二興. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: var(--dark-color);
    color: white;
    padding: 60px 0 20px;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }
  
  .footer h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .footer h4 {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: var(--accent-color);
  }
  
  .footer p {
    margin-bottom: 10px;
  }
  
  .footer-links ul {
    list-style: none;
  }
  
  .footer-links li {
    margin-bottom: 8px;
  }
  
  .footer-links a, .footer-contact a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links a:hover {
    color: var(--accent-color);
  }
  
  .footer-contact .btn {
    margin-top: 15px;
    background-color: var(--accent-color);
  }
  
  .footer-contact .btn:hover {
    background-color: #e68a2e;
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  </style>
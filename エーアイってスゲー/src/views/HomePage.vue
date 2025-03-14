<template>
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>車に新しい命を。<br>環境と未来のために。</h1>
            <p>有限会社二興は、車のリサイクルを通じて<br>持続可能な社会の実現に貢献します。</p>
            <div class="hero-buttons">
              <router-link to="/services" class="btn">買取サービス</router-link>
              <router-link to="/parts" class="btn btn-secondary">部品を探す</router-link>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Services Overview -->
      <section class="section services-overview">
        <div class="container">
          <h2 class="section-title">私たちのサービス</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'car']" />
              </div>
              <h3>車の買取</h3>
              <p>不動車、事故車、廃車など、どんな状態の車でも適正価格で買い取ります。</p>
              <router-link to="/services#purchase" class="more-link">詳しく見る</router-link>
            </div>
            
            <div class="service-card">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'recycle']" />
              </div>
              <h3>車のリサイクル</h3>
              <p>買い取った車を適切に分解し、資源を最大限に有効活用します。</p>
              <router-link to="/services#recycle" class="more-link">詳しく見る</router-link>
            </div>
            
            <div class="service-card">
              <div class="service-icon">
                <font-awesome-icon :icon="['fas', 'cogs']" />
              </div>
              <h3>部品販売</h3>
              <p>厳選した中古部品を品質保証付きで提供しています。</p>
              <router-link to="/parts" class="more-link">詳しく見る</router-link>
            </div>
          </div>
        </div>
      </section>
      
      <!-- About Us -->
      <section class="section about-overview">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>アットホームな<br>車のリサイクル専門店</h2>
              <p>有限会社二興は2000年の設立以来、車のリサイクルに特化した事業を展開してきました。お客様一人ひとりに寄り添ったサービスを心がけ、アットホームな雰囲気で皆様のお役に立てるよう努めています。</p>
              <router-link to="/about" class="btn">会社概要</router-link>
            </div>
            <div class="about-image">
              <img src="../assets/company-image.jpg" alt="有限会社二興 作業風景" />
            </div>
          </div>
        </div>
      </section>
      
      <!-- Customer Voice -->
      <section class="section customer-voice">
        <div class="container">
          <h2 class="section-title">お客様の声</h2>
          <div class="testimonials">
            <div class="testimonial">
              <div class="testimonial-content">
                <p>「不動車の処分に困っていましたが、二興さんに相談して本当に良かったです。丁寧な対応と適正価格での買取に満足しています。廃車の手続きも全て代行してくれて、とても助かりました。」</p>
            </div>
            <div class="testimonial-author">
              <span>田中 様</span>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-content">
              <p>「修理費用が高くて悩んでいたところ、二興さんの中古部品を利用しました。新品同様の状態で保証もついていて安心です。部品探しから取り付けまでアドバイスいただき感謝しています。」</p>
            </div>
            <div class="testimonial-author">
              <span>佐藤 様</span>
            </div>
          </div>
          
          <div class="testimonial">
            <div class="testimonial-content">
              <p>「事故で廃車になった車の買取をお願いしました。迅速な対応と思った以上の買取価格で驚きました。スタッフの方々の親身な対応が印象的です。」</p>
            </div>
            <div class="testimonial-author">
              <span>鈴木 様</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact CTA -->
    <section class="section contact-cta">
      <div class="container">
        <div class="cta-content">
          <h2>お気軽にお問い合わせください</h2>
          <p>車の買取査定やリサイクル部品についてのご質問など、どんなことでもお気軽にご相談ください。</p>
          <div class="cta-buttons">
            <a href="tel:0123456789" class="btn btn-accent">
              <font-awesome-icon :icon="['fas', 'phone']" /> 電話で問い合わせる
            </a>
            <router-link to="/contact" class="btn">
              <font-awesome-icon :icon="['fas', 'envelope']" /> メールで問い合わせる
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/backimage.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 120px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.more-link {
  display: inline-block;
  margin-top: 15px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
}

.more-link:hover {
  text-decoration: underline;
}

.about-overview {
  background-color: #f9f9f9;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  line-height: 1.2;
}

.about-text p {
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  position: relative;
  padding: 20px 0;
}

.testimonial-content::before {
  content: '"';
  font-size: 5rem;
  color: rgba(44, 138, 67, 0.1);
  position: absolute;
  top: -20px;
  left: -20px;
}

.testimonial-author {
  text-align: right;
  font-weight: bold;
  margin-top: 20px;
}

.contact-cta {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    order: -1;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
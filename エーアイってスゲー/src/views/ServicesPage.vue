<template>
    <div class="services">
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>サービス案内</h1>
        </div>
      </section>
      
      <!-- Service Navigation -->
      <section class="service-nav">
        <div class="container">
          <div class="nav-buttons">
            <a href="#purchase" class="nav-button">
              <font-awesome-icon :icon="['fas', 'car']" />
              <span>車の買取</span>
            </a>
            <a href="#recycle" class="nav-button">
              <font-awesome-icon :icon="['fas', 'recycle']" />
              <span>リサイクル</span>
            </a>
            <a href="#parts" class="nav-button">
              <font-awesome-icon :icon="['fas', 'cogs']" />
              <span>部品販売</span>
            </a>
          </div>
        </div>
      </section>
      
      <!-- Car Purchase Service -->
      <section id="purchase" class="section purchase-section">
        <div class="container">
          <h2 class="section-title">車の買取サービス</h2>
          <div class="service-content">
            <div class="service-image">
              <img src="../assets/karaage.jpg" alt="車の買取サービス">
            </div>
            <div class="service-details">
              <h3>どんな車でも買い取ります</h3>
              <p>有限会社二興では、以下のようなあらゆる状態の車を買い取っております。</p>
              <ul>
                <li>不動車・故障車</li>
                <li>事故車・水没車</li>
                <li>廃車予定の車</li>
                <li>車検切れの車</li>
                <li>過走行車</li>
              </ul>
              
              <h3>査定から引き取りまで</h3>
              <div class="process-steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>お問い合わせ</h4>
                    <p>電話かメールフォームから車の情報をお伝えください。</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>無料査定</h4>
                    <p>お車の状態に合わせた適正価格を算出いたします。</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>買取契約</h4>
                    <p>ご満足いただける価格であれば契約を結びます。</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h4>引き取り</h4>
                    <p>ご指定の場所まで無料で引き取りに伺います。</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">5</div>
                  <div class="step-content">
                    <h4>お支払い</h4>
                    <p>現金または銀行振込にて買取代金をお支払いします。</p>
                  </div>
                </div>
              </div>
              
              <h3>手続きも安心</h3>
              <p>名義変更や抹消登録などの煩わしい手続きも全て当社で代行いたします。お客様の手間を最小限に抑え、安心してご利用いただけるサービスを提供しています。</p>
              
              <div class="cta-button">
                <router-link to="/contact" class="btn">無料査定を依頼する</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Recycle Service -->
      <section id="recycle" class="section recycle-section">
        <div class="container">
          <h2 class="section-title">リサイクル事業</h2>
          <div class="service-content reverse">
            <div class="service-image">
              <img src="../assets/karaage.jpg" alt="車のリサイクル事業">
            </div>
            <div class="service-details">
              <h3>環境に配慮した適正処理</h3>
              <p>買い取った車は自動車リサイクル法に基づき、環境に配慮した方法で適正に解体・処理しています。</p>
              
              <h3>リサイクルプロセス</h3>
              <div class="process-steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>受入検査</h4>
                    <p>買い取った車の状態を詳細に検査します。</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>有害物質の回収</h4>
                    <p>エアバッグ、フロン、廃油などを適切に回収・処理します。</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>部品取り</h4>
                    <p>再利用可能な部品を丁寧に取り外します。</p>
                  </div></div>
              
                  <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                      <h4>素材別分別</h4>
                      <p>鉄・非鉄金属・プラスチックなどの素材ごとに分別します。</p>
                    </div>
                  </div>
                  
                  <div class="step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                      <h4>資源化</h4>
                      <p>分別した素材を専門業者へ送り、再資源化します。</p>
                    </div>
                  </div>
                </div>
                
                <h3>環境への取り組み</h3>
                <p>当社では以下の環境対策に積極的に取り組んでいます。</p>
                <ul>
                  <li>エアバッグ類の適正処理</li>
                  <li>フロン類の適正回収</li>
                  <li>廃油・廃液の漏洩防止と処理</li>
                  <li>解体工程での騒音・粉塵対策</li>
                  <li>リサイクル率の向上</li>
                </ul>
                
                <div class="eco-stats">
                  <div class="stat-item">
                    <div class="stat-value">95<span>%</span></div>
                    <div class="stat-label">リサイクル率</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">8,000<span>台</span></div>
                    <div class="stat-label">年間処理台数</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-value">20<span>年</span></div>
                    <div class="stat-label">事業実績</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Parts Sales -->
        <section id="parts" class="section parts-section">
          <div class="container">
            <h2 class="section-title">部品販売</h2>
            <div class="service-content">
              <div class="service-image">
                <img src="../assets/karaage.jpg" alt="リサイクル部品販売">
              </div>
              <div class="service-details">
                <h3>品質にこだわったリサイクル部品</h3>
                <p>当社では、厳しい品質基準をクリアした中古部品を提供しています。新品部品に比べてリーズナブルな価格で、環境にも優しいリサイクル部品をぜひご利用ください。</p>
                
                <h3>取扱部品一覧</h3>
                <div class="parts-categories">
                  <div class="category">
                    <h4>エンジン関連部品</h4>
                    <p>エンジン本体、エンジンコンピューター、ターボ、インジェクターなど</p>
                  </div>
                  
                  <div class="category">
                    <h4>電装部品</h4>
                    <p>オルタネーター、セルモーター、ライト類、メーター、スイッチ類など</p>
                  </div>
                  
                  <div class="category">
                    <h4>足回り部品</h4>
                    <p>ショック、サスペンション、ブレーキキャリパー、ABSユニットなど</p>
                  </div>
                  
                  <div class="category">
                    <h4>外装部品</h4>
                    <p>ドア、フェンダー、バンパー、ボンネット、リアゲートなど</p>
                  </div>
                  
                  <div class="category">
                    <h4>内装部品</h4>
                    <p>シート、ダッシュボード、コンソール、ステアリングなど</p>
                  </div>
                  
                  <div class="category">
                    <h4>その他</h4>
                    <p>ミッション、デファレンシャル、ラジエター、エアコンコンプレッサーなど</p>
                  </div>
                </div>
                
                <h3>品質保証</h3>
                <p>当社のリサイクル部品は全て動作確認済みであり、品質に自信を持っています。部品の種類に応じて1ヶ月〜3ヶ月の保証を付けておりますので、安心してご利用いただけます。</p>
                
                <h3>部品検索・お問い合わせ</h3>
                <p>お探しの部品がございましたら、お電話またはお問い合わせフォームよりご連絡ください。車種・年式・型式などの情報をお伝えいただければ、在庫状況をすぐに確認いたします。</p>
                
                <div class="parts-buttons">
                  <router-link to="/parts" class="btn">部品一覧を見る</router-link>
                  <router-link to="/contact" class="btn btn-secondary">部品を問い合わせる</router-link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- FAQ -->
        <section class="section faq-section">
          <div class="container">
            <h2 class="section-title">よくあるご質問</h2>
            
            <div class="faq-list">
              <div class="faq-item">
                <div class="faq-question" @click="toggleFaq(0)" :class="{active: activeFaq === 0}">
                  車検の切れた車でも買い取ってもらえますか？
                  <span class="toggle-icon">{{ activeFaq === 0 ? '−' : '＋' }}</span>
                </div>
                <div class="faq-answer" :class="{active: activeFaq === 0}">
                  <p>はい、車検切れの車でも買い取っております。また、当社で引き取りに伺いますので、車検切れでお車を動かせない場合でもご安心ください。</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" @click="toggleFaq(1)" :class="{active: activeFaq === 1}">
                  買取からお金の支払いまでどれくらいかかりますか？
                  <span class="toggle-icon">{{ activeFaq === 1 ? '−' : '＋' }}</span>
                </div>
                <div class="faq-answer" :class="{active: activeFaq === 1}">
                  <p>基本的には車の引き取り時に現金でのお支払いが可能です。銀行振込をご希望の場合は、最短で当日、遅くとも3営業日以内にお振込みいたします。</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" @click="toggleFaq(2)" :class="{active: activeFaq === 2}">
                  どのような書類が必要ですか？
                  <span class="toggle-icon">{{ activeFaq === 2 ? '−' : '＋' }}</span>
                </div>
                <div class="faq-answer" :class="{active: activeFaq === 2}">
                  <p>車検証、自動車税納税証明書、印鑑証明書（発行後3ヶ月以内のもの）、実印、普通自動車の場合は自賠責保険証明書が必要です。その他、車種や状況によって必要書類が異なる場合がありますので、詳しくはお問い合わせください。</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" @click="toggleFaq(3)" :class="{active: activeFaq === 3}">
                  部品の保証期間はどれくらいですか？
                  <span class="toggle-icon">{{ activeFaq === 3 ? '−' : '＋' }}</span>
                </div>
                <div class="faq-answer" :class="{active: activeFaq === 3}">
                  <p>部品の種類によって異なりますが、エンジンやミッションなどの主要部品は3ヶ月、電装品は1ヶ月の保証をつけております。保証期間内に正常な使用状態で故障した場合は、無償で交換または返金対応いたします。</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" @click="toggleFaq(4)" :class="{active: activeFaq === 4}">
                  対応エリアはどこまでですか？
                  <span class="toggle-icon">{{ activeFaq === 4 ? '−' : '＋' }}</span>
                </div>
                <div class="faq-answer" :class="{active: activeFaq === 4}">
                  <p>○○県全域および隣接する△△県、□□県の一部地域に対応しております。それ以外の地域についてもご相談ください。状況によっては対応可能な場合があります。</p>
                </div>
              </div>
            </div>
            
            <div class="more-faq">
              <router-link to="/faq" class="more-link">
                その他のよくある質問を見る
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </router-link>
            </div>
          </div>
        </section>
        
        <!-- Contact CTA -->
        <section class="section contact-cta">
          <div class="container">
            <div class="cta-content">
              <h2>ご相談・お見積りは無料です</h2>
              <p>車の買取査定やリサイクル部品についての疑問など、お気軽にお問い合わせください。</p>
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
      name: 'ServicesPage',
      data() {
        return {
          activeFaq: null
        }
      },
      methods: {
        toggleFaq(index) {
          this.activeFaq = this.activeFaq === index ? null : index;
        }
      }
    }
    </script>
    
    <style scoped>
    .page-header {
      background-color: var(--primary-color);
      color: white;
      padding: 60px 0;
      text-align: center;
    }
    
    .page-header h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    
    .service-nav {
      background-color: white;
      padding: 20px 0;
      position: sticky;
      top: 80px;
      z-index: 90;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    
    .nav-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px 30px;
      border-radius: 10px;
      text-decoration: none;
      color: var(--dark-color);
      transition: all 0.3s;
    }
    
    .nav-button:hover {
      background-color: rgba(44, 138, 67, 0.1);
      color: var(--primary-color);
    }
    
    .nav-button svg {
      font-size: 2rem;
      margin-bottom: 10px;
      color: var(--primary-color);
    }
    
    .service-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: start;
    }
    
    .service-content.reverse {
      grid-template-columns: 1fr 1fr;
    }
    
    .service-content.reverse .service-image {
      order: 2;
    }
    
    .service-content.reverse .service-details {
      order: 1;
    }
    
    .service-image img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .service-details h3 {
      color: var(--primary-color);
      font-size: 1.5rem;
      margin: 30px 0 15px;
    }
    
    .service-details h3:first-child {
      margin-top: 0;
    }
    
    .service-details ul {
      list-style: disc;
      padding-left: 20px;
      margin-bottom: 20px;
    }
    
    .service-details li {
      margin-bottom: 8px;
    }
    
    .process-steps {
      margin: 20px 0;
    }
    
    .step {
      display: flex;
      margin-bottom: 20px;
    }
    
    .step-number {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: var(--primary-color);
      color: white;
      border-radius: 50%;
      font-weight: bold;
      margin-right: 15px;
      flex-shrink: 0;
    }
    
    .step-content h4 {
      font-size: 1.1rem;
      margin-bottom: 5px;
    }
    
    .cta-button {
      margin-top: 30px;
    }
    
    .recycle-section {
      background-color: #f9f9f9;
    }
    
    .eco-stats {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      text-align: center;
    }
</style>
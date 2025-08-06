🌟 InfinitiumX | AI Destekli Akıllı Ürün Motoru 🌟


<table>
<tr>
<td align="center" width="20%">
<!-- Projenizin logosunu buraya ekleyebilirsiniz -->
<br />
<strong>[Proje Logosu]</strong>
<br />
</td>
<td>
<h2>📜 İçindekiler</h2>
<ul>
<li><a href="#proje-hakkinda">Proje Hakkında</a></li>
<li><a href="#ana-özellikler">Ana Özellikler</a></li>
<li><a href="#demo">Demo</a></li>
<li><a href="#kullanilan-teknolojiler">Kullanılan Teknolojiler</a></li>
<li><a href="#mimari-yapi">Mimari Yapı</a></li>
<li><a href="#gelecek-planlari">Gelecek Planları</a></li>
<li><a href="#katkida-bulunanlar">Katkıda Bulunanlar</a></li>
</ul>
</td>
</tr>
</table>

---


🚀 Proje Hakkında
<a name="proje-hakkinda"></a>
InfinitiumX, geleneksel ürün arama deneyimini tamamen değiştiren, yapay zeka destekli bir ürün arama ve öneri motorudur. Kullanıcıların ne istediğini anlayan, web üzerindeki en doğru ürünleri bulan ve kişiselleştirilmiş öneriler sunan modern bir full-stack uygulamasıdır. Projemiz, mikroservis mimarisiyle tasarlanmış olup, Google Cloud Platform'un gücünden faydalanarak yüksek ölçeklenebilirlik ve performans sunar.
Amacı: Kullanıcıların ihtiyaçlarına en uygun ürünleri, karmaşık filtreler veya uzun arama süreçleri olmadan, akıllı ve anlamsal bir şekilde bulmalarını sağlamak.
Çözdüğü Sorun: Dağınık e-ticaret siteleri arasında kaybolmayı önleyerek, en iyi fiyat ve özelliklere sahip ürünlere anında erişim imkanı sunar.
✨ Ana Özellikler
<a name="ana-özellikler"></a>
InfinitiumX, kullanıcı deneyimini merkezine alarak aşağıdaki güçlü özellikleri sunar:
Yapay Zeka Destekli Ajanlar: CrewAI ile oluşturulmuş otonom AI ajanları, kullanıcı sorgularını analiz eder, ürün araştırır ve en iyi önerileri sunar.
Anlamsal Vektör Araması: FAISS ve Sentence Transformers kullanarak, ürünler arasında metin tabanlı aramanın ötesinde anlamsal olarak benzer ürünleri bulur.
Geniş Kapsamlı Veri Toplama: Crawl4AI ve SerpAPI gibi araçlarla farklı kaynaklardan anlık olarak ürün verilerini toplayıp analiz eder.
Gerçek Zamanlı İletişim: WebSockets ve Server-Sent Events (SSE) sayesinde, arama sonuçları ve öneriler kullanıcıya anlık olarak iletilir.
Yüksek Gözlemlenebilirlik: OpenTelemetry, Prometheus ve Sentry entegrasyonları ile sistem performansı, hatalar ve istek akışları anlık olarak izlenir.
🎥 Demo
<a name="demo"></a>
Projemizin çalışma prensibini ve özelliklerini daha yakından görmek için hazırladığımız demo içeriğini aşağıda bulabilirsiniz.
[Buraya Proje Demosu Videosu veya GIF Eklenecek]
🛠️ Kullanılan Teknolojiler
<a name="kullanilan-teknolojiler"></a>
InfinitiumX, endüstri standardı ve en yeni teknolojiler kullanılarak inşa edilmiştir.
🔹 Temel Yığın (Core Stack)
Kategori	Teknoloji	Amaç
Backend	
![alt text](https://img.shields.io/badge/-FastAPI-05998b?style=for-the-badge&logo=fastapi)
Modern, asenkron ve yüksek performanslı web API'leri oluşturma.
Frontend	
![alt text](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react)
+
![alt text](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite)
Hızlı, bileşen tabanlı ve modern bir kullanıcı arayüzü geliştirme.
AI Platformu	
![alt text](https://img.shields.io/badge/Vertex_AI-4285F4?style=for-the-badge&logo=google-cloud)
Gemini 2.5 Pro gibi güçlü AI modellerini çalıştırma ve yönetme.
Veritabanı	
![alt text](https://img.shields.io/badge/-Firestore-FFCA28?style=for-the-badge&logo=firebase)
Ölçeklenebilir ve esnek NoSQL veritabanı.
Deployment	
![alt text](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker)
+
![alt text](https://img.shields.io/badge/-Terraform-7B42BC?style=for-the-badge&logo=terraform)
Konteynerizasyon ve altyapının kodla yönetimi (IaC).
🔹 Teknolojilerin Tam Listesi
<details>
<summary><strong>🤖 Backend, AI & Machine Learning</strong></summary>
Framework & Sunucu: FastAPI, Uvicorn
Veri Doğrulama ve Yönetim: Pydantic, Pydantic-Settings
AI Ajanları: CrewAI
AI Platformları: Google Cloud AI Platform (Vertex AI, Gemini 2.5 Pro), OpenAI (Fallback)
Vektör Arama & Embeddings: FAISS-CPU, Sentence Transformers, Transformers (Hugging Face)
Derin Öğrenme & Bilimsel Hesaplama: PyTorch, Scikit-learn, SciPy, NumPy, Pandas
Veri Toplama: Crawl4AI, BeautifulSoup4, SerpAPI, Bing Web Search API
Asenkron HTTP: HTTPX
Gerçek Zamanlı İletişim: WebSockets, SSE-Starlette
</details>
<details>
<summary><strong>🎨 Frontend & Geliştirme Araçları</strong></summary>
UI Framework: React 18, React DOM
Build Aracı: Vite, @vitejs/plugin-react
Styling: Tailwind CSS, PostCSS, Autoprefixer
Kod Kalitesi: ESLint (React, Hooks & Refresh eklentileriyle)
Tip Güvenliği: TypeScript (@types/react, @types/react-dom)
</details>
<details>
<summary><strong>☁️ Veritabanı, Depolama & Altyapı</strong></summary>
Veritabanı: Firebase Admin (Firestore)
Nesne Depolama: Google Cloud Storage
Konteynerizasyon: Docker, Docker Compose
Altyapı Yönetimi (IaC): Terraform
Cloud Platformu: Google Cloud Platform (Cloud Run, Secret Manager, Cloud Logging)
</details>
<details>
<summary><strong>🛡️ Güvenlik & Kimlik Doğrulama</strong></summary>
Token Yönetimi: Python-Jose (JWT)
Şifreleme: Bcrypt
Kimlik Doğrulama: Firebase Authentication
</details>
<details>
<summary><strong>📊 Gözlemlenebilirlik & Test</strong></summary>
İzleme ve Takip (Tracing): OpenTelemetry (API, SDK, FastAPI & Requests enstrümantasyonu)
Metrikler: Prometheus Client
Hata Takibi: Sentry SDK
Yapısal Loglama: Structlog, Rich
Sistem İzleme: PSUtil
Test Çatısı: Pytest
</details>
🏗️ Mimari Yapı
<a name="mimari-yapi"></a>
Projemiz, sürdürülebilir ve ölçeklenebilir bir sistem oluşturmak amacıyla modern yazılım mimarisi prensiplerini benimsemiştir:
Mikroservis Mimarisi: Farklı işlevleri (kullanıcı yönetimi, arama, öneri vb.) bağımsız servislere ayırarak esneklik ve ölçeklenebilirlik sağlıyoruz.
Clean Architecture & Domain-Driven Design (DDD): Kodun iş mantığını teknoloji bağımlılıklarından ayırarak test edilebilirliği ve bakım kolaylığını artırıyoruz.
Altyapı Olarak Kod (Infrastructure as Code): GCP kaynaklarımızı Terraform ile yöneterek, altyapıyı tekrarlanabilir, versiyonlanabilir ve otomatik hale getiriyoruz.
🔮 Gelecek Planları
<a name="gelecek-planlari"></a>
InfinitiumX'i sürekli olarak geliştirmeyi hedefliyoruz. İşte gelecek sürümlerde eklemeyi planladığımız bazı özellikler:
Özelleştirilmiş AI Modelleri: Alan-odaklı (domain-specific) ihtiyaçlar için kendi yapay zeka modellerimizi eğitmek (AutoML, Fine-tuning).
Esnek API Sorguları: Frontend'in ihtiyaç duyduğu veriyi daha verimli bir şekilde almasını sağlamak için GraphQL desteği eklemek.
Uçtan Uca Performans Optimizasyonu: WebAssembly (WASM) kullanarak tarayıcı tarafında yüksek performans gerektiren işlemleri hızlandırmak.
Mobil Deneyim: Projeyi Progressive Web App (PWA) haline getirerek mobil cihazlarda da kusursuz, kurulabilir bir deneyim sunmak.
Gelişmiş Gerçek Zamanlı Yetenekler: Eşler arası (peer-to-peer) iletişim senaryoları için WebRTC entegrasyonu.
🏆 Katkıda Bulunanlar
<a name="contributors"></a>
Bu projenin geliştirilmesinde emeği geçenler:
<!-- Örnek: [![Kullanıcı Adı](https://github.com/kullaniciadi.png?size=50)](https://github.com/kullaniciadi) -->
[Buraya Katkıda Bulunanların GitHub Profilleri Eklenecek]

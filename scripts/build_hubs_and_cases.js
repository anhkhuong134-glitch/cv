import fs from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\CV';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getHeader(activeTab = '') {
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="site-logo">
        <div class="logo-badge">TA</div>
        <div class="logo-text">
          <span class="logo-name">Tuấn Anh</span>
          <span class="logo-tag">Góc làm nội dung</span>
        </div>
      </a>
      <nav class="main-nav">
        <a href="/" class="nav-link ${activeTab === 'home' ? 'active' : ''}">Trang chủ</a>
        <a href="/du-an/" class="nav-link ${activeTab === 'projects' ? 'active' : ''}">Dự án</a>
        <a href="/seo/" class="nav-link ${activeTab === 'seo' ? 'active' : ''}">SEO</a>
        <a href="/content/" class="nav-link ${activeTab === 'content' ? 'active' : ''}">Content</a>
        <a href="/tai-nguyen/" class="nav-link ${activeTab === 'resources' ? 'active' : ''}">Tài nguyên</a>
        <a href="/lien-he/" class="btn btn-primary btn-sm">Liên hệ</a>
      </nav>
    </div>
  </header>
  `;
}

function getFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h5>Góc làm nội dung · Khương Tuấn Anh</h5>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 16px;">
            Học Digital Marketing tại VTC Academy. Thực hành viết SEO, thiết kế nhận diện thương hiệu và nghiên cứu dữ liệu thực tế.
          </p>
          <p style="font-size: 13px; color: var(--text-muted);">
            📧 anhkhuong134@gmail.com &nbsp;|&nbsp; 📞 0384 201 443
          </p>
        </div>
        <div class="footer-col">
          <h5>Dự án tiêu biểu</h5>
          <ul class="footer-links">
            <li><a href="/nghien-cuu/circle-k-gs25/">Đồ án thật: Circle K &amp; GS25</a></li>
            <li><a href="/nhan-dien/nep-gap/">Nhận diện: NẾP GẤP</a></li>
            <li><a href="/content/me-nho/">Content Lab: MẺ NHỎ</a></li>
            <li><a href="/seo/">SEO Studio: 11 bài viết</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Nghiên cứu &amp; Thiết kế</h5>
          <ul class="footer-links">
            <li><a href="/nghien-cuu/muji-kokuyo/">MUJI vs KOKUYO Campus</a></li>
            <li><a href="/nghien-cuu/highlands-menu/">Menu Audit Highlands Coffee</a></li>
            <li><a href="/thiet-ke/banner-me-nho/">Bộ Banner MẺ NHỎ</a></li>
            <li><a href="/web/nep-gap/">Cửa hàng Concept NẾP GẤP</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Tài nguyên &amp; Quy trình</h5>
          <ul class="footer-links">
            <li><a href="/seo/quy-trinh/">Quy trình 22 bước SEO</a></li>
            <li><a href="/tai-nguyen/#brief-mot-trang">Mẫu Brief một trang</a></li>
            <li><a href="/tai-nguyen/#lich-tuan">Lịch tuần NẾP GẤP</a></li>
            <li><a href="/tai-nguyen/#phieu-thu-gu">Phiếu thử gu cà phê</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Khương Tuấn Anh. Portfolio xây dựng trung thực, minh bạch nguồn đối chiếu.</span>
        <span>Portfolio học viên Digital Marketing · Minh bạch nguồn đối chiếu và phạm vi thực hiện</span>
      </div>
    </div>
  </footer>
  `;
}

// 1. HOMEPAGE (/index.html)
function buildHomepage() {
  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khương Tuấn Anh · Portfolio Góc Làm Nội Dung</title>
  <meta name="description" content="Portfolio của Khương Tuấn Anh - Content Creator & SEO. Tập hợp bài viết SEO đa ngành, kế hoạch social content, nhận diện thương hiệu và đồ án nghiên cứu thực tế Circle K vs GS25.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/">
  <link rel="stylesheet" href="assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('home')}

  <!-- HERO SECTION -->
  <section style="padding: 72px 0 64px 0; border-bottom: 1px solid var(--border);">
    <div class="container hero-grid">
      <div>
        <div style="display: inline-flex; align-items: center; gap: 8px; background: #FFFFFF; border: 1px solid var(--border); padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; color: var(--accent); margin-bottom: 20px;">
          <span>🌱</span> Góc làm nội dung của Tuấn Anh
        </div>
        <h1 style="font-size: 44px; font-weight: 700; line-height: 1.25; color: var(--text-main); margin-bottom: 20px;">
          Mình là Tuấn Anh.<br>Mình tìm ý, viết và sắp xếp nội dung.
        </h1>
        <p style="font-size: 19px; color: var(--text-muted); line-height: 1.6; margin-bottom: 28px;">
          Mình học Digital Marketing tại VTC Academy, hướng đến công việc Content Creator. Portfolio này tập hợp bài SEO, kế hoạch social, nghiên cứu và các thiết kế concept để bạn xem rõ cách mình tiếp cận một đề bài.
        </p>
        <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: center; margin-bottom: 24px;">
          <a href="#san-pham-tieu-bieu" class="btn btn-primary">Xem sản phẩm tiêu biểu</a>
          <a href="/lien-he/" class="btn btn-secondary">Trao đổi công việc</a>
          <a href="#qua-trinh-hoc" style="font-size: 15px; font-weight: 500; color: var(--accent); margin-left: 8px;">Xem hồ sơ &amp; quá trình học →</a>
        </div>
        <div class="disclaimer-box" style="margin-top: 16px; margin-bottom: 0;">
          <strong>Minh bạch phạm vi:</strong> Đồ án và concept cá nhân có ghi rõ phạm vi thực hiện. Kịch bản video được trình bày ở giai đoạn chuẩn bị sản xuất (storyboard).
        </div>
      </div>
      
      <!-- Chibi Welcome Mascot -->
      <div style="text-align: center; position: relative;">
        <div style="background: radial-gradient(circle, rgba(40,91,88,0.08) 0%, rgba(245,247,251,0) 70%); border-radius: 50%; padding: 20px;">
          <img src="assets/chibi/ta-chibi-welcome.svg" alt="Bạn Biên Tập Tuấn Anh vẫy tay chào bạn" class="chibi-character" style="width: 280px; margin: 0 auto;">
        </div>
        <div style="margin-top: 12px; font-size: 13px; color: var(--text-muted); font-style: italic;">
          “Bạn Biên Tập” — Người bạn đồng hành tại studio nội dung
        </div>
      </div>
    </div>
  </section>

  <!-- 4 SẢN PHẨM TIÊU BIỂU (CRITICAL: Circle K & GS25 is #4 and prominent!) -->
  <section id="san-pham-tieu-bieu" style="padding: 80px 0;">
    <div class="container">
      <div style="text-align: center; max-width: 680px; margin: 0 auto 56px auto;">
        <span class="badge badge-note" style="margin-bottom: 12px;">BỐN TRỌNG TÂM</span>
        <h2 style="font-size: 32px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">Sản phẩm tiêu biểu</h2>
        <p style="color: var(--text-muted); font-size: 16px;">
          Bốn hướng tiếp cận từ đồ án nghiên cứu thực tế, bài viết chuẩn SEO, bộ nhận diện concept đến kế hoạch social hoàn chỉnh.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 28px;">
        
        <!-- 1. SEO Studio -->
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="badge badge-seo">SEO Studio</span>
              <span style="font-size: 13px; color: var(--text-muted);">11 bài viết</span>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 10px;">
              Từ câu hỏi tìm kiếm đến bài viết hoàn chỉnh
            </h3>
            <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Đọc 11 bài viết đa ngành và mở hồ sơ On-page: từ khóa, tài liệu nguồn sơ cấp, liên kết nội bộ, alt ảnh và kế hoạch backlink thực tế.
            </p>
          </div>
          <div>
            <a href="/seo/" class="btn btn-secondary btn-sm" style="width: 100%;">Mở SEO Studio →</a>
          </div>
        </div>

        <!-- 2. NẾP GẤP -->
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="badge badge-concept">Nhận diện Concept</span>
              <span style="font-size: 13px; color: var(--text-muted);">6 ấn phẩm</span>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 10px;">
              NẾP GẤP: Hệ nhận diện từ góc gấp trang giấy
            </h3>
            <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Ý tưởng văn phòng phẩm ghi chép: logo góc gấp, bảng màu đất nung và xanh rừng, hệ lưới quy chuẩn, bộ icon và ứng dụng mở xem riêng.
            </p>
          </div>
          <div>
            <a href="/nhan-dien/nep-gap/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem nhận diện NẾP GẤP →</a>
          </div>
        </div>

        <!-- 3. MẺ NHỎ -->
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="badge badge-concept">Social Content</span>
              <span style="font-size: 13px; color: var(--text-muted);">Tuần mẫu 7 ngày</span>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 10px;">
              MẺ NHỎ: Chọn cà phê pha tại nhà
            </h3>
            <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Đi từ câu hỏi của người mới đến caption chi tiết, carousel 6 slide, phiếu thử ly và storyboard video 20 giây chuẩn bị sản xuất.
            </p>
          </div>
          <div>
            <a href="/content/me-nho/" class="btn btn-secondary btn-sm" style="width: 100%;">Khám phá case MẺ NHỎ →</a>
          </div>
        </div>

        <!-- 4. CRITICAL: Circle K & GS25 (REAL PRODUCT) -->
        <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border: 2px solid var(--accent); background: #FAFDFB;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="badge badge-real">⭐ Dự án thật · Đồ án nhóm</span>
              <span style="font-size: 13px; font-weight: 600; color: #137333;">N=93 mẫu</span>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
              Circle K &amp; GS25: Nghiên cứu nhận thức thương hiệu
            </h3>
            <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Bối cảnh, phương pháp khảo sát, 3 số liệu đối chiếu từ báo cáo gốc và phần đóng góp của mình trong đồ án nhóm Bee Chăm Chỉ tại VTC Academy.
            </p>
          </div>
          <div>
            <a href="/nghien-cuu/circle-k-gs25/" class="btn btn-primary btn-sm" style="width: 100%;">Mở nghiên cứu Circle K &amp; GS25 →</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CÁCH MÌNH LÀM (PROCESS) -->
  <section style="padding: 72px 0; background: #FFFFFF; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div style="text-align: center; max-width: 680px; margin: 0 auto 48px auto;">
        <span class="badge badge-seo" style="margin-bottom: 12px;">QUY TRÌNH LÀM VIỆC</span>
        <h2 style="font-size: 32px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">Cách mình tiếp cận một đề bài</h2>
        <p style="color: var(--text-muted); font-size: 16px;">
          Bốn bước rõ ràng để một ý tưởng chuyển thành sản phẩm nội dung có căn cứ kiểm chứng.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
        <div style="padding: 24px; border: 1px solid var(--border); border-radius: 16px; background: var(--bg-page);">
          <div style="font-size: 24px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">01</div>
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Làm rõ đề bài</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">Xác định người đọc thật, câu hỏi bài viết phải trả lời và giới hạn thông tin không được vượt quá.</p>
          <a href="/seo/brief-content-cho-nhom-nho/" style="font-size: 13px; font-weight: 600;">Xem ví dụ Mẫu Brief →</a>
        </div>
        <div style="padding: 24px; border: 1px solid var(--border); border-radius: 16px; background: var(--bg-page);">
          <div style="font-size: 24px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">02</div>
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Tìm &amp; kiểm tra thông tin</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">Đọc tài liệu gốc từ hãng, manual kỹ thuật hoặc hướng dẫn chính thức; lập sổ nguồn kiểm tra.</p>
          <a href="/nghien-cuu/circle-k-gs25/" style="font-size: 13px; font-weight: 600;">Xem cách đối chiếu dữ liệu →</a>
        </div>
        <div style="padding: 24px; border: 1px solid var(--border); border-radius: 16px; background: var(--bg-page);">
          <div style="font-size: 24px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">03</div>
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Viết hoặc thiết kế bản nháp</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">Lập dàn ý chi tiết, dùng AI hỗ trợ tạo khung nháp có kiểm soát; dựng infographic minh họa.</p>
          <a href="/seo/ai-ho-tro-viet-bai-seo/" style="font-size: 13px; font-weight: 600;">Xem quy trình dùng AI →</a>
        </div>
        <div style="padding: 24px; border: 1px solid var(--border); border-radius: 16px; background: var(--bg-page);">
          <div style="font-size: 24px; font-weight: 700; color: var(--accent); margin-bottom: 8px;">04</div>
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 8px;">Biên tập, kiểm tra &amp; bàn giao</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 12px;">Soát lỗi chính tả, gắn internal/external links, tối ưu thẻ meta và hồ sơ On-page trước khi xuất bản.</p>
          <a href="/seo/quy-trinh/" style="font-size: 13px; font-weight: 600;">Xem 22 bước kiểm tra →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- THÔNG TIN CÁ NHÂN & QUÁ TRÌNH HỌC -->
  <section id="qua-trinh-hoc" style="padding: 80px 0;">
    <div class="container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start;">
      
      <div>
        <span class="badge badge-note" style="margin-bottom: 12px;">HỒ SƠ NĂNG LỰC</span>
        <h2 style="font-size: 32px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">Về Khương Tuấn Anh</h2>
        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.7; margin-bottom: 24px;">
          Mình là người thích sắp xếp thông tin mạch lạc, tìm tòi câu hỏi người dùng thực sự quan tâm và chuyển hóa thành những bài viết dễ hiểu, có giá trị ứng dụng.
        </p>

        <div style="border-left: 3px solid var(--accent); padding-left: 20px; margin-bottom: 24px;">
          <h4 style="font-size: 17px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">VTC Academy</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 4px;">Chuyên ngành: <strong>Digital Marketing</strong></p>
          <p style="font-size: 13px; color: var(--text-muted);">Thực hành nghiên cứu thị trường, lập kế hoạch nội dung đa kênh, On-page SEO và phân tích dữ liệu.</p>
        </div>

        <div style="border-left: 3px solid var(--border); padding-left: 20px;">
          <h4 style="font-size: 17px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Nghĩa vụ quân sự</h4>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 4px;">Thời gian: <strong>02/2023 – 05/2025</strong></p>
          <p style="font-size: 13px; color: var(--text-muted);">Rèn luyện tính kỷ luật, khả năng thích nghi và trách nhiệm trong công việc tập thể.</p>
        </div>
      </div>

      <!-- CÔNG CỤ THỰC HÀNH -->
      <div class="card">
        <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">Công cụ &amp; Mức độ sử dụng</h3>
        <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 20px;">
          Minh bạch năng lực thực tế — không sử dụng thanh phần trăm thành thạo tự phong:
        </p>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--border-light);">
            <div>
              <strong style="font-size: 15px;">Nghiên cứu từ khóa &amp; On-page SEO</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Cấu trúc thẻ Heading, Meta, Search Intent, Internal Linking</div>
            </div>
            <span class="badge badge-real">Đã thực hành</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--border-light);">
            <div>
              <strong style="font-size: 15px;">Google Docs &amp; Khảo sát biểu mẫu</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Thiết kế bảng hỏi, thống kê dữ liệu mẫu, viết báo cáo nhóm</div>
            </div>
            <span class="badge badge-real">Đã thực hành</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--border-light);">
            <div>
              <strong style="font-size: 15px;">AI hỗ trợ nội dung (Claude, ChatGPT, AIKTP)</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Tạo dàn ý, sinh bản nháp thô, tra cứu thuật ngữ sơ bộ</div>
            </div>
            <span class="badge badge-concept">Dùng để hỗ trợ</span>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--border-light);">
            <div>
              <strong style="font-size: 15px;">HTML/CSS cơ bản &amp; Vercel Deployment</strong>
              <div style="font-size: 12px; color: var(--text-muted);">Hiểu cấu trúc web tĩnh, thẻ ngữ nghĩa, tối ưu tốc độ tải</div>
            </div>
            <span class="badge badge-concept">Đang học &amp; áp dụng</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA CONTACT -->
  <section style="padding: 72px 0; background: var(--bg-muted); border-top: 1px solid var(--border);">
    <div class="container" style="text-align: center; max-width: 640px; margin: 0 auto;">
      <h2 style="font-size: 30px; font-weight: 700; color: var(--text-main); margin-bottom: 14px;">Bạn đang tìm người hỗ trợ nội dung?</h2>
      <p style="font-size: 16px; color: var(--text-muted); line-height: 1.6; margin-bottom: 28px;">
        Mình sẵn sàng trao đổi về đề bài, cách phối hợp và phần mình có thể đảm nhận trong các dự án Content Creator và SEO.
      </p>
      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        <a href="/lien-he/" class="btn btn-primary">Trao đổi với Tuấn Anh</a>
        <a href="/tai-nguyen/" class="btn btn-secondary">Khám phá kho Tài nguyên</a>
      </div>
    </div>
  </section>

  ${getFooter()}
</body>
</html>`;

  fs.writeFileSync(path.join(baseDir, 'index.html'), html, 'utf8');
  console.log('Generated Homepage: /index.html');
}

// 2. PROJECTS HUB (/du-an/index.html)
function buildProjectsHub() {
  const dir = path.join(baseDir, 'du-an');
  ensureDir(dir);

  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Danh mục Dự án &amp; Nghiên cứu · Tuấn Anh Portfolio</title>
  <meta name="description" content="Danh mục đầy đủ các dự án thực tế, đồ án nhóm, nghiên cứu thị trường, nhận diện thương hiệu concept và SEO Studio của Khương Tuấn Anh.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/du-an/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}

  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">
    <!-- Hero Header -->
    <div style="max-width: 800px; margin-bottom: 48px;">
      <nav class="breadcrumb">
        <a href="/">Trang chủ</a>
        <span class="breadcrumb-sep">/</span>
        <span style="color: var(--text-main); font-weight: 500;">Dự án</span>
      </nav>
      <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">
        Dự án, Nghiên cứu &amp; Thiết kế
      </h1>
      <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6;">
        Tập hợp các sản phẩm đã hoàn thiện: đồ án nhóm thực tế tại VTC Academy, nghiên cứu nguồn công khai, bộ nhận diện concept và thư viện SEO Studio.
      </p>
    </div>

    <!-- 1. DỰ ÁN THỰC TẾ (CRITICAL: Circle K & GS25) -->
    <section style="margin-bottom: 64px;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
        <span class="badge badge-real">⭐ DỰ ÁN THỰC TẾ · ƯU TIÊN TRƯNG BÀY</span>
        <h2 style="font-size: 24px; font-weight: 700; color: var(--text-main);">Đồ án môn học &amp; Nghiên cứu thương hiệu</h2>
      </div>

      <div class="card" style="border: 2px solid var(--accent); background: #FAFDFB; padding: 36px;">
        <div class="split-grid-hero">
          <div>
            <div style="display: flex; gap: 10px; margin-bottom: 12px;">
              <span class="badge badge-real">Đồ án nhóm Bee Chăm Chỉ</span>
              <span class="badge badge-note">Lớp K25DBMF02 · VTC Academy</span>
            </div>
            <h3 style="font-size: 26px; font-weight: 700; color: var(--accent); margin-bottom: 12px;">
              Circle K và GS25: Nghiên cứu nhận thức thương hiệu
            </h3>
            <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
              Khảo sát 93 mẫu hợp lệ tại Hà Nội (tháng 04/2026) về thói quen, mức độ nhận diện logo và đánh giá trải nghiệm giữa hai chuỗi cửa hàng tiện lợi. Phân tích đối chiếu 3 kết quả thực tế và đề xuất giải pháp truyền thông tại điểm bán.
            </p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="/nghien-cuu/circle-k-gs25/" class="btn btn-primary">Xem case chi tiết &amp; số liệu đối chiếu →</a>
              <a href="https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Mở báo cáo gốc của nhóm (Google Docs) ↗</a>
            </div>
          </div>
          <div>
            <img src="../assets/research/circle-k-gs25-charts.svg" alt="Biểu đồ kết quả nghiên cứu Circle K và GS25" style="border-radius: 12px; border: 1px solid var(--border); box-shadow: var(--shadow-sm);">
          </div>
        </div>
      </div>
    </section>

    <!-- 2. BỘ NHẬN DIỆN CONCEPT (3 Brands) -->
    <section style="margin-bottom: 64px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <h2 style="font-size: 24px; font-weight: 700; color: var(--text-main);">Bộ nhận diện Concept</h2>
        <a href="/nhan-dien/" style="font-size: 14px; font-weight: 600;">Xem cả 3 bộ nhận diện →</a>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
        <!-- NẾP GẤP -->
        <div class="card">
          <img src="../assets/brands/nep-gap-logo.svg" alt="Logo NẾP GẤP" style="height: 60px; margin-bottom: 16px;">
          <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">NẾP GẤP</h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Concept văn phòng phẩm &amp; công cụ ghi chép. Logo góc gấp trang giấy, bảng màu đất nung và xanh rừng, hệ thống ấn phẩm sổ planner, thiệp và nhãn đóng gói.
          </p>
          <a href="/nhan-dien/nep-gap/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem nhận diện NẾP GẤP →</a>
        </div>

        <!-- MẺ NHỎ -->
        <div class="card">
          <img src="../assets/brands/me-nho-logo.svg" alt="Logo MẺ NHỎ" style="height: 60px; margin-bottom: 16px;">
          <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">MẺ NHỎ</h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Concept cà phê pha tại nhà: “Pha theo gu của bạn”. Dấu nhận diện từ miệng phin và nhịp giọt cà phê, thẻ hỏi gu, phiếu thử ly và bộ banner quảng cáo.
          </p>
          <a href="/nhan-dien/me-nho/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem nhận diện MẺ NHỎ →</a>
        </div>

        <!-- QUAI VẢI -->
        <div class="card">
          <img src="../assets/brands/quai-vai-logo.svg" alt="Logo QUAI VẢI" style="height: 60px; margin-bottom: 16px;">
          <h3 style="font-size: 20px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">QUAI VẢI</h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Concept túi dùng hằng ngày: “Mang vừa một ngày”. Dấu quai uốn cong và đường chỉ may, bộ 6 icon phân loại đồ đạc và phiếu đo lòng túi thực tế.
          </p>
          <a href="/nhan-dien/quai-vai/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem nhận diện QUAI VẢI →</a>
        </div>
      </div>
    </section>

    <!-- 3. NGHIÊN CỨU NGUỒN CÔNG KHAI -->
    <section style="margin-bottom: 64px;">
      <h2 style="font-size: 24px; font-weight: 700; color: var(--text-main); margin-bottom: 24px;">Nghiên cứu bổ sung nguồn công khai</h2>
      <div class="split-grid-2col">
        <div class="card">
          <span class="badge badge-seo" style="margin-bottom: 12px;">Desk Research</span>
          <h3 style="font-size: 19px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
            MUJI và KOKUYO Campus: Cách giải thích giá trị đồ dùng ghi chép
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Quan sát tài liệu công khai về nguyên tắc phát triển sản phẩm của MUJI và tình huống sử dụng thực tế của KOKUYO Campus để rút ra bài học cho NẾP GẤP.
          </p>
          <a href="/nghien-cuu/muji-kokuyo/" style="font-size: 14px; font-weight: 600;">Xem phân tích đối chiếu →</a>
        </div>

        <div class="card">
          <span class="badge badge-seo" style="margin-bottom: 12px;">Content Audit</span>
          <h3 style="font-size: 19px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
            Highlands Coffee: Đọc menu từ nhóm món đến câu hỏi chọn đồ uống
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Khảo sát phân nhóm thực đơn công khai của Highlands trên website và phác thảo wireframe hỗ trợ chọn đồ uống theo gu cho concept MẺ NHỎ.
          </p>
          <a href="/nghien-cuu/highlands-menu/" style="font-size: 14px; font-weight: 600;">Xem audit menu &amp; wireframe →</a>
        </div>
      </div>
    </section>

    <!-- 4. THIẾT KẾ KHÁC & TÀI NGUYÊN -->
    <section>
      <h2 style="font-size: 24px; font-weight: 700; color: var(--text-main); margin-bottom: 24px;">Các sản phẩm trải nghiệm khác</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        <div class="card">
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 6px;">Bộ Banner MẺ NHỎ</h4>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">8 kích thước hiển thị đáp ứng chuẩn bố cục, kèm giả thuyết A/B test tiêu đề.</p>
          <a href="/thiet-ke/banner-me-nho/" style="font-size: 14px; font-weight: 600;">Mở bộ banner →</a>
        </div>
        <div class="card">
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 6px;">Cửa hàng Concept NẾP GẤP</h4>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Web demo bên trong portfolio: bộ lọc nhu cầu ghi chép và xem layout ruột sổ.</p>
          <a href="/web/nep-gap/" style="font-size: 14px; font-weight: 600;">Xem web demo →</a>
        </div>
        <div class="card">
          <h4 style="font-size: 17px; font-weight: 700; margin-bottom: 6px;">Thư viện Biểu mẫu &amp; Template</h4>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Mẫu Brief một trang, checklist du lịch, lịch tuần và bảng kiểm chứng claim tải được.</p>
          <a href="/tai-nguyen/" style="font-size: 14px; font-weight: 600;">Đến trang tài nguyên →</a>
        </div>
      </div>
    </section>

  </main>

  ${getFooter()}
</body>
</html>`;

  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log('Generated Projects Hub: /du-an/index.html');
}

// 3. RESEARCH CASE: CIRCLE K & GS25 (/nghien-cuu/circle-k-gs25/index.html)
function buildCircleKCase() {
  const dir = path.join(baseDir, 'nghien-cuu', 'circle-k-gs25');
  ensureDir(dir);

  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Circle K và GS25: Nghiên cứu nhận thức thương hiệu · Đồ án thật</title>
  <meta name="description" content="Đồ án nhóm nghiên cứu nhận thức và trải nghiệm thương hiệu Circle K vs GS25 tại VTC Academy (Hà Nội, 04/2026). N=93 mẫu hợp lệ. Phân tích đối chiếu dữ liệu gốc.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nghien-cuu/circle-k-gs25/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}

  <main class="container" style="padding-top: 40px; padding-bottom: 80px;">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a>
      <span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a>
      <span class="breadcrumb-sep">/</span>
      <a href="/nghien-cuu/">Nghiên cứu</a>
      <span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">Circle K &amp; GS25</span>
    </nav>

    <!-- Case Header -->
    <div style="max-width: 800px; margin-bottom: 36px;">
      <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 16px;">
        <span class="badge badge-real">⭐ ĐỒ ÁN NHÓM · SẢN PHẨM THẬT</span>
        <span class="badge badge-note">Lớp K25DBMF02 · VTC Academy Hà Nội</span>
      </div>
      <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); margin-bottom: 16px; line-height: 1.25;">
        Circle K và GS25: Nghiên cứu nhận thức thương hiệu
      </h1>
      <p style="font-size: 19px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
        Đồ án môn học tìm hiểu cách người tham gia khảo sát nhận biết và đánh giá Circle K, GS25. Case trình bày phương pháp, 3 số liệu đối chiếu trong mẫu và cách nhóm phát triển đề xuất từ dữ liệu.
      </p>
      <div class="article-meta">
        <span>👥 Nhóm: <strong>Bee Chăm Chỉ</strong></span>
        <span>📍 Địa điểm &amp; Thời gian: <strong>Hà Nội, Tháng 04/2026</strong></span>
        <span>📊 Cỡ mẫu hợp lệ: <strong>N = 93 người phản hồi</strong></span>
      </div>
    </div>

    <!-- CTA to original report -->
    <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin-bottom: 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: var(--shadow-sm);">
      <div>
        <h4 style="font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">Tài liệu gốc được lưu trữ trực tuyến:</h4>
        <p style="font-size: 14px; color: var(--text-muted);">Báo cáo đầy đủ của nhóm trên Google Docs (tab t.0). Bạn có thể mở đọc toàn bộ nội dung gốc.</p>
      </div>
      <a href="https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        Mở báo cáo gốc của nhóm (Google Docs) ↗
      </a>
    </div>

    <!-- MAIN READING CONTENT -->
    <div style="max-width: var(--reading-max);">
      
      <!-- Section: Vấn đề & Phương pháp -->
      <section style="margin-bottom: 44px;">
        <h2 style="font-size: 26px; font-weight: 700; margin-bottom: 14px;">Bối cảnh &amp; Đề bài nghiên cứu</h2>
        <p>
          Hai chuỗi Circle K và GS25 cùng phục vụ nhu cầu mua sắm tiện lợi tại đô thị, nhưng cách người được hỏi nhớ đến thương hiệu và đánh giá trải nghiệm có thể khác nhau. Nhóm chọn khảo sát các yếu tố nhận biết và sử dụng để làm rõ những khác biệt đó trong phạm vi đồ án học tập.
        </p>
        <p>
          Báo cáo sử dụng nghiên cứu tài liệu, quan sát tại điểm bán, bảng hỏi trực tuyến và phỏng vấn sâu. Bảng hỏi khảo sát gồm các nhóm câu hỏi về thói quen mua sắm, kênh nhận biết, nhận diện logo và mức độ hài lòng về dịch vụ.
        </p>
      </section>

      <!-- Section: 3 Số liệu đối chiếu văn bản nguồn -->
      <section style="margin-bottom: 48px;">
        <h2 style="font-size: 26px; font-weight: 700; margin-bottom: 14px;">Ba kết quả đã đối chiếu văn bản nguồn</h2>
        <p style="color: var(--text-muted); margin-bottom: 20px;">
          Số liệu được trích xuất trực tiếp từ các câu hỏi tương ứng trong báo cáo, không gộp tỷ lệ hoặc suy rộng thành toàn bộ dân số Việt Nam:
        </p>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nội dung / Câu hỏi khảo sát</th>
                <th>Dữ liệu ghi nhận trong báo cáo</th>
                <th>Cách diễn đạt chuẩn xác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cơ cấu độ tuổi 18–24</strong></td>
                <td>63/93 người (khoảng 67.7%)</td>
                <td>Trong mẫu khảo sát của nhóm, người tham gia từ 18–24 tuổi chiếm 63 trên tổng số 93 người phản hồi hợp lệ.</td>
              </tr>
              <tr>
                <td><strong>Kênh nhận biết Circle K qua cửa hàng</strong></td>
                <td>61/93 người (khoảng 65.6%)</td>
                <td>61/93 người chọn phương án thấy cửa hàng trực tiếp trên phố (câu hỏi nhiều lựa chọn).</td>
              </tr>
              <tr>
                <td><strong>Nhận diện đúng logo Circle K</strong></td>
                <td>90/93 người (khoảng 96.8%)</td>
                <td>90/93 người chọn đúng hình ảnh logo Circle K trong bài hỏi có gợi ý hình ảnh trực quan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section: Charts Display -->
      <section style="margin-bottom: 48px;">
        <h2 style="font-size: 26px; font-weight: 700; margin-bottom: 14px;">Biểu đồ trực quan hóa dữ liệu</h2>
        <div style="margin: 20px 0;">
          <img src="../../assets/research/circle-k-gs25-charts.svg" alt="Biểu đồ phân tích dữ liệu nghiên cứu Circle K và GS25" style="border-radius: 12px; border: 1px solid var(--border);">
        </div>
      </section>

      <!-- Section: Phân tích & Giới hạn -->
      <section style="margin-bottom: 44px;">
        <h2 style="font-size: 26px; font-weight: 700; margin-bottom: 14px;">Phân tích biên tập &amp; Giới hạn nghiên cứu</h2>
        <p>
          <strong>Phân tích nhận định:</strong> Nhóm tuổi 18–24 chiếm phần lớn mẫu khảo sát, do đó kết quả trước hết phản ánh góc nhìn và hành vi của nhóm đối tượng học sinh - sinh viên và người đi làm trẻ. Tỷ lệ nhận đúng logo Circle K đạt 96.8% trong bài hỏi có gợi ý hình ảnh, chứng minh độ nhận diện hình ảnh rất tốt nhưng không tự động đồng nghĩa với mức độ ghi nhớ tự phát (unaided recall).
        </p>
        <p>
          Trong mẫu, việc thấy cửa hàng trực tiếp là một kênh nhận biết được nhiều người chọn; có thể đề xuất khảo sát tiếp yếu tố điểm bán. Từ dữ liệu này chưa thể kết luận quảng cáo số không hiệu quả hoặc một kênh duy nhất gây ra hành vi mua sắm.
        </p>
        
        <div class="disclaimer-box">
          <strong>Giới hạn của mẫu nghiên cứu:</strong> Khảo sát thực hiện trực tuyến với quy mô 93 mẫu hợp lệ tại Hà Nội nên giới hạn khả năng đại diện cho toàn bộ thị trường chuỗi tiện lợi. Kết quả phản ánh mốc thời gian thực hiện nghiên cứu (04/2026), không phải bảng đo lường hiệu suất kinh doanh hiện tại của hai công ty.
        </div>
      </section>

      <!-- Section: Đề xuất & Phần đóng góp -->
      <section style="margin-bottom: 44px;">
        <h2 style="font-size: 26px; font-weight: 700; margin-bottom: 14px;">Đề xuất giải pháp &amp; Vai trò cá nhân</h2>
        <p>
          <strong>Đề xuất của nhóm:</strong> Từ các phản hồi về nhận biết và dịch vụ, nhóm đề xuất chú trọng tính nhất quán của thông tin khuyến mãi tại điểm bán, cải thiện nội dung bảng hướng dẫn dịch vụ tiện ích và đơn giản hóa cách truyền thông quyền lợi của chương trình thành viên. Đây là đề xuất môn học của đồ án nhóm, chưa phải giải pháp được Circle K hay GS25 chính thức áp dụng.
        </p>
        <p>
          <strong>Vai trò cá nhân:</strong> Là <strong>thành viên nhóm Bee Chăm Chỉ</strong> trong đồ án môn học tại VTC Academy. Báo cáo kết quả và đề xuất là thành quả chung của cả nhóm nghiên cứu.
        </p>
      </section>

    </div>
  </main>

  ${getFooter()}
</body>
</html>`;

  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log('Generated Circle K & GS25 Case: /nghien-cuu/circle-k-gs25/index.html');
}

// 4. RESEARCH HUB & OTHER CASES
function buildResearchHubAndCases() {
  const hubDir = path.join(baseDir, 'nghien-cuu');
  ensureDir(hubDir);

  const hubHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nghiên cứu Thị trường &amp; Content Audit · Tuấn Anh Portfolio</title>
  <meta name="description" content="Các case study nghiên cứu thị trường: đồ án thật Circle K vs GS25, nghiên cứu nguồn công khai MUJI vs KOKUYO Campus và audit menu Highlands Coffee.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nghien-cuu/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}

  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">
    <div style="max-width: 800px; margin-bottom: 48px;">
      <nav class="breadcrumb">
        <a href="/">Trang chủ</a>
        <span class="breadcrumb-sep">/</span>
        <a href="/du-an/">Dự án</a>
        <span class="breadcrumb-sep">/</span>
        <span style="color: var(--text-main); font-weight: 500;">Nghiên cứu</span>
      </nav>
      <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">
        Nghiên cứu &amp; Phân tích Dữ liệu
      </h1>
      <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6;">
        Tách bạch rõ ràng giữa đồ án khảo sát thực tế và nghiên cứu bổ sung nguồn công khai. Mọi số liệu đều có nguồn dẫn và giới hạn minh bạch.
      </p>
    </div>

    <!-- Featured Real Case -->
    <div class="card" style="border: 2px solid var(--accent); background: #FAFDFB; margin-bottom: 48px;">
      <span class="badge badge-real" style="margin-bottom: 12px;">⭐ ĐỒ ÁN NHÓM THẬT · ƯU TIÊN TRƯNG BÀY</span>
      <h2 style="font-size: 26px; font-weight: 700; color: var(--accent); margin-bottom: 10px;">
        Circle K và GS25: Nghiên cứu nhận thức thương hiệu
      </h2>
      <p style="font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 20px;">
        Đồ án thực tế tại VTC Academy lớp K25DBMF02 (Hà Nội, 04/2026). N=93 mẫu khảo sát hợp lệ. Phân tích đối chiếu 3 số liệu gốc, so sánh điểm bán, độ nhận diện logo và đề xuất truyền thông.
      </p>
      <a href="/nghien-cuu/circle-k-gs25/" class="btn btn-primary btn-sm">Xem case nghiên cứu Circle K &amp; GS25 →</a>
    </div>

    <!-- Supplementary Desk Research Cases -->
    <h3 style="font-size: 22px; font-weight: 700; color: var(--text-main); margin-bottom: 20px;">Nghiên cứu bổ sung nguồn công khai</h3>
    <div class="split-grid-2col">
      <div class="card">
        <span class="badge badge-seo" style="margin-bottom: 12px;">Desk Research</span>
        <h4 style="font-size: 19px; font-weight: 700; margin-bottom: 8px;">MUJI và KOKUYO Campus: Giải thích giá trị sổ tay</h4>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Nghiên cứu tài liệu công khai về nguyên tắc phát triển sản phẩm của MUJI và giải quyết tình huống sử dụng của KOKUYO Campus.
        </p>
        <a href="/nghien-cuu/muji-kokuyo/" style="font-size: 14px; font-weight: 600;">Xem phân tích đối chiếu →</a>
      </div>

      <div class="card">
        <span class="badge badge-seo" style="margin-bottom: 12px;">Content Audit</span>
        <h4 style="font-size: 19px; font-weight: 700; margin-bottom: 8px;">Highlands Coffee: Đọc menu từ nhóm món đến câu hỏi chọn</h4>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Khảo sát cách phân nhóm món trên website Highlands để phác thảo wireframe chọn đồ uống theo gu cho concept MẺ NHỎ.
        </p>
        <a href="/nghien-cuu/highlands-menu/" style="font-size: 14px; font-weight: 600;">Xem audit menu &amp; wireframe →</a>
      </div>
    </div>
  </main>

  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(hubDir, 'index.html'), hubHtml, 'utf8');

  // MUJI & KOKUYO Case
  const mujiDir = path.join(hubDir, 'muji-kokuyo');
  ensureDir(mujiDir);
  const mujiHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MUJI và KOKUYO Campus: Nghiên cứu đồ dùng ghi chép · Tuấn Anh Portfolio</title>
  <meta name="description" content="Desk research nguồn công khai: cách MUJI và KOKUYO Campus giải thích giá trị sản phẩm sổ tay và bài học ứng dụng cho concept NẾP GẤP.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nghien-cuu/muji-kokuyo/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
      <a href="/nghien-cuu/">Nghiên cứu</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">MUJI vs KOKUYO</span>
    </nav>
    <div style="margin-bottom: 24px;">
      <span class="badge badge-seo">Desk research cá nhân · Nguồn công khai</span>
      <h1 style="font-size: 34px; font-weight: 700; margin: 12px 0;">Cách MUJI và KOKUYO Campus giải thích giá trị của đồ dùng ghi chép</h1>
      <p style="color: var(--text-muted); font-size: 17px;">Quan sát cách hai hệ sản phẩm trình bày lý do lựa chọn để rút ra cách viết thông tin sản phẩm rõ ràng hơn cho concept NẾP GẤP.</p>
    </div>
    <div class="disclaimer-box">
      <strong>Giới hạn phương pháp:</strong> Nghiên cứu dựa trên tài liệu công khai chính thức từ website MUJI và KOKUYO. Chưa thực hiện phỏng vấn người dùng trực tiếp; không nhằm mục đích xếp hạng thương hiệu nào tốt hơn.
    </div>
    <div class="article-body">
      <h2>1. Quan sát đối chiếu từ tài liệu gốc</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Quan sát có nguồn</th><th>Diễn giải của người nghiên cứu</th><th>Áp dụng cho concept NẾP GẤP</th></tr></thead>
          <tbody>
            <tr>
              <td>Tài liệu MUJI: What is MUJI (PDF) nêu rõ nguyên tắc lựa chọn vật liệu, tinh giản quy trình sản xuất và bao gói.</td>
              <td>Giá trị thương hiệu được giải thích thông qua triết lý tạo ra sản phẩm chứ không chỉ là quảng bá tính năng.</td>
              <td>NẾP GẤP cần làm rõ cấu trúc trang tuần bên trong; không kể chuyện bền vững khi chưa có thông số vật liệu thật.</td>
            </tr>
            <tr>
              <td>Trang Campus Binder mô tả chi tiết vấn đề người dùng gặp phải: vòng gáy chạm tay khi viết, chiếm chỗ trên bàn.</td>
              <td>Bắt đầu từ tình huống sử dụng thực tế giúp người đọc hiểu ngay vì sao một chi tiết thiết kế lại tồn tại.</td>
              <td>Trưng bày trang tuần đang mở phẳng và khoảng ghi chú thay vì chỉ chụp ảnh bìa bên ngoài.</td>
            </tr>
            <tr>
              <td>Trang Campus Notebook nêu rõ vị trí ghi tiêu đề, các dấu căn dòng kẻ và kết cấu gáy đóng sổ chắc chắn.</td>
              <td>Thông tin công năng được chứng minh bằng hình ảnh chi tiết cận cảnh thay vì lời khen chung chung.</td>
              <td>Dựng cận cảnh các ô phân chia công việc trong template lịch tuần để người dùng dễ hình dung.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>2. Kết luận biên tập cho concept NẾP GẤP</h2>
      <p>Nội dung giới thiệu văn phòng phẩm nên bắt đầu từ việc người viết cần gì trên trang giấy. Khi thiết kế concept NẾP GẤP, phần quan trọng nhất cần cho xem là bố cục sử dụng và lý do vì sao ô ghi chú đó tồn tại.</p>
      <div style="margin-top: 32px;">
        <a href="/nhan-dien/nep-gap/" class="btn btn-primary btn-sm">Xem bộ nhận diện NẾP GẤP →</a>
        <a href="/tai-nguyen/#lich-tuan" class="btn btn-secondary btn-sm" style="margin-left: 12px;">Tải mẫu Lịch tuần NẾP GẤP →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(mujiDir, 'index.html'), mujiHtml, 'utf8');

  // Highlands Menu Audit Case
  const highlandsDir = path.join(hubDir, 'highlands-menu');
  ensureDir(highlandsDir);
  const highlandsHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Highlands Coffee: Đọc menu từ nhóm món đến câu hỏi chọn · Tuấn Anh Portfolio</title>
  <meta name="description" content="Audit nội dung thực đơn công khai của Highlands Coffee và đề xuất wireframe hỗ trợ chọn thức uống theo gu cho concept MẺ NHỎ.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nghien-cuu/highlands-menu/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
      <a href="/nghien-cuu/">Nghiên cứu</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">Highlands Menu Audit</span>
    </nav>
    <div style="margin-bottom: 24px;">
      <span class="badge badge-seo">Audit nội dung công khai · Không liên kết thương hiệu</span>
      <h1 style="font-size: 34px; font-weight: 700; margin: 12px 0;">Từ nhóm món đến câu hỏi chọn đồ uống: đọc menu Highlands</h1>
      <p style="color: var(--text-muted); font-size: 17px;">Quan sát cách phân loại thực đơn công khai của Highlands Coffee để thiết kế một mẫu wireframe hỗ trợ chọn sản phẩm cho concept MẺ NHỎ.</p>
    </div>
    <div class="disclaimer-box">
      <strong>Giới hạn case study:</strong> Khảo sát dựa trên trang thực đơn công khai của Highlands Coffee (highlandscoffee.com.vn/vn/san-pham.html). Chưa có số liệu hành vi người dùng; không đưa ra kết luận về trải nghiệm khách hàng tại quán.
    </div>
    <div class="article-body">
      <h2>1. Quan sát cấu trúc menu hiện tại</h2>
      <p>Trang thực đơn chính thức của Highlands phân chia các món theo danh mục lớn: Cà phê, Trà, Freeze (đá xay) và Đồ uống khác. Cách phân loại này giúp người dùng dễ duyệt theo nhóm món quen thuộc.</p>
      <p><strong>Câu hỏi biên tập đặt ra:</strong> Với một người mới lần đầu chọn cà phê, ngoài nhóm món, họ có cần thêm gợi ý về cách uống (đậm/nhẹ, nóng/đá, có sữa hay không) và dụng cụ pha hay không?</p>
      
      <h2>2. Đề xuất Wireframe chọn đồ uống cho concept MẺ NHỎ</h2>
      <p>Từ quan sát trên, mình phác thảo luồng nội dung hỗ trợ người mới chọn cà phê cho concept MẺ NHỎ gồm 3 bước:</p>
      <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <h4 style="color: var(--accent); margin-bottom: 12px;">Khung wireframe gợi ý:</h4>
        <p><strong>Bước 1: Bạn thường uống thế nào?</strong> → Lựa chọn: Cà phê đen / Thêm sữa / Muốn thử từ đầu.</p>
        <p><strong>Bước 2: Dụng cụ bạn đang có tại nhà?</strong> → Phin nhôm / Phin inox / Máy pha espresso / Khác.</p>
        <p><strong>Bước 3: Những câu hỏi nên hỏi người bán trước khi mua?</strong> → Hỏi về cỡ xay phù hợp, ngày rang và hướng dẫn bảo quản.</p>
      </div>
      <div style="margin-top: 32px;">
        <a href="/content/me-nho/" class="btn btn-primary btn-sm">Xem case social MẺ NHỎ →</a>
        <a href="/thiet-ke/banner-me-nho/" class="btn btn-secondary btn-sm" style="margin-left: 12px;">Xem bộ banner MẺ NHỎ →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(highlandsDir, 'index.html'), highlandsHtml, 'utf8');

  console.log('Generated Research Hub & Cases: MUJI & Highlands');
}

// 5. BRAND IDENTITY CASES (NẾP GẤP, MẺ NHỎ, QUAI VẢI)
function buildBrandIdentityCases() {
  const hubDir = path.join(baseDir, 'nhan-dien');
  ensureDir(hubDir);

  // Hub
  const hubHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bộ Nhận Diện Concept · Tuấn Anh Portfolio</title>
  <meta name="description" content="Ba bộ nhận diện thương hiệu concept phát triển trong đợt nâng cấp portfolio 10/2026: NẾP GẤP, MẺ NHỎ và QUAI VẢI. Thiết kế logo, quy chuẩn màu sắc và ấn phẩm thực tế.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nhan-dien/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}
  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">
    <div style="max-width: 800px; margin-bottom: 48px;">
      <nav class="breadcrumb">
        <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
        <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
        <span style="color: var(--text-main); font-weight: 500;">Nhận diện</span>
      </nav>
      <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">
        Bộ Nhận Diện Thương Hiệu Concept
      </h1>
      <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6;">
        Thiết kế trọn bộ từ ý tưởng cốt lõi, logo vector nguyên bản, lưới quy chuẩn, bảng màu thương hiệu đến 6 ấn phẩm thành phẩm mở xem được.
      </p>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
      <div class="card">
        <img src="../assets/brands/nep-gap-logo.svg" alt="NẾP GẤP logo" style="height: 64px; margin-bottom: 20px;">
        <span class="badge badge-concept" style="margin-bottom: 10px;">Văn phòng phẩm &amp; Ghi chép</span>
        <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px;">NẾP GẤP</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
          Lấy góc giấy gấp làm hình ảnh cốt lõi. Bảng màu xanh rừng và đất nung. Thiết kế sổ planner, thiệp một ý và ấn phẩm ghi chép.
        </p>
        <a href="/nhan-dien/nep-gap/" class="btn btn-primary btn-sm" style="width: 100%;">Xem trọn bộ NẾP GẤP →</a>
      </div>
      <div class="card">
        <img src="../assets/brands/me-nho-logo.svg" alt="MẺ NHỎ logo" style="height: 64px; margin-bottom: 20px;">
        <span class="badge badge-concept" style="margin-bottom: 10px;">Cà phê pha tại nhà</span>
        <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px;">MẺ NHỎ</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
          “Pha theo gu của bạn”. Dấu nhận diện từ miệng phin và nhịp giọt cà phê, thẻ hỏi gu, phiếu thử ly và bộ banner quảng cáo.
        </p>
        <a href="/nhan-dien/me-nho/" class="btn btn-primary btn-sm" style="width: 100%;">Xem trọn bộ MẺ NHỎ →</a>
      </div>
      <div class="card">
        <img src="../assets/brands/quai-vai-logo.svg" alt="QUAI VẢI logo" style="height: 64px; margin-bottom: 20px;">
        <span class="badge badge-concept" style="margin-bottom: 10px;">Túi dùng hằng ngày</span>
        <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px;">QUAI VẢI</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
          “Mang vừa một ngày”. Dấu quai cong và đường chỉ may, bộ 6 icon phân loại đồ đạc và phiếu đo lòng túi thực tế.
        </p>
        <a href="/nhan-dien/quai-vai/" class="btn btn-primary btn-sm" style="width: 100%;">Xem trọn bộ QUAI VẢI →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(hubDir, 'index.html'), hubHtml, 'utf8');

  // NẾP GẤP Case
  const nepGapDir = path.join(hubDir, 'nep-gap');
  ensureDir(nepGapDir);
  const nepGapHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NẾP GẤP: Nhận diện Văn phòng phẩm &amp; Ghi chép · Tuấn Anh Portfolio</title>
  <meta name="description" content="Hệ nhận diện thương hiệu concept NẾP GẤP: logo góc gấp trang giấy, bảng màu #2D4B43 và #D97757, 6 ứng dụng NG01–NG06 và quy tắc sử dụng.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nhan-dien/nep-gap/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
      <a href="/nhan-dien/">Nhận diện</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">NẾP GẤP</span>
    </nav>
    <div style="margin-bottom: 28px;">
      <span class="badge badge-concept">Concept cá nhân · 10/2026</span>
      <h1 style="font-size: 38px; font-weight: 700; margin: 12px 0;">NẾP GẤP — Văn phòng phẩm và công cụ ghi chép</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Một hệ nhận diện từ góc gấp trên trang giấy. Đánh dấu nơi mình muốn quay về.”</p>
    </div>
    <div class="card" style="text-align: center; padding: 40px; margin-bottom: 40px; background: #FAF9F5;">
      <img src="../../assets/brands/nep-gap-logo.svg" alt="NẾP GẤP Logo" style="height: 90px; margin: 0 auto 20px auto;">
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <span style="padding: 6px 14px; background: #2D4B43; color: #FFF; border-radius: 6px; font-size: 13px;">Xanh rừng #2D4B43</span>
        <span style="padding: 6px 14px; background: #D97757; color: #FFF; border-radius: 6px; font-size: 13px;">Đất nung #D97757</span>
        <span style="padding: 6px 14px; background: #F6F4EE; color: #243247; border: 1px solid #D6DFE8; border-radius: 6px; font-size: 13px;">Giấy ngà #F6F4EE</span>
        <span style="padding: 6px 14px; background: #2B303A; color: #FFF; border-radius: 6px; font-size: 13px;">Mực đen #2B303A</span>
      </div>
    </div>
    <div class="article-body">
      <h2>1. Định hướng &amp; Ý tưởng thiết kế</h2>
      <p>NẾP GẤP là concept văn phòng phẩm dành cho người học và người làm nội dung. Ý tưởng bắt đầu từ góc gấp quen thuộc trên trang sách — hành động đánh dấu tự nhiên khi ta muốn ghi nhớ một ý tưởng hoặc quay lại sau.</p>
      
      <h2>2. Sáu ứng dụng thành phẩm (NG01 — NG06)</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Mã</th><th>Thành phẩm</th><th>Mô tả chi tiết</th></tr></thead>
          <tbody>
            <tr><td><strong>NG01</strong></td><td>Bìa sổ A5 (148×210mm)</td><td>Artwork mặt trước (logo, slogan) &amp; mặt sau (thông điệp, nhãn concept).</td></tr>
            <tr><td><strong>NG02</strong></td><td>Ruột lịch tuần A5</td><td>Bố cục 2 trang mở: Thứ 2–4 trang trái, Thứ 5–CN, ô Ưu tiên &amp; Ý tưởng đang mở trang phải.</td></tr>
            <tr><td><strong>NG03</strong></td><td>Bộ 3 thẻ ghi chú (90×120mm)</td><td>Thẻ Việc cần làm (checklist), Thẻ Điều cần hỏi (kẻ ngang), Thẻ Ý tưởng mới (lưới dot 5mm).</td></tr>
            <tr><td><strong>NG04</strong></td><td>Đai giấy bọc sổ (Belly Band)</td><td>Bản phẳng trải ngang: thông số ruột giấy 100gsm, logo mặt chính, lưu ý concept mặt gập.</td></tr>
            <tr><td><strong>NG05</strong></td><td>Carousel ra mắt 6 slide (1080×1350)</td><td>Chuỗi 6 slide giáo dục thói quen ghi chép, vượt qua nỗi sợ trang trắng, kêu gọi tải template.</td></tr>
            <tr><td><strong>NG06</strong></td><td>Header cửa hàng concept</td><td>Header website thương mại giả định (1440×640) &amp; mobile (390×560) với nút tải template.</td></tr>
          </tbody>
        </table>
      </div>

      <div style="margin: 40px 0;">
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 20px;">Trưng bày trực quan 6 ấn phẩm thiết kế:</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; margin-bottom: 32px;">
          <div class="card">
            <h4 style="font-size: 16px; margin-bottom: 12px; font-weight: 700; color: var(--accent);">NG01 · Bìa Sổ A5 (Trước &amp; Sau)</h4>
            <img src="../../assets/brands/ng01.svg" alt="NG01 Bìa Sổ A5 NẾP GẤP" style="border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Khổ A5 tiêu chuẩn 148×210mm. Nền giấy kem mộc, góc gấp vàng nhận diện.</p>
          </div>
          <div class="card">
            <h4 style="font-size: 16px; margin-bottom: 12px; font-weight: 700; color: var(--accent);">NG02 · Ruột Lịch Tuần A5 Mở 2 Trang</h4>
            <img src="../../assets/brands/ng02.svg" alt="NG02 Ruột Lịch Tuần A5 NẾP GẤP" style="border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Bố cục cân đối, phân bổ theo nhịp công việc thực tế trong tuần.</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; margin-bottom: 32px;">
          <div class="card">
            <h4 style="font-size: 16px; margin-bottom: 12px; font-weight: 700; color: var(--accent);">NG03 · Bộ 3 Thẻ Ghi Chú 90×120mm</h4>
            <img src="../../assets/brands/ng03.svg" alt="NG03 Bộ 3 thẻ ghi chú NẾP GẤP" style="border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">3 mục đích rõ ràng: Việc cần làm, Điều cần hỏi, và Ý tưởng mới.</p>
          </div>
          <div class="card">
            <h4 style="font-size: 16px; margin-bottom: 12px; font-weight: 700; color: var(--accent);">NG04 · Đai Giấy Bọc Sổ Trải Phẳng</h4>
            <img src="../../assets/brands/ng04.svg" alt="NG04 Đai giấy bọc sổ NẾP GẤP" style="border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Đai giấy kraft ghi rõ định lượng giấy 100gsm và thông điệp thương hiệu.</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px; margin-bottom: 32px;">
          <div class="card">
            <h4 style="font-size: 16px; margin-bottom: 12px; font-weight: 700; color: var(--accent);">NG05 · Bộ Carousel Ra Mắt 6 Slide</h4>
            <img src="../../assets/brands/ng05.svg" alt="NG05 Carousel ra mắt NẾP GẤP" style="border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Tỉ lệ 4:5 chuẩn định dạng carousel social media.</p>
          </div>
          <div class="card">
            <h4 style="font-size: 16px; margin-bottom: 12px; font-weight: 700; color: var(--accent);">NG06 · Header Cửa Hàng Concept</h4>
            <img src="../../assets/brands/ng06.svg" alt="NG06 Header cửa hàng concept NẾP GẤP" style="border-radius: 8px; border: 1px solid var(--border);">
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px;">Banner website bán hàng giả định với thông điệp: Thử bố cục trước, chọn sổ sau.</p>
          </div>
        </div>
      </div>

      <h2>3. Quy tắc dùng đúng &amp; dùng sai</h2>
      <p>• <strong>Dùng đúng:</strong> Giữ khoảng cách an toàn (clearspace) tối thiểu bằng chiều rộng góc gấp. Luôn đặt logo trên nền sáng hoặc đơn sắc tương phản cao.</p>
      <p>• <strong>Dùng sai:</strong> Không kéo méo tỷ lệ logo; không xoay góc gấp sang các cạnh khác làm mất tính nhận diện cuốn sổ; không tự thêm viền bóng dày.</p>
      <div style="margin-top: 36px;">
        <a href="/web/nep-gap/" class="btn btn-primary btn-sm">Mở Cửa hàng Concept NẾP GẤP →</a>
        <a href="/content/nep-gap/" class="btn btn-secondary btn-sm" style="margin-left: 12px;">Xem Content Lab NẾP GẤP →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(nepGapDir, 'index.html'), nepGapHtml, 'utf8');

  // MẺ NHỎ Case
  const meNhoDir = path.join(hubDir, 'me-nho');
  ensureDir(meNhoDir);
  const meNhoHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MẺ NHỎ: Nhận diện Cà phê Pha Tại Nhà · Tuấn Anh Portfolio</title>
  <meta name="description" content="Bộ nhận diện concept MẺ NHỎ: Pha theo gu của bạn. Logo miệng phin và nhịp giọt cà phê, thẻ hỏi gu, phiếu thử ly và bộ banner quảng cáo.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nhan-dien/me-nho/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
      <a href="/nhan-dien/">Nhận diện</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">MẺ NHỎ</span>
    </nav>
    <div style="margin-bottom: 28px;">
      <span class="badge badge-concept">Concept cá nhân · 10/2026</span>
      <h1 style="font-size: 38px; font-weight: 700; margin: 12px 0;">MẺ NHỎ — Cà phê cho việc pha tại nhà</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Pha theo gu của bạn. Bắt đầu từ một ly bạn thích.”</p>
    </div>
    <div class="card" style="text-align: center; padding: 40px; margin-bottom: 40px; background: #FBF9F6;">
      <img src="../../assets/brands/me-nho-logo.svg" alt="MẺ NHỎ Logo" style="height: 90px; margin: 0 auto 20px auto;">
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <span style="padding: 6px 14px; background: #593B2F; color: #FFF; border-radius: 6px; font-size: 13px;">Nâu rang #593B2F</span>
        <span style="padding: 6px 14px; background: #2F6257; color: #FFF; border-radius: 6px; font-size: 13px;">Xanh lá trầm #2F6257</span>
        <span style="padding: 6px 14px; background: #F6F1E8; color: #243247; border: 1px solid #D6DFE8; border-radius: 6px; font-size: 13px;">Nền sữa #F6F1E8</span>
        <span style="padding: 6px 14px; background: #E7B080; color: #243247; border-radius: 6px; font-size: 13px;">Cam nhạt #E7B080</span>
      </div>
    </div>
    <div class="article-body">
      <h2>1. Triết lý &amp; Định vị thương hiệu</h2>
      <p>MẺ NHỎ là concept cà phê dành cho tình huống mua về pha ở nhà. Thay vì sử dụng các thuật ngữ nếm thử phức tạp của chuyên gia cupping, MẺ NHỎ ưu tiên những câu hỏi bình dị: Bạn uống đen hay thêm sữa? Đang có dụng cụ nào? Và cần hỏi người bán điều gì về cỡ xay?</p>
      <h2>2. Sáu ấn phẩm thành phẩm (MN01 — MN06)</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Mã</th><th>Ấn phẩm</th><th>Nội dung chi tiết</th></tr></thead>
          <tbody>
            <tr><td><strong>MN01</strong></td><td>Bao bì túi cà phê (160x240mm)</td><td>Mặt trước logo và tagline; mặt sau ghi chú hỏi về cỡ xay và hướng dẫn bảo quản.</td></tr>
            <tr><td><strong>MN02</strong></td><td>Thẻ hỏi gu (100x150mm)</td><td>Thẻ cầm tay mang theo khi mua cà phê để tick chọn cách uống và dụng cụ có sẵn.</td></tr>
            <tr><td><strong>MN03</strong></td><td>Phiếu thử ly pha A5</td><td>Phiếu ghi nhận tỷ lệ nước, bột và cảm nhận sau mỗi lần pha phin tại nhà.</td></tr>
            <tr><td><strong>MN04</strong></td><td>Ly giấy &amp; Sleeve concept</td><td>Logo và thông điệp: “Một khoảng nghỉ, một ly theo gu.”</td></tr>
            <tr><td><strong>MN05</strong></td><td>Bộ banner hiển thị đa kích thước</td><td>8 kích cỡ chuẩn hiển thị đáp ứng mọi khung hình quảng cáo số.</td></tr>
            <tr><td><strong>MN06</strong></td><td>Carousel 6 slide &amp; Poster</td><td>Bộ slide hướng dẫn người mới đặt câu hỏi khi mua cà phê phin.</td></tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top: 36px;">
        <a href="/thiet-ke/banner-me-nho/" class="btn btn-primary btn-sm">Xem Bộ Banner MẺ NHỎ →</a>
        <a href="/content/me-nho/" class="btn btn-secondary btn-sm" style="margin-left: 12px;">Xem Content Lab MẺ NHỎ →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(meNhoDir, 'index.html'), meNhoHtml, 'utf8');

  // QUAI VẢI Case
  const quaiVaiDir = path.join(hubDir, 'quai-vai');
  ensureDir(quaiVaiDir);
  const quaiVaiHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QUAI VẢI: Nhận diện Túi Dùng Hằng Ngày · Tuấn Anh Portfolio</title>
  <meta name="description" content="Bộ nhận diện concept QUAI VẢI: Mang vừa một ngày. Logo quai uốn cong và đường chỉ may, 6 vector icons, phiếu đo túi và buying guide.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/nhan-dien/quai-vai/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('projects')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
      <a href="/nhan-dien/">Nhận diện</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">QUAI VẢI</span>
    </nav>
    <div style="margin-bottom: 28px;">
      <span class="badge badge-concept">Concept cá nhân · 10/2026</span>
      <h1 style="font-size: 38px; font-weight: 700; margin: 12px 0;">QUAI VẢI — Túi dùng hằng ngày</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Mang vừa một ngày. Chọn túi từ những thứ bạn mang.”</p>
    </div>
    <div class="card" style="text-align: center; padding: 40px; margin-bottom: 40px; background: #F8F9FA;">
      <img src="../../assets/brands/quai-vai-logo.svg" alt="QUAI VẢI Logo" style="height: 90px; margin: 0 auto 20px auto;">
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <span style="padding: 6px 14px; background: #2F435C; color: #FFF; border-radius: 6px; font-size: 13px;">Xanh chàm #2F435C</span>
        <span style="padding: 6px 14px; background: #C47E71; color: #FFF; border-radius: 6px; font-size: 13px;">Hồng đất #C47E71</span>
        <span style="padding: 6px 14px; background: #EEE8DF; color: #243247; border: 1px solid #D6DFE8; border-radius: 6px; font-size: 13px;">Vải sáng #EEE8DF</span>
        <span style="padding: 6px 14px; background: #233142; color: #FFF; border-radius: 6px; font-size: 13px;">Chữ chàm đậm #233142</span>
      </div>
    </div>
    <div class="article-body">
      <h2>1. Ý tưởng cốt lõi</h2>
      <p>QUAI VẢI lấy đường quai cong nối vào thân vuông làm biểu tượng chính. Thay vì tạo ra hình ảnh thời trang hào nhoáng, QUAI VẢI tập trung vào tính ứng dụng: chiếc túi có chứa vừa chiếc máy tính và đồ dùng của một ngày học/làm việc hay không?</p>
      <h2>2. Sáu ấn phẩm thành phẩm (QV01 — QV06)</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Mã</th><th>Ấn phẩm</th><th>Mô tả chi tiết</th></tr></thead>
          <tbody>
            <tr><td><strong>QV01</strong></td><td>Artwork in túi trước &amp; sau</td><td>Mặt trước logo và tagline; mặt sau sơ đồ các ô phân chia đồ trừu tượng.</td></tr>
            <tr><td><strong>QV02</strong></td><td>Hangtag 2 mặt (60x100mm)</td><td>Thẻ treo sản phẩm nhắc người mua kiểm tra hướng dẫn chăm sóc vải của từng mã.</td></tr>
            <tr><td><strong>QV03</strong></td><td>Phiếu đo túi A5</td><td>Bảng đối chiếu kích thước món đồ lớn nhất với chiều cao, đáy và miệng túi.</td></tr>
            <tr><td><strong>QV04</strong></td><td>Bộ 6 vector icons</td><td>Icon sổ, bình nước, hộp bút, laptop trong bao, điện thoại và ví tiền.</td></tr>
            <tr><td><strong>QV05</strong></td><td>Carousel 6 slide + Poster</td><td>“Ảnh đẹp chưa cho biết túi có vừa đồ. Đo trước khi chọn.”</td></tr>
            <tr><td><strong>QV06</strong></td><td>Card hướng dẫn mua (1080x1350)</td><td>Quy trình 4 bước: Liệt kê đồ → Đo kích thước → Thử quai → Kiểm giặt ủi.</td></tr>
          </tbody>
        </table>
      </div>
      <div style="margin-top: 36px;">
        <a href="/content/quai-vai/" class="btn btn-primary btn-sm">Xem Content Lab QUAI VẢI →</a>
        <a href="/seo/chon-tui-canvas-di-hoc/" class="btn btn-secondary btn-sm" style="margin-left: 12px;">Đọc bài viết SEO về Túi Canvas →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(quaiVaiDir, 'index.html'), quaiVaiHtml, 'utf8');

  console.log('Generated Brand Identity Cases: NẾP GẤP, MẺ NHỎ, QUAI VẢI');
}

// 6. CONTENT LAB HUB & CASES (NẾP GẤP, MẺ NHỎ, QUAI VẢI, NHỊP VIỆC)
function buildContentLab() {
  const hubDir = path.join(baseDir, 'content');
  ensureDir(hubDir);

  const hubHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Content Lab · Kế hoạch &amp; Nội dung Social · Tuấn Anh Portfolio</title>
  <meta name="description" content="Content Lab: 4 case study lập kế hoạch nội dung social tuần mẫu: NẾP GẤP, MẺ NHỎ, QUAI VẢI và NHỊP VIỆC. Đầy đủ caption, carousel 6 slide, story và storyboard video.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/content/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('content')}
  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">
    <div style="max-width: 800px; margin-bottom: 48px;">
      <nav class="breadcrumb">
        <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
        <span style="color: var(--text-main); font-weight: 500;">Content Lab</span>
      </nav>
      <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">
        Từ một đề bài đến nội dung có thể sản xuất
      </h1>
      <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6;">
        Mỗi case study bao gồm chân dung người đọc giả định, 3 tuyến nội dung (pillars), lịch tuần mẫu 7 ngày, caption hoàn chỉnh, carousel nhiều slide và kịch bản phân cảnh (storyboard).
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px;">
      <div class="card">
        <span class="badge badge-concept" style="margin-bottom: 12px;">C01 · Văn phòng phẩm</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 10px;">NẾP GẤP: Một tuần tìm cách ghi</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Giúp người đọc thử một trang tuần trước khi mua sổ. Đầy đủ 3 caption hoàn chỉnh, carousel 6 slide và kịch bản video 20s.
        </p>
        <a href="/content/nep-gap/" class="btn btn-secondary btn-sm" style="width: 100%;">Mở case NẾP GẤP →</a>
      </div>

      <div class="card">
        <span class="badge badge-concept" style="margin-bottom: 12px;">C02 · F&amp;B / Cà phê</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 10px;">MẺ NHỎ: Đặt câu hỏi khi mua cà phê</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Giúp người mới diễn đạt gu uống đen hay sữa và hỏi đúng thông tin gói. Caption, carousel 6 slide và thẻ hỏi gu.
        </p>
        <a href="/content/me-nho/" class="btn btn-secondary btn-sm" style="width: 100%;">Mở case MẺ NHỎ →</a>
      </div>

      <div class="card">
        <span class="badge badge-concept" style="margin-bottom: 12px;">C03 · Phụ kiện</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 10px;">QUAI VẢI: Chọn túi từ đồ sẽ mang</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Đo kích thước laptop, bình nước và đồ đạc trước khi mua túi tote. Caption, carousel 4 điểm đo và storyboard.
        </p>
        <a href="/content/quai-vai/" class="btn btn-secondary btn-sm" style="width: 100%;">Mở case QUAI VẢI →</a>
      </div>

      <div class="card">
        <span class="badge badge-concept" style="margin-bottom: 12px;">C04 · Dịch vụ số / B2B</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 10px;">NHỊP VIỆC: Chốt brief cho nhóm nhỏ</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Thống nhất đề bài và tiêu chí duyệt bài viết qua brief một trang. Caption, carousel và kịch bản phân cảnh 25s.
        </p>
        <a href="/content/nhip-viec/" class="btn btn-secondary btn-sm" style="width: 100%;">Mở case NHỊP VIỆC →</a>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(hubDir, 'index.html'), hubHtml, 'utf8');

  // Case C02: MẺ NHỎ
  const c02Dir = path.join(hubDir, 'me-nho');
  ensureDir(c02Dir);
  const c02Html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case C02: MẺ NHỎ · Kế hoạch Social Content · Tuấn Anh Portfolio</title>
  <meta name="description" content="Chi tiết case social content MẺ NHỎ: Chân dung người đọc, 3 pillars, lịch tuần 7 ngày, full caption MN-P1/P2/P3, carousel 6 slide và kịch bản storyboard.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/content/me-nho/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('content')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/content/">Content Lab</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">MẺ NHỎ</span>
    </nav>
    <div style="margin-bottom: 32px;">
      <span class="badge badge-concept">Social Content Lab · Concept F&amp;B</span>
      <h1 style="font-size: 36px; font-weight: 700; margin: 12px 0;">MẺ NHỎ — Giúp người mới đặt câu hỏi khi mua cà phê</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Pha theo gu của bạn: từ câu hỏi mua hàng đến một ly cà phê vừa miệng tại nhà.”</p>
    </div>
    
    <div class="article-body">
      <h2>1. Brief &amp; Ba tuyến nội dung (Pillars)</h2>
      <p>• <strong>Pillar 1: Hiểu điều mình thích (Awareness)</strong> — Giúp người uống diễn đạt cảm nhận đơn giản (đen, sữa, đậm, nhẹ) thay vì học vẹt thuật ngữ nếm nếm.</p>
      <p>• <strong>Pillar 2: Hỏi đúng trước khi mua (Education)</strong> — Cách giao tiếp với người bán: cỡ xay cho phin nhôm/inox, ngày rang và cách bảo quản gói cà phê.</p>
      <p>• <strong>Pillar 3: Ghi lại sau mỗi lần pha (Action &amp; Retention)</strong> — Phiếu thử ly giúp người pha chỉ thay đổi một biến số mỗi lần để tìm ra ly ưng ý.</p>

      <h2>2. Lịch đăng tuần mẫu 7 ngày</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Ngày</th><th>Mã</th><th>Định dạng</th><th>Nội dung</th><th>CTA</th></tr></thead>
          <tbody>
            <tr><td>Thứ 2</td><td>MN-P1</td><td>Ảnh đơn</td><td>“Ngon nhất” cần thêm ngữ cảnh</td><td>Bình luận gu bạn thường uống</td></tr>
            <tr><td>Thứ 3</td><td>MN-C1</td><td>Carousel 6 slide</td><td>Năm điều nên nói với người bán cà phê</td><td>Lưu lại &amp; tải phiếu hỏi gu</td></tr>
            <tr><td>Thứ 4</td><td>MN-P2</td><td>Ảnh chụp nhãn</td><td>Đọc hướng dẫn trên đúng gói cà phê</td><td>Xem bài viết A06</td></tr>
            <tr><td>Thứ 5</td><td>MN-S1</td><td>Story Poll</td><td>Bạn uống đen đá hay thêm sữa đặc?</td><td>Bình chọn</td></tr>
            <tr><td>Thứ 6</td><td>MN-P3</td><td>Ảnh + Link</td><td>Ghi lại một thay đổi cho lần pha tới</td><td>Tải Phiếu thử gu</td></tr>
            <tr><td>Thứ 7</td><td>MN-S2</td><td>Story Q&amp;A</td><td>Chưa biết gu thì nên bắt đầu từ đâu?</td><td>Đặt câu hỏi</td></tr>
            <tr><td>Chủ Nhật</td><td>MN-V1</td><td>Storyboard 20s</td><td>Một chiếc thẻ hỏi gu trước khi ghé tiệm</td><td>Xem kịch bản phân cảnh</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. Caption hoàn chỉnh (Bản đăng thực tế)</h2>
      
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">MN-P1 — “Cho mình loại ngon nhất” vẫn còn thiếu một chút thông tin</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Bạn uống đen hay thêm sữa? Đang có phin nào? Muốn mua hạt để tự xay hay bột dùng ngay? Những câu trả lời ngắn này giúp cuộc trao đổi với người bán đi vào lựa chọn cụ thể hơn.<br><br>
          MẺ NHỎ đề xuất bắt đầu bằng một ly bạn từng thấy dễ uống và điều bạn thích ở nó. Chưa cần dùng thật nhiều từ nếm. Cứ nói theo cách mình cảm nhận và hỏi lại thông tin chưa rõ.<br><br>
          Bạn thường mô tả gu uống bằng từ nào? Ghi một từ dưới bài để thử bắt đầu cuộc trò chuyện.<br><br>
          <em>#MeNho #PhaTheoGu #CaPheTaiNha</em>
        </p>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">MN-P2 — Giữ lại hướng dẫn của đúng gói cà phê</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Một công thức bạn thấy trên mạng có thể dùng loại cà phê và dụng cụ khác. Ở lần đầu, hãy đọc thông tin nhà sản xuất cung cấp, hỏi thêm nơi bán nếu chưa rõ rồi ghi lại cách mình đã pha.<br><br>
          Điều cần ghi không phải một bảng điểm phức tạp. Chỉ cần sản phẩm, dụng cụ, lượng dùng theo hướng dẫn, việc có thêm đá/sữa và cảm nhận của bạn.<br><br>
          Nội dung MẺ NHỎ ở đây là concept hướng dẫn đặt câu hỏi, chưa phải công thức được thử trên một sản phẩm kinh doanh. Mở bài ‘Chọn cà phê pha phin’ để xem phiếu chuẩn bị.<br><br>
          <em>#MeNho #PhaPhin #HoiTruocKhiChon</em>
        </p>
      </div>

      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">MN-P3 — Lần sau bạn muốn đổi điều gì trong ly vừa pha?</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Nếu đổi cả lượng cà phê, nước, cách rót và phần sữa cùng lúc, sẽ khó nhớ điều gì tạo ra khác biệt. Bạn có thể bắt đầu bằng một thay đổi và ghi cảm nhận sau đó.<br><br>
          Phiếu thử gu của MẺ NHỎ có một ô dành riêng cho câu hỏi này. Không có điểm ‘chuẩn gu’, chỉ có điều bạn muốn giữ và điều muốn hỏi thêm.<br><br>
          Tải bản phiếu trống ở tài nguyên để dùng cho lần pha tiếp theo. Hướng dẫn bảo quản và cách dùng vẫn cần theo đúng sản phẩm bạn đang có.<br><br>
          <em>#MeNho #NhatKyPha #GuCuaBan</em>
        </p>
      </div>

      <h2>4. Nội dung Carousel 6 slide (MN-C1)</h2>
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <p><strong>Slide 1:</strong> “Mua cà phê pha phin: nói gì với người bán?”</p>
        <p><strong>Slide 2:</strong> “Cách uống — Đen, thêm sữa hoặc cách bạn thường dùng. Không cần chọn theo gu của người khác.”</p>
        <p><strong>Slide 3:</strong> “Dụng cụ đang có — Tên hoặc ảnh phin, có máy xay hay cần xay sẵn.”</p>
        <p><strong>Slide 4:</strong> “Thông tin trên gói — Thành phần, cách pha, bảo quản và mốc thời gian cần biết.”</p>
        <p><strong>Slide 5:</strong> “Điều chưa rõ — Hỏi về sản phẩm cụ thể. Tránh dùng một hướng dẫn chung cho mọi gói.”</p>
        <p><strong>Slide 6:</strong> “Lưu phiếu hỏi gu — Ghi trước khi mua, bổ sung sau khi thử. Tải tại /tai-nguyen/.”</p>
      </div>

      <h2>5. Kịch bản phân cảnh Storyboard 20s (MN-V1)</h2>
      <div class="disclaimer-box">
        <strong>Lưu ý kịch bản:</strong> Đây là kịch bản chuẩn bị sản xuất (motion concept), chưa quay hoặc thử nghiệm sản phẩm thực tế.
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Thời gian</th><th>Hình ảnh minh họa</th><th>Lời thoại / Chữ trên màn hình</th></tr></thead>
          <tbody>
            <tr><td>0–3s</td><td>Cận cảnh một chiếc thẻ chỉ có dòng chữ “Loại ngon nhất?”</td><td>“Câu này vẫn còn thiếu một chút thông tin.”</td></tr>
            <tr><td>3–7s</td><td>Bàn tay cầm bút tick vào ô “Uống thêm sữa đá”</td><td>“Bắt đầu từ cách bạn thường uống.”</td></tr>
            <tr><td>7–11s</td><td>Đặt chiếc phin nhôm truyền thống bên cạnh thẻ</td><td>“Và dụng cụ bạn đang có sẵn tại nhà.”</td></tr>
            <tr><td>11–16s</td><td>Gạch chân các câu hỏi về cỡ xay và hướng dẫn pha</td><td>“Để người bán tư vấn đúng loại hạt phù hợp.”</td></tr>
            <tr><td>16–20s</td><td>Logo MẺ NHỎ xuất hiện cùng dòng chữ CTA</td><td>“Mang theo một chiếc thẻ hỏi gu. Tải mẫu tại /tai-nguyen/.”</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(c02Dir, 'index.html'), c02Html, 'utf8');

  // Case C01: NẾP GẤP
  const c01Dir = path.join(hubDir, 'nep-gap');
  ensureDir(c01Dir);
  const c01Html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case C01: NẾP GẤP · Kế hoạch Social Content · Tuấn Anh Portfolio</title>
  <meta name="description" content="Chi tiết case social content NẾP GẤP: Kế hoạch 7 ngày, caption NG-P1/P2/P3, carousel 6 slide và storyboard video 20s.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/content/nep-gap/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('content')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/content/">Content Lab</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">NẾP GẤP</span>
    </nav>
    <div style="margin-bottom: 32px;">
      <span class="badge badge-concept">Social Content Lab · Concept Văn phòng phẩm</span>
      <h1 style="font-size: 36px; font-weight: 700; margin: 12px 0;">NẾP GẤP — Một tuần để tìm cách ghi phù hợp</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Thử cách ghi trước khi chọn sổ. Bắt đầu từ những việc cần nhớ trong tuần.”</p>
    </div>
    <div class="article-body">
      <h2>1. Caption hoàn chỉnh (Bản đăng thực tế)</h2>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">NG-P1 — Trang đầu tiên không cần kín chữ</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Bạn có thể bắt đầu bằng một việc cần nhớ, một câu hỏi còn bỏ ngỏ hoặc một ý vừa nghĩ ra trên đường về. Chỗ trống còn lại để dành cho những điều sẽ xuất hiện sau đó.<br><br>
          Trong concept NẾP GẤP, góc giấy gấp đánh dấu nơi mình muốn quay về. Vì vậy, bố cục được giữ thoáng để việc mở lại một trang không biến thành tìm kiếm giữa quá nhiều mục.<br><br>
          Nếu mở sổ lúc này, bạn muốn ghi điều gì trước? Một việc cần làm hay một ý chưa biết đặt ở đâu?<br><br>
          <em>#NepGap #GhiChep #YTuongDangMo</em>
        </p>
      </div>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">NG-P2 — Chừa một ô cho việc chưa có trong kế hoạch</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Lịch tuần có thể thay đổi sau một buổi học, một cuộc trao đổi hoặc một đề bài mới. Khi mọi khoảng trống đã được chia hết, việc phát sinh dễ chen vào chỗ dành cho điều khác.<br><br>
          Một cách thử là giữ vùng ‘Ý tưởng đang mở’ ở cạnh trang. Ghi điều mới xuất hiện vào đó, rồi quyết định: cần làm trong tuần này, chuyển sang tuần sau hay chỉ giữ lại để hỏi thêm.<br><br>
          Đây là gợi ý bố cục để bạn thử, không phải quy tắc bắt buộc. Nếu bạn đã có một cách ghi dễ theo dõi hơn, cứ giữ cách đó.<br><br>
          <em>#NepGap #LichTuan #CachGhiCuaBan</em>
        </p>
      </div>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">NG-P3 — Trước khi chọn sổ, thử một trang</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Bạn có thể chia giấy thành lịch hẹn, việc cần làm và ghi chú. Dùng nó cho một tuần rồi xem: mục nào thiếu chỗ, mục nào không dùng và thông tin nào khó tìm lại.<br><br>
          Bản lịch tuần NẾP GẤP trong portfolio có thêm vùng ‘Chuyển sang tuần sau’ để bạn không phải chép lại mọi thứ theo trí nhớ. Mở bản thử ở phần tài nguyên, in hoặc dùng bản số.<br><br>
          <em>#NepGap #PlannerTuan #ThuTruocKhiChon</em>
        </p>
      </div>
      <h2>2. Nội dung Carousel 6 slide (NG-C1)</h2>
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <p>1. “Bạn cần một chiếc planner hay một chỗ ghi đúng việc? Bắt đầu từ những thứ phải nhớ trong tuần.”</p>
        <p>2. “Nhiều lịch hẹn? Thử vùng theo giờ. Kiểm xem bạn có nhìn được các khoảng trống trong ngày không.”</p>
        <p>3. “Nhiều việc linh hoạt? Thử checklist tuần và một chỗ ghi việc phát sinh.”</p>
        <p>4. “Chủ yếu cần nhớ hạn? Dùng lịch tháng cho mốc lớn, thêm trang chi tiết nếu cần.”</p>
        <p>5. “Đừng chọn chỉ từ ảnh bìa. Thử mở sổ, khoảng viết, gáy và cách mang theo.”</p>
        <p>6. “Thử một tuần rồi quyết định. Tải lịch tuần NẾP GẤP trong phần tài nguyên.”</p>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(c01Dir, 'index.html'), c01Html, 'utf8');

  // Case C03: QUAI VẢI
  const c03Dir = path.join(hubDir, 'quai-vai');
  ensureDir(c03Dir);
  const c03Html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case C03: QUAI VẢI · Kế hoạch Social Content · Tuấn Anh Portfolio</title>
  <meta name="description" content="Chi tiết case social content QUAI VẢI: Caption QV-P1/P2/P3, carousel 6 slide và storyboard video 20s.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/content/quai-vai/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('content')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/content/">Content Lab</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">QUAI VẢI</span>
    </nav>
    <div style="margin-bottom: 32px;">
      <span class="badge badge-concept">Social Content Lab · Concept Phụ kiện</span>
      <h1 style="font-size: 36px; font-weight: 700; margin: 12px 0;">QUAI VẢI — Chọn túi từ những món sẽ mang</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Mang vừa một ngày. Đo trước khi chọn túi.”</p>
    </div>
    <div class="article-body">
      <h2>1. Caption hoàn chỉnh (Bản đăng thực tế)</h2>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">QV-P1 — Chiếc túi phù hợp bắt đầu từ những món bạn mang</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Đặt đồ của một ngày lên bàn: sổ, bình nước, máy tính kèm lớp bảo vệ nếu có, hộp bút và những món nhỏ. Tách thứ mang mỗi ngày với thứ chỉ thỉnh thoảng cần.<br><br>
          Danh sách ấy sẽ cho bạn câu hỏi cụ thể hơn khi xem túi: lòng có vừa món lớn nhất không, đồ nhỏ đặt đâu, miệng mở có dễ lấy đồ không?<br><br>
          QUAI VẢI là concept phụ kiện được xây quanh cách chọn này. Chưa có thông số tải trọng hoặc thử nghiệm sản phẩm; bản thiết kế dùng để minh họa cách cung cấp thông tin.<br><br>
          <em>#QuaiVai #MangVuaMotNgay #ChonTui</em>
        </p>
      </div>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">QV-P2 — Túi rộng nhưng lấy đồ vẫn khó?</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Một chiếc túi có đáy sâu nhưng miệng hẹp hoặc thiếu ngăn phụ sẽ khiến chìa khóa, thẻ xe và ví nhỏ chìm xuống đáy.<br><br>
          Khi chọn túi canvas, hãy kiểm tra độ mở của miệng túi và xem quai đeo có đủ dài để bạn xốc túi về phía trước khi lấy đồ hay không. Mở phiếu đo túi ở tài nguyên để ghi chú trước khi mua.<br><br>
          <em>#QuaiVai #ChiTietSuDung #DoTruocKhiMua</em>
        </p>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(c03Dir, 'index.html'), c03Html, 'utf8');

  // Case C04: NHỊP VIỆC
  const c04Dir = path.join(hubDir, 'nhip-viec');
  ensureDir(c04Dir);
  const c04Html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case C04: NHỊP VIỆC · Kế hoạch Social Content · Tuấn Anh Portfolio</title>
  <meta name="description" content="Chi tiết case social content NHỊP VIỆC: Chốt rõ để cùng làm tiếp. Caption NV-P1/P2/P3, carousel và storyboard 25s.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/content/nhip-viec/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('content')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/content/">Content Lab</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">NHỊP VIỆC</span>
    </nav>
    <div style="margin-bottom: 32px;">
      <span class="badge badge-concept">Social Content Lab · Concept B2B</span>
      <h1 style="font-size: 36px; font-weight: 700; margin: 12px 0;">NHỊP VIỆC — Dịch vụ số &amp; Phối hợp cho nhóm nhỏ</h1>
      <p style="color: var(--text-muted); font-size: 18px;">“Chốt rõ để cùng làm tiếp. Thống nhất đề bài trước khi sản xuất.”</p>
    </div>
    <div class="article-body">
      <h2>1. Caption hoàn chỉnh (Bản đăng thực tế)</h2>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">NV-P1 — ‘Bạn viết gì cũng được’ nghe thoáng, nhưng vẫn cần một mục tiêu</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Người viết cần biết ai sẽ đọc, bài giải quyết câu hỏi gì và sau khi đọc người xem nên làm gì. Nếu những điểm này thay đổi sau bản nháp đầu tiên, cả nhóm có thể phải sửa lại từ cấu trúc.<br><br>
          Trước khi giao việc, thử chốt một câu: ‘Nội dung này giúp ai làm được việc gì?’ Nếu chưa trả lời được, đó là phần cần làm rõ cùng nhau.<br><br>
          NHỊP VIỆC đề xuất một mẫu brief một trang cho tình huống đó. Đây là tài nguyên concept trong portfolio, chưa phải tính năng của một phần mềm đang bán.<br><br>
          <em>#NhipViec #BriefContent #LamViecNhom</em>
        </p>
      </div>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">NV-P2 — Góp ý để người viết biết phải sửa ở đâu</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          ‘Chưa ổn’ chưa cho thấy đoạn nào lệch đề bài. Có thể đổi thành: ‘Mở bài chưa nói người đọc sẽ nhận được gì’, hoặc ‘Thông tin này cần nguồn trước khi giữ lại’.<br><br>
          Một góp ý rõ nên có vị trí, lý do và hướng điều chỉnh theo brief. Nếu đề bài vừa đổi, cập nhật lại brief trước để mọi người sửa cùng mục tiêu.<br><br>
          <em>#NhipViec #FeedbackRoRang #BienTapNoiDung</em>
        </p>
      </div>
      <div class="card" style="margin-bottom: 24px;">
        <h4 style="color: var(--accent); margin-bottom: 8px;">NV-P3 — Nguồn nên đi cùng bản nháp</h4>
        <p style="font-size: 15px; color: var(--text-main); line-height: 1.7;">
          Khi có một con số, tính năng hoặc thông tin thời điểm, hãy gắn nguồn gần đoạn cần kiểm và ghi điều nguồn đó hỗ trợ. Một danh sách link ở cuối mà không biết link nào dùng cho câu nào sẽ khó duyệt hơn.<br><br>
          Nếu chưa xác nhận được, giữ câu hỏi ở phần ghi chú biên tập. Đừng để giả định lọt vào bản đăng như dữ kiện đã chốt.<br><br>
          <em>#NhipViec #KiemNguon #BanNhapCoCanCu</em>
        </p>
      </div>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(c04Dir, 'index.html'), c04Html, 'utf8');

  console.log('Generated Content Lab Hub & Cases: C01, C02, C03, C04');
}

// 7. SEO STUDIO HUB & SEO PROCESS
function buildSeoStudioAndProcess() {
  const seoDir = path.join(baseDir, 'seo');
  ensureDir(seoDir);

  // SEO Hub (/seo/index.html)
  const seoHubHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEO Studio · 11 Bài Viết Đa Ngành &amp; Hồ Sơ On-Page · Tuấn Anh</title>
  <meta name="description" content="SEO Studio của Khương Tuấn Anh: 11 bài viết hoàn chỉnh và hồ sơ On-page phía sau: search intent, heading map, nguồn đối chiếu, liên kết nội bộ và kế hoạch backlink.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/seo/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
  <style>
    .filter-btn {
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid var(--border);
      background: #FFFFFF;
      color: var(--text-main);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.18s ease;
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--accent);
      color: #FFFFFF;
      border-color: var(--accent);
    }
    .article-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  ${getHeader('seo')}

  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">
    <!-- Desk Hero -->
    <div class="split-grid-hero" style="margin-bottom: 56px;">
      <div>
        <nav class="breadcrumb">
          <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
          <span style="color: var(--text-main); font-weight: 500;">SEO Studio</span>
        </nav>
        <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); line-height: 1.25; margin-bottom: 16px;">
          Viết để giải quyết một câu hỏi cụ thể.
        </h1>
        <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
          Ở đây có 11 bài viết hoàn chỉnh và phần chuẩn bị phía sau: người đọc, từ khóa, nguồn, dàn ý, liên kết và kiểm tra trước khi đăng. Các bài là mẫu portfolio, chưa có dữ liệu xếp hạng hoặc chuyển đổi cho thương hiệu.
        </p>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          <a href="#danh-sach-bai" class="btn btn-primary">Khám phá 11 bài viết ↓</a>
          <a href="/seo/quy-trinh/" class="btn btn-secondary">Xem quy trình 22 bước On-Page →</a>
        </div>
      </div>
      <div style="text-align: center;">
        <img src="../assets/chibi/ta-chibi-research.svg" alt="Bạn Biên Tập nghiên cứu bài viết" class="chibi-character" style="width: 240px; margin: 0 auto;">
      </div>
    </div>

    <!-- Process Highlight Banner -->
    <div class="card" style="margin-bottom: 48px; background: #FFFFFF; border-left: 4px solid var(--accent); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
      <div>
        <h3 style="font-size: 18px; font-weight: 700; color: var(--accent); margin-bottom: 4px;">Mình chuẩn bị gì trước khi viết bài?</h3>
        <p style="font-size: 14px; color: var(--text-muted);">Khám phá 6 nhóm việc: Nhận đề bài → Khảo sát tìm kiếm → Kiểm chứng claim → Biên tập → Xuất bản → Đo lường.</p>
      </div>
      <a href="/seo/quy-trinh/" class="btn btn-secondary btn-sm">Xem chi tiết 22 đầu việc →</a>
    </div>

    <!-- Filter & Search Toolbar -->
    <div id="danh-sach-bai" style="margin-bottom: 32px;">
      <div style="display: flex; gap: 16px; margin-bottom: 20px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="filter-buttons">
          <button class="filter-btn active" data-cat="all">Tất cả (11)</button>
          <button class="filter-btn" data-cat="cong-cu-noi-dung">Công cụ nội dung</button>
          <button class="filter-btn" data-cat="hobby-mo-hinh">Hobby &amp; Mô hình</button>
          <button class="filter-btn" data-cat="cong-nghe">Công nghệ</button>
          <button class="filter-btn" data-cat="giai-tri">Giải trí</button>
          <button class="filter-btn" data-cat="game-development">Game Dev</button>
          <button class="filter-btn" data-cat="fb">F&amp;B</button>
          <button class="filter-btn" data-cat="thoi-trang-phu-kien">Thời trang</button>
          <button class="filter-btn" data-cat="van-phong-pham">Văn phòng phẩm</button>
          <button class="filter-btn" data-cat="nha-cua-doi-song">Nhà cửa</button>
          <button class="filter-btn" data-cat="du-lich">Du lịch</button>
          <button class="filter-btn" data-cat="dich-vu-so-b2b">B2B</button>
        </div>
        <div style="min-width: 260px;">
          <input type="text" id="search-input" placeholder="Tìm theo tên bài hoặc từ khóa..." style="width: 100%; padding: 10px 16px; border: 1px solid var(--border); border-radius: 20px; font-size: 14px; outline: none;">
        </div>
      </div>
      <div id="result-count" style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
        Đang hiển thị 11 bài viết
      </div>
    </div>

    <!-- 11 Articles Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 28px;" id="articles-grid">
      
      <!-- A01 -->
      <div class="card article-card" data-category="cong-cu-noi-dung" data-keywords="ai hỗ trợ viết seo brief seo aiktp">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Công cụ nội dung</span>
            <span style="font-size: 12px; color: var(--text-muted);">A01 · Viết lại</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/ai-ho-tro-viet-bai-seo/" style="color: var(--text-main); text-decoration: none;">Dùng AI hỗ trợ viết SEO: từ brief đến bản biên tập</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Chuẩn bị brief, dùng AI tạo bản nháp rồi kiểm nguồn, giọng văn, liên kết và metadata trước khi đăng.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/ai-ho-tro-viet-bai-seo/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/ai-ho-tro-viet-bai-seo/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A02 -->
      <div class="card article-card" data-category="hobby-mo-hinh" data-keywords="gunpla cho nguoi moi chon kit manual gundam">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Hobby &amp; Mô hình</span>
            <span style="font-size: 12px; color: var(--text-muted);">A02 · Viết lại</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/gunpla-cho-nguoi-moi/" style="color: var(--text-main); text-decoration: none;">Gunpla cho người mới: chọn kit và chuẩn bị lần lắp đầu</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Cách chọn bộ Gunpla đầu tiên bằng manual của đúng mã kit, chuẩn bị dụng cụ và sắp xếp buổi lắp không thừa đồ nghề.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/gunpla-cho-nguoi-moi/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/gunpla-cho-nguoi-moi/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A03 -->
      <div class="card article-card" data-category="cong-nghe" data-keywords="build pc theo nhu cau tuong thich linh kien cpu ram">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Công nghệ</span>
            <span style="font-size: 12px; color: var(--text-muted);">A03 · Viết lại</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/build-pc-theo-nhu-cau/" style="color: var(--text-main); text-decoration: none;">Build PC theo nhu cầu: lập cấu hình trước khi mua linh kiện</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Lập nhu cầu, ngân sách và bảng tương thích CPU, RAM, nguồn, tản nhiệt trước khi mua PC.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/build-pc-theo-nhu-cau/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/build-pc-theo-nhu-cau/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A04 -->
      <div class="card article-card" data-category="giai-tri" data-keywords="dragon ball daima xem anime o dau">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Giải trí</span>
            <span style="font-size: 12px; color: var(--text-muted);">A04 · Viết lại</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/dragon-ball-daima-cho-nguoi-moi/" style="color: var(--text-main); text-decoration: none;">Dragon Ball DAIMA: cần biết gì trước khi bắt đầu xem?</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Giới thiệu Dragon Ball DAIMA, bối cảnh mở đầu và cách tìm nguồn xem hợp pháp. Bài ít spoiler.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/dragon-ball-daima-cho-nguoi-moi/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/dragon-ball-daima-cho-nguoi-moi/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A05 -->
      <div class="card article-card" data-category="game-development" data-keywords="prototype rpg 2d ban mau game mini brief">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Game Development</span>
            <span style="font-size: 12px; color: var(--text-muted);">A05 · Viết lại</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/prototype-rpg-2d/" style="color: var(--text-main); text-decoration: none;">Prototype RPG 2D: thiết kế một phòng trước khi mở rộng</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Thu nhỏ ý tưởng RPG 2D thành một phòng có mục tiêu, tương tác và điều kiện hoàn thành.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/prototype-rpg-2d/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/prototype-rpg-2d/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A06 -->
      <div class="card article-card" data-category="fb" data-keywords="chon ca phe pha phin ca phe xay gu ca phe">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">F&amp;B</span>
            <span style="font-size: 12px; color: var(--text-muted);">A06 · Bài mới</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/chon-ca-phe-pha-phin/" style="color: var(--text-main); text-decoration: none;">Chọn cà phê pha phin: bắt đầu từ gu uống và cách pha</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Chọn cà phê theo gu đen hoặc sữa, hướng dẫn trên gói, cỡ xay và lượng dùng.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/chon-ca-phe-pha-phin/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/chon-ca-phe-pha-phin/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A07 -->
      <div class="card article-card" data-category="thoi-trang-phu-kien" data-keywords="chon tui canvas di hoc kich thuoc tui tote laptop">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Thời trang &amp; Phụ kiện</span>
            <span style="font-size: 12px; color: var(--text-muted);">A07 · Bài mới</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/chon-tui-canvas-di-hoc/" style="color: var(--text-main); text-decoration: none;">Chọn túi canvas đi học: kiểm tra kích thước và cách dùng</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Đo đồ dùng, đọc kích thước lòng túi và kiểm tra quai, miệng túi trước khi chọn túi canvas đi học.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/chon-tui-canvas-di-hoc/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/chon-tui-canvas-di-hoc/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A08 -->
      <div class="card article-card" data-category="van-phong-pham" data-keywords="chon so planner planner tuan hay ngay so tay">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Văn phòng phẩm</span>
            <span style="font-size: 12px; color: var(--text-muted);">A08 · Bài mới</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/chon-so-planner/" style="color: var(--text-main); text-decoration: none;">Chọn sổ planner: tìm bố cục phù hợp với lịch của bạn</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            So sánh planner ngày, tuần, tháng và sổ không ghi ngày. Chọn bố cục theo việc cần ghi.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/chon-so-planner/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/chon-so-planner/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A09 -->
      <div class="card article-card" data-category="nha-cua-doi-song" data-keywords="cay trong nha it sang vi tri cay cham cay">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Nhà cửa &amp; Đời sống</span>
            <span style="font-size: 12px; color: var(--text-muted);">A09 · Bài mới</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/chon-cay-trong-nha-it-sang/" style="color: var(--text-main); text-decoration: none;">Chọn cây trong nhà ít sáng: kiểm tra chỗ đặt trước</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Quan sát ánh sáng, khoảng cách cửa sổ và độ khô giá thể trước khi chọn cây trong nhà.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/chon-cay-trong-nha-it-sang/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/chon-cay-trong-nha-it-sang/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A10 -->
      <div class="card article-card" data-category="du-lich" data-keywords="checklist du lich cuoi tuan chuan bi do 2 ngay 1 dem">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Du lịch</span>
            <span style="font-size: 12px; color: var(--text-muted);">A10 · Bài mới</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/checklist-du-lich-cuoi-tuan/" style="color: var(--text-main); text-decoration: none;">Checklist du lịch cuối tuần: soạn đồ theo lịch trình</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Soạn đồ cho chuyến đi cuối tuần theo hoạt động, chỗ ở và phương tiện di chuyển.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/checklist-du-lich-cuoi-tuan/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/checklist-du-lich-cuoi-tuan/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

      <!-- A11 -->
      <div class="card article-card" data-category="dich-vu-so-b2b" data-keywords="brief content mau brief content mot trang b2b">
        <div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
            <span class="badge badge-seo">Dịch vụ số / B2B</span>
            <span style="font-size: 12px; color: var(--text-muted);">A11 · Bài mới</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 10px; line-height: 1.4;">
            <a href="/seo/brief-content-cho-nhom-nho/" style="color: var(--text-main); text-decoration: none;">Brief content cho nhóm nhỏ: chốt gì trước khi bắt đầu viết?</a>
          </h3>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Mẫu brief content một trang giúp nhóm nhỏ thống nhất người đọc, mục tiêu, thông điệp và CTA.
          </p>
        </div>
        <div style="display: flex; gap: 10px; border-top: 1px solid var(--border-light); padding-top: 14px;">
          <a href="/seo/brief-content-cho-nhom-nho/" class="btn btn-primary btn-sm" style="flex: 1;">Đọc bài viết</a>
          <a href="/seo/brief-content-cho-nhom-nho/#ho-so" class="btn btn-secondary btn-sm">Xem hồ sơ</a>
        </div>
      </div>

    </div>
  </main>

  <script>
    // Live filter and search script
    const buttons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.article-card');
    const countDisplay = document.getElementById('result-count');

    let currentCategory = 'all';
    let searchQuery = '';

    function filterCards() {
      let count = 0;
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const kw = card.getAttribute('data-keywords') || '';
        const title = card.querySelector('h3').textContent.toLowerCase();
        
        const matchesCat = (currentCategory === 'all' || cat === currentCategory);
        const matchesSearch = (searchQuery === '' || title.includes(searchQuery) || kw.includes(searchQuery));

        if (matchesCat && matchesSearch) {
          card.style.display = 'flex';
          count++;
        } else {
          card.style.display = 'none';
        }
      });

      countDisplay.textContent = count > 0 
        ? 'Đang hiển thị ' + count + ' bài viết'
        : 'Chưa có bài phù hợp. Xóa bộ lọc hoặc từ khóa để xem lại toàn bộ.';
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-cat');
        filterCards();
      });
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterCards();
    });
  </script>

  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(seoDir, 'index.html'), seoHubHtml, 'utf8');

  // SEO Process Page (/seo/quy-trinh/index.html)
  const quyTrinhDir = path.join(seoDir, 'quy-trinh');
  ensureDir(quyTrinhDir);

  const stepsData = [
    { num: '01', title: 'Nhận đề bài', desc: 'Ngành, dịch vụ, mục tiêu, người đọc, kênh, tài nguyên, giới hạn claim.', deliverable: 'Brief một trang, câu hỏi bài phải trả lời, CTA chính.' },
    { num: '02', title: 'Hiểu người đọc', desc: 'Tình huống, việc muốn làm (Jobs-to-be-done), trở ngại, kiến thức đầu vào.', deliverable: 'Bản mô tả JTBD và câu hỏi người đọc; ghi rõ nếu là giả thuyết.' },
    { num: '03', title: 'Nghiên cứu ngành', desc: 'Thuật ngữ, thông số kỹ thuật, quy định liên quan, nguồn sơ cấp.', deliverable: 'Sổ nguồn gồm URL, ngày truy cập, claim được hỗ trợ.' },
    { num: '04', title: 'Khảo sát tìm kiếm', desc: 'Query thực tế, thị trường Việt Nam, thiết bị, loại trang và ý định tìm kiếm.', deliverable: 'Bảng 5–10 kết quả hữu cơ có nhận xét; tách quảng cáo/AI Overview.' },
    { num: '05', title: 'Nghiên cứu từ khóa', desc: 'Seed, biến thể, câu hỏi, thực thể liên quan; phân cụm để tránh ăn thịt từ khóa.', deliverable: 'Bản đồ từ khóa → một URL chính (tránh keyword cannibalization).' },
    { num: '06', title: 'Xác định độ ưu tiên', desc: 'Độ liên quan tới mục tiêu, khả năng tạo khác biệt và công sức biên tập.', deliverable: 'Lý do ưu tiên; số volume/KD chỉ hiện khi có nguồn đo cụ thể.' },
    { num: '07', title: 'Chọn định dạng bài', desc: 'Hướng dẫn, giải thích, so sánh, checklist hoặc bài phân tích dịch vụ.', deliverable: 'Content angle, phạm vi không bao phủ, lý do lựa chọn định dạng.' },
    { num: '08', title: 'Quy chuẩn giọng văn', desc: 'Vai người nói, người đọc, từ vựng, mức chuyên môn, câu nên và không nên dùng.', deliverable: 'Voice guide ngắn kèm 2 ví dụ trước/sau khi biên tập.' },
    { num: '09', title: 'Lập dàn ý (Outline)', desc: 'Một H1 rõ ràng, các H2/H3 theo câu hỏi tìm kiếm; phần trả lời nhanh và ví dụ.', deliverable: 'Dàn ý trước khi viết và cấu trúc Heading Map thực tế.' },
    { num: '10', title: 'Tạo giá trị riêng', desc: 'Bảng quyết định, checklist in được, biểu mẫu, sơ đồ vector nguyên bản.', deliverable: 'File hữu ích mở/tải được trong mục Tài nguyên.' },
    { num: '11', title: 'Viết và biên tập', desc: 'Trả lời sớm, viết tự nhiên, kiểm chứng số liệu, kiểm lặp và sửa lỗi chính tả.', deliverable: 'Bản thảo bài viết đầy đủ có giải thích các thay đổi biên tập.' },
    { num: '12', title: 'Title / Meta / URL', desc: 'Title có ý nghĩa, meta description đúng bài, URL slug đọc được, canonical đúng.', deliverable: 'Đoạn mã thẻ meta thật + xem trước SERP + URL hoạt động.' },
    { num: '13', title: 'Internal links', desc: 'Trang nào dẫn vào, dẫn tới đâu, anchor text mô tả đích đến rõ ràng.', deliverable: 'Bảng đối chiếu link nội bộ Nguồn → Đích → Anchor.' },
    { num: '14', title: 'External links', desc: 'Dẫn nguồn sơ cấp ngoài domain để bảo chứng số liệu; kiểm tra thuộc tính rel.', deliverable: 'Danh mục URL nguồn chính thức kèm ngày truy cập kiểm tra.' },
    { num: '15', title: 'Kế hoạch Backlink', desc: 'Lý do người khác muốn dẫn bài, tài sản đáng dẫn, bên phù hợp để tiếp cận.', deliverable: 'Bảng kế hoạch: Đề xuất, chưa tiếp cận, chưa có backlink.' },
    { num: '16', title: 'Hình ảnh & Bản quyền', desc: 'Vai trò ảnh minh họa, bản quyền, alt text mô tả điều nhìn thấy, nén WebP/SVG.', deliverable: 'Manifest hình ảnh ghi rõ nguồn tự dựng vector và thẻ alt chuẩn.' },
    { num: '17', title: 'Trải nghiệm đọc (QA)', desc: 'Hiển thị di động, điều hướng bàn phím, mục lục TOC, độ tương phản màu.', deliverable: 'Kết quả QA kiểm tra trên các thiết bị di động và desktop.' },
    { num: '18', title: 'Kỹ thuật On-Page', desc: 'Giao thức HTTPS, canonical tự tham chiếu, chỉ thị noindex, schema Article JSON-LD.', deliverable: 'Mã Schema JSON-LD hợp lệ đính kèm trong mã nguồn HTML.' },
    { num: '19', title: 'Xuất bản & Kiểm duyệt', desc: 'Duyệt copy/ảnh, đồng bộ metadata giữa bài và sitemap, gắn mốc thời gian thật.', deliverable: 'URL công khai hoạt động ổn định trên production domain.' },
    { num: '20', title: 'Kế hoạch phân phối', desc: 'Chuyển thể thành carousel social, trích dẫn nội dung vào email hoặc case study.', deliverable: 'Kế hoạch nội dung vệ tinh hỗ trợ (social posts / carousel).' },
    { num: '21', title: 'Đo lường hiệu quả', desc: 'Theo dõi qua GSC, lượt click, impression, CTR và tỷ lệ cuộn trang.', deliverable: 'Khung đo lường: trạng thái “Chưa triển khai đo lường thực tế”.' },
    { num: '22', title: 'Cải thiện nội dung', desc: 'Soát lệch intent, link hỏng, thông tin thời điểm hết hạn để cập nhật mới.', deliverable: 'Nhật ký cập nhật nội dung (Changelog) ghi rõ lý do sửa đổi.' }
  ];

  const quyTrinhHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quy Trình 22 Bước Viết Bài SEO &amp; Hồ Sơ On-Page · Tuấn Anh</title>
  <meta name="description" content="Chi tiết 22 đầu việc bắt buộc cho một bài viết chuẩn SEO: từ nhận đề bài, khảo sát tìm kiếm, kiểm chứng claim đến xuất bản và kế hoạch backlink.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/seo/quy-trinh/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('seo')}
  <main class="container reading-container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/seo/">SEO Studio</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">Quy trình 22 bước</span>
    </nav>
    <div style="margin-bottom: 32px;">
      <span class="badge badge-seo">Hồ sơ phương pháp On-Page</span>
      <h1 style="font-size: 38px; font-weight: 700; margin: 12px 0;">Toàn bộ 22 đầu việc cho một bài viết SEO</h1>
      <p style="color: var(--text-muted); font-size: 18px;">
        Quy trình chuẩn mực được áp dụng cho toàn bộ 11 bài viết trong SEO Studio của Tuấn Anh, đảm bảo tính hữu ích, trung thực và kiểm chứng nguồn sơ cấp.
      </p>
    </div>
    
    <div class="disclaimer-box">
      <strong>Nguyên tắc sự thật:</strong> Các brief trong portfolio đã có nghiên cứu nguồn công khai, nhưng chưa có một lần khảo sát top 5–10 SERP Việt Nam có kiểm soát cho từng từ khóa, chưa có volume/KD và dữ liệu hiệu quả thật. Hiển thị đúng trạng thái này; không đặt ảnh/bảng giả như đã đạt top.
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 36px;">
      ${stepsData.map(step => `
        <div class="card" style="padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 18px; font-weight: 700; color: var(--accent); background: var(--bg-page); width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border);">${step.num}</span>
              <h3 style="font-size: 19px; font-weight: 700; color: var(--text-main);">${step.title}</h3>
            </div>
          </div>
          <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px;">
            ${step.desc}
          </p>
          <div style="background: var(--bg-page); border: 1px solid var(--border-light); border-radius: 8px; padding: 10px 14px; font-size: 13px; color: var(--text-main);">
            <strong>Bằng chứng / Sản phẩm cần show:</strong> ${step.deliverable}
          </div>
        </div>
      `).join('\n')}
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(quyTrinhDir, 'index.html'), quyTrinhHtml, 'utf8');

  console.log('Generated SEO Studio Hub & Process Page');
}

// 8. BANNER SUITE, WEB CONCEPT, TAI-NGUYEN, LIEN-HE, 404 & VERCEL.JSON
function buildOtherPagesAndRedirects() {
  // Banner Suite (/thiet-ke/banner-me-nho/index.html)
  const bannerDir = path.join(baseDir, 'thiet-ke', 'banner-me-nho');
  ensureDir(bannerDir);
  const bannerHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bộ Banner MẺ NHỎ · 8 Kích Thước Hiển Thị · Tuấn Anh Portfolio</title>
  <meta name="description" content="Bộ thiết kế banner concept MẺ NHỎ: Pha theo gu của bạn. 8 kích thước hiển thị đáp ứng chuẩn bố cục quảng cáo số, kèm giả thuyết A/B test tiêu đề.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/thiet-ke/banner-me-nho/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
  <style>
    .banner-frame { border: 1px solid var(--border); border-radius: 8px; background: #FFFFFF; margin-bottom: 24px; padding: 16px; box-shadow: var(--shadow-sm); }
    .banner-meta { font-size: 13px; color: var(--text-muted); margin-bottom: 10px; font-weight: 600; }
  </style>
</head>
<body>
  ${getHeader('projects')}
  <main class="container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <a href="/du-an/">Dự án</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">Banner MẺ NHỎ</span>
    </nav>
    <div style="max-width: 800px; margin-bottom: 36px;">
      <span class="badge badge-concept">Bộ thiết kế concept · Chưa chạy quảng cáo</span>
      <h1 style="font-size: 38px; font-weight: 700; margin: 12px 0;">Bộ banner MẺ NHỎ: “Pha theo gu của bạn”</h1>
      <p style="color: var(--text-muted); font-size: 18px;">
        Thay thế bộ banner gaming gear cũ bằng một key visual linh hoạt thích nghi với 8 tỷ lệ khung hình quảng cáo số phổ biến.
      </p>
    </div>
    
    <div class="disclaimer-box">
      <strong>Giả thuyết thử nghiệm A/B:</strong> Headline A “Pha theo gu của bạn” tập trung vào sự cá nhân hóa; Headline B “Bạn uống đen hay thêm sữa?” gợi ý câu hỏi cụ thể. Cần chạy thử nghiệm thực tế để so sánh CTR; portfolio không tự bịa số liệu chuyển đổi.
    </div>

    <!-- Banner 1: mn-kv-wide (1600x900) -->
    <div class="banner-frame">
      <div class="banner-meta">1. mn-kv-wide (1600 × 900 px) — Key Visual ngang cho Desktop &amp; Web Banner</div>
      <div style="background: #F6F1E8; border-radius: 6px; padding: 40px; border: 1px solid #D6DFE8; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <img src="../../assets/brands/me-nho-logo.svg" alt="MẺ NHỎ" style="height: 50px; margin-bottom: 16px;">
          <h2 style="font-size: 32px; font-weight: 700; color: #593B2F; margin-bottom: 8px;">Pha theo gu của bạn.</h2>
          <p style="font-size: 16px; color: #2F6257; margin-bottom: 20px;">Bắt đầu từ cách bạn uống và dụng cụ đang có sẵn tại nhà.</p>
          <a href="/tai-nguyen/#phieu-thu-gu" class="btn btn-primary btn-sm" style="background:#593B2F;">Mở phiếu hỏi gu →</a>
        </div>
        <div style="text-align: center; padding: 20px;">
          <div style="width: 120px; height: 120px; border-radius: 50%; background: #FFFFFF; display: flex; align-items: center; justify-content: center; border: 2px solid #593B2F; margin: 0 auto;">
            <span style="font-size: 40px;">☕</span>
          </div>
          <span style="font-size: 12px; color: #593B2F; font-weight: 600; display: block; margin-top: 8px;">MẺ NHỎ CONCEPT</span>
        </div>
      </div>
    </div>

    <!-- Banner 2 & 3: Social Square & Portrait -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <div class="banner-frame">
        <div class="banner-meta">2. mn-social-square (1080 × 1080 px)</div>
        <div style="background: #F6F1E8; aspect-ratio: 1/1; border-radius: 6px; padding: 32px; border: 1px solid #D6DFE8; display: flex; flex-direction: column; justify-content: space-between; text-align: center;">
          <img src="../../assets/brands/me-nho-logo.svg" alt="MẺ NHỎ" style="height: 44px; margin: 0 auto;">
          <div>
            <h3 style="font-size: 24px; font-weight: 700; color: #593B2F; margin-bottom: 8px;">Chọn cà phê từ cách bạn uống.</h3>
            <p style="font-size: 14px; color: #2F6257;">Đen đá, sữa đặc hay ít đường?</p>
          </div>
          <div>
            <span class="btn btn-primary btn-sm" style="background:#593B2F;">Xem hướng dẫn chọn →</span>
          </div>
        </div>
      </div>

      <div class="banner-frame">
        <div class="banner-meta">3. mn-social-portrait (1080 × 1350 px)</div>
        <div style="background: #F6F1E8; aspect-ratio: 4/5; border-radius: 6px; padding: 32px; border: 1px solid #D6DFE8; display: flex; flex-direction: column; justify-content: space-between;">
          <img src="../../assets/brands/me-nho-logo.svg" alt="MẺ NHỎ" style="height: 44px;">
          <div>
            <span class="badge" style="background:#E7B080; color:#593B2F; margin-bottom: 12px;">CÂU HỎI BẮT ĐẦU</span>
            <h3 style="font-size: 26px; font-weight: 700; color: #593B2F; margin-bottom: 12px;">Bạn uống đen hay thêm sữa?</h3>
            <p style="font-size: 15px; color: #53647A; line-height: 1.6;">Một câu hỏi đơn giản để cuộc trò chuyện với người bán đi vào đúng nhu cầu.</p>
          </div>
          <div>
            <a href="/tai-nguyen/#phieu-thu-gu" class="btn btn-primary btn-sm" style="background:#593B2F; width: 100%;">Tải thẻ hỏi gu mang theo →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner Display sizes -->
    <div class="banner-frame" style="margin-top: 24px;">
      <div class="banner-meta">4. mn-display-wide (728 × 90 px) — Leaderboard chuẩn Web</div>
      <div style="background: #F6F1E8; height: 90px; border-radius: 6px; padding: 0 24px; border: 1px solid #D6DFE8; display: flex; justify-content: space-between; align-items: center;">
        <img src="../../assets/brands/me-nho-logo.svg" alt="MẺ NHỎ" style="height: 32px;">
        <span style="font-size: 15px; font-weight: 700; color: #593B2F;">Pha theo gu của bạn: bắt đầu từ cách uống</span>
        <a href="/tai-nguyen/#phieu-thu-gu" class="btn btn-primary btn-sm" style="background:#593B2F; font-size: 12px; padding: 6px 14px;">Xem phiếu hỏi gu</a>
      </div>
    </div>

  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(bannerDir, 'index.html'), bannerHtml, 'utf8');

  // Web Concept NẾP GẤP (/web/nep-gap/index.html)
  const webDir = path.join(baseDir, 'web', 'nep-gap');
  ensureDir(webDir);
  const webHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cửa Hàng Concept NẾP GẤP · Tuấn Anh Portfolio</title>
  <meta name="description" content="Trang web concept cửa hàng NẾP GẤP bên trong portfolio: bộ lọc nhu cầu ghi chép, xem chi tiết bố cục ruột sổ và tải biểu mẫu.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/web/nep-gap/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
  <style>
    .shop-filter-btn { padding: 10px 20px; border-radius: 10px; border: 1px solid var(--border); background: #FFFFFF; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
    .shop-filter-btn.active { background: #2D4B43; color: #FFFFFF; border-color: #2D4B43; }
  </style>
</head>
<body style="background: #FDFCF9;">
  ${getHeader('projects')}
  <main class="container" style="padding-top: 40px; padding-bottom: 80px;">
    
    <!-- Big Concept Disclaimer -->
    <div style="background: #FEF7E0; border: 2px solid #E8D383; border-radius: 12px; padding: 16px 24px; margin-bottom: 36px; text-align: center; color: #8A4B00;">
      <strong>CỬA HÀNG CONCEPT · KHÔNG NHẬN THANH TOÁN HAY ĐƠN HÀNG THẬT</strong><br>
      <span style="font-size: 13px;">Đây là sản phẩm thử nghiệm giao diện tổ chức nội dung và luồng chọn sổ trong portfolio của Khương Tuấn Anh.</span>
    </div>

    <!-- Shop Hero -->
    <div style="text-align: center; max-width: 680px; margin: 0 auto 48px auto;">
      <img src="../../assets/brands/nep-gap-logo.svg" alt="NẾP GẤP" style="height: 60px; margin: 0 auto 16px auto;">
      <h1 style="font-size: 36px; font-weight: 700; color: #2D4B43; margin-bottom: 12px;">Chọn trang giấy hợp với cách bạn ghi.</h1>
      <p style="font-size: 17px; color: var(--text-muted);">Xem bố cục bên trong trước khi chọn hình thức.</p>
    </div>

    <!-- Interactive Filter: Chọn theo nhu cầu -->
    <div style="text-align: center; margin-bottom: 40px;">
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button class="shop-filter-btn active" onclick="showProduct('tuan')">Mình muốn thấy cả tuần</button>
        <button class="shop-filter-btn" onclick="showProduct('ngay')">Mình cần ghi từng ngày</button>
        <button class="shop-filter-btn" onclick="showProduct('y')">Mình thường ghi ý rời</button>
      </div>
    </div>

    <!-- Products Showcase Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
      
      <!-- Sổ Tuần Mở -->
      <div class="card" id="card-tuan">
        <span class="badge" style="background:#2D4B43; color:#FFF; margin-bottom: 12px;">BỐ CỤC TUẦN</span>
        <h3 style="font-size: 22px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Sổ Tuần Mở (Weekly Planner)</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Bố cục 2 trang nhìn trọn 7 ngày. Chừa góc riêng “Ý tưởng đang mở” cho các công việc phát sinh giữa tuần.
        </p>
        <div style="background:#F6F4EE; padding: 14px; border-radius: 8px; font-size: 13px; color:#2D4B43; margin-bottom: 20px;">
          ✓ Phù hợp: Người học, người làm việc nhiều lịch hẹn linh hoạt.
        </div>
        <a href="/tai-nguyen/#lich-tuan" class="btn btn-primary btn-sm" style="background:#2D4B43; width: 100%;">Tải bản in Lịch Tuần mẫu →</a>
      </div>

      <!-- Trang Ngày Rộng -->
      <div class="card" id="card-ngay">
        <span class="badge" style="background:#D97757; color:#FFF; margin-bottom: 12px;">BỐ CỤC NGÀY</span>
        <h3 style="font-size: 22px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Trang Ngày Rộng (Daily Journal)</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Một trang dành trọn cho một ngày cần ghi chép nhiều nội dung họp, dòng thời gian và nhật ký tiến độ.
        </p>
        <div style="background:#FAF0EC; padding: 14px; border-radius: 8px; font-size: 13px; color:#D97757; margin-bottom: 20px;">
          ✓ Phù hợp: Người quản lý dự án, ghi biên bản họp chi tiết.
        </div>
        <a href="/nhan-dien/nep-gap/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem thiết kế chi tiết →</a>
      </div>

      <!-- Thẻ Một Ý -->
      <div class="card" id="card-y">
        <span class="badge" style="background:#53647A; color:#FFF; margin-bottom: 12px;">GHI NHANH</span>
        <h3 style="font-size: 22px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Thẻ Một Ý (Idea Memo)</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Khổ 75x105mm ghi một việc gấp, một câu hỏi hay một ý mới nghĩ ra trên đường về nhà.
        </p>
        <div style="background:#F5F7FB; padding: 14px; border-radius: 8px; font-size: 13px; color:#243247; margin-bottom: 20px;">
          ✓ Phù hợp: Đánh dấu trang sách, ghi chú nhanh để bàn.
        </div>
        <a href="/nhan-dien/nep-gap/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem thiết kế chi tiết →</a>
      </div>

    </div>

    <!-- Return to Portfolio -->
    <div style="text-align: center; margin-top: 56px;">
      <a href="/nhan-dien/nep-gap/" class="btn btn-secondary">← Quay lại Case Nhận diện NẾP GẤP</a>
    </div>

  </main>

  <script>
    function showProduct(type) {
      document.querySelectorAll('.shop-filter-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      const cards = {
        'tuan': document.getElementById('card-tuan'),
        'ngay': document.getElementById('card-ngay'),
        'y': document.getElementById('card-y')
      };
      // highlight selected
      Object.keys(cards).forEach(k => {
        if (k === type) {
          cards[k].style.border = '2px solid #2D4B43';
          cards[k].style.transform = 'translateY(-4px)';
        } else {
          cards[k].style.border = '1px solid var(--border)';
          cards[k].style.transform = 'none';
        }
      });
    }
  </script>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(webDir, 'index.html'), webHtml, 'utf8');

  // Downloadable Resources Hub (/tai-nguyen/index.html)
  const taiNguyenDir = path.join(baseDir, 'tai-nguyen');
  ensureDir(taiNguyenDir);
  const taiNguyenHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kho Tài Nguyên &amp; Biểu Mẫu Tải Được · Tuấn Anh Portfolio</title>
  <meta name="description" content="Thư viện biểu mẫu, bảng kiểm và template chuẩn được nhắc đến trong 11 bài SEO: Brief một trang, Lịch tuần, Checklist du lịch, Phiếu thử gu cà phê và Bảng đối chiếu linh kiện PC.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/tai-nguyen/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader('resources')}
  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">
    <div style="max-width: 800px; margin-bottom: 48px;">
      <nav class="breadcrumb">
        <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
        <span style="color: var(--text-main); font-weight: 500;">Tài nguyên</span>
      </nav>
      <h1 style="font-size: 40px; font-weight: 700; color: var(--text-main); margin-bottom: 16px;">
        Thư Viện Biểu Mẫu &amp; Tài Nguyên Tải Được
      </h1>
      <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6;">
        Tất cả các biểu mẫu được liên kết trong 11 bài viết SEO đều có sẵn tại đây: bạn có thể mở xem trực tiếp trên trình duyệt, in ấn (Print/PDF) hoặc tải file CSV về máy.
      </p>
    </div>

    <!-- Resource Cards Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 28px;">
      
      <!-- 1. Brief một trang -->
      <div class="card" id="brief-mot-trang">
        <span class="badge badge-seo" style="margin-bottom: 12px;">TEMPLATE NỘI DUNG · A11 / A01</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Brief nội dung một trang</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Mẫu thống nhất người đọc, mục tiêu, thông điệp chính, tài liệu nguồn được phép dùng và giới hạn claim không được bịa.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/brief-content-mot-trang.html" target="_blank" class="btn btn-primary btn-sm" style="flex:1;">Mở xem &amp; In PDF</a>
        </div>
      </div>

      <!-- 2. Bảng kiểm chứng claim -->
      <div class="card" id="kiem-chung-claim">
        <span class="badge badge-seo" style="margin-bottom: 12px;">BẢNG TRA CỨU · A01</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Bảng kiểm chứng Claim biên tập</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Bảng đối chiếu khẳng định trong bản nháp AI với nguồn chính thức (URL, ngày kiểm, giới hạn và quyết định sửa/giữ).
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/bang-kiem-chung-claim.csv" download class="btn btn-secondary btn-sm" style="flex:1;">Tải file CSV</a>
        </div>
      </div>

      <!-- 3. Lịch tuần NẾP GẤP -->
      <div class="card" id="lich-tuan">
        <span class="badge badge-concept" style="margin-bottom: 12px;">PLANNER TUẦN · A08 / NẾP GẤP</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Lịch tuần NẾP GẤP (Weekly Planner)</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Bản in bố cục tuần mở, phân vùng thứ 2 đến CN kèm khu vực “Ý tưởng đang mở” cho việc phát sinh.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/lich-tuan-nep-gap.html" target="_blank" class="btn btn-primary btn-sm" style="flex:1;">Mở xem &amp; In PDF</a>
        </div>
      </div>

      <!-- 4. Phiếu thử gu cà phê -->
      <div class="card" id="phieu-thu-gu">
        <span class="badge badge-concept" style="margin-bottom: 12px;">PHIẾU GHI CHÉP · A06 / MẺ NHỎ</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Phiếu thử gu cà phê pha tại nhà</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Phiếu ghi nhận lượng bột, lượng nước, thời gian ủ và một điều muốn thay đổi trong lần pha phin kế tiếp.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/phieu-thu-gu-ca-phe.html" target="_blank" class="btn btn-primary btn-sm" style="flex:1;">Mở xem &amp; In PDF</a>
        </div>
      </div>

      <!-- 5. Checklist du lịch cuối tuần -->
      <div class="card" id="checklist-du-lich">
        <span class="badge badge-seo" style="margin-bottom: 12px;">CHECKLIST THỰC TẾ · A10</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Checklist du lịch cuối tuần (2N1Đ)</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Soạn đồ theo 3 nhóm hoạt động, danh sách giấy tờ không thể thiếu và 4 bước kiểm an toàn trước khi khóa cửa.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/checklist-du-lich-cuoi-tuan.html" target="_blank" class="btn btn-primary btn-sm" style="flex:1;">Mở xem &amp; In PDF</a>
        </div>
      </div>

      <!-- 6. Phiếu đo túi canvas -->
      <div class="card" id="phieu-do-tui">
        <span class="badge badge-concept" style="margin-bottom: 12px;">BUYING GUIDE · A07 / QUAI VẢI</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Phiếu đo túi và đối chiếu đồ mang</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Bảng kiểm kích thước món đồ lớn nhất (laptop + bao chống sốc) với lòng túi, miệng túi và độ rơi của quai.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/phieu-do-tui.html" target="_blank" class="btn btn-primary btn-sm" style="flex:1;">Mở xem &amp; In PDF</a>
        </div>
      </div>

      <!-- 7. Bảng tương thích linh kiện PC -->
      <div class="card" id="bang-tuong-thich-pc">
        <span class="badge badge-seo" style="margin-bottom: 12px;">BẢNG KỸ THUẬT · A03</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Bảng kiểm tương thích linh kiện PC</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Checklist 5 cặp linh kiện then chốt: CPU-Mainboard, RAM QVL, Tản nhiệt-Case, GPU-Nguồn và SSD M.2.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/bang-tuong-thich-pc.csv" download class="btn btn-secondary btn-sm" style="flex:1;">Tải file CSV</a>
        </div>
      </div>

      <!-- 8. Playtest một phòng game -->
      <div class="card" id="playtest-mot-phong">
        <span class="badge badge-seo" style="margin-bottom: 12px;">TEST SHEET · A05</span>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Bảng ghi lỗi Playtest một phòng RPG 2D</h3>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
          Mẫu ghi nhận hành động người chơi, kết quả mong đợi, kết quả thực tế và độ ưu tiên sửa lỗi collider/hitbox.
        </p>
        <div style="display: flex; gap: 10px;">
          <a href="files/playtest-mot-phong.csv" download class="btn btn-secondary btn-sm" style="flex:1;">Tải file CSV</a>
        </div>
      </div>

    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(taiNguyenDir, 'index.html'), taiNguyenHtml, 'utf8');

  // Contact Page (/lien-he/index.html)
  const contactDir = path.join(baseDir, 'lien-he');
  ensureDir(contactDir);
  const contactHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liên Hệ · Khương Tuấn Anh</title>
  <meta name="description" content="Liên hệ với Khương Tuấn Anh - Học viên Digital Marketing · Định hướng Content Creator. Trao đổi về đề bài nội dung, cộng tác dự án hoặc phỏng vấn tuyển dụng.">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/lien-he/">
  <link rel="stylesheet" href="../assets/portfolio/editorial-system.css">
</head>
<body>
  ${getHeader()}
  <main class="container reading-container" style="padding-top: 48px; padding-bottom: 80px;">
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a><span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">Liên hệ</span>
    </nav>
    <div style="margin-bottom: 36px;">
      <h1 style="font-size: 38px; font-weight: 700; margin-bottom: 12px;">Trao đổi công việc</h1>
      <p style="font-size: 18px; color: var(--text-muted); line-height: 1.6;">
        Bạn đang tìm kiếm người phụ trách nội dung, viết bài SEO có đối chiếu nguồn hay xây dựng kế hoạch social chỉn chu? Mình sẵn sàng lắng nghe đề bài từ bạn.
      </p>
    </div>

    <div class="card" style="margin-bottom: 32px; padding: 32px;">
      <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 16px;">Thông tin liên hệ trực tiếp</h3>
      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 16px;">
        <div>📧 Email: <strong><a href="mailto:anhkhuong134@gmail.com">anhkhuong134@gmail.com</a></strong></div>
        <div>📞 Điện thoại: <strong><a href="tel:0384201443">0384 201 443</a></strong></div>
        <div>📍 Địa bàn: <strong>Hà Nội, Việt Nam</strong> (Làm việc trực tiếp hoặc từ xa)</div>
        <div>🎓 Đào tạo: <strong>Digital Marketing · VTC Academy</strong></div>
      </div>
    </div>

    <div class="disclaimer-box">
      <strong>Cam kết hợp tác:</strong> Làm rõ đề bài trước khi bắt đầu, minh bạch về việc có sử dụng AI hỗ trợ khâu nào, đối chiếu nguồn số liệu và bàn giao đầy đủ hồ sơ On-page.
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(contactDir, 'index.html'), contactHtml, 'utf8');

  // Custom 404 Page (/404.html)
  const notFoundHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Không Tìm Thấy Trang · Tuấn Anh Portfolio</title>
  <link rel="stylesheet" href="/assets/portfolio/editorial-system.css">
</head>
<body style="text-align: center; padding-top: 80px;">
  ${getHeader()}
  <main class="container" style="max-width: 600px; margin: 40px auto;">
    <img src="/assets/chibi/ta-chibi-404.svg" alt="Bạn Biên Tập tìm trang thất lạc" class="chibi-character" style="width: 220px; margin: 0 auto 24px auto;">
    <h1 style="font-size: 36px; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">Trang này chưa được mở</h1>
    <p style="font-size: 16px; color: var(--text-muted); line-height: 1.6; margin-bottom: 28px;">
      Có thể địa chỉ đã được chuyển sang đường dẫn mới sạch hơn, hoặc trang đang trong quá trình biên tập.
    </p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="/" class="btn btn-primary">Về Trang chủ</a>
      <a href="/seo/" class="btn btn-secondary">Xem 11 bài SEO</a>
      <a href="/du-an/" class="btn btn-secondary">Xem Danh mục Dự án</a>
    </div>
  </main>
  ${getFooter()}
</body>
</html>`;
  fs.writeFileSync(path.join(baseDir, '404.html'), notFoundHtml, 'utf8');

  // Vercel.json with 301 redirects per Section 4
  const vercelConfig = {
    "cleanUrls": true,
    "trailingSlash": true,
    "redirects": [
      { "source": "/seo-samples.html", "destination": "/seo/", "permanent": true },
      { "source": "/seo-aiktp.html", "destination": "/seo/ai-ho-tro-viet-bai-seo/", "permanent": true },
      { "source": "/seo-model-kit.html", "destination": "/seo/gunpla-cho-nguoi-moi/", "permanent": true },
      { "source": "/seo-pc-build.html", "destination": "/seo/build-pc-theo-nhu-cau/", "permanent": true },
      { "source": "/seo-dragon-ball.html", "destination": "/seo/dragon-ball-daima-cho-nguoi-moi/", "permanent": true },
      { "source": "/seo-rpg.html", "destination": "/seo/prototype-rpg-2d/", "permanent": true },
      { "source": "/social-content-sample.html", "destination": "/content/", "permanent": true },
      { "source": "/projects.html", "destination": "/du-an/", "permanent": true },
      { "source": "/project-detail.html", "has": [{ "type": "query", "key": "id", "value": "1" }], "destination": "/nghien-cuu/circle-k-gs25/", "permanent": true },
      { "source": "/project-detail.html", "destination": "/du-an/", "permanent": true }
    ]
  };
  fs.writeFileSync(path.join(baseDir, 'vercel.json'), JSON.stringify(vercelConfig, null, 2), 'utf8');

  console.log('Generated Banner Suite, Web Concept, Tai-Nguyen, Lien-He, 404.html, and vercel.json');
}

// buildHomepage(); // DISABLED: Keep original index.html intact per user instruction
buildProjectsHub();
buildCircleKCase();
buildResearchHubAndCases();
buildBrandIdentityCases();
buildContentLab();
buildSeoStudioAndProcess();
buildOtherPagesAndRedirects();

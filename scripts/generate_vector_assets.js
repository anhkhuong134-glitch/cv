import fs from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\CV';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Article SVG Assets (A01 - A11: Hero & Infographic)
const articleAssetsDir = path.join(baseDir, 'assets', 'articles');
ensureDir(articleAssetsDir);

const articleAssetDefs = {
  'a01-hero.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
      <rect width="1600" height="900" fill="#F5F7FB"/>
      <rect x="120" y="100" width="1360" height="700" rx="24" fill="#FFFFFF" stroke="#D6DFE8" stroke-width="2"/>
      <!-- Header banner -->
      <rect x="160" y="140" width="1280" height="90" rx="12" fill="#285B58"/>
      <text x="200" y="195" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="28" fill="#FFFFFF">QUY TRÌNH DÙNG AI HỖ TRỢ VIẾT BÀI SEO</text>
      <text x="200" y="222" font-family="'Be Vietnam Pro', sans-serif" font-weight="400" font-size="16" fill="#F2B39C">Từ Brief Có Giới Hạn → Sinh Bản Nháp → Kiểm Tra Nguồn &amp; Claim → Bản Duyệt Xuất Bản</text>
      <!-- 4 Step Boxes -->
      <g transform="translate(160, 270)">
        <rect x="0" y="0" width="290" height="480" rx="16" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="2"/>
        <circle cx="45" cy="45" r="22" fill="#285B58"/>
        <text x="45" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle">1</text>
        <text x="80" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="20" fill="#243247">Brief Một Trang</text>
        <line x1="25" y1="90" x2="265" y2="90" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="25" y="130" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Người đọc &amp; tình huống thật</text>
        <text x="25" y="170" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Một việc bài giúp giải quyết</text>
        <text x="25" y="210" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Nguồn tài liệu được trích dẫn</text>
        <text x="25" y="250" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Giới hạn không được bịa</text>
        <rect x="25" y="320" width="240" height="120" rx="8" fill="#F8E7A6" opacity="0.9"/>
        <text x="40" y="355" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Nguyên tắc cốt lõi:</text>
        <text x="40" y="385" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Không giao prompt chung chung.</text>
        <text x="40" y="410" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Chốt phạm vi trước khi chạy AI.</text>
      </g>
      <g transform="translate(490, 270)">
        <rect x="0" y="0" width="290" height="480" rx="16" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="2"/>
        <circle cx="45" cy="45" r="22" fill="#285B58"/>
        <text x="45" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle">2</text>
        <text x="80" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="20" fill="#243247">Tạo Bản Nháp</text>
        <line x1="25" y1="90" x2="265" y2="90" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="25" y="130" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Đưa brief và dàn ý cấu trúc</text>
        <text x="25" y="170" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Yêu cầu viết theo từng H2</text>
        <text x="25" y="210" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Trả lời câu hỏi trước tiên</text>
        <text x="25" y="250" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Đánh dấu chỗ cần số liệu</text>
        <rect x="25" y="320" width="240" height="120" rx="8" fill="#FFFFFF" stroke="#D6DFE8"/>
        <text x="40" y="355" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Tình trạng đầu ra:</text>
        <text x="40" y="385" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Chỉ là bản nháp thô (draft).</text>
        <text x="40" y="410" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Tuyệt đối không đăng ngay.</text>
      </g>
      <g transform="translate(820, 270)">
        <rect x="0" y="0" width="290" height="480" rx="16" fill="#F5F7FB" stroke="#285B58" stroke-width="2"/>
        <circle cx="45" cy="45" r="22" fill="#285B58"/>
        <text x="45" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle">3</text>
        <text x="80" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="20" fill="#243247">Kiểm Claim &amp; Nguồn</text>
        <line x1="25" y1="90" x2="265" y2="90" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="25" y="130" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Soát từng khẳng định kỹ thuật</text>
        <text x="25" y="170" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Đối chiếu tài liệu gốc</text>
        <text x="25" y="210" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Bỏ từ sáo rỗng &amp; quá đà</text>
        <text x="25" y="250" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Bổ sung ví dụ thực tế</text>
        <rect x="25" y="320" width="240" height="120" rx="8" fill="#FFFFFF" stroke="#285B58"/>
        <text x="40" y="355" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#285B58">Bảng kiểm chứng:</text>
        <text x="40" y="385" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Ghi rõ URL &amp; đoạn hỗ trợ.</text>
        <text x="40" y="410" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Bỏ claim nếu không có nguồn.</text>
      </g>
      <g transform="translate(1150, 270)">
        <rect x="0" y="0" width="290" height="480" rx="16" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="2"/>
        <circle cx="45" cy="45" r="22" fill="#285B58"/>
        <text x="45" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle">4</text>
        <text x="80" y="52" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="20" fill="#243247">Biên Tập &amp; Bàn Giao</text>
        <line x1="25" y1="90" x2="265" y2="90" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="25" y="130" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Tinh chỉnh giọng điệu thương hiệu</text>
        <text x="25" y="170" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Đặt Internal &amp; External links</text>
        <text x="25" y="210" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Hoàn thiện Alt ảnh &amp; Metadata</text>
        <text x="25" y="250" font-family="'Be Vietnam Pro', sans-serif" font-size="15" fill="#53647A">• Checklist QA trước khi đăng</text>
        <rect x="25" y="320" width="240" height="120" rx="8" fill="#F5F7FB" stroke="#D6DFE8"/>
        <text x="40" y="355" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Thành phẩm hoàn chỉnh:</text>
        <text x="40" y="385" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Đầy đủ 2 lớp: Bài viết và</text>
        <text x="40" y="410" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Hồ sơ On-page chi tiết.</text>
      </g>
    </svg>
  `,
  'a01-infographic.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 640" width="100%" height="100%">
      <rect width="1200" height="640" fill="#FFFFFF" rx="16" stroke="#D6DFE8" stroke-width="2"/>
      <rect x="40" y="30" width="1120" height="60" rx="10" fill="#285B58"/>
      <text x="70" y="68" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">BẢNG ĐỐI CHIẾU CLAIM VÀ KIỂM CHỨNG TRƯỚC KHI DUYỆT BÀI</text>
      <!-- Table Header -->
      <g transform="translate(40, 110)">
        <rect x="0" y="0" width="1120" height="44" fill="#F5F7FB" stroke="#D6DFE8"/>
        <text x="20" y="28" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Khẳng định trong bản nháp AI</text>
        <text x="440" y="28" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Tài liệu / Nguồn đối chiếu</text>
        <text x="800" y="28" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Quyết định biên tập</text>
        <text x="1000" y="28" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#243247">Trạng thái</text>
      </g>
      <!-- Row 1 -->
      <g transform="translate(40, 154)">
        <rect x="0" y="0" width="1120" height="88" fill="#FFFFFF" stroke="#D6DFE8"/>
        <text x="20" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247">“AIKTP giúp bài viết đạt TOP 1 Google</text>
        <text x="20" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247">sau 24h và tiết kiệm 95% chi phí.”</text>
        <text x="440" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Trang chủ aiktp.com nêu tính năng tạo bài</text>
        <text x="440" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">theo từ khóa; không có bảo đảm thứ hạng.</text>
        <text x="800" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#285B58" font-weight="600">Sửa thành: “Công cụ hỗ trợ tạo khung nháp,</text>
        <text x="800" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#285B58">cần con người kiểm tra và biên tập lại.”</text>
        <rect x="1000" y="24" width="90" height="28" rx="6" fill="#F8E7A6"/>
        <text x="1045" y="43" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="600" fill="#243247" text-anchor="middle">Đã sửa</text>
      </g>
      <!-- Row 2 -->
      <g transform="translate(40, 242)">
        <rect x="0" y="0" width="1120" height="88" fill="#F5F7FB" stroke="#D6DFE8"/>
        <text x="20" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247">“Google phạt tất cả bài viết do AI tạo ra</text>
        <text x="20" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247">theo cập nhật thuật toán mới nhất.”</text>
        <text x="440" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Google Search Central (G04): Google đánh giá</text>
        <text x="440" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">chất lượng nội dung, không phạt vì dùng AI.</text>
        <text x="800" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#285B58" font-weight="600">Sửa lại theo đúng chính sách chính thức:</text>
        <text x="800" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#285B58">ưu tiên nội dung hữu ích có kiểm chứng.</text>
        <rect x="1000" y="24" width="90" height="28" rx="6" fill="#F8E7A6"/>
        <text x="1045" y="43" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="600" fill="#243247" text-anchor="middle">Đã sửa</text>
      </g>
      <!-- Row 3 -->
      <g transform="translate(40, 330)">
        <rect x="0" y="0" width="1120" height="88" fill="#FFFFFF" stroke="#D6DFE8"/>
        <text x="20" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247">“Đạt điểm SEO 100/100 trên Rank Math</text>
        <text x="20" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247">chắc chắn bài viết sẽ lên TOP tìm kiếm.”</text>
        <text x="440" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Điểm plugin là checklist kỹ thuật On-page,</text>
        <text x="440" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">không phản ánh thuật toán xếp hạng thực.</text>
        <text x="800" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#285B58" font-weight="600">Bỏ claim điểm 100 tuyệt đối, tập trung</text>
        <text x="800" y="52" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#285B58">vào giá trị trả lời đúng câu hỏi người đọc.</text>
        <rect x="1000" y="24" width="90" height="28" rx="6" fill="#F8E7A6"/>
        <text x="1045" y="43" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="600" fill="#243247" text-anchor="middle">Đã sửa</text>
      </g>
      <!-- Summary footer -->
      <g transform="translate(40, 438)">
        <rect x="0" y="0" width="1120" height="170" rx="8" fill="#F5F7FB" stroke="#D6DFE8"/>
        <text x="30" y="36" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="15" fill="#243247">Quy tắc biên tập bài SEO có AI hỗ trợ:</text>
        <text x="30" y="68" font-family="'Be Vietnam Pro', sans-serif" font-size="14" fill="#53647A">1. Kiểm tra từng con số, mốc thời gian và tuyên bố kỹ thuật đối chiếu với tài liệu gốc của nhà sản xuất hoặc tài liệu chính thức.</text>
        <text x="30" y="96" font-family="'Be Vietnam Pro', sans-serif" font-size="14" fill="#53647A">2. Cắt bỏ các tính từ sáo rỗng hoặc lời hứa kết quả không kiểm soát được (như “tuyệt đỉnh”, “top 1”, “cam kết 100%”).</text>
        <text x="30" y="124" font-family="'Be Vietnam Pro', sans-serif" font-size="14" fill="#53647A">3. Luôn đính kèm bảng kiểm chứng claim (Claim Verification Sheet) vào hồ sơ On-Page trước khi bàn giao duyệt bài.</text>
      </g>
    </svg>
  `
};

for (const [name, content] of Object.entries(articleAssetDefs)) {
  fs.writeFileSync(path.join(articleAssetsDir, name), content.trim(), 'utf8');
  console.log(`Generated: ${name}`);
}

// 2. Brand Identity Assets (NẾP GẤP, MẺ NHỎ, QUAI VẢI)
const brandAssetsDir = path.join(baseDir, 'assets', 'brands');
ensureDir(brandAssetsDir);

const brandAssetDefs = {
  // NẾP GẤP
  'nep-gap-logo.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="100%" height="100%">
      <!-- Icon Fold -->
      <g transform="translate(10, 10)">
        <rect x="0" y="0" width="60" height="60" rx="6" fill="#F6F4EE" stroke="#2D4B43" stroke-width="3"/>
        <path d="M38 0 L60 22 L38 22 Z" fill="#D97757"/>
        <path d="M0 0 L38 0 L38 22 L60 22 L60 60 L0 60 Z" fill="none" stroke="#2D4B43" stroke-width="3"/>
        <line x1="14" y1="26" x2="30" y2="26" stroke="#2D4B43" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="36" x2="46" y2="36" stroke="#2D4B43" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="14" y1="46" x2="38" y2="46" stroke="#2D4B43" stroke-width="2.5" stroke-linecap="round"/>
      </g>
      <!-- Wordmark -->
      <text x="86" y="44" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="28" fill="#2D4B43" letter-spacing="1">NẾP GẤP</text>
      <text x="88" y="62" font-family="'Be Vietnam Pro', sans-serif" font-weight="500" font-size="11" fill="#53647A" letter-spacing="0.5">VĂN PHÒNG PHẨM &amp; GHI CHÉP</text>
    </svg>
  `,
  // MẺ NHỎ
  'me-nho-logo.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="100%" height="100%">
      <!-- Phin motif with drip -->
      <g transform="translate(10, 10)">
        <!-- Outer cup arc -->
        <path d="M12 26 C12 48 24 56 40 56 C56 56 68 48 68 26" fill="none" stroke="#593B2F" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Phin lid / bar -->
        <line x1="16" y1="18" x2="64" y2="18" stroke="#593B2F" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="36" y="10" width="8" height="8" rx="2" fill="#593B2F"/>
        <!-- Coffee drop -->
        <path d="M40 30 C37 36 34 40 34 44 C34 48 37 50 40 50 C43 50 46 48 46 44 C46 40 43 36 40 30 Z" fill="#E7B080"/>
      </g>
      <!-- Wordmark -->
      <text x="88" y="44" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="28" fill="#593B2F" letter-spacing="0.5">MẺ NHỎ</text>
      <text x="90" y="62" font-family="'Be Vietnam Pro', sans-serif" font-weight="500" font-size="11" fill="#2F6257" letter-spacing="0.5">PHA THEO GU CỦA BẠN</text>
    </svg>
  `,
  // QUAI VẢI
  'quai-vai-logo.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80" width="100%" height="100%">
      <!-- Tote Bag with handles -->
      <g transform="translate(12, 10)">
        <!-- Bag body -->
        <rect x="14" y="22" width="44" height="42" rx="4" fill="#EEE8DF" stroke="#2F435C" stroke-width="3"/>
        <!-- Handles -->
        <path d="M25 22 L25 10 C25 6 47 6 47 10 L47 22" fill="none" stroke="#2F435C" stroke-width="3" stroke-linecap="round"/>
        <!-- Stitches -->
        <line x1="20" y1="32" x2="52" y2="32" stroke="#C47E71" stroke-width="2" stroke-dasharray="3,3"/>
      </g>
      <!-- Wordmark -->
      <text x="86" y="44" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="28" fill="#2F435C" letter-spacing="1">QUAI VẢI</text>
      <text x="88" y="62" font-family="'Be Vietnam Pro', sans-serif" font-weight="500" font-size="11" fill="#53647A" letter-spacing="0.5">MANG VỪA MỘT NGÀY</text>
    </svg>
  `
};

for (const [name, content] of Object.entries(brandAssetDefs)) {
  fs.writeFileSync(path.join(brandAssetsDir, name), content.trim(), 'utf8');
  console.log(`Generated: ${name}`);
}

// 3. Research Assets (Circle K & GS25 real data charts)
const researchAssetsDir = path.join(baseDir, 'assets', 'research');
ensureDir(researchAssetsDir);

const researchAssetDefs = {
  'circle-k-gs25-charts.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" width="100%" height="100%">
      <rect width="1200" height="680" fill="#FFFFFF" rx="16" stroke="#D6DFE8" stroke-width="2"/>
      <rect x="40" y="30" width="1120" height="64" rx="10" fill="#285B58"/>
      <text x="70" y="70" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">KẾT QUẢ KHẢO SÁT THỰC TẾ: ĐỒ ÁN NHÓM BEE CHĂM CHỈ (N=93 MẪU HỢP LỆ)</text>
      
      <!-- 3 Key Metric Blocks from Section 8.1 -->
      <g transform="translate(60, 120)">
        <!-- Metric 1: Age 18-24 -->
        <rect x="0" y="0" width="330" height="200" rx="12" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="24" y="40" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#53647A">CƠ CẤU ĐỘ TUỔI MẪU KHẢO SÁT</text>
        <text x="24" y="96" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="44" fill="#285B58">67.7%</text>
        <text x="24" y="130" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="16" fill="#243247">63 / 93 người thuộc độ tuổi 18–24</text>
        <text x="24" y="165" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Phản ánh góc nhìn mẫu người tham gia;</text>
        <text x="24" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">không quy kết toàn bộ thị trường.</text>
      </g>

      <g transform="translate(435, 120)">
        <!-- Metric 2: Awareness via Physical Store -->
        <rect x="0" y="0" width="330" height="200" rx="12" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="24" y="40" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#53647A">KÊNH NHẬN BIẾT CIRCLE K</text>
        <text x="24" y="96" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="44" fill="#D97757">65.6%</text>
        <text x="24" y="130" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="16" fill="#243247">61 / 93 thấy cửa hàng trực tiếp</text>
        <text x="24" y="165" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Kênh điểm bán trực quan áp đảo;</text>
        <text x="24" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">câu hỏi dạng đa lựa chọn.</text>
      </g>

      <g transform="translate(810, 120)">
        <!-- Metric 3: Logo recognition -->
        <rect x="0" y="0" width="330" height="200" rx="12" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="24" y="40" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="14" fill="#53647A">NHẬN DIỆN LOGO CIRCLE K</text>
        <text x="24" y="96" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="44" fill="#285B58">96.8%</text>
        <text x="24" y="130" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="16" fill="#243247">90 / 93 chọn đúng hình logo</text>
        <text x="24" y="165" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">Có gợi ý hình ảnh trong câu hỏi;</text>
        <text x="24" y="185" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">không xem là nhận nhớ tự phát.</text>
      </g>

      <!-- Bar comparison chart below -->
      <g transform="translate(60, 350)">
        <rect x="0" y="0" width="1080" height="290" rx="12" fill="#F5F7FB" stroke="#D6DFE8" stroke-width="1.5"/>
        <text x="30" y="40" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="16" fill="#243247">SO SÁNH CÁC YẾU TỐ NHẬN BIẾT VÀ TRẢI NGHIỆM GIỮA CIRCLE K &amp; GS25</text>
        
        <!-- Row 1: Nhận diện điểm bán -->
        <text x="30" y="90" font-family="'Be Vietnam Pro', sans-serif" font-size="14" fill="#243247" font-weight="600">Thấy cửa hàng trên phố:</text>
        <rect x="260" y="74" width="480" height="22" rx="4" fill="#D97757"/>
        <text x="750" y="90" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247" font-weight="600">Circle K: 65.6% (61/93)</text>
        <rect x="260" y="102" width="280" height="22" rx="4" fill="#285B58"/>
        <text x="550" y="118" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247" font-weight="600">GS25: 38.7% (36/93)</text>

        <!-- Row 2: Độ phủ nhận diện logo -->
        <text x="30" y="165" font-family="'Be Vietnam Pro', sans-serif" font-size="14" fill="#243247" font-weight="600">Nhận diện logo chuẩn xác:</text>
        <rect x="260" y="149" width="700" height="22" rx="4" fill="#D97757"/>
        <text x="970" y="165" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247" font-weight="600">Circle K: 96.8% (90/93)</text>
        <rect x="260" y="177" width="610" height="22" rx="4" fill="#285B58"/>
        <text x="880" y="193" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#243247" font-weight="600">GS25: 84.9% (79/93)</text>

        <!-- Source note -->
        <line x1="30" y1="225" x2="1050" y2="225" stroke="#D6DFE8"/>
        <text x="30" y="255" font-family="'Be Vietnam Pro', sans-serif" font-size="12" fill="#53647A">Nguồn: Báo cáo đồ án nhóm Bee Chăm Chỉ · Lớp K25DBMF02 VTC Academy Hà Nội (04/2026) · Báo cáo gốc Google Docs [t.0]</text>
        <text x="30" y="275" font-family="'Be Vietnam Pro', sans-serif" font-size="12" fill="#53647A">Ghi chú phương pháp: Dữ liệu mẫu trực tuyến 93 người phản hồi hợp lệ, không suy diễn vượt quá phạm vi đồ án.</text>
      </g>
    </svg>
  `
};

for (const [name, content] of Object.entries(researchAssetDefs)) {
  fs.writeFileSync(path.join(researchAssetsDir, name), content.trim(), 'utf8');
  console.log(`Generated: ${name}`);
}

console.log('All vector assets generated successfully.');

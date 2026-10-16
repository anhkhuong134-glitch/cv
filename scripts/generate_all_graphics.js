import fs from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\CV';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const articleAssetsDir = path.join(baseDir, 'assets', 'articles');
ensureDir(articleAssetsDir);
const brandAssetsDir = path.join(baseDir, 'assets', 'brands');
ensureDir(brandAssetsDir);
const researchAssetsDir = path.join(baseDir, 'assets', 'research');
ensureDir(researchAssetsDir);

// Helper for clean, valid XML SVG banner
function makeHeroSvg(code, title, subtitle, color, icon) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
    <rect width="1600" height="900" fill="#F5F7FB"/>
    <rect x="80" y="80" width="1440" height="740" rx="24" fill="#FFFFFF" stroke="#D6DFE8" stroke-width="2"/>
    <rect x="120" y="120" width="1360" height="120" rx="16" fill="${color}"/>
    <text x="160" y="180" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="28" fill="#FFFFFF">${code} — ${title}</text>
    <text x="160" y="215" font-family="'Be Vietnam Pro', sans-serif" font-weight="400" font-size="16" fill="#F8E7A6">${subtitle}</text>
    <g transform="translate(120, 280)">
      <rect x="0" y="0" width="1360" height="500" rx="16" fill="#F8FAFC" stroke="#D6DFE8" stroke-width="1.5"/>
      <circle cx="680" cy="210" r="90" fill="#FFFFFF" stroke="${color}" stroke-width="4"/>
      <text x="680" y="230" font-family="'Be Vietnam Pro', sans-serif" font-size="64" text-anchor="middle">${icon}</text>
      <text x="680" y="350" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="24" fill="#243247" text-anchor="middle">Sơ Đồ Phân Tích &amp; Hướng Dẫn Thực Hành</text>
      <text x="680" y="385" font-family="'Be Vietnam Pro', sans-serif" font-size="16" fill="#53647A" text-anchor="middle">Biên tập bởi Khương Tuấn Anh · Đối chiếu tài liệu gốc · Không phóng đại số liệu</text>
    </g>
  </svg>`;
}

function makeInfographicSvg(code, title, points, color) {
  const cards = points.map((p, idx) => {
    const x = 60 + idx * 270;
    return `<g transform="translate(${x}, 120)">
      <rect x="0" y="0" width="250" height="360" rx="12" fill="#FFFFFF" stroke="#D6DFE8" stroke-width="1.5"/>
      <circle cx="35" cy="35" r="18" fill="${color}"/>
      <text x="35" y="41" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">${idx+1}</text>
      <text x="65" y="42" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="16" fill="#243247">${p.step}</text>
      <line x1="20" y1="70" x2="230" y2="70" stroke="#D6DFE8" stroke-width="1"/>
      <text x="20" y="100" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">${p.desc1}</text>
      <text x="20" y="130" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">${p.desc2}</text>
      <text x="20" y="160" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A">${p.desc3}</text>
      <rect x="15" y="250" width="220" height="90" rx="8" fill="#F5F7FB" stroke="#D6DFE8"/>
      <text x="25" y="280" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="12" fill="${color}">LƯU Ý CỐT LÕI:</text>
      <text x="25" y="305" font-family="'Be Vietnam Pro', sans-serif" font-size="11" fill="#53647A">${p.note}</text>
    </g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 540" width="100%" height="100%">
    <rect width="1200" height="540" fill="#F8FAFC" rx="16" stroke="#D6DFE8" stroke-width="2"/>
    <rect x="40" y="30" width="1120" height="60" rx="10" fill="${color}"/>
    <text x="60" y="68" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF">${code} — ${title}</text>
    ${cards}
  </svg>`;
}

// 1. Generate 11 Article Heroes & Infographics
const articlesData = [
  { id: 'a01', title: 'DÙNG AI HỖ TRỢ VIẾT SEO', sub: 'Từ Brief Có Giới Hạn Đến Bản Biên Tập Có Kiểm Chứng', color: '#285B58', icon: '🤖',
    points: [
      { step: 'Brief một trang', desc1: '• Người đọc mục tiêu', desc2: '• Câu hỏi cần giải đáp', desc3: '• Nguồn được phép dùng', note: 'Chốt phạm vi trước khi giao prompt.' },
      { step: 'Tạo bản nháp thô', desc1: '• Giao dàn ý theo H2/H3', desc2: '• Trả lời trực tiếp câu hỏi', desc3: '• Đánh dấu chỗ cần số liệu', note: 'Chỉ là bản nháp thô, tuyệt đối không đăng ngay.' },
      { step: 'Kiểm claim &amp; nguồn', desc1: '• Đối chiếu tài liệu gốc', desc2: '• Bỏ tính từ sáo rỗng', desc3: '• Ghi nguồn cụ thể', note: 'Ghi rõ URL và đoạn văn hỗ trợ.' },
      { step: 'Biên tập &amp; xuất bản', desc1: '• Tinh chỉnh giọng văn', desc2: '• Gắn internal link', desc3: '• Hoàn thiện On-page', note: 'Kèm đầy đủ hồ sơ On-page trước khi bàn giao.' }
    ]
  },
  { id: 'a02', title: 'GUNPLA CHO NGƯỜI MỚI', sub: 'Chọn Kit &amp; Chuẩn Bị Lần Lắp Đầu Tiên', color: '#2F6257', icon: '🤖',
    points: [
      { step: 'Chọn mã kit', desc1: '• Bắt đầu từ HG 1/144', desc2: '• Tìm manual chính hãng', desc3: '• Xem trước độ phức tạp', note: 'Đọc manual Bandai chính hãng của đúng mã kit.' },
      { step: 'Chuẩn bị dụng cụ', desc1: '• Kìm cắt chuyên dụng', desc2: '• Dao gọt bavia (hobby knife)', desc3: '• Giấy nhám mịn 800-1000', note: 'Không mua thừa đồ nghề trước lần lắp đầu.' },
      { step: 'Không gian lắp ráp', desc1: '• Bàn sáng và phẳng', desc2: '• Khay chia vỉ runner', desc3: '• Đĩa nhỏ đựng chi tiết nhỏ', note: 'Tránh làm mất các mảnh nhựa nhỏ.' },
      { step: 'Chia buổi lắp', desc1: '• Lắp từng bộ phận (chân/tay)', desc2: '• Cắt dư cổng 1-2mm', desc3: '• Dán decal cẩn thận', note: 'Kiểm tra kỹ trước khi bấm khít khớp nối.' }
    ]
  },
  { id: 'a03', title: 'BUILD PC THEO NHU CẦU', sub: 'Lập Cấu Hình Trước Khi Mua Linh Kiện', color: '#243247', icon: '💻',
    points: [
      { step: 'Xác định đề bài', desc1: '• Tác vụ chính (Game/Đồ họa)', desc2: '• Độ phân giải màn hình', desc3: '• Ngân sách tối đa', note: 'Viết rõ nhu cầu trước khi xem giá linh kiện.' },
      { step: 'CPU &amp; Bo mạch chủ', desc1: '• Khớp socket CPU', desc2: '• Check phiên bản BIOS', desc3: '• Tản nhiệt VRM phù hợp', note: 'Kiểm tra danh sách CPU hỗ trợ của mainboard.' },
      { step: 'RAM &amp; Tương thích', desc1: '• Xem danh sách QVL', desc2: '• Chạy Dual Channel', desc3: '• Bật XMP sau khi lắp', note: 'Cắm đúng khe A2-B2 để tối ưu băng thông.' },
      { step: 'Nguồn &amp; Tản nhiệt', desc1: '• Chiều cao tản vs Vỏ case', desc2: '• Chiều dài GPU vs Vỏ case', desc3: '• Công suất nguồn dư 20%', note: 'Chọn nguồn chuẩn 80 Plus có thương hiệu.' }
    ]
  },
  { id: 'a04', title: 'DRAGON BALL DAIMA', sub: 'Bối Cảnh &amp; Hướng Dẫn Xem Hợp Pháp', color: '#D97757', icon: '⚡',
    points: [
      { step: 'Dự án DAIMA', desc1: '• Tác phẩm kỷ niệm 40 năm', desc2: '• Cốt truyện bởi Akira Toriyama', desc3: '• Nhân vật biến nhỏ', note: 'Phân biệt dự án canon với các bản spin-off.' },
      { step: 'Bối cảnh mở đầu', desc1: '• Nối tiếp sau Majin Buu', desc2: '• Vương quốc Ma Giới', desc3: '• Cốt truyện độc lập dễ theo', note: 'Người mới không bắt buộc xem hết 500 tập cũ.' },
      { step: 'Tìm nguồn xem', desc1: '• Nền tảng có bản quyền', desc2: '• Kiểm tra theo khu vực', desc3: '• Tránh link lậu mã độc', note: 'Ủng hộ đơn vị phát hành chính thức.' },
      { step: 'Tránh spoiler', desc1: '• Tôn trọng trải nghiệm', desc2: '• Phân biệt tin chính thức', desc3: '• Theo dõi thông báo gốc', note: 'Cập nhật từ trang chủ Dragon Ball Official.' }
    ]
  },
  { id: 'a05', title: 'PROTOTYPE RPG 2D', sub: 'Thiết Kế Một Phòng Trước Khi Mở Rộng', color: '#285B58', icon: '🎮',
    points: [
      { step: 'Mục tiêu một phòng', desc1: '• Một tương tác then chốt', desc2: '• Một câu đố đơn giản', desc3: '• Điều kiện hoàn thành rõ', note: 'Thu nhỏ phạm vi để kiểm tra cảm giác điều khiển.' },
      { step: 'Dùng hình khối tạm', desc1: '• Greybox / placeholder', desc2: '• Đo khoảng cách nhảy', desc3: '• Tốc độ di chuyển nhân vật', note: 'Chưa vẽ đồ họa chi tiết khi gameplay chưa ổn.' },
      { step: 'Phản hồi thị giác', desc1: '• Hitbox collider chính xác', desc2: '• Âm thanh tương tác', desc3: '• Hiệu ứng mở cửa', note: 'Trạng thái nhân vật phải nhìn thấy được.' },
      { step: 'Bảng ghi lỗi', desc1: '• Ghi lại từng bug', desc2: '• Đánh giá mức độ kẹt', desc3: '• Playtest với người khác', note: 'Đánh giá dựa trên thao tác, không chấm điểm ảo.' }
    ]
  },
  { id: 'a06', title: 'CHỌN CÀ PHÊ PHA PHIN', sub: 'Bắt Đầu Từ Gu Uống &amp; Cách Pha', color: '#593B2F', icon: '☕',
    points: [
      { step: 'Mô tả gu uống', desc1: '• Đen nóng hay đen đá', desc2: '• Có thêm sữa đặc/đường', desc3: '• Đậm vị hay thanh nhẹ', note: 'Nói từ cảm nhận thực tế, không cần thuật ngữ nếm.' },
      { step: 'Đọc thông tin gói', desc1: '• Giống hạt Robusta / Arabica', desc2: '• Mức độ rang (Đậm/Vừa)', desc3: '• Ngày rang &amp; hạn dùng', note: 'Đọc hướng dẫn nhà sản xuất của đúng sản phẩm.' },
      { step: 'Cỡ xay cho phin', desc1: '• Hạt to như muối biển', desc2: '• Không xay quá mịn (nghẹt)', desc3: '• Không xay quá thô (nhạt)', note: 'Hỏi người bán xay đúng cỡ cho phin nhôm/inox.' },
      { step: 'Ghi chép lần pha', desc1: '• Tỷ lệ bột và nước', desc2: '• Thời gian ủ bột cà phê', desc3: '• Đổi 1 yếu tố mỗi lần', note: 'Dùng Phiếu thử gu cà phê để điều chỉnh dần.' }
    ]
  },
  { id: 'a07', title: 'CHỌN TÚI CANVAS ĐI HỌC', sub: 'Kiểm Tra Kích Thước &amp; Cách Dùng', color: '#2F435C', icon: '👜',
    points: [
      { step: 'Liệt kê đồ mang', desc1: '• Laptop kèm túi chống sốc', desc2: '• Sổ A4/A5 &amp; hộp bút', desc3: '• Bình nước 500ml &amp; ví', note: 'Đo kích thước món đồ lớn nhất trước tiên.' },
      { step: 'Đo lòng &amp; miệng túi', desc1: '• Chiều cao lòng túi', desc2: '• Chiều rộng đáy túi', desc3: '• Độ mở của miệng túi', note: 'Tránh túi có đáy rộng nhưng miệng quá hẹp.' },
      { step: 'Kiểm tra quai đeo', desc1: '• Độ rơi quai (drop length)', desc2: '• Quai bản rộng êm vai', desc3: '• Đường may gia cố chữ X', note: 'Đeo thử khi mặc áo khoác để xem có cấn nách không.' },
      { step: 'Chăm sóc vải canvas', desc1: '• Đọc nhãn giặt của mã túi', desc2: '• Giặt tay nước lạnh', desc3: '• Phơi trong bóng râm', note: 'Không dùng hóa chất tẩy mạnh làm bai dão vải.' }
    ]
  },
  { id: 'a08', title: 'CHỌN SỔ PLANNER', sub: 'Tìm Bố Cục Phù Hợp Với Lịch Của Bạn', color: '#2D4B43', icon: '📓',
    points: [
      { step: 'Xác định việc cần ghi', desc1: '• Nhiều cuộc hẹn cố định', desc2: '• Nhiều việc linh hoạt', desc3: '• Chủ yếu nhớ deadline', note: 'Bắt đầu từ thói quen ghi chép thực tế.' },
      { step: 'So sánh bố cục', desc1: '• Planner ngày: chi tiết', desc2: '• Planner tuần: nhìn tổng thể', desc3: '• Planner tháng: mốc lớn', note: 'Sổ không ghi ngày linh hoạt cho người hay bỏ dở.' },
      { step: 'Kiểm tra gáy &amp; giấy', desc1: '• Khả năng mở phẳng 180 độ', desc2: '• Định lượng giấy (GSM)', desc3: '• Độ thấm mực bút gel', note: 'Thử viết một trang trước khi mua cả cuốn.' },
      { step: 'Chừa ô phát sinh', desc1: '• Khu vực ý tưởng đang mở', desc2: '• Đừng lấp kín 100% trang', desc3: '• Nhìn lại vào cuối tuần', note: 'Dùng mẫu Lịch tuần NẾP GẤP để thử nghiệm.' }
    ]
  },
  { id: 'a09', title: 'CÂY TRONG NHÀ ÍT SÁNG', sub: 'Kiểm Tra Chỗ Đặt Trước Khi Mua Cây', color: '#2F6257', icon: '🌿',
    points: [
      { step: 'Quan sát ánh sáng', desc1: '• Khoảng cách tới cửa sổ', desc2: '• Hướng nắng (Đông/Tây)', desc3: '• Ánh sáng tán xạ', note: 'Phân biệt cây chịu bóng với cây sống không cần sáng.' },
      { step: 'Chọn loài phù hợp', desc1: '• Cây Lưỡi Hổ (Sansevieria)', desc2: '• Cây Kim Tiền (ZZ Plant)', desc3: '• Cây Trầu Bà (Pothos)', note: 'Chọn cây dễ sống cho người mới bắt đầu.' },
      { step: 'Giá thể &amp; thoát nước', desc1: '• Chậu có lỗ thoát nước', desc2: '• Đất tơi xốp thoáng khí', desc3: '• Tránh úng rễ đáy chậu', note: 'Hỏi về chậu và đất trồng cùng lúc khi mua cây.' },
      { step: 'Tần suất tưới', desc1: '• Kiểm tra độ khô của đất', desc2: '• Chọc ngón tay sâu 2-3cm', desc3: '• Tưới đẫm khi đất đã khô', note: 'Thừa nước nguy hiểm hơn thiếu nước đối với cây ít sáng.' }
    ]
  },
  { id: 'a10', title: 'CHECKLIST DU LỊCH CUỐI TUẦN', sub: 'Soạn Đồ Theo Lịch Trình 2 Ngày 1 Đêm', color: '#C47E71', icon: '🧳',
    points: [
      { step: 'Thông tin lịch trình', desc1: '• Phương tiện di chuyển', desc2: '• Loại hình lưu trú', desc3: '• Dự báo thời tiết điểm đến', note: 'Lịch trình quyết định số lượng đồ cần mang.' },
      { step: 'Giấy tờ &amp; đồ điện tử', desc1: '• CCCD gắn chip / GPLX', desc2: '• Thẻ ATM &amp; tiền mặt lẻ', desc3: '• Sạc dự phòng &amp; cáp', note: 'Để ở ngăn dễ lấy nhưng có khóa an toàn.' },
      { step: 'Trang phục theo bộ', desc1: '• Bộ di chuyển thoải mái', desc2: '• Bộ dạo phố chụp ảnh', desc3: '• Đồ ngủ &amp; đồ lót dự phòng', note: 'Cuộn tròn quần áo để tiết kiệm diện tích túi.' },
      { step: 'Kiểm trước khi khóa cửa', desc1: '• Rút phích cắm điện', desc2: '• Khóa van gas &amp; vòi nước', desc3: '• Đóng kín các cửa sổ', note: 'Dùng Checklist du lịch để kiểm tra 5 phút cuối.' }
    ]
  },
  { id: 'a11', title: 'BRIEF CONTENT CHO NHÓM NHỎ', sub: 'Chốt Gì Trước Khi Bắt Đầu Viết?', color: '#345C8B', icon: '📋',
    points: [
      { step: 'Người đọc &amp; mục tiêu', desc1: '• Ai sẽ đọc bài viết này?', desc2: '• Tình huống họ gặp phải?', desc3: '• Bài giúp giải quyết điều gì?', note: 'Viết rõ kết quả cần có của nội dung.' },
      { step: 'Thông điệp &amp; nguồn', desc1: '• Một thông điệp cốt lõi', desc2: '• Nguồn tài liệu được trích', desc3: '• Điều KHÔNG được khẳng định', note: 'Cắt bỏ các lời hứa viển vông ngay từ brief.' },
      { step: 'Định dạng &amp; CTA', desc1: '• Bài viết SEO / Carousel', desc2: '• Kêu gọi hành động chính', desc3: '• Kênh phân phối dự kiến', note: 'Chuẩn bị tài sản đính kèm trước khi viết.' },
      { step: 'Quy trình duyệt', desc1: '• Người duyệt bản cuối', desc2: '• Thời hạn nộp bản nháp', desc3: '• Tiêu chí sửa đổi', note: 'Góp ý dựa trên brief, không góp ý theo cảm xúc.' }
    ]
  }
];

articlesData.forEach(a => {
  const heroSvg = makeHeroSvg(a.id.toUpperCase(), a.title, a.sub, a.color, a.icon);
  fs.writeFileSync(path.join(articleAssetsDir, `${a.id}-hero.svg`), heroSvg.trim(), 'utf8');

  const infoSvg = makeInfographicSvg(a.id.toUpperCase(), a.title, a.points, a.color);
  fs.writeFileSync(path.join(articleAssetsDir, `${a.id}-infographic.svg`), infoSvg.trim(), 'utf8');

  console.log(`Generated assets for ${a.id.toUpperCase()}: hero + infographic`);
});

// 2. Generate Brand Application SVGs (NG01-06, MN01-06, QV01-06)
function makeBrandAppSvg(brand, code, name, desc, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <rect width="600" height="400" fill="#F8FAFC" stroke="#D6DFE8" stroke-width="2" rx="16"/>
    <rect x="30" y="30" width="540" height="50" rx="8" fill="${color}"/>
    <text x="50" y="62" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF">${code} — ${name}</text>
    <rect x="30" y="100" width="540" height="270" rx="12" fill="#FFFFFF" stroke="#D6DFE8"/>
    <circle cx="300" cy="200" r="50" fill="${color}" opacity="0.1"/>
    <text x="300" y="208" font-family="'Be Vietnam Pro', sans-serif" font-size="32" text-anchor="middle" fill="${color}">${code}</text>
    <text x="300" y="270" font-family="'Be Vietnam Pro', sans-serif" font-weight="600" font-size="16" fill="#243247" text-anchor="middle">${brand} · Ứng Dụng Thiết Kế Concept</text>
    <text x="300" y="300" font-family="'Be Vietnam Pro', sans-serif" font-size="13" fill="#53647A" text-anchor="middle">${desc}</text>
  </svg>`;
}

const brandApps = [
  // NẾP GẤP
  { brand: 'NẾP GẤP', code: 'NG01', name: 'Bìa Sổ &amp; Prototype', desc: 'Bìa trước logo góc phải, bìa sau dòng kẻ mở', color: '#2D4B43' },
  { brand: 'NẾP GẤP', code: 'NG02', name: 'Lưới Lịch Tuần A5', desc: 'Bố cục 7 ngày kèm vùng Ý tưởng đang mở', color: '#2D4B43' },
  { brand: 'NẾP GẤP', code: 'NG03', name: 'Thẻ Một Ý (75x105mm)', desc: 'Thẻ ghi chú nhanh cho công việc phát sinh', color: '#D97757' },
  { brand: 'NẾP GẤP', code: 'NG04', name: 'Phong Bì &amp; Kẹp Tài Liệu', desc: 'Quy chuẩn phong bì A5 và kẹp hồ sơ đồng bộ', color: '#2D4B43' },
  { brand: 'NẾP GẤP', code: 'NG05', name: 'Poster Thương Hiệu', desc: 'Poster truyền thông: Thử một trang trước khi chọn sổ', color: '#D97757' },
  { brand: 'NẾP GẤP', code: 'NG06', name: 'Đai Giấy Bao Gói', desc: 'Băng đai bọc ngoài sổ ghi rõ chất liệu và thông số', color: '#2D4B43' },

  // MẺ NHỎ
  { brand: 'MẺ NHỎ', code: 'MN01', name: 'Túi Cà Phê Concept', desc: 'Artwork mặt trước và sau túi cà phê 160x240mm', color: '#593B2F' },
  { brand: 'MẺ NHỎ', code: 'MN02', name: 'Thẻ Hỏi Gu (100x150mm)', desc: 'Thẻ tick chọn cách uống và dụng cụ khi mua', color: '#2F6257' },
  { brand: 'MẺ NHỎ', code: 'MN03', name: 'Phiếu Thử Ly Pha A5', desc: 'Ghi chép tỷ lệ và cảm nhận sau mỗi lần pha', color: '#593B2F' },
  { brand: 'MẺ NHỎ', code: 'MN04', name: 'Ly Giấy &amp; Sleeve', desc: 'Thông điệp Một khoảng nghỉ, một ly theo gu', color: '#E7B080' },
  { brand: 'MẺ NHỎ', code: 'MN05', name: 'Bộ Banner 8 Kích Thước', desc: 'Hiển thị chuẩn quảng cáo số đa nền tảng', color: '#593B2F' },
  { brand: 'MẺ NHỎ', code: 'MN06', name: 'Carousel 6 Slide', desc: 'Năm điều nên nói với người bán cà phê', color: '#2F6257' },

  // QUAI VẢI
  { brand: 'QUAI VẢI', code: 'QV01', name: 'Artwork In Túi Canvas', desc: 'Mặt trước logo quai cong, mặt sau sơ đồ chia ô', color: '#2F435C' },
  { brand: 'QUAI VẢI', code: 'QV02', name: 'Hangtag Hai Mặt', desc: 'Thẻ treo nhắc kiểm tra kích thước và cách giặt ủi', color: '#C47E71' },
  { brand: 'QUAI VẢI', code: 'QV03', name: 'Phiếu Đo Túi A5', desc: 'Bảng đối chiếu kích thước đồ lớn nhất với lòng túi', color: '#2F435C' },
  { brand: 'QUAI VẢI', code: 'QV04', name: 'Bộ 6 Vector Icons', desc: 'Icon sổ, bình nước, hộp bút, laptop, điện thoại, ví', color: '#2F435C' },
  { brand: 'QUAI VẢI', code: 'QV05', name: 'Carousel 6 Slide', desc: 'Bốn điểm cần đo trước khi chọn túi canvas', color: '#C47E71' },
  { brand: 'QUAI VẢI', code: 'QV06', name: 'Buying Guide Card', desc: 'Quy trình 4 bước kiểm tra túi trước khi mua', color: '#2F435C' }
];

brandApps.forEach(b => {
  const svg = makeBrandAppSvg(b.brand, b.code, b.name, b.desc, b.color);
  fs.writeFileSync(path.join(brandAssetsDir, `${b.code.toLowerCase()}.svg`), svg.trim(), 'utf8');
  console.log(`Generated Brand App: ${b.code}`);
});

console.log('All article and brand application graphics generated successfully.');
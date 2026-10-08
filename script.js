/* 
  FILE: script.js
  ĐÂY LÀ GÌ? : Bộ não điều khiển dữ liệu dự án, theme Dark/Light, hiệu ứng và tương tác cho Portfolio Khương Tuấn Anh.
*/

// ================== CẤU HÌNH DANH MỤC DỰ ÁN ==================
const categoriesConfig = {
  all: {
    id: "all",
    name: "Tất Cả Dự Án",
    icon: "fas fa-layer-group",
    desc: "Các đồ án học tập và concept cá nhân trong Content, Social, SEO và thiết kế truyền thông."
  },
  research: {
    id: "research",
    name: "Nghiên Cứu Thị Trường",
    icon: "fas fa-chart-pie",
    desc: "Đồ án nhóm so sánh Circle K và GS25; trình bày phương pháp nghiên cứu và các nhận xét trong báo cáo."
  },
  content: {
    id: "content",
    name: "Kế Hoạch Content",
    icon: "fas fa-pen-nib",
    desc: "Lập tuyến nội dung, chọn góc khai thác, viết caption và dựng lịch đăng cho Facebook, Instagram hoặc TikTok."
  },
  branding: {
    id: "branding",
    name: "Nhận Diện Thương Hiệu",
    icon: "fas fa-palette",
    desc: "Đồ án nhận diện cơ bản: moodboard, bảng màu, kiểu chữ và ứng dụng lên các ấn phẩm."
  },
  design: {
    id: "design",
    name: "Media & Banner Ads",
    icon: "fas fa-image",
    desc: "Thiết kế ấn phẩm quảng cáo và thích ứng key visual qua các kích thước banner trong đồ án."
  },
  seo: {
    id: "seo",
    name: "SEO Content",
    icon: "fas fa-search",
    desc: "Bài mẫu theo search intent, tiêu đề và cấu trúc rõ ràng; chưa xuất bản và chưa có dữ liệu thứ hạng."
  }
};

// Map màu sắc cho từng tool
const toolColors = {
  'Google Forms': '#4285f4',
  'Google Sheets': '#0f9d58',
  'Canva': '#00c4cc',
  'Facebook': '#1877f2',
  'Instagram': '#e1306c',
  'TikTok': '#000000',
  'AI Tools': '#8b5cf6',
  'GDN Standard': '#fbbc04',
  'Facebook Ads': '#1877f2',
  'Web Banner': '#f97316'
};

// ================== DỮ LIỆU CÁC DỰ ÁN ==================
const projectsData = {
  1: {
    id: 1,
    title: "Nghiên Cứu Nhận Thức Thương Hiệu: Circle K vs GS25",
    type: "Đồ Án Nhóm · Nghiên Cứu Thị Trường",
    category: "research",
    categoryName: "Nghiên Cứu Thị Trường",
    categoryIcon: "fas fa-chart-pie",
    categoryColor: "#38bdf8",
    duration: "Học kỳ 1 — 2026",
    results: "Báo cáo 160+ trang • 100+ Khảo sát thực tế",
    tools: ["Google Forms", "Google Sheets", "Canva"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",
    description: "Nghiên cứu hành vi tiêu dùng và định vị cạnh tranh 7P Marketing Mix giữa hai chuỗi cửa hàng tiện lợi hàng đầu Việt Nam.",
    featured: true,
    kpis: [
      { number: "160+", label: "Trang báo cáo", icon: "📄" },
      { number: "100+", label: "Mẫu khảo sát", icon: "📊" },
      { number: "6",    label: "Bước quy trình", icon: "🔄" }
    ],

    findingsTitle: "Kết Quả Nghiên Cứu Nổi Bật",
    findings: [
      "<strong>Vị Thế Mạng Lưới:</strong> Circle K độc chiếm độ phủ với <strong>500+ cửa hàng</strong> (chiếm ~38% thị phần doanh thu CVS), tạo lợi thế cạnh tranh tuyệt đối ở khung giờ 22h–6h sáng.",
      "<strong>Insight Khách Hàng Trẻ:</strong> >60% Gen Z lựa chọn cửa hàng dựa trên <strong>mức độ quen thuộc và trải nghiệm không gian</strong> — yếu tố cảm xúc quan trọng hơn cạnh tranh về giá.",
      "<strong>Sức Hút Hàn Quốc (GS25):</strong> GS25 bứt phá nhờ định vị 'điểm đến trải nghiệm', hơn <strong>50% Gen Z</strong> thừa nhận chịu ảnh hưởng từ văn hóa K-Food trong quyết định ăn uống.",
      "<strong>Mô Hình Cạnh Tranh Rõ Rệt:</strong> Circle K lấy <strong>'Sự tiện lợi & Phủ sóng'</strong> làm lõi, trong khi GS25 tập trung vào <strong>'Trải nghiệm ẩm thực & Không gian kết nối'</strong>.",
      "<strong>Đề Xuất Chiến Lược 2025–2030:</strong> Xây dựng lộ trình phát triển bền vững cho 2 thương hiệu gồm Bản địa hóa sản phẩm, Tối ưu ứng dụng Loyalty và Tiêu chuẩn ESG."
    ],
    skills: [
      { icon: "📊", name: "Nghiên Cứu Thị Trường & Đào Sâu Data", desc: "Thiết kế bảng hỏi khảo sát định lượng, thực hiện phỏng vấn chuyên sâu 6 tầng nội dung, xử lý & tổng hợp dữ liệu chuẩn học thuật." },
      { icon: "🧠", name: "Phân Tích Định Vị Thương Hiệu (Branding)", desc: "Vận dụng thành thạo mô hình 7P Marketing Mix, SWOT, STP và AIDA để bóc tách chiến lược cạnh tranh giữa hai gã khổng lồ bán lẻ." },
      { icon: "📈", name: "Đọc Hiểu Hành Vi Tiêu Dùng (Consumer Insight)", desc: "Phân tích tâm lý mua hàng ngẫu hứng, các yếu tố giữ chân khách hàng (retention drivers) và xu hướng tiêu dùng Gen Z / Millennial." },
      { icon: "💡", name: "Tư Duy Chiến Lược Bán Lẻ (CVS Strategy)", desc: "Đánh giá hiệu quả mô hình 24/7, chiến lược trưng bày sản phẩm (merchandising), tối ưu hóa trải nghiệm điểm bán (POS experience)." },
      { icon: "✍️", name: "Kỹ Năng Quản Lý & Viết Báo Cáo Chuyên Sâu", desc: "Tổng hợp, cấu trúc hóa và trình bày báo cáo nghiên cứu 160+ trang với tư duy logic, lập luận chặt chẽ và bằng chứng khoa học." }
    ],
    objectives: [
      "Đánh giá và so sánh trải nghiệm sản phẩm & dịch vụ tại Circle K và GS25",
      "Phân tích chiến lược Marketing & xây dựng thương hiệu của hai chuỗi",
      "Đo lường giá trị cạnh tranh trong nhận thức của người tiêu dùng Việt Nam",
      "Đề xuất giải pháp chiến lược để nâng cao nhận thức thương hiệu và hiệu quả kinh doanh"
    ],
    process: [
      { icon: "🔍", title: "Tổng Quan Thị Trường", desc: "Phân tích bối cảnh ngành CVS Việt Nam, xu hướng tăng trưởng 12–15%/năm và vị thế Circle K vs GS25" },
      { icon: "📚", title: "Nghiên Cứu Lý Thuyết", desc: "Phân tích 7P Marketing Mix, SWOT, STP, AIDA — làm rõ sự khác biệt định vị giữa hai thương hiệu" },
      { icon: "📋", title: "Thu Thập Dữ Liệu Sơ Cấp", desc: "Thiết kế bảng khảo sát 4 nhóm biến, gửi đến 100+ khách hàng có trải nghiệm thực tế" },
      { icon: "👁️", title: "Quan Sát Thực Địa", desc: "Trực tiếp khảo sát các chi nhánh Circle K & GS25 ở nhiều khung giờ, ghi nhận hành vi khách hàng" },
      { icon: "🎙️", title: "Phỏng Vấn Chuyên Sâu", desc: "Phỏng vấn In-depth Interview 6 nhóm nội dung phân tầng từ cảm nhận giác quan → động lực sâu xa" },
      { icon: "💡", title: "Phân Tích & Đề Xuất", desc: "Xử lý dữ liệu, so sánh đa chiều 6 tiêu chí cốt lõi, đề xuất chiến lược bền vững 2025–2030" }
    ],
    frameworks: ["7P Marketing Mix", "SWOT Analysis", "STP Model", "AIDA Framework", "Consumer Insight"],
    takeaways: [
      { icon: "🧠", title: "Tư duy phân tích dữ liệu", desc: "Học cách đọc và tổng hợp dữ liệu khảo sát định lượng thành insight hành vi tiêu dùng có giá trị thực tiễn." },
      { icon: "📊", title: "Áp dụng framework vào thực tế", desc: "Không chỉ học lý thuyết — tự tay phân tích 7P, SWOT, STP cho hai thương hiệu thật, thấy rõ sự khác biệt rất lớn giữa lý thuyết và thực tế." },
      { icon: "✍️", title: "Kỹ năng viết báo cáo chuyên sâu", desc: "160+ trang báo cáo cấu trúc hóa rõ ràng giúp tôi hiểu tầm quan trọng của logic trình bày trong Marketing Research." }
    ]
  },

  2: {
    id: 2,
    title: "Kế Hoạch Content Facebook & Instagram",
    type: "Đồ Án Học Tập · Content Social",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#f59e0b",
    description: "Đồ án học tập về kế hoạch nội dung Facebook & Instagram, gồm lịch biên tập và các bài mẫu. Concept social đồ mặc nhà là sản phẩm riêng, được liệt kê ở case số 6.",
    duration: "Tháng 05/2026",
    results: "Bản kế hoạch Content • Lịch biên tập 30 ngày • 10 Bài mẫu & Caption",
    tools: ["Canva", "Facebook", "Instagram", "Google Sheets"],
    kpis: [
      { number: "30",   label: "Ngày lịch nội dung", icon: "📅" },
      { number: "10+",  label: "Bài mẫu & Caption", icon: "✍️" },
      { number: "4",    label: "Content Pillars", icon: "🎯" }
    ],

    findingsTitle: "Cấu Trúc Của Kế Hoạch",
    findings: [
      "<strong>Phân tuyến nội dung:</strong> Chia các chủ đề thành nhóm để lịch đăng có nhịp, thay vì lặp lại một kiểu bài.",
      "<strong>Chọn định dạng:</strong> Dùng bài tĩnh, carousel và story theo nội dung cần truyền tải.",
      "<strong>Viết caption:</strong> Mỗi bài có một ý chính và một hành động gợi ý; đây là kế hoạch học tập, chưa có số liệu sau đăng."
    ],
    skills: [
      { icon: "📝", name: "Content Planning & Scheduling", desc: "Lập lịch nội dung, phân bổ định dạng và gắn mục tiêu cho từng bài." },
      { icon: "🎯", name: "Content Pillar & Angle", desc: "Tổ chức chủ đề thành các tuyến và tìm nhiều góc kể cho cùng một sản phẩm." },
      { icon: "💬", name: "Copywriting & Social Engagement", desc: "Viết tiêu đề, caption và câu hỏi gợi tương tác; chưa có dữ liệu để khẳng định hiệu quả chuyển đổi." }
    ],
    objectives: [
      "Nghiên cứu thương hiệu, sản phẩm, đối thủ cạnh tranh và chân dung khách hàng mục tiêu",
      "Xây dựng hệ thống Content Pillars & Content Angles rõ ràng cho từng giai đoạn truyền thông",
      "Thiết lập lịch biên tập nội dung (Content Calendar) chi tiết theo tuần hoặc tháng",
      "Chọn format, caption và hình minh họa phù hợp với Facebook và Instagram"
    ],
    process: [
      { icon: "🔍", title: "Nghiên Cứu Thị Trường", desc: "Phân tích tuyến nội dung của đối thủ và hành vi tương tác của khách hàng trên Social Media" },
      { icon: "🎯", title: "Xác Định Mục Tiêu", desc: "Phân chia tỷ lệ nội dung theo phễu marketing (Awareness → Engagement → Conversion)" },
      { icon: "📅", title: "Lập Content Calendar", desc: "Thiết lập lịch đăng bài chi tiết với thời gian, định dạng, tiêu đề & thông điệp cốt lõi" },
      { icon: "✍️", title: "Sáng Tạo Nội Dung Mẫu", desc: "Viết 5–10 bài mẫu hoàn chỉnh kèm thiết kế hình ảnh/carousel theo chuẩn nhận diện thương hiệu" }
    ],
    frameworks: ["Content Pillar Model", "Marketing Funnel", "Brand Voice Framework", "Content Calendar"],
    takeaways: [
      { icon: "📝", title: "Lập kế hoạch có hệ thống", desc: "Hiểu được tầm quan trọng của Content Calendar — không chỉ đăng bài ngẫu hứng mà phải có chiến lược rõ từng tuần." },
      { icon: "🎯", title: "Tư duy theo phễu chuyển đổi", desc: "Mỗi bài đăng phải phục vụ một mục tiêu cụ thể trong phễu (Awareness/Engagement/Conversion) — không content nào là vô nghĩa." },
      { icon: "💬", title: "Brand Voice nhất quán", desc: "Viết caption cho nhiều post liên tiếp giúp tôi hiểu sâu tầm quan trọng của giọng điệu thương hiệu đồng nhất." }
    ]
  },

  3: {
    id: 3,
    title: "Xây Dựng Bộ Nhận Diện Thương Hiệu Cơ Bản",
    type: "Đồ Án Học Tập · Branding",
    category: "branding",
    categoryName: "Nhận Diện Thương Hiệu",
    categoryIcon: "fas fa-palette",
    categoryColor: "#a78bfa",
    description: "Nghiên cứu định vị & khách hàng mục tiêu; xây dựng moodboard, bảng màu, kiểu chữ, key visual và ứng dụng nhận diện truyền thông.",
    duration: "Tháng 04/2026",
    results: "Brand Guidelines • Moodboard • Key Visual • Khung bài đăng Social",
    tools: ["Canva", "Google Sheets", "AI Tools"],
    kpis: [
      { number: "1",    label: "Brand Guidelines hoàn chỉnh", icon: "📐" },
      { number: "5",    label: "Tính cách thương hiệu", icon: "💡" },
      { number: "4+",   label: "Nền tảng ứng dụng", icon: "📱" }
    ],

    findingsTitle: "Điểm Nhấn Nhận Diện Thương Hiệu",
    findings: [
      "<strong>Chuẩn Hóa Nhận Diện:</strong> Xây dựng bảng màu chủ đạo/màu phụ cùng <strong>bộ font chữ tiêu chuẩn</strong> đại diện cho tính cách thương hiệu chuyên nghiệp.",
      "<strong>Moodboard & Key Visual Độc Đáo:</strong> Phát triển định hướng hình ảnh nhất quán giúp thương hiệu <strong>nổi bật & ghi dấu ấn</strong> trên mọi ấn phẩm truyền thông.",
      "<strong>Quy Chuẩn Ứng Dụng Đa Kênh:</strong> Đồng bộ thiết kế logo, khung bài đăng social post, banner quảng cáo & poster sự kiện."
    ],
    skills: [
      { icon: "🎨", name: "Visual Identity Design", desc: "Tư duy màu sắc, font chữ và thiết kế Key Visual tạo diện mạo đồng nhất cho thương hiệu." },
      { icon: "📐", name: "Brand Guidelines Standard", desc: "Xây dựng tài liệu quy chuẩn sử dụng thương hiệu trên các kênh số và ấn phẩm in ấn." },
      { icon: "💡", name: "Creative Moodboard & Storytelling", desc: "Chuyển hóa giá trị cốt lõi và tính cách thương hiệu thành hình ảnh trực quan sinh động." }
    ],
    objectives: [
      "Phân tích tính cách thương hiệu và định vị giá trị cốt lõi trong tâm trí khách hàng",
      "Lựa chọn bảng màu chủ đạo, phông chữ và phong cách hình ảnh đại diện",
      "Xây dựng Moodboard & phát triển Key Visual chính cho các chiến dịch truyền thông",
      "Thiết kế ứng dụng nhận diện lên banner, poster, bài đăng mạng xã hội bảo đảm tính nhất quán"
    ],
    process: [
      { icon: "🔍", title: "Nghiên Cứu Brand DNA", desc: "Xác định 3–5 tính cách cốt lõi thương hiệu cần thể hiện qua hình ảnh" },
      { icon: "🎨", title: "Xây Dựng Moodboard & Palette", desc: "Chọn bảng màu chủ đạo, phối màu & phông chữ tiêu chuẩn phù hợp tính cách thương hiệu" },
      { icon: "🖼️", title: "Thiết Kế Key Visual", desc: "Sáng tạo hình ảnh chủ đạo làm chuẩn mực thị giác cho toàn bộ chiến dịch" },
      { icon: "📱", title: "Ứng Dụng Đa Nền Tảng", desc: "Xuất bộ khung thiết kế chuẩn kích thước cho Facebook, Instagram và Website" }
    ],
    frameworks: ["Brand Identity System", "Moodboard Methodology", "Visual Hierarchy", "Brand Archetype"],
    takeaways: [
      { icon: "🎨", title: "Màu sắc không phải ngẫu nhiên", desc: "Mỗi màu trong bảng màu thương hiệu đều phải có lý do — phản ánh tính cách, cảm xúc và định vị thương hiệu." },
      { icon: "🔗", title: "Nhất quán là chìa khóa", desc: "Khi áp dụng brand identity lên nhiều nền tảng, tôi nhận ra sự nhất quán về font chữ và màu sắc quan trọng hơn bất kỳ yếu tố thiết kế nào." },
      { icon: "💡", title: "Tư duy từ insight ra hình ảnh", desc: "Học cách chuyển hóa insight khách hàng trừu tượng thành ngôn ngữ hình ảnh cụ thể, có thể nhìn thấy và cảm nhận được." }
    ]
  },

  4: {
    id: 4,
    title: "Thiết Kế Banner Ads — Tinh Dầu Thiên Nhiên",
    type: "Media & Ad Design",
    category: "design",
    categoryName: "Media & Banner Ads",
    categoryIcon: "fas fa-image",
    categoryColor: "#fb923c",
    description: "Bộ thiết kế banner quảng cáo trực tuyến đa kích thước (GDN / Web Ads) cho thương hiệu Tinh Dầu Thiên Nhiên bao gồm 19 kích thước chuẩn (KV, 300x250, 728x90, 300x600...).",
    duration: "Tháng 03/2026",
    results: "19+ Kích thước Banner Standard • Key Visual • Campaign Banner Ads",
    tools: ["Canva", "GDN Standard", "Facebook Ads", "Web Banner"],
    googleDocUrl: "https://drive.google.com/drive/folders/1FIMbxTAAZG_FNkwCagiJpDGlaQPSqqpy?usp=drive_link",
    buttonText: "Xem Trọn Bộ Ấn Phẩm Thiết Kế (Google Drive) →",
    kpis: [
      { number: "19+",  label: "Kích thước banner chuẩn", icon: "🖼️" },
      { number: "3",    label: "Nền tảng quảng cáo", icon: "📡" },
      { number: "1",    label: "Key Visual chiến dịch", icon: "🎨" }
    ],

    findingsTitle: "Điểm Nổi Bật Trong Thiết Kế & Quảng Cáo",
    findings: [
      "<strong>Đa Dạng Kích Thước Standard:</strong> Thiết kế trọn bộ <strong>19+ kích thước banner chuẩn</strong> (GDN, Facebook Ads, Web Banner) đáp ứng tối đa mọi vị trí hiển thị trên website và mạng xã hội.",
      "<strong>Phân Cấp Thị Giác Rõ Ràng:</strong> Tối ưu vị trí Key Visual, thông điệp cốt lõi, logo thương hiệu và nút <strong>Call-To-Action (CTA)</strong> giúp gia tăng <strong>tỷ lệ nhấp (CTR)</strong> của khách hàng.",
      "<strong>Đồng Bộ Nhận Diện Thương Hiệu:</strong> Chuẩn hóa màu sắc chủ đạo, font chữ và hình ảnh sản phẩm Tinh Dầu Thiên Nhiên mang lại cảm giác <strong>thư giãn, thiên nhiên và vô cùng cao cấp</strong>."
    ],
    skills: [
      { icon: "🎨", name: "Canva Media & Graphic Design", desc: "Tạo hình ảnh truyền thông chất lượng cao, bài đăng mạng xã hội, poster & banner quảng cáo." },
      { icon: "🖼️", name: "Ad Banner & Poster Layout", desc: "Sắp xếp bố cục hình ảnh, thông điệp và điểm nhấn thị giác tối ưu tỷ lệ nhấp (CTR)." },
      { icon: "📱", name: "Multi-Platform Format Adapting", desc: "Tối ưu dung lượng và kích thước ấn phẩm chuẩn nét cho từng kênh mạng xã hội." }
    ],
    objectives: [
      "Thiết kế hệ thống ấn phẩm truyền thông cho sự kiện, chương trình khuyến mãi và quảng cáo trực tuyến",
      "Sản xuất bài đăng dạng Instagram Carousel và ảnh bìa Fanpage thu hút thị giác",
      "Bảo đảm bố cục rõ ràng, phân cấp thông tin hợp lý và nhất quán với nhận diện thương hiệu"
    ],
    process: [
      { icon: "📋", title: "Tiếp Nhận Brief", desc: "Xác định mục tiêu hình ảnh: Giới thiệu sản phẩm, Đẩy bán hay Branding?" },
      { icon: "🖊️", title: "Phác Thảo Layout", desc: "Sắp xếp vị trí tiêu đề, hình ảnh sản phẩm và nút Call-To-Action theo phân cấp thị giác" },
      { icon: "🎨", title: "Thiết Kế Ấn Phẩm", desc: "Hoàn thiện ấn phẩm tĩnh và carousel đa trang trên Canva theo chuẩn nhận diện thương hiệu" },
      { icon: "✅", title: "Xuất Bản & Tối Ưu", desc: "Kiểm tra hiển thị thực tế trên di động, xuất file chuẩn độ phân giải cho từng nền tảng" }
    ],
    frameworks: ["Visual Hierarchy", "Ad Creative Framework", "GDN Banner Standards", "CTR Optimization"],
    takeaways: [
      { icon: "👁️", title: "Phân cấp thị giác quyết định CTR", desc: "Vị trí của headline, hình ảnh sản phẩm và nút CTA ảnh hưởng trực tiếp đến tỷ lệ nhấp — thiết kế đẹp chưa đủ, phải đúng hướng dẫn thị giác." },
      { icon: "📐", title: "Chuẩn hóa kích thước là kỷ luật", desc: "Thiết kế 19+ kích thước cho cùng một chiến dịch giúp tôi hiểu kỷ luật trong sản xuất ấn phẩm quảng cáo chuyên nghiệp." },
      { icon: "🎨", title: "Nhận diện thương hiệu không thể đánh đổi", desc: "Dù kích thước nào, màu sắc và font chữ thương hiệu phải nhất quán — đây là nguyên tắc bất di bất dịch trong Ad Design." }
    ]
  },

  5: {
    id: 5,
    title: "Bộ Bài SEO Mẫu Theo Sở Thích",
    type: "Concept Cá Nhân · SEO Content",
    category: "seo",
    categoryName: "SEO Content",
    categoryIcon: "fas fa-search",
    categoryColor: "#87513c",
    description: "Bốn bài mẫu về mô hình lắp ráp, build PC, Dragon Ball và game/RPG. Mỗi bài có cấu trúc rõ, ảnh chụp tư liệu có ghi nguồn và đường dẫn tham khảo; chưa xuất bản.",
    duration: "Concept cá nhân · 10/2026",
    results: "4 bài mẫu • 4 chủ đề sở thích • 0 bài đã xuất bản",
    tools: ["HTML & CSS", "Google Search Central", "Nguồn chính thức theo chủ đề"],
    googleDocUrl: "seo-samples.html",
    buttonText: "Mở bộ sưu tập bài SEO mẫu →",
    featured: true,
    kpis: [
      { number: "04", label: "Bài mẫu đã viết", icon: "📝" },
      { number: "04", label: "Chủ đề sở thích", icon: "🔎" },
      { number: "0", label: "Bài đã xuất bản", icon: "↗️" }
    ],
    findingsTitle: "Bốn Góc Nội Dung Trong Bộ Mẫu",
    findings: [
      "<strong>Mô hình lắp ráp:</strong> Hướng dẫn người mới chọn bộ đầu tiên, đọc hướng dẫn và chuẩn bị mặt bàn làm việc.",
      "<strong>Build PC:</strong> Bắt đầu từ nhu cầu và ngân sách, sau đó kiểm tra tương thích linh kiện trước khi mua.",
      "<strong>Dragon Ball & RPG 2D:</strong> Bài giải thích theo sở thích, có đường dẫn tham khảo chính thức và ảnh tư liệu được ghi nguồn."
    ],
    objectives: [
      "Chọn một câu hỏi có thật trong từng sở thích thay vì gom nhiều từ khóa vào một bài",
      "Viết bốn bài mẫu với cấu trúc H1, H2, H3 và đường dẫn tham khảo rõ ràng",
      "Chuẩn bị title, meta description, slug và alt text như một gói on-page",
      "Tách thông tin theo nguồn, lời khuyên biên tập và nội dung cần cập nhật trước khi xuất bản"
    ],
    process: [
      { icon: "🎯", title: "Chọn Chủ Đề", desc: "Lấy mô hình lắp ráp, PC, Dragon Ball và game/RPG làm bốn nhóm nội dung khác nhau." },
      { icon: "🔎", title: "Xác Định Câu Hỏi", desc: "Mỗi bài trả lời một nhu cầu rõ: bắt đầu từ đâu, chọn gì, hoặc sắp xếp thứ tự ra sao." },
      { icon: "✍️", title: "Viết & Biên Tập", desc: "Viết theo câu hỏi cụ thể, bỏ câu chung chung và ghi rõ chỗ nào cần kiểm tra lại." },
      { icon: "🧭", title: "Gắn Nguồn & Ghi Chú", desc: "Dẫn nguồn chính thức; ghi rõ bài chưa đăng và thông tin nào cần cập nhật trước khi dùng thật." }
    ],
    frameworks: ["Search Intent", "H1–H3", "Meta Title & Description", "Image Alt", "Source Notes"],
    takeaways: [
      { icon: "🧭", title: "Viết từ điều mình thật sự quan tâm", desc: "Chủ đề quen giúp bài có ví dụ cụ thể hơn; chỗ nào cần kiến thức chuyên môn thì phải dẫn nguồn." },
      { icon: "✂️", title: "Một bài chỉ nên giải quyết một việc", desc: "Người đọc tìm cách chọn bộ lắp ráp cần câu trả lời khác với người đang xem thứ tự một series anime." },
      { icon: "🔄", title: "Bài mẫu chưa phải kết quả SEO", desc: "Muốn kết luận hiệu quả cần xuất bản, theo dõi truy vấn và cập nhật theo dữ liệu thật." }
    ]
  },

  6: {
    id: 6,
    title: "Một Tuần Content Social: Đồ Mặc Nhà Theo Nhịp Sống",
    type: "Concept Cá Nhân · Ngành Đồ Mặc Nhà",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#87513c",
    description: "Concept ứng tuyển tự xây dựng cho ngành đồ mặc nhà, lấy cảm hứng từ danh mục sản phẩm công khai của Vingoria. Không phải dự án được thương hiệu đặt hàng hay phê duyệt.",
    duration: "Concept cá nhân · 10/2026",
    results: "Lịch 7 ngày • 3 ảnh moodboard có nguồn • 1 kịch bản/shot list (chưa quay)",
    tools: ["Facebook", "Instagram", "Content Calendar", "Visual Direction"],
    googleDocUrl: "social-content-sample.html",
    buttonText: "Mở kế hoạch social & moodboard",
    featured: true,
    kpis: [
      { number: "7", label: "Ngày nội dung đề xuất", icon: "📅" },
      { number: "3", label: "Tuyến nội dung", icon: "🧵" },
      { number: "01", label: "Script + shot list", icon: "🎬" }
    ],
    findingsTitle: "Điểm Chính Của Concept",
    findings: [
      "<strong>Góc kể:</strong> Đồ mặc nhà đi cùng những việc bình thường trong ngày, không chỉ xuất hiện như ảnh sản phẩm trên nền trơn.",
      "<strong>Định dạng:</strong> Kết hợp bài tĩnh, carousel, story hỏi đáp và một video script 15 giây; mỗi định dạng có mục tiêu riêng.",
      "<strong>Ranh giới sản xuất:</strong> Bộ này có ảnh moodboard, caption nháp và kịch bản/shot list. Chưa quay, dựng hay đăng nên chưa có số liệu."
    ],
    objectives: [
      "Thử chuyển một nhóm sản phẩm đồ mặc nhà thành các chủ đề gần với nhịp sinh hoạt hàng ngày",
      "Xây lịch social mẫu 7 ngày, có mục tiêu và định dạng rõ cho từng bài",
      "Chọn ảnh tư liệu làm moodboard, ghi nguồn và nêu rõ giới hạn sử dụng",
      "Viết một script và shot list để thể hiện phần ý tưởng/tiền kỳ riêng với khâu quay dựng"
    ],
    process: [
      { icon: "🔎", title: "Đọc Brief Công Khai", desc: "Chỉ dùng danh mục đồ mặc nhà đang được giới thiệu; không suy đoán về chất liệu, công năng hay giá của sản phẩm cụ thể." },
      { icon: "🧭", title: "Chọn Góc Kể", desc: "Dùng các khoảnh khắc ở nhà làm bối cảnh; để thông tin chi tiết của sản phẩm chờ brief chính thức." },
      { icon: "📅", title: "Lên Lịch Nội Dung", desc: "Phân bổ bài khám phá, hỏi đáp và hỗ trợ cân nhắc trong một tuần mẫu." },
      { icon: "🎨", title: "Ảnh tham khảo & Script", desc: "Chọn ảnh moodboard có ghi nguồn; viết lời thoại và shot list riêng với khâu quay dựng." }
    ],
    frameworks: ["Social Content Calendar", "Content Pillars", "Visual Direction", "Short-Form Script"],
    takeaways: [
      { icon: "🧵", title: "Từ sản phẩm ra tình huống", desc: "Một sản phẩm dễ kể hơn khi đặt cạnh nhu cầu cụ thể của người dùng, thay vì lặp lại lời giới thiệu chung." },
      { icon: "📱", title: "Mỗi định dạng có việc riêng", desc: "Carousel để giải thích, story để hỏi nhanh, video script để gợi một cảnh; không cần ép mọi bài thành video." },
      { icon: "🎥", title: "Bàn giao rõ phần việc", desc: "Concept có thể dừng ở script và shot list nếu phần quay dựng do người khác đảm nhận." }
    ]
  }
};

// ================== CÁC CHỨC NĂNG ĐIỀU HƯỚNG & HELPER ==================

function goToProject(projectId) {
  window.location.href = `project-detail.html?id=${projectId}`;
}

function getProjectFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Tính số lượng dự án theo từng danh mục
function getCategoryCounts() {
  const counts = { all: 0 };
  Object.keys(categoriesConfig).forEach(cat => {
    counts[cat] = 0;
  });

  const projectIds = Object.keys(projectsData);
  counts.all = projectIds.length;

  projectIds.forEach(id => {
    const cat = projectsData[id].category;
    if (counts[cat] !== undefined) {
      counts[cat]++;
    } else {
      counts[cat] = 1;
    }
  });

  return counts;
}

// ========== MANAGEMENT DÙNG CHUNG KHI DOM LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initToastNotification();
  initScrollReveal();
  initTypewriter();
  initSmoothScroll();
});

// 1. CHỨC NĂNG THEME TOGGLE (DARK / LIGHT MODE)
function initThemeToggle() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle');
  toggleBtns.forEach(btn => {
    updateThemeIcon(btn, currentTheme);
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      
      localStorage.setItem('theme', newTheme);
      toggleBtns.forEach(b => updateThemeIcon(b, newTheme));
    });
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    btn.setAttribute('title', 'Chuyển sang Giao diện Tối');
  } else {
    btn.innerHTML = '<i class="fas fa-sun"></i>';
    btn.setAttribute('title', 'Chuyển sang Giao diện Sáng');
  }
}

// 2. CHỨC NĂNG TOAST NOTIFICATION & COPY
function initToastNotification() {
  if (!document.getElementById('toastNotification')) {
    const toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    toast.innerHTML = '<i class="fas fa-check-circle" style="color:var(--accent);"></i> <span id="toastMessage">Đã sao chép!</span>';
    document.body.appendChild(toast);
  }
}

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || 'Đã sao chép thành công!');
  }).catch(err => {
    showToast('Lỗi sao chép, vui lòng thử lại.');
  });
}

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

// 3. HIỆU ỨNG GÕ CHỮ (TYPEWRITER)
function initTypewriter() {
  const typewriterElements = document.querySelectorAll('.typewriter-text');
  typewriterElements.forEach(el => {
    const phrases = JSON.parse(el.getAttribute('data-phrases') || '[]');
    if (phrases.length === 0) return;
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        el.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1800;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    }
    type();
  });
}

// 4. HIỆU ỨNG SCROLL REVEAL
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// 5. SMOOTH SCROLL
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* 
  FILE: script.js
  ĐÂY LÀ GÌ? : Bộ não điều khiển dữ liệu, theme, hiệu ứng và tương tác cho Portfolio Khương Tuấn Anh.
*/

// ================== DỮ LIỆU CÁC DỰ ÁN ==================
const projectsData = {
  1: {
    title: "Nghiên Cứu Nhận Thức Thương Hiệu: Circle K vs GS25",
    type: "Đồ Án Nghiên Cứu",
    category: "research",
    categoryName: "Đồ Án Nghiên Cứu",
    categoryColor: "#38bdf8",
    duration: "Học kỳ 1 — 2026",
    results: "Báo cáo 160+ trang • 100+ Khảo sát",
    tools: ["Google Forms", "Google Sheets", "Canva"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",
    description: "Nghiên cứu hành vi tiêu dùng và định vị cạnh tranh 7P Marketing Mix giữa hai chuỗi cửa hàng tiện lợi hàng đầu Việt Nam.",
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
      { icon: "✍️", name: "Kỹ Năng Quản Lý & Viết Báo Cáo Chuyên Sâu", desc: "Tổng hợp, cấu trúc hóa và trình trình báo cáo nghiên cứu 160+ trang với tư duy logic, lập luận chặt chẽ và bằng chứng khoa học." }
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
    title: "Kế Hoạch Content Facebook & Instagram",
    type: "Kế Hoạch Nội Dung",
    category: "content",
    categoryName: "Kế Hoạch Nội Dung",
    categoryColor: "#f59e0b",
    description: "Nghiên cứu khách hàng, đối thủ & định vị thương hiệu; xây dựng content pillar, content angle và lịch nội dung tuần/tháng cho mạng xã hội.",
    duration: "Tháng 05/2026",
    results: "Bản kế hoạch Content • Lịch biên tập 30 ngày • 10 Bài mẫu & Caption",
    tools: ["Canva", "Facebook", "Instagram", "Google Sheets"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",
    kpis: [
      { number: "30",   label: "Ngày lịch nội dung", icon: "📅" },
      { number: "10+",  label: "Bài mẫu & Caption", icon: "✍️" },
      { number: "4",    label: "Content Pillars", icon: "🎯" }
    ],

    findingsTitle: "Định Hướng Nội Dung Nổi Bật",
    findings: [
      "<strong>Content Pillars Chiến Lược:</strong> Phân bổ 4 tuyến nội dung cốt lõi: Giáo dục sản phẩm, Giải trí & Xu hướng, Chứng thực (Social Proof) và <strong>Chuyển đổi trực tiếp</strong>.",
      "<strong>Content Calendar Linh Hoạt:</strong> Thiết lập lịch đăng bài chi tiết theo tuần/tháng với các định dạng đa dạng: <strong>Single Post, Instagram Carousel & Story tương tác</strong>.",
      "<strong>Copywriting & Brand Voice:</strong> Viết caption chuẩn giọng điệu thương hiệu kết hợp <strong>lời kêu gọi hành động (CTA)</strong> giúp tăng tỷ lệ tương tác & chuyển đổi."
    ],
    skills: [
      { icon: "📝", name: "Content Planning & Scheduling", desc: "Lập lịch nội dung khoa học, phân bổ định dạng và thời gian đăng bài tối ưu theo thuật toán mạng xã hội." },
      { icon: "🎯", name: "Content Pillar & Angle", desc: "Nghiên cứu góc nhìn nội dung sáng tạo, đánh trúng tâm lý và nỗi đau của khách hàng mục tiêu." },
      { icon: "💬", name: "Copywriting & Social Engagement", desc: "Soạn thảo tiêu đề gây chú ý, caption lôi cuốn và lời kêu gọi hành động (CTA) chuyển đổi cao." }
    ],
    objectives: [
      "Nghiên cứu thương hiệu, sản phẩm, đối thủ cạnh tranh và chân dung khách hàng mục tiêu",
      "Xây dựng hệ thống Content Pillars & Content Angles rõ ràng cho từng giai đoạn truyền thông",
      "Thiết lập lịch biên tập nội dung (Content Calendar) chi tiết theo tuần hoặc tháng",
      "Tối ưu bài viết, caption, hình ảnh minh họa & story phù hợp với thuật toán Facebook và Instagram"
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
    title: "Xây Dựng Bộ Nhận Diện Thương Hiệu Cơ Bản",
    type: "Branding & Visual",
    category: "branding",
    categoryName: "Branding & Visual",
    categoryColor: "#a78bfa",
    description: "Nghiên cứu định vị & khách hàng mục tiêu; xây dựng moodboard, bảng màu, kiểu chữ, key visual và ứng dụng nhận diện truyền thông.",
    duration: "Tháng 04/2026",
    results: "Brand Guidelines • Moodboard • Key Visual • Khung bài đăng Social",
    tools: ["Canva", "Google Sheets", "AI Tools"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",
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
    title: "Thiết Kế Banner Ads — Tinh Dầu Thiên Nhiên",
    type: "Media & Ad Design",
    category: "design",
    categoryName: "Media Design",
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
    title: "Viết Bài Chuẩn SEO Chuyên Sâu",
    type: "SEO Content Writing",
    category: "seo",
    categoryName: "SEO Content",
    categoryColor: "#4ade80",
    description: "Nghiên cứu từ khóa & search intent; xây dựng dàn ý cấu trúc H1-H3; viết và tối ưu bài viết chuẩn SEO tăng thứ hạng tự nhiên.",
    duration: "Tháng 02/2026",
    results: "Bài viết SEO Hoàn chỉnh • Bộ Từ khóa & Intent • Dàn ý H1-H3 chuẩn",
    tools: ["Google Sheets", "AI Tools", "Canva"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",
    kpis: [
      { number: "3+",  label: "Nhóm Search Intent", icon: "🔎" },
      { number: "H1-H3", label: "Cấu trúc chuẩn SEO", icon: "📝" },
      { number: "100%", label: "On-page tối ưu", icon: "✅" }
    ],

    findingsTitle: "Kết Quả Tối Ưu Nội Dung SEO",
    findings: [
      "<strong>Search Intent Chính Xác:</strong> Phân tích chính xác ý định tìm kiếm (Search Intent) giúp xây dựng nội dung giải quyết đúng thắc mắc của người dùng.",
      "<strong>Cấu Trúc Chuẩn H1-H3:</strong> Triển khai cấu trúc H1, H2, H3 mạch lạc, phân bổ từ khóa chính & từ khóa liên quan tự nhiên không gây chán.",
      "<strong>Tối Ưu On-Page Toàn Diện:</strong> Tối ưu Meta Title, Meta Description, ảnh minh họa Alt tag, Internal Link và CTA kêu gọi hành động hiệu quả."
    ],
    skills: [
      { icon: "🔎", name: "Keyword & Search Intent Research", desc: "Nghiên cứu từ khóa ngành, phân loại nhóm ý định tìm kiếm và xây dựng Topic Cluster." },
      { icon: "✍️", name: "SEO Structure Writing (H1-H3)", desc: "Xây dựng dàn ý bài viết chuẩn SEO, triển khai nội dung hữu ích, dễ đọc và giữ chân độc giả lâu hơn." },
      { icon: "🔗", name: "On-Page SEO Optimization", desc: "Tối ưu Meta tags, ảnh Alt, liên kết nội bộ (Internal link) và giọng điệu thương hiệu độc đáo." }
    ],
    objectives: [
      "Nghiên cứu từ khóa chính, từ khóa phụ và phân tích ý định tìm kiếm của người dùng (Search Intent)",
      "Xây dựng dàn ý bài viết cấu trúc H1, H2, H3 logic, mạch lạc và dễ đọc",
      "Viết tiêu đề chuẩn SEO, đoạn mô tả (Meta Description) hấp dẫn kích thích tỷ lệ nhấp (CTR)",
      "Tối ưu hình ảnh, liên kết nội bộ và lời kêu gọi hành động (CTA) giữ chân người đọc"
    ],
    process: [
      { icon: "🔎", title: "Nghiên Cứu Từ Khóa", desc: "Phân tích Search Intent, độ khó và lưu lượng tìm kiếm để chọn bộ từ khóa hạt nhân" },
      { icon: "📑", title: "Xây Dựng Topic Cluster & Outline", desc: "Thiết lập cấu trúc phân cấp thẻ H1, H2, H3 bao phủ trọn vẹn thắc mắc của độc giả" },
      { icon: "✍️", title: "Biên Soạn Nội Dung Chuẩn SEO", desc: "Viết bài chuẩn văn phong, phân bổ từ khóa tự nhiên và tối ưu tỷ lệ đọc lướt (Readability)" },
      { icon: "🔗", title: "Tối Ưu On-Page & Internal Link", desc: "Tối ưu Meta Title, Meta Description, thẻ Alt hình ảnh và liên kết nội bộ kêu gọi hành động (CTA)" }
    ],
    frameworks: ["Search Intent Mapping", "Topic Cluster Model", "On-Page SEO Standard", "E-E-A-T Framework"],
    takeaways: [
      { icon: "🔎", title: "Search Intent là trên hết", desc: "Google xếp hạng nội dung dựa trên mức độ giải quyết vấn đề của người dùng, không phải chỉ nhồi nhét từ khóa." },
      { icon: "📑", title: "Cấu trúc rõ ràng giữ chân người đọc", desc: "Một dàn bài H1-H3 mạch lạc giúp độc giả dễ tìm thấy câu trả lời nhanh, giảm tỷ lệ thoát trang (Bounce Rate)." },
      { icon: "🎯", title: "SEO kết hợp chuyển đổi", desc: "Lưu lượng truy cập chỉ có giá trị khi đi kèm lời kêu gọi hành động (CTA) hợp lý, dẫn dắt người đọc sang hành vi tiếp theo." }
    ]
  }
};

// ================== CÁC CHỨC NĂNG ĐIỀU KHIỂN ==================

function goToProject(projectId) {
  window.location.href = `project-detail.html?id=${projectId}`;
}

function getProjectFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
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
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  const toggleBtns = document.querySelectorAll('.theme-toggle');
  toggleBtns.forEach(btn => {
    updateThemeIcon(btn, currentTheme);
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      
      if (newTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      
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
        typingSpeed = 1800; // Nghỉ khi gõ xong
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

console.log('%cPortfolio Khương Tuấn Anh - Ultra Modern Edition Loaded!', 'color: #f59e0b; font-family: Inter; font-weight: bold; font-size: 14px;');

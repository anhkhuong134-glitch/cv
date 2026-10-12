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
  web: {
    id: "web",
    name: "Website & Landing Page",
    icon: "fas fa-laptop-code",
    desc: "Thiết kế giao diện website thương mại điện tử (potty.vn) và landing page chuyển đổi cao trên nền tảng LadiPage."
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
  'Web Banner': '#f97316',
  'LadiPage': '#0052cc',
  'Web Builder': '#06b6d4',
  'UI/UX Design': '#8b5cf6',
  'HTML & CSS': '#e34f26'
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
    results: "Báo cáo 160+ trang • 93+ Khảo sát thực tế",
    tools: ["Google Forms", "Google Sheets", "Canva"],
    googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0",
    buttonText: "Mở Toàn Văn Báo Cáo (160+ Trang)",
    description: "Khảo sát định lượng & định tính hành vi tiêu dùng Gen Z, giải mã chiến lược 7P Marketing Mix và định vị thương hiệu giữa hai chuỗi CVS 500+ cửa hàng.",
    featured: true,

    academicInfo: {
      institution: "VTC Academy · Đào Tạo Lập Trình & Thiết Kế Quốc Tế",
      instructor: "ThS. Bùi Nguyễn Ngọc Dường",
      class: "K25DBMF02 (Chuyên ngành Digital Marketing)",
      team: "Nhóm Bee Chăm Chỉ",
      time: "Hà Nội, Tháng 04/2026",
      docPages: "160+ Trang Báo Cáo Nghiên Cứu Học Thuật Toàn Văn",
      googleDocUrl: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0"
    },

    executiveSummary: [
      "Thị trường chuỗi cửa hàng tiện lợi (CVS) Việt Nam đang chứng kiến tốc độ tăng trưởng kép 12–15%/năm, đạt quy mô ước tính 12.000 tỷ VNĐ vào năm 2025. Sự dịch chuyển từ mô hình tạp hóa truyền thống sang bán lẻ hiện đại 24/7 được dẫn dắt mạnh mẽ bởi thế hệ Gen Z và tầng lớp đô thị trẻ.",
      "Trong cuộc đua này, <strong>Circle K</strong> (500+ cửa hàng, gia nhập 2008) và <strong>GS25</strong> (450+ cửa hàng, gia nhập 2018) đại diện cho hai triết lý kinh doanh đối lập: Circle K tối ưu hóa sự hiện diện vật lý với chiến lược phủ dày cụm mạng lưới và độc quyền khung giờ đêm muộn 22h–6h sáng; trong khi GS25 định vị là 'Lifestyle Platform' mang đậm bản sắc văn hóa Hàn Quốc với thế mạnh đồ ăn tươi chế biến tại chỗ (K-Food) và không gian check-in thời thượng.",
      "Đồ án tốt nghiệp 160+ trang này được triển khai theo phương pháp nghiên cứu kết hợp (Mixed Methods): kết hợp Desk Research (NielsenIQ, Q&Me), quan sát thực địa, khảo sát định lượng 93+ người tiêu dùng thực tế và phỏng vấn chuyên sâu 6 tầng tâm lý để bóc tách toàn diện mô hình 7P Marketing Mix, ma trận SWOT, phân khúc STP và đề xuất lộ trình chiến lược 2025–2030."
    ],

    kpis: [
      { number: "160+", label: "Trang Báo Cáo", icon: "📄" },
      { number: "93+",  label: "Mẫu Khảo Sát", icon: "📊" },
      { number: "6",    label: "Tầng Phỏng Vấn", icon: "🎙️" },
      { number: "7P",   label: "Marketing Mix", icon: "⚖️" }
    ],

    surveyData: [
      { number: "67.7%", tag: "Nhân khẩu học", title: "Gen Z Áp Đảo (18–24 Tuổi)", desc: "Khách hàng nòng cốt là sinh viên và người trẻ mới đi làm, có tần suất mua sắm 3–5 lần/tuần." },
      { number: "65.2%", tag: "Kênh ưu tiên", title: "CVS Là Lựa Chọn Số 1", desc: "Cửa hàng tiện lợi vượt qua cả TMĐT (58.7%) và Siêu thị (52.2%) trong các nhu cầu mua sắm thường nhật." },
      { number: ">60%",  tag: "Insight hành vi", title: "Trải Nghiệm Hơn Giá Cả", desc: "Gen Z lựa chọn cửa hàng dựa trên sự quen thuộc và không gian trải nghiệm thay vì so kè giá rẻ." },
      { number: ">50%",  tag: "Sức hút văn hóa", title: "Động Lực K-Food Tại GS25", desc: "Hơn một nửa khách hàng trẻ ghé GS25 vì bị lôi cuốn bởi ẩm thực Hàn Quốc và nhãn hàng riêng YouUs." }
    ],

    comparisonMatrix: [
      {
        p: "1. Product (Sản Phẩm)",
        circleK: "Tập trung FMCG đại chúng từ các thương hiệu quen thuộc (Coca-Cola, Nestlé, Vinamilk); F&B ăn liền chế biến nhanh (trà chanh, xúc xích, mì trộn); triết lý 4F (Fresh, Friendly, Fast, Full) với 2.000–3.000 SKU.",
        gs25: "Dẫn đầu đồ ăn tươi chế biến tại chỗ (Fresh Food chiếm 45–50% doanh thu); cơm hộp Dosirak, kimbap, tokbokki, quầy mì tự nấu chuẩn Hàn; 20% danh mục là nhãn hàng riêng YouUs độc quyền."
      },
      {
        p: "2. Price (Giá Cả)",
        circleK: "Định giá tiện lợi (cao hơn siêu thị 10–20%); dùng sản phẩm 'mồi' (cà phê, mì gói 15k–25k) để phá vỡ tâm lý ngại đắt; áp dụng định giá tâm lý (19.900đ) và các món ăn vặt dưới 20k tại quầy thu ngân.",
        gs25: "Phân khúc trung-cao cấp (bento 35k–60k); chiến lược khuyến mãi 2+1, 1+1 độc quyền kích thích mua số lượng lớn; tích hợp ví điện tử hoàn tiền (Cashback) giảm áp lực tâm lý chi tiêu."
      },
      {
        p: "3. Place (Phân Phối)",
        circleK: "Chiến lược 'cụm mạng lưới' (Cluster Strategy) với 500+ cửa hàng; ưu tiên bán kính 100m quanh trường học, văn phòng; độc quyền khung giờ 22h–6h sáng; tích hợp CK Club & Grab giao hàng trong 20 phút.",
        gs25: "450+ cửa hàng; tập trung chân tòa nhà văn phòng hạng A/B và chung cư cao cấp (Vinhomes, Masteri); chiến lược Bắc tiến mở 50 cửa hàng Hà Nội sau 9 tháng; O2O app giao hàng 30 phút."
      },
      {
        p: "4. Promotion (Truyền Thông)",
        circleK: "Gắn liền văn hóa đường phố của giới trẻ; xuất hiện tự nhiên trong các bài Rap (HIEUTHUHAI, Low G); hệ thống biển bảng ngoài trời và poster POS dày đặc kích thích mua bốc đồng.",
        gs25: "Mô hình 'Shoppertainment Loop' qua app; tính năng tủ lạnh ảo Fridge 25 lưu trữ quà khuyến mãi; chiến dịch gắn với làn sóng Hallyu, check-in TikTok và minigame tương tác cao."
      },
      {
        p: "5. People (Con Người)",
        circleK: "Vận hành trực tiếp (Directly operated); đội ngũ nhân viên trẻ 18–25 tuổi năng động; chuẩn hóa quy trình qua nền tảng đào tạo gamification Attensi.",
        gs25: "Đào tạo văn hóa dịch vụ chuẩn Hàn; nhân viên quầy đồ ăn nóng thành thạo kỹ năng tư vấn thêm topping (phô mai, trứng); thái độ ân cần, lịch sự."
      },
      {
        p: "6. Process (Quy Trình)",
        circleK: "Tốc độ giao dịch siêu tốc 1–3 phút; quy trình thanh toán không tiền mặt đồng bộ; quy trình nhận phản hồi khách hàng liên tục cải tiến.",
        gs25: "Trải nghiệm số hóa O2O; quy trình vận hành trạm nấu mì tự động; thanh toán một chạm qua app tích điểm và đặt hàng online tiện lợi."
      },
      {
        p: "7. Physical Evidence (Không Gian)",
        circleK: "Tông màu Đỏ - Cam - Trắng nổi bật rực rỡ 24/7; bố cục kệ hàng san sát tối ưu diện tích; khu vực bàn ghế ngồi lại tiện dụng (20–30m²).",
        gs25: "Tông màu Xanh Cyan - Trắng thanh lịch, hiện đại; mặt kính thoáng nhìn ra phố, ánh sáng trắng dịu mắt; không gian ngồi ăn rộng rãi chuẩn 'Instagrammable'."
      }
    ],

    swotAnalysis: {
      circleK: {
        s: "Mạng lưới 500+ cửa hàng lớn nhất Việt Nam; độc quyền khung giờ vàng 22h–6h sáng; độ nhận diện Top-of-mind số 1 đối với Gen Z.",
        w: "Chi phí thuê mặt bằng trung tâm và nhân sự 24/7 rất lớn; một số cửa hàng bị ám mùi dầu mỡ; thiếu thực phẩm tươi sống.",
        o: "Tốc độ đô thị hóa nhanh; xu hướng thanh toán không tiền mặt và quick-commerce; mở rộng mô hình cửa hàng tiện lợi thông minh CK GO.",
        t: "Áp lực tăng giá thuê mặt bằng; cạnh tranh gay gắt từ GS25 và 7-Eleven; yêu cầu vệ sinh an toàn thực phẩm ngày càng khắt khe."
      },
      gs25: {
        s: "Định vị 'Lifestyle Platform' độc đáo; ẩm thực K-Food tươi ngon dẫn đầu thị trường; nhãn hàng riêng YouUs có biên lợi nhuận cao; app loyalty hiện đại.",
        w: "Độ phủ cửa hàng ở ngoại thành còn mỏng; chi phí đầu tư không gian và vận hành app lớn; phụ thuộc vào độ nóng của làn sóng Hallyu.",
        o: "Chiến lược Bắc tiến thần tốc mở rộng thị phần; tệp khách hàng văn phòng có thu nhập tốt; xu hướng tiêu dùng trải nghiệm.",
        t: "Sự bám đuổi của Circle K và các chuỗi nội địa; biến động chi phí nhập khẩu nguyên liệu từ Hàn Quốc; cạnh tranh từ chuỗi cafe tiện ích."
      }
    },

    findingsTitle: "Phát Hiện Cốt Lõi Từ Nghiên Cứu Định Lượng & Định Tính",
    findings: [
      "<strong>Vị Thế Mạng Lưới:</strong> Circle K độc chiếm độ phủ với <strong>500+ cửa hàng</strong> (chiếm ~38% thị phần doanh thu CVS ngoại), tạo lợi thế cạnh tranh tuyệt đối ở khung giờ 22h–6h sáng khi các kênh bán lẻ khác đều đóng cửa.",
      "<strong>Insight Khách Hàng Trẻ:</strong> >60% Gen Z lựa chọn cửa hàng dựa trên <strong>mức độ quen thuộc và trải nghiệm không gian</strong> — yếu tố cảm xúc quan trọng hơn cạnh tranh về giá cả thuần túy.",
      "<strong>Sức Hút Hàn Quốc (GS25):</strong> GS25 bứt phá nhờ định vị 'điểm đến trải nghiệm', hơn <strong>50% Gen Z</strong> thừa nhận chịu ảnh hưởng từ văn hóa K-Food (mì cay, tokbokki, cơm cuộn) trong quyết định ghé thăm.",
      "<strong>Mô Hình Cạnh Tranh Rõ Rệt:</strong> Circle K lấy <strong>'Sự tiện lợi & Phủ sóng mua nhanh'</strong> làm lõi, trong khi GS25 tập trung vào <strong>'Trải nghiệm ẩm thực & Không gian kết nối'</strong>.",
      "<strong>Hành Vi Mua Hàng Bốc Đồng (Impulse Buying):</strong> Các món đồ ăn vặt và F&B giá dưới 20.000đ đặt ngay quầy thu ngân đóng góp tới 25–30% tổng giá trị giỏ hàng của khách hàng trẻ."
    ],

    recommendations: {
      circleK: [
        { title: "Tái cấu trúc không gian điểm bán (POS)", desc: "Nâng cấp hệ thống hút mùi và thông gió tại khu vực F&B; tách biệt rõ ràng khu ngồi ăn và lối đi mua sắm để nâng cao trải nghiệm khách hàng." },
        { title: "Bản địa hóa danh mục thực phẩm (Localization)", desc: "Bổ sung các món ăn sáng truyền thống Việt Nam chất lượng cao (bánh mì que giòn, xôi nóng) bên cạnh các món fast food phương Tây." },
        { title: "Cá nhân hóa ứng dụng CK Club", desc: "Ứng dụng dữ liệu lớn (Big Data) để gợi ý combo ưu đãi theo vị trí và khung giờ ghé thăm của từng khách hàng, biến app thành kênh giữ chân thân thiết." }
      ],
      gs25: [
        { title: "Đồng bộ nhận diện thương hiệu đa kênh", desc: "Thống nhất thiết kế biển hiệu và bảng giá tại các chi nhánh mở rộng; đẩy mạnh truyền thông củng cố định vị 'Lifestyle Platform đến từ Hàn Quốc'." },
        { title: "Phát triển món ăn biểu tượng (Signature Hero Product)", desc: "Tạo ra các sản phẩm F&B độc quyền có tính lan tỏa cao mà đối thủ không thể sao chép, củng cố vị thế Fresh Food Leader." },
        { title: "Mở rộng độ phủ đa phân khúc", desc: "Từng bước đưa mô hình tiếp cận các khu dân cư đông đúc và cổng trường đại học thay vì chỉ tập trung tại các cao ốc văn phòng hạng A." }
      ]
    },

    skills: [
      { icon: "📊", name: "Nghiên Cứu Thị Trường Định Lượng & Định Tính", desc: "Thiết kế bảng hỏi khảo sát 4 nhóm biến số, thực hiện phỏng vấn chuyên sâu 6 tầng tâm lý, xử lý & tổng hợp dữ liệu chuẩn học thuật." },
      { icon: "🧠", name: "Phân Tích Định Vị Thương Hiệu (Branding Frameworks)", desc: "Vận dụng thành thạo mô hình 7P Marketing Mix, SWOT, STP và AIDA để bóc tách chiến lược cạnh tranh giữa hai chuỗi bán lẻ hàng đầu." },
      { icon: "📈", name: "Đọc Hiểu Hành Vi Tiêu Dùng (Consumer Insights)", desc: "Phân tích tâm lý mua hàng bốc đồng (Impulse Buying), các yếu tố giữ chân khách hàng (retention drivers) và thị hiếu Gen Z / Millennials." },
      { icon: "💡", name: "Tư Duy Chiến Lược Bán Lẻ (CVS & Retail Strategy)", desc: "Đánh giá hiệu quả mô hình 24/7, chiến lược trưng bày sản phẩm (merchandising), tối ưu hóa trải nghiệm điểm bán (POS experience)." },
      { icon: "✍️", name: "Cấu Trúc Hóa & Viết Báo Cáo Chuyên Sâu 160+ Trang", desc: "Tổng hợp, cấu trúc hóa và trình bày báo cáo nghiên cứu 160+ trang với tư duy logic chặt chẽ, lập luận khoa học và trích dẫn chuẩn mực." }
    ],

    objectives: [
      "Đánh giá và so sánh mức độ hài lòng về sản phẩm & dịch vụ giữa Circle K và GS25",
      "Phân tích chiến lược Marketing Mix 7P & định vị thương hiệu của hai chuỗi bán lẻ",
      "Đo lường giá trị cạnh tranh và nhận thức thương hiệu trong tâm trí người tiêu dùng Việt Nam",
      "Đề xuất giải pháp chiến lược khả thi giai đoạn 2025–2030 nâng cao hiệu quả kinh doanh và phát triển bền vững (ESG)"
    ],

    process: [
      { icon: "🔍", title: "Tổng Quan Thị Trường & Desk Research", desc: "Phân tích bối cảnh ngành CVS Việt Nam quy mô 12.000 tỷ, khảo cứu 15+ báo cáo từ NielsenIQ, Q&Me, Vietdata và DPS Media." },
      { icon: "📚", title: "Khung Lý Thuyết & Mô Hình Đánh Giá", desc: "Xây dựng hệ quy chiếu dựa trên 7P Marketing Mix, SWOT, STP, AIDA và tâm lý học hành vi tiêu dùng hiện đại." },
      { icon: "📋", title: "Thu Thập Dữ Liệu Sơ Cấp (Survey)", desc: "Thiết kế bảng khảo sát 4 nhóm biến số, thu thập 93+ mẫu phản hồi hợp lệ từ người tiêu dùng có trải nghiệm thực tế cả 2 chuỗi." },
      { icon: "👁️", title: "Quan Sát Thực Địa (Field Observation)", desc: "Trực tiếp khảo sát các chi nhánh Circle K & GS25 ở nhiều khung giờ (đặc biệt khung giờ đêm 22h–6h), ghi nhận dòng di chuyển và hành vi khách hàng." },
      { icon: "🎙️", title: "Phỏng Vấn Chuyên Sâu 6 Tầng Tâm Lý", desc: "Thực hiện In-depth Interview phân tầng từ ấn tượng giác quan bề mặt → mua sắm ngẫu hứng → động lực sâu xa → kỳ vọng số hóa." },
      { icon: "💡", title: "Phân Tích Đối Đầu & Đề Xuất Chiến Lược", desc: "Xử lý dữ liệu định lượng, so sánh đối đầu 7 tiêu chí 7P cốt lõi, ma trận SWOT và đề xuất lộ trình hành động 2025–2030." }
    ],

    frameworks: ["7P Marketing Mix", "SWOT Analysis", "STP Model", "AIDA Framework", "Consumer Insight"],

    takeaways: [
      { icon: "🧠", title: "Tư duy phân tích dữ liệu thực chiến", desc: "Học cách đọc và chuyển hóa dữ liệu khảo sát thô thành insight hành vi tiêu dùng sắc bén, có giá trị ứng dụng cho doanh nghiệp." },
      { icon: "📊", title: "Thu hẹp khoảng cách giữa lý thuyết & thực tế", desc: "Tự tay bóc tách 7P và SWOT cho hai thương hiệu thật giúp nhận ra sự linh hoạt và biến hóa khôn lường của các chiến lược tiếp thị trên thương trường." },
      { icon: "✍️", title: "Kỹ năng quản lý đề tài học thuật quy mô lớn", desc: "Hoàn thiện báo cáo 160+ trang đòi hỏi tính kỷ luật cao, tư duy logic mạch lạc và sự phối hợp nhịp nhàng giữa các thành viên trong nhóm." }
    ]
  },


  3: {
    id: 3,
    title: "Xây Dựng Bộ Nhận Diện Thương Hiệu: AURA Botanica & Potty Living",
    type: "Đồ Án Học Tập · Brand Identity & Packaging Design",
    category: "branding",
    categoryName: "Nhận Diện Thương Hiệu",
    categoryIcon: "fas fa-palette",
    categoryColor: "#a78bfa",
    description: "Nghiên cứu định vị thương hiệu hương liệu & phong cách sống xanh; phát triển trọn bộ Brand Identity System bao gồm: Logo Guidelines, Bảng màu cảm xúc, Hệ thống bao bì chai lọ tinh dầu, nến thơm thủ công, máy khuếch tán gốm sứ và bộ ấn phẩm văn phòng cao cấp.",
    duration: "Tháng 04/2026",
    results: "Brand Guidelines • 06 Hạng mục sản phẩm & bao bì • Bảng màu chuẩn Pantone • Bộ ấn phẩm văn phòng",
    tools: ["Canva Pro", "Brand Guidelines", "Packaging Mockups", "Google Sheets", "Typography System"],
    kpis: [
      { number: "01", label: "Brand Guidelines Hoàn Chỉnh", icon: "📐" },
      { number: "06", label: "Hạng Mục Sản Phẩm & Bao Bì", icon: "🧴" },
      { number: "05", label: "Màu Nhận Diện Chuẩn Cảm Xúc", icon: "🎨" },
      { number: "100%", label: "Quy Chuẩn Gia Công & In Ấn", icon: "🏷️" }
    ],

    brandPhilosophy: {
      concept: "Quiet Luxury & Botanical Harmony",
      tagline: "Khơi nguồn năng lượng an lành từ thiên nhiên thuần khiết",
      persona: "Người tiêu dùng hiện đại yêu thích không gian sống thư giãn, đề cao tính thẩm mỹ tối giản (Scandinavian/Zen) và nguyên liệu hữu cơ bền vững."
    },

    brandPalette: [
      { name: "Forest Pine", hex: "#1B3B2B", rgb: "27, 59, 43", meaning: "Xanh rừng sâu đại diện cho thảo mộc nguyên bản, sự tĩnh tại và phát triển bền vững." },
      { name: "Warm Terracotta", hex: "#C86D51", rgb: "200, 109, 81", meaning: "Sắc đất nung ấm áp mang lại cảm xúc thủ công mộc mạc và năng lượng tích cực." },
      { name: "Oat Linen", hex: "#F4EFE6", rgb: "244, 239, 230", meaning: "Màu kem vải lanh thanh khiết, làm nền hoàn hảo giúp tôn vinh chi tiết sản phẩm." },
      { name: "Sage Whisper", hex: "#7C9082", rgb: "124, 144, 130", meaning: "Xanh xô thơm nhẹ nhàng, xoa dịu hệ thần kinh và tạo cảm giác thư giãn tức thì." },
      { name: "Obsidian Charcoal", hex: "#22252A", rgb: "34, 37, 42", meaning: "Đen than sắc nét tạo độ tương phản vững chãi, nâng tầm đẳng cấp sang trọng." }
    ],

    brandTypography: {
      display: {
        name: "Playfair Display / Cormorant Garamond",
        type: "Serif Cổ Điển Sang Trọng",
        usage: "Tiêu đề ấn phẩm, logo phụ, thẻ chứng nhận chất lượng",
        sample: "AURA BOTANICA — ESSENTIAL LIVING"
      },
      body: {
        name: "Inter / Montserrat",
        type: "Geometric Sans-Serif Hiện Đại",
        usage: "Nội dung bao bì, thành phần chi tiết, cẩm nang mùi hương",
        sample: "100% Pure Organic Essential Oil · Cold Pressed · 30ml / 1.01 fl.oz"
      }
    },

    brandProducts: [
      {
        id: "prod-1",
        title: "Chai Tinh Dầu Hổ Phách Thủy Tinh (Amber Dropper Bottle)",
        category: "BAO BÌ SẢN PHẨM CỐT LÕI · CORE PACKAGING",
        capacity: "30ml & 50ml",
        material: "Thủy tinh màu hổ phách chống 99% tia UV; nắp bóp gỗ sồi tự nhiên dập laser chìm logo; ống hút thủy tinh chia vạch chuẩn y tế.",
        printSpecs: "Giấy mỹ thuật bóc mờ kháng dầu (Oil-resistant Matte Label); mực in gốc đậu nành thân thiện môi trường; ép kim vàng chìm viền logo.",
        desc: "Thiết kế nhãn theo trường phái tối giản Scandinavian với bố cục phân cấp thị giác rõ nét: tên mùi hương nổi bật, biểu tượng mầm lá tối giản và chỉ dẫn công dụng trị liệu bằng hương thơm.",
        img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "prod-2",
        title: "Hũ Nến Thơm Gốm Mộc Sáp Đậu Nành (Ceramic Soy Candle)",
        category: "TRẢI NGHIỆM KHÔNG GIAN · HOME FRAGRANCE",
        capacity: "220g · 50 Giờ Cháy",
        material: "Hũ gốm nung men cát mờ thủ công chịu nhiệt; sáp đậu nành tự nhiên 100% không khói độc; bấc gỗ kép tạo tiếng nổ lách tách như củi sưởi.",
        printSpecs: "Tem niêm phong giấy kraft có số serial thủ công; đóng dấu sáp ong nóng (Wax Stamp Seal) mang đậm dấu ấn nghệ nhân.",
        desc: "Sau khi sử dụng hết nến, hũ gốm được thiết kế để tái sử dụng làm chậu cây mọng nước hoặc ly đựng cọ trang điểm, thể hiện tinh thần bền vững Zero-Waste của thương hiệu.",
        img: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "prod-3",
        title: "Máy Khuếch Tán Gốm Sứ Siêu Âm (Ceramic Aroma Diffuser)",
        category: "THIẾT BỊ NỘI THẤT CAO CẤP · SMART LIFESTYLE",
        capacity: "Dung tích 180ml · Phun sương Nano",
        material: "Vỏ ngoài chế tác bằng gốm sứ mộc vân chìm; chân đế gỗ sồi tự nhiên; dải đèn ambient ấm áp 2700K tạo hiệu ứng ánh hoàng hôn.",
        printSpecs: "Logo thương hiệu in lụa vi mô sắc nét dưới chân đế; nút cảm ứng ẩn tinh tế không phá vỡ vẻ đẹp điêu khắc nguyên khối.",
        desc: "Được định vị như một tác phẩm điêu khắc nghệ thuật trên bàn làm việc hoặc kệ sách, vừa thanh lọc không khí vừa nâng tầm thẩm mỹ không gian sống.",
        img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "prod-4",
        title: "Hộp Quà Tặng Nắp Nam Châm & Khay Định Hình (Rigid Gift Box)",
        category: "TRẢI NGHIỆM UNBOXING · PREMIUM GIFTING",
        capacity: "Kích thước 24 x 18 x 8 cm",
        material: "Hộp cứng carton 1200gsm bồi giấy mỹ thuật màu Oat Linen; khay lót bọc vải nhung êm ái cố định 3 chai tinh dầu và nến thơm.",
        printSpecs: "Logo ép kim dập nổi Gold Foil 3D trên nắp; đai giấy Sleeve hoạ tiết vân lá dập chìm; ruy băng vải thô dệt thủ công.",
        desc: "Tạo cảm xúc háo hức và đẳng cấp ngay từ giây phút mở hộp. Hộp quà thích hợp cho các dịp tri ân khách hàng VIP, quà tặng doanh nghiệp hoặc quà sinh nhật cao cấp.",
        img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "prod-5",
        title: "Bộ Ấn Phẩm Danh Thiếp & Thẻ Hướng Dẫn (Stationery & Scent Guide)",
        category: "ĐIỂM CHẠM THƯƠNG HIỆU · BRAND COLLATERALS",
        capacity: "Card 90x54mm & Scent Guide 100x150mm",
        material: "Giấy mỹ thuật Cotton 450gsm bề mặt có hạt lanh thô mộc; viền cạnh thiếp được sơn màu Forest Pine thủ công (Edge Painted).",
        printSpecs: "Kỹ thuật in dập chìm Letterpress truyền thống không dùng mực trên nền giấy dày; tích hợp mã QR dẫn đến cẩm nang phối hương online.",
        desc: "Thẻ hướng dẫn sử dụng kèm bánh xe hương thơm (Fragrance Wheel) giúp người dùng học cách mix tinh dầu theo từng cung bậc cảm xúc (Tập trung, Ngủ ngon, Giảm căng thẳng).",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "prod-6",
        title: "Túi Giấy Mua Sắm & Túi Vải Canvas Eco (Eco Shopping Bag & Tote)",
        category: "BAO BÌ BÁN LẺ & POSM · SUSTAINABLE PACKAGING",
        capacity: "Túi đứng 22 x 28 x 10 cm & Túi Tote 36 x 40 cm",
        material: "Giấy Kraft nâu không tẩy trắng 250gsm dẻo dai; quai xách sợi cotton đan mộc; túi tote làm từ vải mộc chưa qua xử lý hóa chất nhuộm.",
        printSpecs: "Mực in hữu cơ đơn sắc bảo vệ môi trường; tag giấy treo đục lỗ xỏ dây gai có thể gieo mầm nở hoa (Seed Paper Hangtag).",
        desc: "Điểm chạm cuối cùng khi khách hàng rời cửa hàng hoặc nhận đơn hàng ship. Lan tỏa thông điệp sống xanh tích cực và khuyến khích tái sử dụng nhiều lần.",
        img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      }
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
    title: "Tuyển Tập Concept Social: 'Ma Túy Nhựa' & Lifestyle",
    type: "Concept Cá Nhân · Social Content & Moodboard",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#87513c",
    description: "Bộ tuyển tập concept content social đa ngành nghề: từ văn hóa sở thích 'Ma túy nhựa' (Gunpla/Mô hình phái mạnh), góc máy Tech Desk Setup đến thời trang lifestyle. Đầy đủ Content Pillars, lịch 7 ngày, moodboard và kịch bản video.",
    duration: "Concept cá nhân · 10/2026",
    results: "4 Case đa ngành • Lịch 28+ ngày • 12 Khung Moodboard • 4 Kịch bản video/shot list",
    tools: ["Facebook", "Instagram", "TikTok", "Content Calendar", "Visual Direction"],
    googleDocUrl: "social-content-sample.html",
    buttonText: "Mở kế hoạch social & moodboard",
    featured: true,
    kpis: [
      { number: "04", label: "Concept ngành nghề", icon: "📑" },
      { number: "28+", label: "Ngày lịch nội dung mẫu", icon: "📅" },
      { number: "04", label: "Kịch bản video / shot list", icon: "🎬" }
    ],
    findingsTitle: "Điểm Nhấn Của Các Concept",
    findings: [
      "<strong>Case 'Ma túy nhựa' (Gunpla):</strong> Bắt đúng tâm lý đam mê cơ khí, nỗi lo 'giấu giá với nóc nhà' và niềm vui xả stress sau giờ làm việc của phái mạnh.",
      "<strong>Case Tech Desk Setup:</strong> Kết hợp giữa hiệu năng phần cứng, âm thanh phím cơ gõ đầm tay (thocky sound) và ánh sáng ambient truyền cảm hứng.",
      "<strong>Case Lifestyle & Anime:</strong> Từ nghiên cứu kỹ lưỡng bảng size thời trang đến kích hoạt thảo luận ký ức tuổi thơ trên mạng xã hội."
    ],
    objectives: [
      "Xây dựng kế hoạch social chạm đúng vào insight và tiếng lóng (slang) của từng cộng đồng đặc thù",
      "Lập lịch nội dung mẫu 7 ngày cho từng case, phân bổ cân bằng giữa bài tương tác và chia sẻ giá trị",
      "Dựng khung Moodboard trực quan với phong cách hình ảnh sắc nét, thẩm mỹ cao",
      "Viết kịch bản ngắn (Reels/TikTok 15s) kèm shot list chi tiết và câu thoại bắt trend"
    ],
    process: [
      { icon: "🔎", title: "Nghiên Cứu Insight", desc: "Đào sâu vào thói quen, tiếng lóng và tâm lý thật của người chơi/người mua trong từng cộng đồng." },
      { icon: "🧭", title: "3 Tuyến Content Pillars", desc: "Phân chia rõ ràng: Tuyến tạo đồng cảm/meme viral, Tuyến chia sẻ kỹ thuật/mẹo hay, và Tuyến showcase tự hào." },
      { icon: "📅", title: "Lên Lịch & Định Dạng", desc: "Phân bổ Carousel giải thích, Story hỏi đáp nhanh và Video ngắn bùng nổ theo từng ngày trong tuần." },
      { icon: "🎨", title: "Moodboard & Script", desc: "Chọn lọc hình ảnh tư liệu chuẩn thẩm mỹ; viết kịch bản phân cảnh chi tiết cho khâu quay dựng." }
    ],
    frameworks: ["Community Insight", "Content Pillars", "Social Calendar", "Visual Moodboard", "Short-Form Script"],
    takeaways: [
      { icon: "🤖", title: "Nói đúng ngôn ngữ của cộng đồng", desc: "Hiểu tiếng lóng 'ma túy nhựa' hay 'thocky switch' giúp bài viết tự nhiên như một người trong cuộc chia sẻ." },
      { icon: "📱", title: "Mỗi định dạng phục vụ một mục tiêu", desc: "Carousel để kích thích nút Lưu (Save), Story để kéo tương tác bình chọn, Video ngắn để kéo lượt xem mới." },
      { icon: "🎥", title: "Kịch bản tiền kỳ rõ ràng", desc: "Shot list phân định rõ thời lượng, góc máy và text on screen giúp khâu quay dựng thực hiện nhanh gấp đôi." }
    ]
  },

  7: {
    id: 7,
    title: "Thiết Kế Website & Landing Page (LadiPage)",
    type: "Thực Hành & Triển Khai · Web & Landing Page",
    category: "web",
    categoryName: "Website & Landing Page",
    categoryIcon: "fas fa-laptop-code",
    categoryColor: "#0284c7",
    description: "Bộ đôi sản phẩm thiết kế giao diện thực chiến: Website thương mại điện tử chuẩn SEO Potty.vn (Tinh dầu thiên nhiên & Máy khuếch tán) và Landing Page chuyển đổi cao trên nền tảng LadiPage cho Khóa học Digital Marketing VTC Academy.",
    duration: "06/2026 – Hiện tại",
    results: "01 Website E-commerce hoàn chỉnh • 01 Landing Page CRO • 100% Mobile-First Responsive",
    tools: ["LadiPage", "Web Builder", "UI/UX Design", "Canva", "HTML & CSS"],
    featured: true,
    kpis: [
      { number: "02", label: "Nền tảng hoàn thiện", icon: "💻" },
      { number: "100%", label: "Tối ưu Mobile-First", icon: "📱" },
      { number: "AIDA", label: "Cấu trúc chuyển đổi CRO", icon: "🎯" }
    ],
    links: [
      {
        title: "Website Thương Mại Điện Tử: potty.vn",
        tag: "E-Commerce Website",
        url: "https://potty.vn",
        btnText: "Ghé Thăm Website potty.vn ↗",
        icon: "fas fa-globe",
        desc: "Thương hiệu Tinh Dầu Thiên Nhiên & Máy Khuếch Tán Cao Cấp. Giao diện trực quan, bảng màu tự nhiên, tối ưu danh mục sản phẩm, bộ lọc giá và trải nghiệm đặt hàng thuận tiện."
      },
      {
        title: "Landing Page Tuyển Sinh: VTC Academy (LadiPage)",
        tag: "CRO Landing Page",
        url: "http://preview.ladipage.me/6a33f016a44bf10012276660",
        btnText: "Xem Preview LadiPage ↗",
        icon: "fas fa-rocket",
        desc: "Landing Page tuyển sinh Khóa học Digital Marketing 15 tháng trên nền tảng LadiPage. Cấu trúc AIDA thuyết phục, form đăng ký nhận tư vấn nổi bật, bảng lộ trình học tập và section cam kết đầu ra việc làm."
      }
    ],
    findingsTitle: "Phân Tích Bố Cục & Trải Nghiệm Người Dùng (UI/UX)",
    findings: [
      "<strong>Website Potty.vn (E-commerce):</strong> Tập trung xây dựng niềm tin thương hiệu thông qua phong cách tối giản, hình ảnh sản phẩm tinh dầu & máy xông sắc nét, thông tin xuất xứ minh bạch và các chính sách bảo hành, đổi trả được làm nổi bật trên thanh điều hướng.",
      "<strong>Landing Page VTC Academy (LadiPage):</strong> Tối ưu từng điểm chạm chuyển đổi (CRO) với thông điệp mạnh mẽ ngay First Screen (Hero Section), tích hợp Form đăng ký nhận tư vấn nhanh, đếm ngược thời gian ưu đãi và các khối chứng chỉ / đối tác doanh nghiệp.",
      "<strong>Trải Nghiệm Đa Màn Hình (Mobile-First):</strong> Cả hai sản phẩm đều được thiết kế thích ứng tuyệt đối trên điện thoại di động (Mobile Responsive), đảm bảo cỡ chữ dễ đọc, nút bấm lớn vừa vặn ngón tay cái và menu điều hướng vuốt chạm mượt mà."
    ],
    skills: [
      { icon: "🎨", name: "UI/UX Layout & Wireframing", desc: "Phân bổ bố cục trực quan, điều hướng mắt người xem theo luồng thị giác từ trên xuống dưới." },
      { icon: "⚡", name: "LadiPage & Web Builder Mastery", desc: "Thành thạo công cụ thiết kế kéo thả, cấu hình form dữ liệu, hiệu ứng tương tác và tối ưu tải trang." },
      { icon: "🎯", name: "CRO & Conversion Architecture", desc: "Áp dụng mô hình AIDA để bố trí tiêu đề, minh chứng xã hội (Social Proof) và nút kêu gọi hành động (CTA)." }
    ],
    objectives: [
      "Xây dựng giao diện website thương mại điện tử chuyên nghiệp, thể hiện đúng tinh thần thiên nhiên và thư giãn của thương hiệu Potty.vn",
      "Thiết kế Landing Page chuẩn CRO trên LadiPage phục vụ chiến dịch tuyển sinh ngành Digital Marketing của VTC Academy",
      "Bảo đảm tính tương thích hoàn hảo giữa màn hình máy tính để bàn (Desktop) và điện thoại di động (Mobile)",
      "Tối ưu hóa các nút Call-To-Action (CTA) và luồng thao tác của người dùng để giảm thiểu tỷ lệ thoát trang (Bounce Rate)"
    ],
    process: [
      { icon: "🔍", title: "Nghiên Cứu Sản Phẩm & Khách Hàng", desc: "Xác định chân dung khách hàng mua tinh dầu Potty.vn và học viên tiềm năng quan tâm khóa học Digital Marketing." },
      { icon: "📐", title: "Xây Dựng Bố Cục Wireframe", desc: "Lên khung sườn các section: Hero banner, Giá trị cốt lõi, Danh mục sản phẩm/Lộ trình học, Bằng chứng xã hội và Form đăng ký." },
      { icon: "💻", title: "Thiết Kế Thực Tế Trên Web & LadiPage", desc: "Phối màu, lựa chọn font chữ hiện đại, cắt ghép hình ảnh và cấu hình các nút bấm chuyển đổi." },
      { icon: "📱", title: "Tối Ưu Giao Diện Di Động & Tốc Độ", desc: "Kiểm tra hiển thị đa kích thước màn hình, sửa lỗi tràn viền (overflow) và đo lường trải nghiệm thực tế." }
    ],
    frameworks: ["AIDA Funnel", "CRO Principles", "Mobile-First Design", "Visual Hierarchy", "Call-To-Action (CTA)"],
    takeaways: [
      { icon: "🎯", title: "Landing Page phục vụ chuyển đổi, không chỉ để ngắm", desc: "Mọi khối thông tin trên Landing Page phải dẫn dắt người dùng đến hành động cụ thể (Điền form / Đặt hàng) thay vì đưa thông tin lan man." },
      { icon: "📱", title: "Ưu tiên tuyệt đối cho giao diện điện thoại", desc: "Hơn 80% lưu lượng truy cập từ mạng xã hội đến từ smartphone, vì vậy thiết kế mobile phải được chăm chút tỉ mỉ từng pixel." },
      { icon: "🛡️", title: "Xây dựng niềm tin là chìa khóa bán hàng", desc: "Đối với website bán lẻ như Potty.vn, chính sách rõ ràng và hình ảnh chân thực là yếu tố quyết định người dùng có bấm Mua Ngay hay không." }
    ],
    googleDocUrl: "https://potty.vn",
    buttonText: "Truy Cập Website Potty.vn (potty.vn)"
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
  initSeoPageFeatures();
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

// 6. TÍNH NĂNG TƯƠNG TÁC CHO CỤM TRANG SEO (EDITORIAL & SERP LAB)
function initSeoPageFeatures() {
  initReadingProgressBar();
  initSerpDeviceToggle();
  initSerpFilterAndSearch();
  initTableOfContentsScrollSpy();
  initFaqAccordion();
  initArticleQuickSelect();
  initCopySnippetButtons();
}

// 6.1. Thanh tiến trình đọc (Reading Progress Bar)
function initReadingProgressBar() {
  const bar = document.querySelector('.reading-progress-bar');
  if (!bar) return;

  function updateProgress() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// 6.2. Chuyển đổi hiển thị SERP (Desktop vs Mobile)
function initSerpDeviceToggle() {
  const deviceBtns = document.querySelectorAll('.device-btn');
  const mockup = document.querySelector('.seo-preview-mockup-wrap');
  if (deviceBtns.length === 0 || !mockup) return;

  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-device');
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (mode === 'mobile') {
        mockup.classList.add('mobile-view');
      } else {
        mockup.classList.remove('mobile-view');
      }
    });
  });
}

// 6.3. Bộ lọc danh mục & Tìm kiếm trực tiếp trên trang SEO Samples
function initSerpFilterAndSearch() {
  const searchInput = document.getElementById('serpSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const resultsList = document.querySelector('.search-results-list');
  const articles = document.querySelectorAll('.google-search-result');
  const countIndicator = document.getElementById('serpCountText');
  const viewBtns = document.querySelectorAll('.view-btn');

  if (!resultsList || articles.length === 0) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function filterResults() {
    let visibleCount = 0;
    articles.forEach(art => {
      const category = art.getAttribute('data-category') || '';
      const title = art.querySelector('.google-result-title')?.textContent.toLowerCase() || '';
      const desc = art.querySelector('.google-result-description')?.textContent.toLowerCase() || '';
      const keyword = (art.getAttribute('data-keyword') || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = !searchQuery || title.includes(searchQuery) || desc.includes(searchQuery) || keyword.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        art.style.display = 'flex';
        visibleCount++;
      } else {
        art.style.display = 'none';
      }
    });

    if (countIndicator) {
      countIndicator.textContent = `Hiển thị ${visibleCount}/${articles.length} bài viết SEO`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = searchQuery ? 'inline-block' : 'none';
      filterResults();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        filterResults();
      }
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'all';
      filterResults();
    });
  });

  // Chuyển đổi giao diện danh sách SERP / Grid Cards
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-view');
      if (mode === 'grid') {
        resultsList.classList.add('grid-view');
      } else {
        resultsList.classList.remove('grid-view');
      }
    });
  });
}

// 6.4. Mục lục thông minh Scroll Spy
function initTableOfContentsScrollSpy() {
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = document.querySelectorAll('.article-body h2[id]');
  if (tocLinks.length === 0 || headings.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '0px 0px -65% 0px' });

  headings.forEach(h => observer.observe(h));
}

// 6.5. FAQ Accordion đóng/mở mượt mà
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.seo-faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const wasActive = item.classList.contains('active');
        item.classList.toggle('active', !wasActive);
      });
    }
  });
}

// 6.6. Quick Select chuyển nhanh bài viết
function initArticleQuickSelect() {
  const select = document.querySelector('.article-quick-select');
  if (select) {
    select.addEventListener('change', (e) => {
      if (e.target.value) {
        window.location.href = e.target.value;
      }
    });
  }
}

// 6.7. Nút sao chép từ khóa / snippet nhanh
function initCopySnippetButtons() {
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Đã sao chép vào bộ nhớ tạm!';
      copyToClipboard(text, label);
    });
  });
}


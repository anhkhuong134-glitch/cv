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
    desc: "Tuyển tập 13 đồ án và case study chuyên sâu: Nghiên cứu thị trường, Nhận diện thương hiệu, Content Lab, Banner Ads, Website Concept và SEO On-Page."
  },
  research: {
    id: "research",
    name: "Nghiên Cứu Thị Trường",
    icon: "fas fa-chart-pie",
    desc: "Đồ án nhóm nghiên cứu Circle K & GS25 (sản phẩm thật), đối sánh MUJI & KOKUYO Campus và Content Audit thực đơn Highlands Coffee."
  },
  branding: {
    id: "branding",
    name: "Nhận Diện Thương Hiệu",
    icon: "fas fa-palette",
    desc: "Bộ 3 nhận diện concept nguyên bản: NẾP GẤP (Văn phòng phẩm), MẺ NHỎ (Cà phê pha tại nhà) và QUAI VẢI (Túi dùng hằng ngày) với logo vector và 6 ấn phẩm/case."
  },
  content: {
    id: "content",
    name: "Kế Hoạch Content",
    icon: "fas fa-pen-nib",
    desc: "Content Lab với 4 case study thực chiến (NẾP GẤP, MẺ NHỎ, QUAI VẢI, NHỊP VIỆC): kế hoạch 7 ngày, caption hoàn chỉnh, carousel và kịch bản video."
  },
  design: {
    id: "design",
    name: "Media & Banner Ads",
    icon: "fas fa-image",
    desc: "Thiết kế bộ Banner Ads MẺ NHỎ 'Pha theo gu của bạn' thích ứng 8 kích thước chuẩn đa nền tảng và thử nghiệm thông điệp A/B."
  },
  web: {
    id: "web",
    name: "Website & Landing Page",
    icon: "fas fa-laptop-code",
    desc: "Website Concept NẾP GẤP: Cửa hàng văn phòng phẩm trực tuyến hỗ trợ người dùng chọn bố cục sổ theo nhu cầu thực tế."
  },
  seo: {
    id: "seo",
    name: "SEO Content",
    icon: "fas fa-search",
    desc: "Tuyển tập 11 bài viết SEO On-Page đa ngành dài 2.500 từ kèm SERP Inspector và hồ sơ kỹ thuật On-Page Blueprint 8 phần minh bạch."
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
  // ==================== DỰ ÁN 1: CIRCLE K & GS25 (SẢN PHẨM THẬT) ====================
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
    links: [
      { url: "https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0", icon: "fas fa-file-word", btnText: "Báo Cáo Gốc (160+ Trang)", title: "Mở toàn văn báo cáo Google Docs" },
      { url: "/nghien-cuu/circle-k-gs25/", icon: "fas fa-chart-pie", btnText: "Xem Case Tóm Tắt", title: "Mở trang tóm tắt nghiên cứu" }
    ],
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

  // ==================== DỰ ÁN 20: MUJI VS KOKUYO CAMPUS (NGHIÊN CỨU) ====================
  20: {
    id: 20,
    title: "Nghiên Cứu Đối Sánh Văn Phòng Phẩm: MUJI vs KOKUYO Campus",
    type: "Desk Research Cá Nhân · Nguồn Công Khai",
    category: "research",
    categoryName: "Nghiên Cứu Thị Trường",
    categoryIcon: "fas fa-chart-pie",
    categoryColor: "#607965",
    duration: "10/2026",
    results: "3 Nguồn đối chiếu sơ cấp • Bảng so sánh 3 khía cạnh",
    tools: ["Desk Research", "Content Audit", "Comparative Matrix"],
    description: "Tìm hiểu cách hai thương hiệu văn phòng phẩm hàng đầu Nhật Bản diễn giải giá trị sản phẩm: MUJI ở nguyên tắc phát triển tinh giản, KOKUYO Campus ở tình huống sử dụng thực tế khi viết và mở sổ. Rút ra bài học ứng dụng cho concept NẾP GẤP.",
    featured: false,
    links: [
      { url: "/nghien-cuu/muji-kokuyo/", icon: "fas fa-arrow-up-right-from-square", btnText: "Xem Báo Cáo Nghiên Cứu", title: "Mở chi tiết desk research" },
      { url: "/nhan-dien/nep-gap/", icon: "fas fa-palette", btnText: "Xem Ứng Dụng NẾP GẤP", title: "Xem concept văn phòng phẩm NẾP GẤP" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Desk Research Tự Do",
      class: "Digital Marketing Portfolio 2026",
      team: "Nghiên cứu cá nhân (Có hỗ trợ AI)",
      time: "Tháng 10/2026",
      docPages: "Nguồn công khai đối chiếu"
    },
    executiveSummary: "Nghiên cứu đối chiếu cách MUJI và KOKUYO Campus xây dựng niềm tin cho người dùng bằng thông tin chức năng cụ thể thay vì tuyên bố chung chung. Kết quả phân tích chỉ ra rằng khách hàng mua văn phòng phẩm quan tâm sâu sắc đến góc mở sổ, độ phẳng của gáy, cữ dòng kẻ và khả năng tương thích của giấy với các loại bút.",
    kpis: [
      { number: "3", label: "Nguồn tài liệu sơ cấp", icon: "fas fa-book" },
      { number: "3", label: "Khía cạnh so sánh", icon: "fas fa-columns" },
      { number: "100%", label: "Dữ kiện có trích dẫn", icon: "fas fa-check-double" },
      { number: "1", label: "Khung ứng dụng NẾP GẤP", icon: "fas fa-lightbulb" }
    ],
    surveyData: [
      { number: "MUJI", tag: "Triết lý vật liệu", title: "Giải thích qua nguyên tắc tinh giản", desc: "Tài liệu What is MUJI nhấn mạnh việc lựa chọn chất liệu và bao gói tối giản để giữ mức giá hợp lý và tính trung thực." },
      { number: "KOKUYO", tag: "Trải nghiệm viết", title: "Tập trung giải quyết vướng mắc khi mở sổ", desc: "Campus Binder và Campus Notebook mô tả chi tiết giải pháp tránh vòng gáy chạm tay và thiết kế góc mở phẳng 180 độ." },
      { number: "Áp dụng", tag: "Đề xuất cho NẾP GẤP", title: "Trưng bày trang ruột thay vì chỉ chụp bìa", desc: "Không hứa hẹn tăng năng suất sáo rỗng; cho người dùng xem trước cữ dòng kẻ và bố cục phân chia tuần/ngày." }
    ],
    comparisonMatrix: [
      { p: "Định vị cốt lõi", circleK: "Tối giản, không nhãn mác, giá trị từ bản chất vật liệu", gs25: "Công năng học đường, tối ưu thao tác ghi chép và độ bền gáy" },
      { p: "Cách chứng minh sản phẩm", circleK: "Giải thích quá trình tinh giản sản xuất và tiết chế chi tiết thừa", gs25: "Mô tả cơ chế gáy thông minh, không cấn tay, cữ kẻ tam giác định vị" },
      { p: "Bài học cho Content", circleK: "Rõ ràng, điềm tĩnh, trung thực về nguồn gốc và chất liệu", gs25: "Đi thẳng vào vấn đề người học gặp phải trong từng buổi ghi chép" }
    ],
    recommendations: {
      circleK: [
        { title: "Nêu rõ kích thước và cữ kẻ ruột sổ", desc: "Người dùng cần biết khoảng cách giữa các dòng kẻ trước khi chọn mua sổ tay." },
        { title: "Không kể chuyện bền vững khi chưa có kiểm định", desc: "Chỉ tuyên bố chất liệu tái chế khi có chứng nhận FSC hoặc số liệu sản xuất thực tế." }
      ],
      gs25: [
        { title: "Minh họa góc mở phẳng thực tế", desc: "Chụp hoặc dựng hình chi tiết gáy sổ mở 180 độ trên mặt bàn làm việc." },
        { title: "Cung cấp bản in thử một trang", desc: "Cho phép độc giả tải file PDF in thử trước khi quyết định mua một cuốn sổ hoàn chỉnh." }
      ]
    }
  },

  // ==================== DỰ ÁN 21: HIGHLANDS COFFEE MENU AUDIT (NGHIÊN CỨU) ====================
  21: {
    id: 21,
    title: "Audit Nội Dung Thực Đơn Website: Highlands Coffee",
    type: "Content Audit · Nguồn Công Khai",
    category: "research",
    categoryName: "Nghiên Cứu Thị Trường",
    categoryIcon: "fas fa-chart-pie",
    categoryColor: "#87513c",
    duration: "10/2026",
    results: "Audit 4 nhóm đồ uống • Đề xuất Wireframe 4 bước chọn gu",
    tools: ["Content Audit", "Information Architecture", "Wireframing"],
    description: "Phân tích cách cấu trúc thực đơn trực tuyến của chuỗi cà phê lớn nhất Việt Nam. Đề xuất quy trình 4 bước hỏi gu uống (đen/sữa, dụng cụ, cỡ xay) để ứng dụng vào concept cà phê pha tại nhà MẺ NHỎ.",
    featured: false,
    links: [
      { url: "/nghien-cuu/highlands-menu/", icon: "fas fa-arrow-up-right-from-square", btnText: "Xem Báo Cáo Audit", title: "Mở chi tiết audit thực đơn Highlands" },
      { url: "/nhan-dien/me-nho/", icon: "fas fa-palette", btnText: "Xem Ứng Dụng MẺ NHỎ", title: "Xem concept cà phê MẺ NHỎ" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Content Audit Độc Lập",
      class: "Digital Marketing Portfolio 2026",
      team: "Nghiên cứu cá nhân (Có hỗ trợ AI)",
      time: "Tháng 10/2026",
      docPages: "Trang thực đơn chính thức Highlands"
    },
    executiveSummary: "Phân tích trải nghiệm đọc thực đơn trực tuyến tại website Highlands Coffee. Nhận thấy người dùng mới thường gặp khó khăn khi hình dung độ đậm nhạt và hương vị thực tế. Đề xuất một wireframe chọn gu 4 bước cho concept MẺ NHỎ để giúp người mua tại nhà dễ dàng gọi tên món mình thích.",
    kpis: [
      { number: "4", label: "Nhóm thức uống phân tích", icon: "fas fa-mug-hot" },
      { number: "1", label: "Wireframe đề xuất mới", icon: "fas fa-sitemap" },
      { number: "4", label: "Bước trắc nghiệm chọn gu", icon: "fas fa-filter" },
      { number: "0", label: "Khẳng định cảm tính", icon: "fas fa-shield-alt" }
    ],
    surveyData: [
      { number: "Nhóm món", tag: "Phân loại hiện tại", title: "Cà phê, Trà, Freeze, Thức uống khác", desc: "Thực đơn hiện phân nhóm theo dòng sản phẩm truyền thống nhưng chưa có bộ lọc theo mức độ đậm vị hoặc hàm lượng caffeine." },
      { number: "Vấn đề", tag: "Góc nhìn người mới", title: "Khó hình dung gu uống phù hợp", desc: "Khách hàng mua cà phê pha tại nhà thường không biết ly cà phê pha ra sẽ ngọt béo hay đắng đậm nếu chỉ đọc tên mỹ miều." },
      { number: "Đề xuất", tag: "Giải pháp cho MẺ NHỎ", title: "Quy trình hỏi gu trước khi gợi ý gói hạt", desc: "Bắt đầu từ câu hỏi: 'Bạn muốn uống đen hay thêm sữa?' và 'Dụng cụ bạn đang có ở nhà là gì?'." }
    ],
    recommendations: {
      circleK: [
        { title: "Bổ sung thanh đo độ đậm (Roast Level)", desc: "Giúp người mua phân biệt rõ giữa rang vừa (Medium) và rang đậm (Dark roast)." },
        { title: "Hướng dẫn tỷ lệ pha gợi ý", desc: "Cung cấp công thức pha phin chuẩn (tỷ lệ bột:nước) ngay trên bao bì hoặc thẻ kẹp." }
      ],
      gs25: [
        { title: "Phiếu thử gu kèm theo đơn hàng", desc: "Gửi kèm phiếu ghi chú cảm nhận để khách hàng đánh giá sau lần pha đầu tiên." },
        { title: "Không dùng thuật ngữ nếm quá hàn lâm", desc: "Thay vì 'hương hoa cam acidity sáng', dùng cách diễn đạt gần gũi: 'vị chua thanh nhẹ dễ uống'." }
      ]
    }
  },

  // ==================== DỰ ÁN 10: NẾP GẤP (NHẬN DIỆN THƯƠNG HIỆU) ====================
  10: {
    id: 10,
    title: "Bộ Nhận Diện NẾP GẤP — Văn Phòng Phẩm & Công Cụ Ghi Chép",
    type: "Concept Cá Nhân · Brand Identity & Packaging",
    category: "branding",
    categoryName: "Nhận Diện Thương Hiệu",
    categoryIcon: "fas fa-palette",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Logo Vector 24 đơn vị • 6 Ứng dụng NG01–NG06 • Bảng màu Xanh Mực & Vàng Giấy",
    tools: ["SVG Vector", "Brand Guidelines", "Packaging Design", "Typography"],
    description: "NẾP GẤP bắt đầu từ chi tiết góc giấy được gấp lại để đánh dấu điều muốn quay về. Nhận diện sử dụng góc gấp làm nguyên tắc đồ họa nhất quán từ dấu logo, đai giấy, bìa sổ A5 đến ruột lịch tuần 2 trang.",
    featured: true,
    links: [
      { url: "/nhan-dien/nep-gap/", icon: "fas fa-palette", btnText: "Khám Phá Brand Case", title: "Mở trang showcase nhận diện NẾP GẤP" },
      { url: "/web/nep-gap/", icon: "fas fa-laptop-code", btnText: "Xem Website Concept", title: "Mở cửa hàng concept NẾP GẤP" },
      { url: "/tai-nguyen/#lich-tuan", icon: "fas fa-download", btnText: "Tải Lịch Tuần A5", title: "Tải biểu mẫu lịch tuần" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Thiết Kế Nhận Diện",
      class: "Brand Identity Design 2026",
      team: "Khương Tuấn Anh (Định hướng & Thiết kế)",
      time: "Tháng 10/2026",
      docPages: "Brand Guidelines & 6 Ấn phẩm SVG"
    },
    executiveSummary: "NẾP GẤP được xây dựng cho người học và người làm sáng tạo nội dung cần một công cụ ghi chép có cấu trúc vừa đủ để bắt đầu nhưng có khoảng trống để linh hoạt điều chỉnh. Tagline: 'Ghi một ý, mở một hướng'. Bảng màu lấy cảm hứng từ chất liệu thực tế: Xanh mực (#273B4A), Vàng giấy (#F2D97C) và Giấy trắng (#FAFBF8).",
    kpis: [
      { number: "24", label: "Đơn vị lưới căn chỉnh Logo", icon: "fas fa-th" },
      { number: "6", label: "Ấn phẩm ứng dụng hoàn chỉnh", icon: "fas fa-layer-group" },
      { number: "4", label: "Mã màu nhận diện chuẩn", icon: "fas fa-swatchbook" },
      { number: "100%", label: "Artwork Vector SVG nguyên bản", icon: "fas fa-bezier-curve" }
    ],
    surveyData: [
      { number: "NG01", tag: "Bìa Sổ A5", title: "Artwork Bìa Sổ 148×210mm Mặt Trước & Sau", desc: "Mặt trước nền giấy thoáng với logo góc trái và góc gấp vàng đặc trưng. Mặt sau in thông điệp: 'Ý tưởng chưa cần hoàn chỉnh để được ghi lại'." },
      { number: "NG02", tag: "Ruột Lịch Tuần", title: "Bố cục lịch tuần 2 trang mở phẳng", desc: "Trang trái ưu tiên lịch Thứ hai - Thứ tư và ô việc gấp. Trang phải dành cho Thứ năm - Chủ nhật và vùng 'Ý tưởng đang mở'." },
      { number: "NG03", tag: "Bộ 3 Thẻ Note", title: "Thẻ ghi chú 90×120mm phân loại tác vụ", desc: "3 màu thẻ riêng biệt: 'Việc cần làm' (Xanh mực), 'Điều cần hỏi' (Vàng giấy), và 'Ý tưởng mới' (Xanh nhạt)." }
    ],
    recommendations: {
      circleK: [
        { title: "Đai giấy sổ NG04", desc: "Mặt chính in tagline 'Ghi một ý, mở một hướng', mặt phụ ghi rõ nhãn 'Thiết kế concept / Chưa xác nhận vật liệu sản xuất'." },
        { title: "Header cửa hàng NG06", desc: "Thiết kế banner web concept 1440×640 và 390×560 nhấn mạnh thông điệp: 'Thử bố cục trước, chọn sổ sau'." }
      ],
      gs25: [
        { title: "Quy chuẩn khoảng trống tối thiểu", desc: "Clearspace quanh logo luôn bằng 2 lần cạnh góc gấp (4 đơn vị lưới) để đảm bảo độ nhận diện." },
        { title: "Tone of Voice điềm tĩnh", desc: "Giọng văn chia sẻ nhẹ nhàng, tôn trọng thói quen của người dùng, không phán xét người quên ghi chép." }
      ]
    }
  },

  // ==================== DỰ ÁN 11: MẺ NHỎ (NHẬN DIỆN THƯƠNG HIỆU) ====================
  11: {
    id: 11,
    title: "Bộ Nhận Diện MẺ NHỎ — Cà Phê Cho Việc Pha Tại Nhà",
    type: "Concept Cá Nhân · Brand Identity & Packaging",
    category: "branding",
    categoryName: "Nhận Diện Thương Hiệu",
    categoryIcon: "fas fa-palette",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Logo phin 32 đơn vị • 6 Ứng dụng MN01–MN06 • Bảng màu Nâu Rang & Xanh Lá Trầm",
    tools: ["Packaging Concept", "Brand Voice", "SVG Vector", "Information Hierarchy"],
    description: "MẺ NHỎ là concept cà phê pha tại nhà với định hướng giúp người mới diễn đạt gu uống và chọn cách pha phù hợp. Logo 2 vòng cung hở gợi nhịp phin nhỏ giọt, đi kèm hệ bao bì và phiếu hỏi gu thực tế.",
    featured: false,
    links: [
      { url: "/nhan-dien/me-nho/", icon: "fas fa-palette", btnText: "Khám Phá Brand Case", title: "Mở trang showcase nhận diện MẺ NHỎ" },
      { url: "/thiet-ke/banner-me-nho/", icon: "fas fa-image", btnText: "Xem Bộ Banner Ads", title: "Xem 8 banner quảng cáo MẺ NHỎ" },
      { url: "/tai-nguyen/#phieu-thu-gu", icon: "fas fa-download", btnText: "Tải Phiếu Thử Gu", title: "Tải biểu mẫu thử gu cà phê" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Thiết Kế Nhận Diện",
      class: "Brand Identity Design 2026",
      team: "Khương Tuấn Anh (Định hướng & Thiết kế)",
      time: "Tháng 10/2026",
      docPages: "Brand Guidelines & 6 Ấn phẩm SVG"
    },
    executiveSummary: "MẺ NHỎ ưu tiên những thứ người mua cần đọc: tên sản phẩm, cách dùng dự kiến và chỗ ghi chú sau khi thử. Tagline: 'Pha theo gu của bạn'. Bảng màu: Nâu rang (#593B2F), Xanh lá trầm (#2F6257), Nền sữa (#F6F1E8) và Cam nhạt (#E7B080).",
    kpis: [
      { number: "32", label: "Đơn vị lưới căn chỉnh Logo", icon: "fas fa-th" },
      { number: "6", label: "Ấn phẩm ứng dụng bao bì", icon: "fas fa-box" },
      { number: "4", label: "Tông màu tự nhiên mộc mạc", icon: "fas fa-swatchbook" },
      { number: "8", label: "Kích thước Banner quảng cáo", icon: "fas fa-images" }
    ],
    surveyData: [
      { number: "MN01", tag: "Bao Bì Túi Cà Phê", title: "Artwork túi cà phê 160×240mm trước & sau", desc: "Mặt trước in tên MẺ NHỎ và tagline. Mặt sau in thông điệp nhắc nhở hỏi về cỡ xay và hạn sử dụng trước khi bóc gói." },
      { number: "MN02", tag: "Thẻ Hỏi Gu", title: "Thẻ trắc nghiệm chọn gu 100×150mm", desc: "Hỗ trợ người mua chọn nhanh: Đen đậm / Thêm sữa / Chưa rõ, ghi nhận dụng cụ phin đang có ở nhà." },
      { number: "MN03", tag: "Phiếu Thử Ly Pha", title: "Bảng ghi nhận trải nghiệm A5", desc: "Các ô ghi lại lượng bột, lượng nước, nhiệt độ và cảm nhận thực tế sau lần pha đầu tiên." }
    ],
    recommendations: {
      circleK: [
        { title: "Ly giấy dựng concept MN04", desc: "Ly giấy mang sleeve cách nhiệt in logo và thông điệp 'Một khoảng nghỉ, một ly theo gu'." },
        { title: "Nguyên tắc trung thực dữ liệu", desc: "Không bịa đặt chứng nhận Organic hay nguồn gốc hạt khi chưa có kiểm nghiệm thực tế." }
      ],
      gs25: [
        { title: "Bố cục bao bì phân cấp rõ", desc: "Đặt tên món và cách pha ở vị trí mắt dễ quét nhất, không nhồi nhét chữ nhỏ lấp chỗ." },
        { title: "Giọng văn cởi mở", desc: "Hỏi về thói quen uống hàng ngày thay vì dùng các từ sáo rỗng như 'đánh thức mọi giác quan'." }
      ]
    }
  },

  // ==================== DỰ ÁN 12: QUAI VẢI (NHẬN DIỆN THƯƠNG HIỆU) ====================
  12: {
    id: 12,
    title: "Bộ Nhận Diện QUAI VẢI — Túi Vải Dùng Hằng Ngày",
    type: "Concept Cá Nhân · Brand Identity & Packaging",
    category: "branding",
    categoryName: "Nhận Diện Thương Hiệu",
    categoryIcon: "fas fa-palette",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Logo thân túi lưới 28 đơn vị • 6 Ứng dụng QV01–QV06 • Bộ 6 icon đồ dùng nguyên bản",
    tools: ["Iconography", "Packaging", "Brand Identity", "SVG"],
    description: "QUAI VẢI lấy đường quai làm hình ảnh chính. Một nét cong chữ U nối vào thân vuông tạo dấu nhận diện, đi kèm thông điệp 'Mang vừa một ngày' giúp người dùng chọn túi từ những thứ mình thực sự mang theo.",
    featured: false,
    links: [
      { url: "/nhan-dien/quai-vai/", icon: "fas fa-palette", btnText: "Khám Phá Brand Case", title: "Mở trang showcase nhận diện QUAI VẢI" },
      { url: "/content/quai-vai/", icon: "fas fa-pen-nib", btnText: "Xem Kế Hoạch Content", title: "Xem bài viết content QUAI VẢI" },
      { url: "/tai-nguyen/#phieu-do-tui", icon: "fas fa-download", btnText: "Tải Phiếu Đo Túi", title: "Tải biểu mẫu đo kích thước đồ dùng" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Thiết Kế Nhận Diện",
      class: "Brand Identity Design 2026",
      team: "Khương Tuấn Anh (Định hướng & Thiết kế)",
      time: "Tháng 10/2026",
      docPages: "Brand Guidelines & 6 Ấn phẩm SVG"
    },
    executiveSummary: "Một thương hiệu phụ kiện giả định hướng đến sự thực tế: túi có vừa với vật dụng hàng ngày và cách lấy đồ hay không. Tagline: 'Mang vừa một ngày'. Bảng màu: Xanh chàm (#2F435C), Hồng đất (#C47E71), Vải sáng (#EEE8DF) và Chữ than (#233142).",
    kpis: [
      { number: "28", label: "Đơn vị lưới căn chỉnh Logo", icon: "fas fa-th" },
      { number: "6", label: "Icon đồ dùng nguyên bản", icon: "fas fa-icons" },
      { number: "6", label: "Ấn phẩm ứng dụng đồng bộ", icon: "fas fa-shopping-bag" },
      { number: "1", label: "Phiếu đo kích thước thực tế", icon: "fas fa-ruler-combined" }
    ],
    surveyData: [
      { number: "QV01", tag: "Artwork In Túi", title: "Mặt trước in logo quai vải, mặt sau sơ đồ đồ dùng", desc: "Họa tiết đường chỉ may ngắt quãng đặc trưng gợi nhắc sự tỉ mỉ của kỹ thuật may thủ công." },
      { number: "QV02", tag: "Hangtag Hai Mặt", title: "Thẻ treo sản phẩm 60×100mm", desc: "Mặt trước logo và tagline 'Chọn từ đồ bạn mang'. Mặt sau nhắc kiểm tra lớp chống sốc của laptop." },
      { number: "QV04", tag: "Bộ 6 Icon", title: "Sổ, bình nước, hộp bút, laptop, điện thoại, ví", desc: "Được vẽ cùng nét 2px quy chuẩn, không mang logo thương hiệu thiết bị của bên thứ ba." }
    ],
    recommendations: {
      circleK: [
        { title: "Phiếu đo túi QV03", desc: "Biểu mẫu hướng dẫn đo kích thước món lớn nhất và độ mở miệng túi trước khi đặt mua." },
        { title: "Card hướng dẫn mua QV06", desc: "Quy trình 4 bước: Liệt kê → Đo → Thử → Kiểm tra hướng dẫn chăm sóc vải canvas." }
      ],
      gs25: [
        { title: "Không tuyên bố tải trọng quá đà", desc: "Tránh các lời hứa phóng đại như 'chiếc túi cân mọi hành trình' khi chưa thử nghiệm cơ học." },
        { title: "Rõ ràng về cách giặt và bảo quản", desc: "Cung cấp lưu ý giặt tay và phơi bóng râm để tránh làm co rút sợi vải canvas tự nhiên." }
      ]
    }
  },

  // ==================== DỰ ÁN 30: CONTENT LAB C01 (NẾP GẤP) ====================
  30: {
    id: 30,
    title: "Content Lab C01: NẾP GẤP — Một Tuần Để Tìm Cách Ghi Phù Hợp",
    type: "Social Content Lab · Kế Hoạch 7 Ngày",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Lịch đăng 7 ngày • 3 Caption hoàn chỉnh • 6 Slide Carousel • Shot list 20s",
    tools: ["Content Strategy", "Copywriting", "Carousel Design", "Video Storyboard"],
    description: "Kế hoạch tuần giải quyết vấn đề của người học và người làm nội dung khi chọn sổ planner: mua vì ảnh bìa nhưng khó dùng. Cung cấp bài mẫu phân tích, carousel 6 slide, story tương tác và kịch bản video phân cảnh 20 giây.",
    featured: false,
    links: [
      { url: "/content/nep-gap/", icon: "fas fa-pen-nib", btnText: "Xem Kế Hoạch & Copy", title: "Mở toàn văn case C01" },
      { url: "/nhan-dien/nep-gap/", icon: "fas fa-palette", btnText: "Xem Brand Case", title: "Mở nhận diện NẾP GẤP" },
      { url: "/tai-nguyen/#lich-tuan", icon: "fas fa-download", btnText: "Tải Mẫu Lịch Tuần", title: "Tải bản lịch tuần A5" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Content Marketing",
      class: "Social Content Strategy 2026",
      team: "Khương Tuấn Anh (Biên tập & Lập kế hoạch)",
      time: "Tháng 10/2026",
      docPages: "Kế hoạch 7 ngày & Storyboard 20s"
    },
    executiveSummary: "Chiến dịch nội dung tuần mẫu cho concept NẾP GẤP với thông điệp: 'Thử cách ghi trước khi chọn sổ'. Xây dựng 3 trụ cột nội dung: Ghi có mục đích (giải thích), Thử trên một trang (hướng dẫn thực hành) và Một ý đang mở (đối thoại cộng đồng).",
    kpis: [
      { number: "7", label: "Ngày trong lịch xuất bản", icon: "fas fa-calendar-week" },
      { number: "3", label: "Bài viết kèm Caption chuẩn", icon: "fas fa-align-left" },
      { number: "6", label: "Slide Carousel chi tiết", icon: "fas fa-clone" },
      { number: "20s", label: "Kịch bản phân cảnh video", icon: "fas fa-video" }
    ],
    surveyData: [
      { number: "NG-P1", tag: "Ngày 1 · Ảnh đơn", title: "Trang trống không cần được lấp đầy", desc: "Giúp người đọc giảm áp lực phải viết kín trang sổ; tập trung vào một việc quan trọng nhất." },
      { number: "NG-C1", tag: "Ngày 2 · Carousel", title: "Chọn planner theo thứ cần ghi", desc: "So sánh 3 phong cách ghi chép: theo giờ, theo checklist việc linh hoạt và theo hạn mốc lớn." },
      { number: "NG-V1", tag: "Ngày 7 · Video 20s", title: "Từ 3 việc rời đến 1 trang tuần", desc: "Shot list phân cảnh tay sắp xếp 3 mẩu note rời vào các ô lịch tuần NẾP GẤP có định hướng." }
    ],
    recommendations: {
      circleK: [
        { title: "Bài NG-P2: Ô cho việc phát sinh", desc: "Chia sẻ kỹ thuật chừa một vùng trống ở cạnh trang để đón nhận các ý tưởng bất ngờ xuất hiện." },
        { title: "Bài NG-P3: Thử một trang trước khi mua", desc: "Dẫn dắt người đọc tới trang tài nguyên tải mẫu lịch tuần A5 in thử tại nhà." }
      ],
      gs25: [
        { title: "Story tương tác NG-S1 & S2", desc: "Tạo thăm dò ý kiến về thói quen nhìn cả tuần hay từng ngày và giải đáp thắc mắc ghi chép." },
        { title: "Không cam kết tăng năng suất", desc: "Tránh hứa hẹn sổ tay giúp tăng gấp đôi năng suất; tập trung vào sự rõ ràng và cảm giác thoải mái." }
      ]
    }
  },

  // ==================== DỰ ÁN 31: CONTENT LAB C02 (MẺ NHỎ) ====================
  31: {
    id: 31,
    title: "Content Lab C02: MẺ NHỎ — Giúp Người Mới Đặt Câu Hỏi Khi Mua Cà Phê",
    type: "Social Content Lab · Kế Hoạch 7 Ngày",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Lịch 7 ngày • 3 Caption thực chiến • Carousel 5 điều trao đổi • Kịch bản video",
    tools: ["Editorial Strategy", "Social Copy", "Poll Strategy", "Storyboard"],
    description: "Giúp khách hàng mới diễn đạt nhu cầu với người bán: uống đen hay sữa, đang có phin gì, cỡ xay ra sao. Tránh sáo rỗng, tập trung vào trải nghiệm thực tế và cung cấp phiếu thử gu tải về.",
    featured: false,
    links: [
      { url: "/content/me-nho/", icon: "fas fa-pen-nib", btnText: "Xem Kế Hoạch & Copy", title: "Mở toàn văn case C02" },
      { url: "/nhan-dien/me-nho/", icon: "fas fa-palette", btnText: "Xem Brand Case", title: "Mở nhận diện MẺ NHỎ" },
      { url: "/tai-nguyen/#phieu-thu-gu", icon: "fas fa-download", btnText: "Tải Phiếu Thử Gu", title: "Tải phiếu thử gu cà phê" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Content Marketing",
      class: "Social Content Strategy 2026",
      team: "Khương Tuấn Anh (Biên tập & Lập kế hoạch)",
      time: "Tháng 10/2026",
      docPages: "Kế hoạch 7 ngày & Storyboard 20s"
    },
    executiveSummary: "Chiến dịch nội dung tuần mẫu cho concept MẺ NHỎ với thông điệp: 'Pha theo gu của bạn'. Cung cấp bộ câu hỏi cụ thể để người mới tự tin trao đổi với người bán cà phê hạt và bột pha tại nhà.",
    kpis: [
      { number: "7", label: "Ngày trong lịch xuất bản", icon: "fas fa-calendar-week" },
      { number: "3", label: "Bài viết hoàn chỉnh kèm caption", icon: "fas fa-align-left" },
      { number: "5", label: "Gợi ý trao đổi với người bán", icon: "fas fa-comments" },
      { number: "1", label: "Phiếu thử gu đính kèm", icon: "fas fa-file-alt" }
    ],
    surveyData: [
      { number: "MN-P1", tag: "Ngày 1 · Ảnh đơn", title: "'Ngon nhất' cần thêm ngữ cảnh", desc: "Giải thích lý do câu hỏi 'cho mình loại ngon nhất' thường khó nhận được câu trả lời chính xác nếu chưa rõ gu uống." },
      { number: "MN-C1", tag: "Ngày 2 · Carousel", title: "5 Điều nên nói với người bán cà phê", desc: "Cách uống (đen/sữa), dụng cụ pha, mua hạt hay bột, mức độ đắng và hương vị ưa thích." },
      { number: "MN-P3", tag: "Ngày 5 · Bài link", title: "Đổi một thứ trong lần pha tiếp theo", desc: "Hướng dẫn chỉ thay đổi một biến số (lượng bột hoặc lượng nước) để biết điều gì tạo nên sự khác biệt." }
    ],
    recommendations: {
      circleK: [
        { title: "Bài MN-P2: Đọc hướng dẫn gói", desc: "Nhắc nhở độc giả tuân thủ hướng dẫn của nhà sản xuất trước khi thử nghiệm công thức trên mạng." },
        { title: "Story hỏi đáp MN-S2", desc: "Mở hộp câu hỏi thu thập những vướng mắc phổ biến của người mới bắt đầu pha cà phê phin tại nhà." }
      ],
      gs25: [
        { title: "Kịch bản video MN-V1", desc: "Storyboard 20 giây minh họa tình huống cầm thẻ hỏi gu tự tin bước vào cửa hàng cà phê." },
        { title: "Liên kết bài viết chuyên sâu", desc: "Dẫn dắt tự nhiên sang bài On-Page SEO 'Chọn cà phê pha phin: Bắt đầu từ gu uống'." }
      ]
    }
  },

  // ==================== DỰ ÁN 32: CONTENT LAB C03 (QUAI VẢI) ====================
  32: {
    id: 32,
    title: "Content Lab C03: QUAI VẢI — Chọn Túi Từ Những Món Sẽ Mang",
    type: "Social Content Lab · Kế Hoạch 7 Ngày",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Lịch 7 ngày • Bài post đo túi • Carousel 6 slide • Checklist đồ mang",
    tools: ["Copywriting", "Checklist Design", "Social Visuals"],
    description: "Hướng dẫn người đi học và đi làm cách kiểm tra kích thước đồ dùng thực tế (laptop có bao chống sốc, bình nước, sổ) trước khi mua túi vải canvas để tránh mua nhầm size.",
    featured: false,
    links: [
      { url: "/content/quai-vai/", icon: "fas fa-pen-nib", btnText: "Xem Kế Hoạch & Copy", title: "Mở toàn văn case C03" },
      { url: "/nhan-dien/quai-vai/", icon: "fas fa-palette", btnText: "Xem Brand Case", title: "Mở nhận diện QUAI VẢI" },
      { url: "/tai-nguyen/#phieu-do-tui", icon: "fas fa-download", btnText: "Tải Phiếu Đo Túi", title: "Tải biểu mẫu đo kích thước túi" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Content Marketing",
      class: "Social Content Strategy 2026",
      team: "Khương Tuấn Anh (Biên tập & Lập kế hoạch)",
      time: "Tháng 10/2026",
      docPages: "Kế hoạch 7 ngày & Checklist đo túi"
    },
    executiveSummary: "Chiến dịch nội dung tuần mẫu cho concept QUAI VẢI với thông điệp: 'Mang vừa một ngày'. Nhấn mạnh trải nghiệm sử dụng thực tế và cách bảo quản vải canvas thay vì chỉ chụp ảnh lookbook thời trang bóng bẩy.",
    kpis: [
      { number: "7", label: "Ngày trong lịch xuất bản", icon: "fas fa-calendar-week" },
      { number: "1", label: "Quy trình đo 4 bước", icon: "fas fa-ruler" },
      { number: "6", label: "Slide Carousel hướng dẫn", icon: "fas fa-clone" },
      { number: "1", label: "Checklist đồ dùng thực tế", icon: "fas fa-tasks" }
    ],
    surveyData: [
      { number: "QV-P1", tag: "Ngày 1 · Bài Post", title: "Ảnh đẹp chưa cho biết túi có vừa đồ", desc: "Chỉ ra sai lầm phổ biến khi mua túi canvas online chỉ nhìn ảnh mẫu đeo vai mà quên kiểm tra đáy túi." },
      { number: "QV-C1", tag: "Ngày 2 · Carousel", title: "Đo cả lớp chống sốc của laptop", desc: "Lưu ý quan trọng: chiếc laptop 14 inch sau khi bọc bao nỉ sẽ tương đương kích thước thân máy 15.6 inch." },
      { number: "QV-P3", tag: "Ngày 5 · Bài link", title: "Tải phiếu đo túi trước khi đặt hàng", desc: "Dẫn người xem tới trang tài nguyên để tải bản PDF phiếu đo lòng túi và độ mở miệng túi." }
    ],
    recommendations: {
      circleK: [
        { title: "Quy chuẩn bảo quản canvas", desc: "Hướng dẫn chi tiết cách vệ sinh vết bẩn cục bộ bằng bàn chải mềm thay vì giặt máy." },
        { title: "Card tóm tắt 4 bước", desc: "Ấn phẩm mạng xã hội tóm tắt: Liệt kê → Đo → Thử → Kiểm tra hướng dẫn chăm sóc." }
      ],
      gs25: [
        { title: "Không quảng cáo chống nước tuyệt đối", desc: "Minh bạch về đặc tính thấm hút tự nhiên của vải canvas mộc, gợi ý sử dụng túi phụ chống ẩm." },
        { title: "Dẫn link sang bài SEO A07", desc: "Điều hướng người đọc sang bài viết chuyên sâu: 'Chọn túi canvas đi học: Kiểm tra kích thước và cách dùng'." }
      ]
    }
  },

  // ==================== DỰ ÁN 33: CONTENT LAB C04 (NHỊP VIỆC) ====================
  33: {
    id: 33,
    title: "Content Lab C04: NHỊP VIỆC — Dịch Vụ Số & B2B Cho Nhóm Nhỏ",
    type: "Content Lab · B2B Service & Workflow",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "Quy trình brief 1 trang • Ma trận 3 tầng Humanize • Biểu mẫu kiểm soát claim",
    tools: ["B2B Content", "Workflow Automation", "AI Ethics", "Documentation"],
    description: "Thiết lập quy trình bàn giao việc viết nội dung và ứng dụng AI có trách nhiệm cho nhóm nhỏ: từ brief một trang có giới hạn, kỹ thuật đối chiếu nguồn sơ cấp đến checklist 15 tiêu chí duyệt bản nháp.",
    featured: false,
    links: [
      { url: "/content/nhip-viec/", icon: "fas fa-pen-nib", btnText: "Xem Kế Hoạch & Quy Trình", title: "Mở toàn văn case C04" },
      { url: "/seo-brief-content.html", icon: "fas fa-file-contract", btnText: "Xem Bài Mẫu Brief A11", title: "Xem bài viết mẫu brief content" },
      { url: "/tai-nguyen/#brief-mot-trang", icon: "fas fa-download", btnText: "Tải Mẫu Brief", title: "Tải mẫu brief một trang" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Content Marketing",
      class: "B2B Content & Operations 2026",
      team: "Khương Tuấn Anh (Biên tập & Quy trình)",
      time: "Tháng 10/2026",
      docPages: "Quy trình làm việc & Biểu mẫu B2B"
    },
    executiveSummary: "NHỊP VIỆC xây dựng bộ khung chuẩn hóa quy trình sáng tạo nội dung giữa người quản lý, copywriter và công cụ AI. Giải quyết triệt để tình trạng prompt chung chung dẫn đến bản nháp sáo rỗng và thiếu số liệu kiểm chứng.",
    kpis: [
      { number: "1", label: "Bản Brief chuẩn 1 trang", icon: "fas fa-file-contract" },
      { number: "3", label: "Tầng kiểm duyệt Humanize", icon: "fas fa-filter" },
      { number: "15", label: "Tiêu chí On-Page nghiệm thu", icon: "fas fa-clipboard-check" },
      { number: "0", label: "Claim phóng đại thiếu nguồn", icon: "fas fa-shield-alt" }
    ],
    surveyData: [
      { number: "Bước 1", tag: "Briefing", title: "Khóa chặt đề bài và điều không khẳng định", desc: "Xác định rõ người đọc mục tiêu, tình huống thực tế và các ranh giới không được hứa hẹn quá đà." },
      { number: "Bước 2", tag: "AI Draft", title: "Tạo khung nháp có kiểm soát", desc: "Sử dụng AI như một trợ lý lập dàn ý và tìm kiếm góc nhìn mở, không copy-paste nguyên văn để xuất bản." },
      { number: "Bước 3", tag: "Fact-Check", title: "Đối chiếu nguồn sơ cấp và biên tập E-E-A-T", desc: "Kiểm tra từng con số với tài liệu gốc, viết lại câu chữ theo giọng văn điềm tĩnh và bổ sung trải nghiệm thực tế." }
    ],
    recommendations: {
      circleK: [
        { title: "Bảng kiểm chứng claim CSV", desc: "Mẫu theo dõi nguồn gốc từng số liệu trích dẫn để đảm bảo tính minh bạch trước khi xuất bản." },
        { title: "Quy ước liên kết nội bộ chặt chẽ", desc: "Xây dựng sơ đồ Internal Links Silo kết nối mạch lạc giữa bài viết, trang tài nguyên và case study." }
      ],
      gs25: [
        { title: "Minh bạch về sự hỗ trợ của AI", desc: "Ghi nhận rõ ràng vai trò định hướng của con người và sự hỗ trợ kỹ thuật của AI trong portfolio." },
        { title: "Tuân thủ chính sách Google E-E-A-T", desc: "Nội dung phục vụ con người trước tiên, không viết bài chỉ nhằm mục đích thao túng công cụ tìm kiếm." }
      ]
    }
  },

  // ==================== DỰ ÁN 4: BANNER ADS MẺ NHỎ (DESIGN) ====================
  4: {
    id: 4,
    title: "Thiết Kế Bộ Banner Ads MẺ NHỎ: 'Pha Theo Gu Của Bạn'",
    type: "Media & Ad Design · Concept Campaign",
    category: "design",
    categoryName: "Media & Banner Ads",
    categoryIcon: "fas fa-image",
    categoryColor: "#eab308",
    duration: "10/2026",
    results: "8 Kích thước hiển thị chuẩn • 2 Giả thuyết Headline A/B • Key Visual Vector",
    tools: ["Photoshop", "Illustrator", "SVG Vector", "Media Planning"],
    description: "Hệ thống banner quảng cáo đa kích thước từ 1600x900 (Wide), 1080x1350 (Portrait), 1080x1080 (Square), 1080x1920 (Story) đến các kích thước Google Display Ads (300x250, 728x90, 300x600, 780x600). So sánh giả thuyết thông điệp A/B dựa trên tâm lý người mới bắt đầu.",
    featured: false,
    links: [
      { url: "/thiet-ke/banner-me-nho/", icon: "fas fa-image", btnText: "Xem Bộ 8 Banner & Thử Nghiệm", title: "Mở trang showcase banner MẺ NHỎ" },
      { url: "/nhan-dien/me-nho/", icon: "fas fa-palette", btnText: "Xem Brand Case", title: "Mở nhận diện MẺ NHỎ" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Thiết Kế Truyền Thông",
      class: "Digital Advertising Design 2026",
      team: "Khương Tuấn Anh (Thiết kế đồ họa)",
      time: "Tháng 10/2026",
      docPages: "Bộ 8 Banner chuẩn Vector & Thử nghiệm A/B"
    },
    executiveSummary: "Thay thế bộ banner gaming gear cũ bằng một Key Visual thích nghi linh hoạt trên 8 khung hình quảng cáo đa kênh. Key Visual trung tâm là biểu tượng phin cà phê góc nghiêng nhẹ và giọt nối xuống thẻ hỏi gu. Thử nghiệm hai hướng thông điệp A/B: 'Pha theo gu của bạn' vs 'Bạn uống đen hay thêm sữa?'.",
    kpis: [
      { number: "8", label: "Kích thước thích ứng đa nền tảng", icon: "fas fa-expand-arrows-alt" },
      { number: "2", label: "Giả thuyết thông điệp A/B", icon: "fas fa-vial" },
      { number: "100%", label: "Key Visual Vector nguyên bản", icon: "fas fa-vector-square" },
      { number: "3", label: "Màu sắc tương phản chuẩn", icon: "fas fa-adjust" }
    ],
    surveyData: [
      { number: "mn-kv-wide", tag: "1600×900", title: "Banner ngang lớn cho Website & YouTube", desc: "Bố cục cân đối: Phin vector bên trái, Headline 'Pha theo gu của bạn' và nút CTA 'Mở phiếu hỏi gu' bên phải." },
      { number: "mn-social-portrait", tag: "1080×1350", title: "Banner dọc cho Facebook & Instagram Feed", desc: "Tối ưu diện tích hiển thị trên điện thoại: Đặt câu hỏi trực tiếp 'Bạn uống đen hay thêm sữa?'." },
      { number: "mn-story", tag: "1080×1920", title: "Định dạng Story & TikTok dọc toàn màn hình", desc: "Chừa khoảng an toàn (Safe Zone) 250px ở mép trên và dưới để tránh bị che bởi thanh điều hướng ứng dụng." }
    ],
    recommendations: {
      circleK: [
        { title: "mn-display-rect (300×250)", desc: "Kích thước hình chữ nhật trong bài viết: Lược bỏ văn bản phụ quá nhỏ, tập trung logo và nút hành động." },
        { title: "mn-display-wide (728×90)", desc: "Banner Leaderboard ngang: Phân bố Logo góc trái, thông điệp ở giữa và CTA góc phải." }
      ],
      gs25: [
        { title: "Giả thuyết thử nghiệm A/B", desc: "Ghi nhận rõ ràng: Câu hỏi cụ thể có thể giúp người mới dễ nhận ra nhu cầu của mình hơn câu khẳng định chung." },
        { title: "Không bịa đặt số liệu chuyển đổi", desc: "Minh bạch nhãn 'Bộ thiết kế concept, chưa chạy quảng cáo thực tế' để đảm bảo tính liêm chính." }
      ]
    }
  },

  // ==================== DỰ ÁN 7: WEBSITE CONCEPT NẾP GẤP (WEB) ====================
  7: {
    id: 7,
    title: "Cửa Hàng Concept NẾP GẤP: Trải Nghiệm Lựa Chọn Văn Phòng Phẩm",
    type: "Website Concept · UX / UI Design",
    category: "web",
    categoryName: "Website & Landing Page",
    categoryIcon: "fas fa-laptop-code",
    categoryColor: "#10b981",
    duration: "10/2026",
    results: "Giao diện Concept có thể tương tác • Bộ lọc nhu cầu động • Bảng so sánh 3 dòng sổ",
    tools: ["HTML5", "CSS3", "JavaScript", "UX Research", "Interactive Prototype"],
    description: "Website concept cho thương hiệu văn phòng phẩm NẾP GẤP. Tích hợp bộ lọc chọn sổ theo nhu cầu ghi chép (nhìn cả tuần, ghi từng ngày, ghi ý rời), bảng so sánh cấu trúc ruột sổ và nút tải mẫu lịch tuần thực tế.",
    featured: false,
    links: [
      { url: "/web/nep-gap/", icon: "fas fa-laptop-code", btnText: "Trải Nghiệm Cửa Hàng Concept", title: "Mở website concept NẾP GẤP" },
      { url: "/nhan-dien/nep-gap/", icon: "fas fa-palette", btnText: "Xem Brand Case", title: "Mở nhận diện NẾP GẤP" },
      { url: "/tai-nguyen/#lich-tuan", icon: "fas fa-download", btnText: "Tải Bản Lịch Tuần", title: "Tải mẫu lịch tuần A5" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Thiết Kế Website",
      class: "UI/UX & Web Development 2026",
      team: "Khương Tuấn Anh (UI/UX & Front-End)",
      time: "Tháng 10/2026",
      docPages: "Giao diện Web Concept tương tác"
    },
    executiveSummary: "Cửa hàng concept NẾP GẤP giúp người dùng giải quyết vướng mắc chọn sổ: xem kỹ bố cục trang ruột trước khi quan tâm đến ảnh bìa. Giao diện tích hợp bộ lọc nhu cầu ghi chép thông minh, bảng so sánh đa dòng sổ và cho phép tải mẫu in thử một trang tại chỗ.",
    kpis: [
      { number: "3", label: "Dòng sản phẩm concept chính", icon: "fas fa-book-open" },
      { number: "3", label: "Lựa chọn nhu cầu tương tác", icon: "fas fa-sliders-h" },
      { number: "100%", label: "Responsive chuẩn thiết bị di động", icon: "fas fa-mobile-alt" },
      { number: "0", label: "Chức năng thanh toán giả", icon: "fas fa-shield-alt" }
    ],
    surveyData: [
      { number: "Sản phẩm 1", tag: "Sổ Tuần Mở", title: "Bố cục lịch tuần và vùng ý tưởng đang mở", desc: "Thích hợp cho người cần bao quát công việc trong 7 ngày và có chỗ ghi các việc phát sinh linh hoạt." },
      { number: "Sản phẩm 2", tag: "Thẻ Một Ý", title: "Thẻ ghi chú một việc, một câu hỏi hoặc ý mới", desc: "Dành cho người thường xuyên di chuyển hoặc muốn phân loại việc cần làm theo mức độ ưu tiên." },
      { number: "Sản phẩm 3", tag: "Trang Ngày Rộng", title: "Một trang dành riêng cho ngày cần ghi chú nhiều", desc: "Dành cho các buổi học, cuộc họp kéo dài hoặc phiên lên kế hoạch chi tiết từng bước." }
    ],
    recommendations: {
      circleK: [
        { title: "Bảng so sánh trực quan", desc: "So sánh 3 dòng sổ theo phạm vi nhìn, cách bắt đầu và trường hợp nên thử thay vì thông số kỹ thuật khô khan." },
        { title: "Trải nghiệm chọn theo nhu cầu", desc: "Bấm chọn 'Mình muốn thấy cả tuần' hoặc 'Mình cần ghi từng ngày' sẽ tự động làm nổi bật dòng sản phẩm tương ứng." }
      ],
      gs25: [
        { title: "Minh bạch nhãn Concept", desc: "Gắn nhãn lớn 'Cửa hàng concept · Không nhận thanh toán/đơn hàng' để tránh người xem hiểu nhầm là sàn thương mại điện tử thật." },
        { title: "Dẫn link tải tài nguyên thật", desc: "Nút 'Tải bản lịch tuần' liên kết trực tiếp tới file in thử A5 tại trang tài nguyên." }
      ]
    }
  },

  // ==================== DỰ ÁN 5: BỘ BÀI SEO MẪU (SEO) ====================
  5: {
    id: 5,
    title: "Tuyển Tập 11 Bài Viết SEO On-Page Đa Ngành & Technical Blueprint",
    type: "SEO Content & Technical On-Page Lab",
    category: "seo",
    categoryName: "SEO Content",
    categoryIcon: "fas fa-search",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "11 Bài viết mẫu chuyên sâu • SERP Inspector • Bảng 8 phần Blueprint Masterclass",
    tools: ["On-Page SEO", "Schema.org", "Keyword Research", "SERP Simulator", "E-E-A-T"],
    description: "Tuyển tập 11 bài viết chuẩn On-Page SEO dài 2.000 - 2.500 từ trải dài qua 6 nhóm ngành (Công nghệ AI, Gunpla, Phần cứng PC, Anime Manga, Game Dev 2D, F&B Cà phê, Thời trang Canvas, Văn phòng phẩm, Cây cảnh, Du lịch, Quản trị Content). Mỗi bài đều có mô phỏng SERP và hồ sơ kỹ thuật 8 phần minh bạch.",
    featured: true,
    links: [
      { url: "/seo-samples.html", icon: "fas fa-search", btnText: "Xem Tuyển Tập 11 Bài Viết", title: "Mở hub 11 bài SEO mẫu" },
      { url: "/seo-aiktp.html", icon: "fas fa-robot", btnText: "Xem Bài 1 (AIKTP & Gemini)", title: "Mở bài viết mẫu số 1" },
      { url: "/seo-brief-content.html", icon: "fas fa-file-contract", btnText: "Xem Bài 11 (Brief Content)", title: "Mở bài viết mẫu số 11" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Khóa Học SEO & Content Automation",
      class: "SEO On-Page & Technical Writing 2026",
      team: "Khương Tuấn Anh (Nghiên cứu & Biên tập)",
      time: "Tháng 10/2026",
      docPages: "11 Bài On-Page & 11 Bảng Blueprint"
    },
    executiveSummary: "Tuyển tập bài viết On-Page SEO chứng minh năng lực triển khai nội dung chuyên sâu, chuẩn hóa cấu trúc heading H1-H3, tối ưu Featured Snippet TL;DR, đan cài liên kết nội bộ tự nhiên, dẫn nguồn sơ cấp bảo chứng và xây dựng hồ sơ kỹ thuật On-Page Blueprint 8 phần minh bạch.",
    kpis: [
      { number: "11", label: "Bài viết On-Page chuyên sâu", icon: "fas fa-file-alt" },
      { number: "6", label: "Nhóm ngành đa dạng", icon: "fas fa-cubes" },
      { number: "8", label: "Phần trong On-Page Blueprint", icon: "fas fa-code" },
      { number: "100%", label: "Ảnh bản quyền / Unsplash có nguồn", icon: "fas fa-image" }
    ],
    surveyData: [
      { number: "Nhóm 1", tag: "Tech & Gaming", title: "AI Content, Gunpla, Build PC, Dragon Ball, Game Dev", desc: "5 bài viết kỹ thuật và sở thích cá nhân dài 2.500 từ có ảnh thực tế và kiểm chứng thông số chuyên sâu." },
      { number: "Nhóm 2", tag: "Lifestyle & F&B", title: "Cà phê pha phin, Túi Canvas, Sổ tay Planner, Cây cảnh, Du lịch", desc: "5 bài viết phong cách sống hướng dẫn người đọc lựa chọn sản phẩm từ tình huống sử dụng hàng ngày." },
      { number: "Nhóm 3", tag: "Management", title: "Mẫu Brief Content SEO cho nhóm nhỏ", desc: "Bài viết phương pháp luận chuẩn hóa quy trình giao việc, kiểm soát bản nháp AI và nghiệm thu 15 tiêu chí On-Page." }
    ],
    recommendations: {
      circleK: [
        { title: "Bảng On-Page Blueprint 8 phần", desc: "Mỗi bài viết đều có hồ sơ minh bạch: Brief, Chùm từ khóa, Voice guide, Silo liên kết, Nguồn sơ cấp, Kế hoạch backlink, Audit ảnh và Đánh giá E-E-A-T." },
        { title: "SERP Preview Inspector", desc: "Thanh mô phỏng hiển thị Google trên máy tính và điện thoại giúp biên tập thẻ tiêu đề và mô tả chuẩn SEO." }
      ],
      gs25: [
        { title: "Không cam kết thứ hạng ảo", desc: "Ghi nhận minh bạch trạng thái 'Bài mẫu concept portfolio, chưa có dữ liệu click/CTR thực tế' để đảm bảo tính trung thực." },
        { title: "Cấu trúc 2 cột linh hoạt", desc: "Bố cục đọc nội dung chính kèm cột bên Sticky Aside hiển thị mục lục điều hướng động và thẻ bài viết tiếp theo." }
      ]
    }
  }
};;

// ================== CÁC CHỨC NĂNG ĐIỀU HƯỚNG & HELPER ==================

function goToProject(projectId) {
  window.location.href = `/project-detail.html?id=${projectId}`;
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

      const matchesCategory = activeCategory === 'all' || category === activeCategory || (activeCategory === 'new-seo' && art.getAttribute('data-is-new') === 'true');
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


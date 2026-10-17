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
    desc: "Tuyển tập 4 dự án và đồ án thực chiến tiêu biểu: Website thương mại điện tử Potty.vn (tự tay phát triển 100%), Nghiên cứu thị trường Circle K & GS25, Tuyển tập Content Lab (12 bài viral) và Tuyển tập Bài viết SEO On-Page."
  },
  website: {
    id: "website",
    name: "Website Potty.vn",
    icon: "fas fa-globe",
    desc: "Dự án website thương mại điện tử thực tế potty.vn do Khương Tuấn Anh trực tiếp tự tay lên ý tưởng, thiết kế UI/UX và phát triển toàn diện (WordPress, WooCommerce, cổng thanh toán tự động 9Pay VietQR & tối ưu Rank Math SEO)."
  },
  research: {
    id: "research",
    name: "Nghiên Cứu Thị Trường",
    icon: "fas fa-chart-pie",
    desc: "Đồ án nhóm nghiên cứu Circle K & GS25 (sản phẩm thật 160+ trang, khảo sát 93+ người tiêu dùng, bóc tách 7P & SWOT)."
  },
  content: {
    id: "content",
    name: "Kế Hoạch Content",
    icon: "fas fa-pen-nib",
    desc: "Content Lab tuyển tập 12 bài viết social viral đa ngành (Liên Quân Mobile ĐTDV 2026, Marketing, Laptop, Điện thoại, Trend TikTok) kèm ảnh tư liệu thực tế và phân tích hook-body-cta chuẩn format Facebook."
  },
  seo: {
    id: "seo",
    name: "SEO Content",
    icon: "fas fa-search",
    desc: "Tuyển tập 18 bài viết SEO On-Page đa ngành dài 2.000 - 2.800 từ kèm SERP Inspector, trích dẫn ảnh chụp thực tế và hồ sơ kỹ thuật On-Page Blueprint 8 phần minh bạch."
  }
};

// Map màu sắc cho từng tool
const toolColors = {
  'WordPress': '#21759b',
  'WooCommerce': '#96588a',
  'Elementor': '#92003b',
  'Rank Math SEO': '#e8380d',
  '9Pay Gateway': '#0052cc',
  'HTML & CSS': '#e34f26',
  'UI/UX Design': '#10b981',
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
  'Web Builder': '#06b6d4'
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
      { url: "/content/", icon: "fas fa-layer-group", btnText: "Khám Phá Tuyển Tập (Hub)", title: "Mở trung tâm Content Lab" }
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

  // ==================== DỰ ÁN 10: WEBSITE THƯƠNG MẠI ĐIỆN TỬ POTTY.VN ====================
  10: {
    id: 10,
    title: "Website Thương Mại Điện Tử: Tinh Dầu Thiên Nhiên & Máy Khuếch Tán Potty.vn",
    type: "Website Thực Tế · Tự Tay Xây Dựng 100% (Solo Developer & Creator)",
    category: "website",
    categoryName: "Website Potty.vn",
    categoryIcon: "fas fa-globe",
    categoryColor: "#10b981",
    duration: "2026 · Đang Hoạt Động (Live)",
    results: "Website E-Commerce hoàn chỉnh • Tích hợp cổng thanh toán 9Pay QR • Chuẩn hóa On-Page SEO",
    tools: ["WordPress", "WooCommerce", "UI/UX Design", "Elementor", "Rank Math SEO", "9Pay Gateway", "HTML & CSS"],
    image: "/image/potty-vn-showcase.png",
    imageAlt: "Giao diện website thương mại điện tử Tinh Dầu Potty (potty.vn) do Khương Tuấn Anh tự tay thiết kế và xây dựng",
    imageBadge: "🟢 Live Website · potty.vn",
    authorshipNote: "Website thực tế 100% do Khương Tuấn Anh trực tiếp tự tay lên ý tưởng, thiết kế giao diện UI/UX, lập trình cấu hình WordPress & WooCommerce, tích hợp cổng thanh toán trực tuyến 9Pay quét mã VietQR và tối ưu toàn diện SEO On-Page.",
    description: "Dự án website thương mại điện tử thực tế do Khương Tuấn Anh trực tiếp tự tay phát triển toàn diện (Solo Developer & Content Creator): từ thiết kế giao diện UI/UX xanh tự nhiên, tối ưu trải nghiệm responsive đa thiết bị, thiết lập hệ thống danh mục sản phẩm & giỏ hàng WooCommerce, tích hợp cổng thanh toán tự động 9Pay quét mã VietQR, đến tối ưu On-Page SEO toàn diện theo chuẩn Rank Math.",
    featured: true,
    links: [
      { url: "https://potty.vn", icon: "fas fa-arrow-up-right-from-square", btnText: "Truy Cập Website potty.vn", isPrimary: true, title: "Mở trực tiếp website potty.vn (Sản phẩm thật)" }
    ],
    academicInfo: {
      institution: "Dự Án Thực Tế Cá Nhân (Live Production)",
      instructor: "Khương Tuấn Anh (Tự tay thực hiện 100%)",
      class: "E-Commerce & Full Website Building 2026",
      team: "Khương Tuấn Anh (Solo Developer / UI/UX / Content)",
      time: "2026 · Đang vận hành chính thức",
      docPages: "Hệ thống website E-Commerce đầy đủ"
    },
    executiveSummary: "Potty.vn là website thương mại điện tử thực tế chuyên cung cấp các giải pháp hương thơm tự nhiên: tinh dầu nguyên chất, tinh dầu treo xe ô tô và máy khuếch tán. Website được xây dựng với mục tiêu tối ưu trải nghiệm mua sắm tinh tế, tốc độ tải trang nhanh, thiết kế responsive trên mọi thiết bị và hệ thống thanh toán tự động tiện lợi cho người dùng Việt Nam.",
    kpis: [
      { number: "100%", label: "Tự tay thiết kế & code", icon: "fas fa-laptop-code" },
      { number: "Woo", label: "Cửa hàng & Giỏ hàng E-Com", icon: "fas fa-shopping-bag" },
      { number: "9Pay", label: "Cổng thanh toán QR Code", icon: "fas fa-qrcode" },
      { number: "SEO", label: "Chuẩn hóa Schema & Meta", icon: "fas fa-search" }
    ],
    surveyData: [
      { number: "100%", tag: "Tự phát triển", title: "Khẳng định quyền tác giả tuyệt đối", desc: "Khương Tuấn Anh trực tiếp quản lý toàn bộ quy trình: Tên miền, Hosting, Theme con (Child Theme), cấu trúc danh mục và tối ưu CSS." },
      { number: "9Pay", tag: "Cổng thanh toán", title: "Tích hợp cổng thanh toán VietQR", desc: "Tự động tạo mã QR thanh toán ngân hàng khi khách đặt hàng, đồng bộ trạng thái đơn hàng tức thì trên WooCommerce." },
      { number: "Rank Math", tag: "Tối ưu hóa SEO", title: "Chuẩn hóa On-Page & Rich Snippets", desc: "Cấu hình Schema Organization, Store, Product, tối ưu OpenGraph mạng xã hội và tốc độ tải trang cho trải nghiệm mượt mà." }
    ],
    frameworks: ["UI/UX Design", "E-Commerce UX", "Responsive Web", "Conversion Optimization", "On-Page SEO"],
    takeaways: [
      { icon: "🌐", title: "Năng lực làm chủ quy trình phát triển website từ A - Z", desc: "Tự tay quản lý toàn diện từ đăng ký tên miền, hosting, dựng theme, thiết kế visual thương hiệu đến vận hành cửa hàng trực tuyến thực tế." },
      { icon: "💳", title: "Tích hợp cổng thanh toán tự động & thương mại điện tử", desc: "Cấu hình thành công luồng thanh toán chuyển khoản quét mã VietQR tự động qua 9Pay và quản lý đơn hàng WooCommerce thông suốt." },
      { icon: "📈", title: "Tối ưu hóa On-Page SEO & trải nghiệm di động", desc: "Tối ưu tốc độ tải trang, cấu trúc heading, meta description, thẻ open graph và trải nghiệm chạm vuốt trực quan trên điện thoại." }
    ]
  },

  // ==================== DỰ ÁN 30: TUYỂN TẬP CONTENT LAB (C01 - C04 & 13 BÀI VIRAL) ====================
  30: {
    id: 30,
    title: "Tuyển Tập Content Lab: 12 Bài Viết Social Viral Thực Chiến",
    type: "Social Content Strategy & Copywriting Lab",
    category: "content",
    categoryName: "Kế Hoạch Content",
    categoryIcon: "fas fa-pen-nib",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "12 Bài viết viral thực chiến đa ngành • Ảnh tư liệu thực tế • Hook & Caption chuẩn Facebook",
    tools: ["Content Strategy", "Social Copywriting", "Editorial Planning", "Carousel Design", "Storyboarding"],
    description: "Tuyển tập 12 bài viết social viral đa ngành (Liên Quân Mobile ĐTDV 2026, Marketing, Laptop sinh viên, Smartphone quay chụp, Trend TikTok) có hook giữ chân người xem, caption chuẩn format Facebook và ảnh chụp thực tế dưới bài (không dùng ảnh AI).",
    featured: true,
    links: [
      { url: "/content/", icon: "fas fa-layer-group", btnText: "Khám Phá Tuyển Tập (Hub)", title: "Mở trung tâm Content Lab (12 Bài Viral)" }
    ],
    academicInfo: {
      institution: "VTC Academy",
      instructor: "Đồ Án Content Marketing",
      class: "Social Content Strategy & Copywriting 2026",
      team: "Khương Tuấn Anh (Biên tập & Lập kế hoạch)",
      time: "Tháng 10/2026",
      docPages: "12 Bài viết viral đa ngành"
    },
    executiveSummary: "Hệ thống nội dung đa kênh tập trung giải quyết bài toán giao tiếp thực tế: chuyển đổi insight người dùng thành kế hoạch tuần có định hướng rõ ràng, loại bỏ ngôn từ sáo rỗng, và thử nghiệm các định dạng bài đăng tương tác cao (Carousel chia sẻ kinh nghiệm, Story thăm dò ý kiến, Video ngắn phân cảnh).",
    kpis: [
      { number: "4", label: "Case Study tuần chi tiết", icon: "fas fa-calendar-alt" },
      { number: "13", label: "Bài viết viral thực chiến", icon: "fas fa-fire" },
      { number: "24", label: "Slide Carousel thiết kế", icon: "fas fa-clone" },
      { number: "100%", label: "Ảnh chụp tư liệu thực tế", icon: "fas fa-camera" }
    ],
    surveyData: [
      { number: "Nhóm 1", tag: "Esports & Game", title: "Liên Quân Mobile ĐTDV 2026 & Tướng Mới", desc: "4 bài viết phân tích đại chiến Chung kết ĐTDV Mùa Đông 2026, tướng mới Heino, highlight lật kèo 1HP và chiến thuật meta." },
      { number: "Nhóm 2", tag: "Marketing 2026", title: "Xu Hướng De-influencing & AI Customer Insight", desc: "2 bài viết giải mã xu hướng KOC chân thực trên TikTok Shop và quy trình ứng dụng GenAI đào sâu insight khách hàng." },
      { number: "Nhóm 3", tag: "Thiết Bị", title: "Laptop Sinh Viên & Điện Thoại Quay Chụp", desc: "3 bài viết tư vấn chọn laptop học tập 15-20 triệu, cảnh báo bẫy thermal throttling và so sánh smartphone làm content." },
      { number: "Nhóm 4", tag: "Trend TikTok", title: "CapCut Template, Lối Sống Low-Buy & Deep Work", desc: "3 bài viết bóc tách công thức Hook 3 giây beat drop, trào lưu tiêu dùng bền vững và phương pháp chống burnout." }
    ],
    recommendations: {
      circleK: [
        { title: "Liên kết chéo đa định dạng", desc: "Mỗi case study đều tích hợp liên kết trực tiếp tới Brand Identity, Web Concept và Mẫu biểu tải về thực tế." },
        { title: "Thực nghiệm tương tác", desc: "Các bài đăng đều có phân tích cơ chế tạo thảo luận cộng đồng và giữ chân người đọc." }
      ],
      gs25: [
        { title: "Trung thực về kết quả", desc: "Ghi nhận minh bạch trạng thái dự án thực hành học tập và portfolio cá nhân, không khai khống số liệu ảo." },
        { title: "Chuẩn hóa giọng điệu thương hiệu", desc: "Mỗi thương hiệu giả định có một Tone of Voice nhất quán, tránh lẫn lộn phong cách viết." }
      ]
    }
  },

  // ==================== DỰ ÁN 5: BỘ BÀI SEO MẪU (SEO) ====================
  5: {
    id: 5,
    title: "Tuyển Tập 18 Bài Viết SEO On-Page Đa Ngành & Technical Blueprint",
    type: "SEO Content & Technical On-Page Lab",
    category: "seo",
    categoryName: "SEO Content",
    categoryIcon: "fas fa-search",
    categoryColor: "#df7900",
    duration: "10/2026",
    results: "18 Bài viết mẫu chuyên sâu • SERP Inspector • Bảng 8 phần Blueprint Masterclass",
    tools: ["On-Page SEO", "Schema.org", "Keyword Research", "SERP Simulator", "E-E-A-T"],
    description: "Tuyển tập 18 bài viết chuẩn On-Page SEO dài 2.000 - 2.800 từ trải dài qua nhiều nhóm ngành (Thâm Hụt Calo Giảm Mỡ, Tài Chính Gen Z, Gaming Liên Quân Mobile, Công nghệ AI, Gunpla, Phần cứng PC, Anime Manga, Game Dev 2D, F&B Cà phê, Thời trang Canvas, Văn phòng phẩm, Cây cảnh, Du lịch, Quản trị Content, Điện thoại, Laptop, Spa, Skincare). Mỗi bài đều có mô phỏng SERP và hồ sơ kỹ thuật 8 phần minh bạch.",
    featured: true,
    links: [
      { url: "/seo/", icon: "fas fa-search", btnText: "Xem Tuyển Tập 18 Bài Viết", title: "Mở hub 18 bài SEO chuyên sâu" },
      { url: "/seo/cach-tham-hut-calo-giam-mo/", icon: "fas fa-heart-pulse", btnText: "Xem Bài 17 (Thâm Hụt Calo)", title: "Mở bài viết Thâm Hụt Calo" },
      { url: "/seo/quan-ly-tai-chinh-gen-z/", icon: "fas fa-coins", btnText: "Xem Bài 18 (Tài Chính Gen Z)", title: "Mở bài viết Tài Chính Gen Z" },
      { url: "/seo/cach-leo-rank-lien-quan-mobile/", icon: "fas fa-gamepad", btnText: "Xem Bài 16 (Liên Quân Mobile)", title: "Mở bài viết Leo rank Liên Quân" }
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

// Bảng ánh xạ 13 đồ án và case study sang URL showcase chuyên sâu tương ứng
const projectPrimaryUrls = {
  1: "/nghien-cuu/circle-k-gs25/",
  10: "https://potty.vn",
  30: "/content/",
  5: "/seo/"
};

function goToProject(projectId) {
  const targetUrl = projectPrimaryUrls[projectId] || "/du-an/";
  if (targetUrl.startsWith('http')) {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = targetUrl;
  }
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


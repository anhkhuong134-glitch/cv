# Nhật Ký Tiến Độ Nâng Cấp Portfolio & Khắc Phục Kiểm Duyệt Vòng 1

- **Thời điểm cập nhật**: 16/10/2026 18:15 (Giờ Việt Nam)
- **Tác giả / Chủ sở hữu**: Khương Tuấn Anh
- **Môi trường triển khai**: Vercel (`https://cv-two-pi-94.vercel.app/`)
- **Kho lưu trữ chính**: `C:\Users\anhkh\OneDrive\Desktop\CV` (remote `https://github.com/anhkhuong134-glitch/cv.git` branch `main`)
- **Tài liệu kiểm duyệt đối chiếu**: `KIEM-DUYET-CV-VONG-01-2026-10-16.md`

---

## 1. Các hạng mục đã hoàn thành & Khắc phục toàn diện theo Kiểm duyệt Vòng 1

### 1.1. Sửa lỗi vỡ khung nhìn di động (Mobile Reflow 320px – 423px – 768px)
- **Bằng chứng trước sửa**: Ở viewport 423px, DOM trả documentElement.scrollWidth = 494px do lưới 2 cột cố định inline kèm aside 320px.
- **Biện pháp xử lý**:
  - Chuyển toàn bộ cấu trúc bài viết sang class `.article-page-layout`, `.article-main-col`, `.article-sidebar`.
  - Trên màn hình nhỏ (< 1024px), sidebar chuyển thành static, mục lục (TOC) chuyển vào disclosure `<details class="mobile-toc">` thu gọn tự nhiên.
  - Toàn bộ bảng số liệu được bọc trong `<div class="table-wrap">` cho phép cuộn ngang độc lập mà không ép giãn văn bản thân bài.
  - Xóa bỏ các quy tắc inline `grid-template-columns: 1.2fr 0.8fr` và `1fr 1fr` trên Homepage và các Hub; thay bằng class tiện ích `.hero-grid`, `.split-grid-hero`, `.split-grid-2col` tự động co về 1 cột dưới 900px.

### 1.2. Mở rộng Hồ sơ On-page thành Dossier 10 mục chuẩn mực
Thay thế khối tóm tắt 5 ô cũ bằng hệ thống 10 mục chi tiết ở cả 11 bài viết A01–A11:
1. **Brief & Tình huống**: Người đọc, bối cảnh thực tế, câu hỏi cốt lõi, CTA, phạm vi và điều không khẳng định quá mức.
2. **Ý định tìm kiếm & Từ khóa**: Tách bạch từ khóa chính, từ khóa phụ/biến thể; phân tích Search Intent (Informational/Commercial) & Góc tiếp cận (Angle). Ghi rõ: "Chưa khảo sát có kiểm soát theo từ khóa riêng lẻ; volume/KD chưa có công cụ trả phí để xác nhận số liệu".
3. **Giọng văn & 2 ví dụ biên tập Trước/Sau**: Minh họa chuyển đổi văn phong quảng cáo sáo rỗng sang ngôn từ khách quan, có kiểm chứng, không tạo trải nghiệm cá nhân giả.
4. **Bản đồ Heading & Dàn ý**: Trích xuất chính xác cấu trúc H2/H3 thực tế từ thân bài.
5. **Metadata & Xem thử SERP**: Title, Meta Description, Canonical, Robots (`noindex, follow`), bộ đếm số ký tự thực tế (không dùng điểm SEO tự phong).
6. **Bảng liên kết nội bộ (Internal Links)**: Nguồn, URL đích bấm được, anchor text đúng thân bài, mục đích điều hướng, trạng thái gắn link.
7. **Bảng nguồn tham khảo ngoại bộ (External Sources)**: URL chính thức từ tài liệu hãng/tổ chức, luận điểm được chứng minh, ngày đối chiếu và giới hạn nguồn.
8. **Kế hoạch liên kết ngoài / Backlink**: Tài sản đáng dẫn, nhóm đối tượng tiếp cận, URL đề xuất. Mặc định ghi rõ trạng thái: "Đề xuất, chưa tiếp cận, chưa có backlink".
9. **Bảng tài sản hình ảnh**: File SVG, alt text chuẩn tiếp cận, caption, vai trò và bản quyền tự dựng 100%.
10. **Nhật ký QA & Đo lường**: Ghi nhận minh bạch các bước đã kiểm (Markdown, W3C HTML, Mobile Reflow, Accessibility) và các bước đang chờ đo lường thực tế (thứ hạng sau xuất bản, traffic chiến dịch).

### 1.3. Khắc phục lỗi XML SVG & Chuẩn hóa toàn bộ tài sản đồ họa
- **Lỗi cũ**: `assets/articles/a01-hero.svg` lỗi parse XML tại dòng 7 do chứa ký tự `&` thô ("Nguồn & Claim").
- **Xử lý triệt để**:
  - Toàn bộ 53 file SVG trong repo đã được chạy script quét và escape `&` thành `&amp;`.
  - Kiểm tra tự động bằng XML parser: 53/53 file hợp lệ 100%, không còn bất kỳ lỗi parse nào.

### 1.4. Gắn ảnh nội dung trực tiếp vào thân bài đọc
- Đã nhúng trực tiếp thẻ `<figure class="article-hero-fig">` (Hero banner) và `<figure class="article-infographic-fig">` (Infographic sơ đồ quy trình/bảng so sánh) vào vị trí đọc tự nhiên của cả 11 bài viết A01–A11.

### 1.5. Chỉnh sửa phát ngôn trung thực & Khiêm tốn về vai trò
- Sidebar: Đổi thành "Quy trình đề xuất gồm 22 bước. Hồ sơ từng bài ghi rõ phần đã làm và phần cần triển khai tiếp."
- Title & Schema: Ghi đúng vai trò học tập: "Khương Tuấn Anh · Portfolio Góc Làm Nội Dung" / "Học viên Digital Marketing, hướng đến Content Creator" (loại bỏ danh xưng "Specialist" / "Chuyên gia").
- Đồ án Circle K & GS25:
  - Vai trò: Ghi nhận là "Thành viên nhóm Bee Chăm Chỉ" trong đồ án môn học tại VTC Academy (loại bỏ khẳng định cá nhân tự xây bảng hỏi, tự xử lý số liệu).
  - Kênh thấy cửa hàng: Đổi thành "Trong mẫu, việc thấy cửa hàng trực tiếp là một kênh nhận biết được nhiều người chọn; có thể đề xuất khảo sát tiếp yếu tố điểm bán."
  - Nhận diện logo: Ghi rõ "90/93 người chọn đúng hình ảnh logo trong câu hỏi có gợi ý hình; không suy rộng thành mức ghi nhớ tự phát."
  - Giữ vị trí trung tâm, nổi bật tại Homepage, Projects Hub, Research Hub kèm đường link mở trực tiếp báo cáo Google Docs gốc.

### 1.6. Sửa lỗi Markdown và Giao diện người dùng
- A01: Blockquote `> ` đã được biên dịch thành thẻ `<blockquote>` đúng chuẩn ngữ nghĩa.
- A11: Đã cắt bỏ ký tự `<p>#</p>` dư thừa ở cuối trang, kết thúc bài đúng tại mục `### 6.2.`.
- Nút CTA chuyển sang nhãn tự nhiên: "Xem hồ sơ làm bài" (không lộ `#ho-so` hay `DOSSIER`).
- Footer: Bỏ câu "Không claim TOP 1 tự phong", thay bằng câu trung thực, tự nhiên: "© 2026 Khương Tuấn Anh. Portfolio xây dựng trung thực, minh bạch nguồn đối chiếu."

### 1.7. Hoàn thiện Bộ nhận diện Concept & Content Lab Artworks
- **NẾP GẤP (NG01–NG06)**: Dựng đủ 6 ấn phẩm vector chi tiết cao:
  - NG01: Bìa sổ A5 (Mặt trước & Mặt sau)
  - NG02: Ruột lịch tuần A5 mở 2 trang
  - NG03: Bộ 3 thẻ ghi chú 90×120mm (Việc cần làm, Điều cần hỏi, Ý tưởng mới)
  - NG04: Đai giấy bọc sổ (Belly band) trải phẳng ghi thông số giấy 100gsm
  - NG05: Bộ Carousel ra mắt 6 slide chuẩn tỉ lệ 4:5
  - NG06: Header cửa hàng concept (desktop & mobile)
- **MẺ NHỎ (MN01–MN06, MN-S1, MN-S2, MN-V1)**:
  - MN01: Bao bì túi cà phê kraft 160×240mm (van 1 chiều, hướng dẫn 4 bước pha)
  - MN02: Thẻ hỏi gu 100×150mm
  - MN03: Phiếu thử ly pha tại nhà A5
  - MN04: Ly giấy takeaway concept và sleeve cách nhiệt
  - MN05: Bộ banner đa kích thước (Web 1200×628, Square 1080×1080, Story 1080×1920)
  - MN06: Carousel 6 slide "Năm điều nói với người bán"
  - MN-S1: Story 3 khung khảo sát 2 lựa chọn (Poll: Đen / Sữa)
  - MN-S2: Story chữ giải đáp băn khoăn cách diễn đạt gu
  - MN-V1: Storyboard kịch bản video 20s (4 phân cảnh hình ảnh, góc máy, lời thoại voice-over)
- **QUAI VẢI (QV01–QV06)**:
  - QV01: Artwork in túi tote canvas (mặt trước & sơ đồ chia ngăn mặt sau)
  - QV02: Hangtag thẻ treo 2 mặt 60×100mm
  - QV03: Phiếu đo & thử túi vải A5
  - QV04: Bộ icon 6 vật dụng cá nhân nét 2px đồng nhất
  - QV05: Poster "Đo trước khi chọn" & Carousel
  - QV06: Card infographic cẩm nang 4 bước chọn túi

---

## 2. Kế hoạch xác thực & Đẩy lên Production Vercel
1. Thực hiện commit toàn bộ thay đổi vào git repo `C:\Users\anhkh\OneDrive\Desktop\CV`.
2. Push lên remote `origin main`.
3. Kiểm tra kết quả build và live site tại `https://cv-two-pi-94.vercel.app/`.

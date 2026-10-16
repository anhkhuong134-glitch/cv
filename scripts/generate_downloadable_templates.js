import fs from 'fs';
import path from 'path';

const targetDir = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\CV\\tai-nguyen\\files';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. bang-kiem-chung-claim.csv
const claimCsv = `Câu khẳng định cần kiểm chứng,URL nguồn đối chiếu,Ngày kiểm,Nội dung tài liệu nguồn hỗ trợ,Giới hạn của nguồn,Quyết định biên tập,Người phụ trách
"AIKTP tạo bài viết chuẩn SEO và cam kết TOP 1 sau 24h",https://aiktp.com/vi/ai-write-post-by-keyword,2026-10-16,"Tính năng tạo bài theo từ khóa được hãng giới thiệu","Chưa có thử nghiệm độc lập; thuật toán Google không đảm bảo vị trí xếp hạng","Sửa thành: Công cụ hỗ trợ tạo khung nháp sơ bộ, cần biên tập và kiểm chứng claim",Tuấn Anh
"Google phạt nặng tất cả website dùng AI tạo nội dung",https://developers.google.com/search/docs/fundamentals/using-gen-ai-content,2026-10-16,"Google tập trung vào chất lượng và tính hữu ích của nội dung, không phạt riêng công nghệ sinh bài","Nội dung tự động hóa quy mô lớn nhằm thao túng thứ hạng vẫn vi phạm chính sách spam","Đính chính: Google ưu tiên nội dung hữu ích có giá trị gia tăng, bất kể do AI hay con người viết",Tuấn Anh
"Điểm SEO 100/100 trên plugin Yoast/Rank Math đảm bảo thứ hạng",https://developers.google.com/search/docs/fundamentals/creating-helpful-content,2026-10-16,"Google không dựa trên điểm plugin On-page của bên thứ ba để xếp hạng","Điểm số chỉ là checklist hỗ trợ kỹ thuật On-page","Bỏ claim điểm 100 tuyệt đối, tập trung giải quyết câu hỏi thực của người đọc",Tuấn Anh
"95% khách hàng của chuỗi tiện lợi tại Việt Nam là Gen Z",https://docs.google.com/document/d/1DwkfLBnoLzQpye0wTN1edLt3hCfaGIdbJcxBiiON-5E/edit?tab=t.0,2026-10-16,"Báo cáo đồ án nhóm Bee Chăm Chỉ khảo sát 93 mẫu hợp lệ tại Hà Nội, trong đó nhóm 18-24 tuổi chiếm 63/93 (67.7%)","Mẫu trực tuyến giới hạn trong đồ án môn học, không đại diện toàn bộ dân số cả nước","Sửa thành: Trong mẫu khảo sát 93 người của đồ án nhóm, nhóm 18-24 chiếm 67.7%",Tuấn Anh
`;
fs.writeFileSync(path.join(targetDir, 'bang-kiem-chung-claim.csv'), claimCsv.trim(), 'utf8');

// 2. bang-tuong-thich-pc.csv
const pcCsv = `Hạng mục,Linh kiện dự kiến,Mã linh kiện chi tiết,Tài liệu đối chiếu manual,Điều kiện hỗ trợ kỹ thuật,Xác nhận tương thích,Ghi chú kiểm tra
CPU & Bo mạch chủ,Intel Core i5-13400F,Socket LGA1700,Manual bo mạch chủ B760,Cần kiểm tra phiên bản BIOS hỗ trợ thế hệ 13,Đã xác nhận,Bo mạch chủ xuất xưởng cần có BIOS cập nhật
Tản nhiệt & Vỏ case,Thermalright Assassin X 120,Cao 148mm,Thông số vỏ case (Clearance max),Vỏ case hỗ trợ tản tháp tối đa 160mm,Đã xác nhận,Khoảng cách an toàn còn 12mm
Bộ nhớ RAM & Khe cắm,Kingston Fury Beast 16GB (2x8GB),DDR4 3200MHz CL16,QVL bo mạch chủ B760,Gắn đúng khe A2-B2 để kích hoạt Dual Channel,Đã xác nhận,Bật XMP trong BIOS sau khi lắp
Card đồ họa (GPU) & Nguồn,RTX 4060 8GB,Dài 242mm / TDP 115W,Khuyến nghị nguồn 550W Bronze,Nguồn dự kiến 650W 80 Plus Bronze có đầu 8-pin PCIe,Đã xác nhận,Đủ công suất và dư tải an toàn
Ổ cứng SSD M.2,Samsung 980 1TB NVMe,PCIe Gen 3.0 x4 M.2 2280,Khe M.2_1 CPU hỗ trợ PCIe 4.0/3.0,Khe M.2 có tản nhiệt heatsink đi kèm bo mạch chủ,Đã xác nhận,Tháo seal tản nhiệt trước khi vặn ốc
`;
fs.writeFileSync(path.join(targetDir, 'bang-tuong-thich-pc.csv'), pcCsv.trim(), 'utf8');

// 3. playtest-mot-phong.csv
const playtestCsv = `Mã tình huống,Mục tiêu người chơi,Hành động người chơi,Kết quả mong đợi,Kết quả thực tế ghi nhận,Mức độ ảnh hưởng (Bug/UX),Cách tái hiện lỗi,Bản build,Trạng thái
TC-01,Mở cửa phòng chính,Tương tác với rương để lấy chìa khóa,Rương mở ra và item chìa khóa rơi vào túi đồ,Chìa khóa rơi vào túi đồ thành công,Bình thường,Tương tác phím E,Build 0.1.2,Hoàn thành
TC-02,Mở cửa phòng chính,Đến trước cánh cửa khóa bấm phím E,Cửa phát âm thanh mở và chuyển màn chơi,Cửa mở nhưng nhân vật bị kẹt hitbox góc phải,Trung bình (Hitbox lệch),Đi sát vào bản lề trước khi bấm E,Build 0.1.2,Cần sửa collider
TC-03,Nhảy qua hố chông,Bấm nút Space khi đang chạy đà,Nhân vật nhảy qua gờ tường an toàn,Nhảy qua được khi căn đúng thời điểm,Tốt,Chạy đà 2 bước rồi nhảy,Build 0.1.2,Đã chốt
TC-04,Đọc biển chỉ dẫn bí mật,Bấm E vào tấm bia đá,Hộp thoại thoại hiện chữ hướng dẫn thoát hiểm,Chữ hiển thị đúng font tiếng Việt,Tốt,Đứng trước bia đá,Build 0.1.2,Đã chốt
`;
fs.writeFileSync(path.join(targetDir, 'playtest-mot-phong.csv'), playtestCsv.trim(), 'utf8');

// Function to generate printable template HTML
function makePrintableHtml(title, subtitle, bodyContent) {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} · Tài nguyên Portfolio Tuấn Anh</title>
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
  <style>
    body { background: #FFFFFF; padding: 40px 20px; font-size: 15px; }
    .print-sheet { max-width: 800px; margin: 0 auto; border: 2px solid #D6DFE8; border-radius: 12px; padding: 40px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
    .print-header { border-bottom: 2px solid #285B58; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; }
    .print-title { font-size: 24px; font-weight: 700; color: #285B58; }
    .print-subtitle { color: #53647A; font-size: 14px; margin-top: 4px; }
    .print-badge { font-size: 11px; font-weight: 600; background: #F5F7FB; border: 1px solid #D6DFE8; padding: 4px 10px; border-radius: 6px; }
    .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
    .field-box { border: 1px solid #D6DFE8; border-radius: 8px; padding: 12px 14px; background: #FAFBFD; }
    .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #53647A; margin-bottom: 6px; }
    .field-value { font-size: 14px; color: #243247; min-height: 24px; }
    .field-full { grid-column: span 2; }
    .print-actions { margin-top: 30px; text-align: center; }
    @media print {
      body { padding: 0; }
      .print-sheet { border: none; box-shadow: none; padding: 0; }
      .print-actions { display: none; }
    }
  </style>
</head>
<body>
  <div class="print-sheet">
    <div class="print-header">
      <div>
        <div class="print-title">${title}</div>
        <div class="print-subtitle">${subtitle}</div>
      </div>
      <div class="print-badge">BẢN MẪU BIÊN TẬP · TA STUDIO</div>
    </div>
    ${bodyContent}
    <div class="print-actions">
      <button class="btn btn-primary" onclick="window.print()">In hoặc Lưu dạng PDF</button>
      <a class="btn btn-secondary" href="../index.html">Về trang Tài nguyên</a>
    </div>
  </div>
</body>
</html>`;
}

// 4. brief-content-mot-trang.html
const briefHtml = makePrintableHtml(
  'BRIEF NỘI DUNG MỘT TRANG',
  'Mẫu thống nhất đầu vào, mục tiêu và phạm vi trước khi sản xuất',
  `
  <div class="field-grid">
    <div class="field-box"><div class="field-label">Tên công việc / Mã bài</div><div class="field-value">A06 — Chọn Cà Phê Pha Phin Tại Nhà</div></div>
    <div class="field-box"><div class="field-label">Người biên tập / Phụ trách</div><div class="field-value">Khương Tuấn Anh (Content Specialist)</div></div>
    <div class="field-box field-full"><div class="field-label">Người đọc &amp; Tình huống cụ thể</div><div class="field-value">Người mới bắt đầu pha cà phê tại nhà bằng phin nhôm/inox truyền thống, chưa biết diễn đạt gu và bối rối trước quá nhiều từ ngữ chuyên môn khi mua hạt/bột.</div></div>
    <div class="field-box"><div class="field-label">Một việc bài giúp người đọc làm được</div><div class="field-value">Biết cách mô tả gu uống (đen/sữa), đọc nhãn gói cà phê và đặt đúng câu hỏi về cỡ xay, lượng pha cho người bán.</div></div>
    <div class="field-box"><div class="field-label">Thông điệp cốt lõi (Key Message)</div><div class="field-value">“Pha theo gu của bạn: bắt đầu từ cách uống và dụng cụ bạn đang có.”</div></div>
    <div class="field-box field-full"><div class="field-label">Nguồn tài liệu &amp; Dữ liệu được phép trích dẫn</div><div class="field-value">• Hướng dẫn pha của National Coffee Association (NCA) về tỷ lệ và bảo quản.<br>• Thông tin trên bao bì chính thức của sản phẩm cụ thể.<br>• Phiếu ghi chú lần pha của concept MẺ NHỎ.</div></div>
    <div class="field-box field-full"><div class="field-label">Giới hạn không được khẳng định (Claim Limitations)</div><div class="field-value">• Tuyệt đối KHÔNG hứa hẹn công thức ngon nhất thế giới hay gu chuẩn độc quyền.<br">• KHÔNG tự bịa các chứng chỉ vệ sinh an toàn hay số liệu khảo sát thị trường.<br">• Ghi rõ đây là hướng dẫn phương pháp đặt câu hỏi, không thay thế hướng dẫn của nhà sản xuất.</div></div>
    <div class="field-box"><div class="field-label">Kêu gọi hành động chính (Primary CTA)</div><div class="field-value">Tải Phiếu Thử Gu Cà Phê tại /tai-nguyen/#phieu-thu-gu</div></div>
    <div class="field-box"><div class="field-label">Tiêu chí duyệt bản nháp</div><div class="field-value">Có đủ bảng đối chiếu, văn phong khiêm tốn, không lỗi font, kèm On-page dossier.</div></div>
  </div>
  `
);
fs.writeFileSync(path.join(targetDir, 'brief-content-mot-trang.html'), briefHtml, 'utf8');

// 5. phieu-thu-gu-ca-phe.html
const coffeeHtml = makePrintableHtml(
  'PHIẾU THỬ GU CÀ PHÊ PHA TẠI NHÀ',
  'Ghi lại cảm nhận và điều chỉnh từng biến số cho concept MẺ NHỎ',
  `
  <div class="field-grid">
    <div class="field-box"><div class="field-label">Tên sản phẩm / Gói cà phê</div><div class="field-value">Mẻ Nhỏ — Mộc Blend (Concept)</div></div>
    <div class="field-box"><div class="field-label">Dụng cụ pha đang có</div><div class="field-value">[X] Phin nhôm &nbsp; [ ] Phin inox &nbsp; [ ] Khác: _____</div></div>
    <div class="field-box field-full"><div class="field-label">Cách bạn thường uống</div><div class="field-value">[ ] Cà phê đen nóng &nbsp; [X] Cà phê đen đá &nbsp; [X] Thêm sữa đặc &nbsp; [ ] Thêm sữa tươi</div></div>
    <div class="field-box"><div class="field-label">Lượng cà phê bột (gram)</div><div class="field-value">20g (khoảng 3 thìa gạt tiêu chuẩn)</div></div>
    <div class="field-box"><div class="field-label">Lượng nước sôi rót vào (ml)</div><div class="field-value">Ủ 30ml (90s) → Rót thêm 50ml</div></div>
    <div class="field-box field-full"><div class="field-label">Cảm nhận sau khi nếm lần đầu</div><div class="field-value">Vị đắng êm, thơm mùi ngũ cốc rang, hậu vị ngọt nhẹ khi thêm 15ml sữa đặc. Giọt chảy hơi nhanh ở giai đoạn cuối.</div></div>
    <div class="field-box field-full"><div class="field-label">MỘT điều bạn muốn thay đổi trong lần pha tới</div><div class="field-value">Vặn nắp gài chặt hơn nửa vòng hoặc nhờ nơi bán xay mịn hơn 1 nấc để kéo dài thời gian chiết xuất thêm 30 giây.</div></div>
  </div>
  `
);
fs.writeFileSync(path.join(targetDir, 'phieu-thu-gu-ca-phe.html'), coffeeHtml, 'utf8');

// 6. lich-tuan-nep-gap.html
const plannerHtml = makePrintableHtml(
  'LỊCH TUẦN NẾP GẤP (WEEKLY PLANNER)',
  'Bố cục tuần mở, phân vùng việc ưu tiên và khu vực Ý Tưởng Đang Mở',
  `
  <div class="field-grid">
    <div class="field-box"><div class="field-label">Tuần từ ngày - đến ngày</div><div class="field-value">Thứ Hai ___/___ đến Chủ Nhật ___/___</div></div>
    <div class="field-box"><div class="field-label">Mục tiêu trọng tâm của tuần</div><div class="field-value">Hoàn thành bản thảo 2 bài viết SEO &amp; Duyệt bộ ảnh Carousel</div></div>
    <div class="field-box field-full"><div class="field-label">Phân chia các ngày trong tuần</div>
      <div class="field-value" style="font-size:13px; line-height:1.9;">
        <strong>Thứ 2:</strong> Nhận đề bài brief, khảo sát 5 nguồn sơ cấp.<br>
        <strong>Thứ 3:</strong> Lập cấu trúc dàn ý H2/H3 và bảng đối chiếu từ khóa.<br>
        <strong>Thứ 4:</strong> Chạy AI tạo khung nháp, rà soát từng khẳng định số liệu.<br>
        <strong>Thứ 5:</strong> Biên tập giọng văn, chèn Internal/External links, thiết kế infographic.<br>
        <strong>Thứ 6:</strong> Rà soát kỹ thuật On-page, kiểm tra alt ảnh và xuất bản bài viết.<br>
        <strong>Thứ 7 - CN:</strong> Đánh giá thời gian hoàn thành, ghi chú điều cần cải thiện.
      </div>
    </div>
    <div class="field-box field-full" style="background:#FFFDF0; border:1px solid #E8D383;"><div class="field-label" style="color:#B06000;">VÙNG Ý TƯỞNG ĐANG MỞ (Open Notes)</div><div class="field-value">Chừa khoảng trống cho những việc phát sinh giữa tuần hoặc câu hỏi thú vị chưa kịp đào sâu, không ép lịch kín 100%.</div></div>
  </div>
  `
);
fs.writeFileSync(path.join(targetDir, 'lich-tuan-nep-gap.html'), plannerHtml, 'utf8');

// 7. phieu-do-tui.html
const bagHtml = makePrintableHtml(
  'PHIẾU ĐO TÚI VÀ ĐỐI CHIẾU ĐỒ MANG',
  'Concept QUAI VẢI: Chọn túi từ kích thước thực tế của vật dụng hàng ngày',
  `
  <div class="field-grid">
    <div class="field-box"><div class="field-label">Mã túi dự kiến kiểm tra</div><div class="field-value">QUAI VẢI — Daily Canvas Tote M1</div></div>
    <div class="field-box"><div class="field-label">Món đồ lớn nhất mang theo</div><div class="field-value">Laptop 14 inch kèm túi chống sốc dày</div></div>
    <div class="field-box"><div class="field-label">Kích thước đồ lớn nhất (DxRxC)</div><div class="field-value">33.5cm x 24.5cm x 3.0cm</div></div>
    <div class="field-box"><div class="field-label">Kích thước lòng túi thực tế</div><div class="field-value">36.0cm x 30.0cm x 10.0cm</div></div>
    <div class="field-box"><div class="field-label">Kiểm tra miệng túi</div><div class="field-value">[X] Khóa kéo an toàn &nbsp; [ ] Khuy bấm &nbsp; [ ] Miệng mở tự do</div></div>
    <div class="field-box"><div class="field-label">Chiều dài quai xách / đeo vai</div><div class="field-value">Độ rơi quai 26cm (đeo vừa nách khi mặc áo khoác dày)</div></div>
    <div class="field-box field-full"><div class="field-label">Checklist danh sách đồ dùng một ngày</div><div class="field-value">• Máy tính &amp; cáp sạc &nbsp; • Bình giữ nhiệt 500ml &nbsp; • Sổ A5 &amp; hộp bút &nbsp; • Ví tiền &amp; chìa khóa</div></div>
  </div>
  `
);
fs.writeFileSync(path.join(targetDir, 'phieu-do-tui.html'), bagHtml, 'utf8');

// 8. checklist-du-lich-cuoi-tuan.html
const travelHtml = makePrintableHtml(
  'CHECKLIST DU LỊCH CUỐI TUẦN (2 NGÀY 1 ĐÊM)',
  'Soạn đồ theo hoạt động, phương tiện di chuyển và kiểm tra an toàn trước khi rời nhà',
  `
  <div class="field-grid">
    <div class="field-box"><div class="field-label">Điểm đến &amp; Phương tiện</div><div class="field-value">Vũng Tàu / Xe khách giường nằm</div></div>
    <div class="field-box"><div class="field-label">Thời tiết &amp; Nơi lưu trú</div><div class="field-value">Nắng nhẹ 28-32°C / Homestay bãi Sau</div></div>
    <div class="field-box field-full"><div class="field-label">Nhóm 1: Giấy tờ &amp; Vật dụng không thể thiếu</div><div class="field-value">[X] CCCD gắn chip &nbsp; [X] Thẻ ngân hàng &amp; 300k tiền mặt &nbsp; [X] Điện thoại &amp; Sạc dự phòng 10.000mAh</div></div>
    <div class="field-box field-full"><div class="field-label">Nhóm 2: Trang phục theo bộ hoạt động</div><div class="field-value">• Bộ di chuyển: Quần jogger + Áo thun thoáng khí.<br>• Bộ dạo biển chiều: Áo sơ mi cộc tay linen + Quần short.<br>• Bộ ngủ &amp; đồ lót dự phòng: 2 bộ gọn nhẹ xếp cuộn tròn.</div></div>
    <div class="field-box field-full"><div class="field-label">Nhóm 3: Thuốc &amp; Đồ vệ sinh cá nhân</div><div class="field-value">• Kem chống nắng SPF 50+ &nbsp; • Bàn chải/kem đánh răng cá nhân &nbsp; • Thuốc hạ sốt &amp; urgo cá nhân</div></div>
    <div class="field-box field-full" style="background:#F5F7FB;"><div class="field-label">Kiểm tra 5 phút trước khi khóa cửa</div><div class="field-value">[X] Rút toàn bộ phích cắm điện &nbsp; [X] Khóa van bình gas &nbsp; [X] Đóng cửa sổ &nbsp; [X] Đổ rác sinh hoạt</div></div>
  </div>
  `
);
fs.writeFileSync(path.join(targetDir, 'checklist-du-lich-cuoi-tuan.html'), travelHtml, 'utf8');

console.log('Successfully generated all downloadable templates & CSVs in:', targetDir);

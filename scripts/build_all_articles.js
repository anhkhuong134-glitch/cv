import fs from 'fs';
import path from 'path';

const planPath = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\nghịch\\KE-HOACH-NANG-CAP-CV-ANTIGRAVITY-2026-10-16.md';
const baseDir = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\CV';
const planContent = fs.readFileSync(planPath, 'utf8');

// Comprehensive metadata for all 11 articles per Sections 5.2 - 5.4, 6.0, 6.1
const articleMeta = {
  A01: {
    slug: 'ai-ho-tro-viet-bai-seo',
    category: 'Công cụ nội dung',
    categorySlug: 'cong-cu-noi-dung',
    title: 'Dùng AI hỗ trợ viết SEO: từ brief đến bản biên tập',
    h1: 'Dùng AI hỗ trợ viết SEO: từ brief đến bản biên tập',
    desc: 'Chuẩn bị brief, dùng AI tạo bản nháp rồi kiểm nguồn, giọng văn, liên kết và metadata trước khi đăng. Có mẫu giao việc và checklist biên tập.',
    
    // Brief details
    reader: 'Người làm content marketing, copywriter hoặc sinh viên mới tiếp cận các công cụ sinh văn bản bằng AI (như ChatGPT, Claude, AIKTP).',
    situation: 'Thường giao prompt chung chung (“viết bài hay về...”), nhận bản nháp nhiều từ ngữ sáo rỗng, claim phóng đại và không có căn cứ kiểm chứng.',
    coreQuestion: 'Làm thế nào để ứng dụng AI vào quy trình viết SEO mà vẫn đảm bảo tính chính xác, trung thực và phục vụ đúng người đọc?',
    objective: 'Biết cách chuẩn bị một bản brief một trang có giới hạn, kiểm tra đối chiếu từng con số/claim kỹ thuật trước khi biên tập xuất bản.',
    cta: 'Tải Bảng kiểm chứng claim và Mẫu brief một trang tại /tai-nguyen/.',
    limitations: 'Tuyệt đối KHÔNG hứa hẹn AI giúp bài viết tự động lên TOP 1 Google sau 24h; KHÔNG bịa đặt số liệu tiết kiệm 95% chi phí; tuân thủ chính sách hữu ích của Google.',

    // Keywords & Intent
    primaryKw: 'AI hỗ trợ viết SEO',
    secondaryKws: ['brief SEO cho AI', 'biên tập bài viết AI', 'kiểm chứng claim nội dung AI', 'quy trình viết SEO bằng AI'],
    searchIntent: 'Informational (Tìm kiếm thông tin phương pháp luận & quy trình thực hành)',
    contentAngle: 'Thực dụng, thận trọng, lấy con người và nguồn sơ cấp làm chốt chặn chất lượng.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP và Search Volume/KD thực tế tại thị trường Việt Nam.',

    // Voice & Editorial
    voiceGuide: 'Rõ ràng, điềm tĩnh, hướng dẫn từng bước; không hứa hẹn mẹo vặt qua mặt công cụ tìm kiếm.',
    beforeAfter: [
      { before: '“AIKTP giúp bạn tự động tạo bài viết chuẩn SEO 100/100 và thống trị TOP 1 Google sau 24h.”', after: '“Công cụ hỗ trợ tạo khung nháp nhanh theo từ khóa, nhưng người biên tập phải kiểm tra nguồn và chịu trách nhiệm về thông tin.”' },
      { before: '“Google đang càn quét và tiêu diệt tất cả bài viết do AI tạo ra.”', after: '“Google đánh giá chất lượng và độ hữu ích của nội dung, không phạt riêng công nghệ sinh bài nếu nội dung đó có giá trị thực cho người đọc.”' }
    ],

    // Links
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Dùng AI hỗ trợ viết SEO', target: '/seo/ai-ho-tro-viet-bai-seo/', purpose: 'Điều hướng từ danh mục chính', status: 'Đã gắn' },
      { source: 'Case NHỊP VIỆC (/content/nhip-viec/)', anchor: 'AI tạo bản nháp có kiểm soát', target: '/seo/ai-ho-tro-viet-bai-seo/', purpose: 'Bối cảnh hóa quy trình nhận brief', status: 'Đã gắn' },
      { source: 'Thân bài A01', anchor: 'mẫu brief một trang', target: '/seo/brief-content-cho-nhom-nho/', purpose: 'Dẫn sang bài chi tiết về brief A11', status: 'Đã gắn' },
      { source: 'Thân bài A01', anchor: 'checklist trước khi đăng', target: '/seo/quy-trinh/', purpose: 'Dẫn sang quy trình 22 bước On-Page', status: 'Đã gắn' },
      { source: 'Thân bài A01', anchor: 'bảng kiểm chứng claim', target: '/tai-nguyen/#kiem-chung-claim', purpose: 'Dẫn sang trang tài nguyên tải CSV', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'AIKTP: Tính năng tạo bài viết theo từ khóa', url: 'https://aiktp.com/vi/ai-write-post-by-keyword', claim: 'Giới thiệu tính năng sinh bài từ khóa của công cụ', checkDate: '16/10/2026', limitation: 'Tài liệu giới thiệu của nhà phát triển, không phải bảo chứng thứ hạng.' },
      { name: 'Google Search Central: Hướng dẫn về nội dung tạo bằng AI', url: 'https://developers.google.com/search/docs/fundamentals/using-gen-ai-content', claim: 'Chính sách đánh giá tính hữu ích và chất lượng nội dung của Google', checkDate: '16/10/2026', limitation: 'Tài liệu hướng dẫn nguyên tắc chung, không đảm bảo hiển thị kết quả cụ thể.' }
    ],

    // Backlink Plan
    backlinkAsset: 'Mẫu Bảng kiểm chứng Claim (Claim Verification Sheet) dạng CSV và bài phân tích quy trình có kiểm chứng.',
    backlinkTargetGroup: 'Các cộng đồng content marketing, lớp học đào tạo viết bài, nhóm trao đổi freelance content.',
    backlinkPitchReason: 'Cung cấp một góc nhìn thận trọng, có biểu mẫu thực tế để rèn luyện thói quen kiểm tra nguồn thay vì copy-paste nguyên văn từ AI.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A02: {
    slug: 'gunpla-cho-nguoi-moi',
    category: 'Hobby & Mô hình',
    categorySlug: 'hobby-mo-hinh',
    title: 'Gunpla cho người mới: chọn kit và chuẩn bị lần lắp đầu',
    h1: 'Gunpla cho người mới: chọn kit và chuẩn bị lần lắp đầu',
    desc: 'Cách chọn bộ Gunpla đầu tiên bằng manual của đúng mã kit, chuẩn bị dụng cụ và sắp xếp buổi lắp mà không mua thừa đồ nghề.',
    reader: 'Người mới bắt đầu tìm hiểu bộ môn lắp ráp mô hình Gunpla (Gundam plastic model), chưa từng cầm kìm cắt mô hình.',
    situation: 'Bị choáng ngợp trước các cấp độ (HG, RG, MG, PG) và dễ mua thừa các loại dụng cụ đắt tiền không cần thiết cho lần đầu.',
    coreQuestion: 'Làm thế nào để chọn một bộ Gunpla đầu tiên vừa sức và hoàn thành trọn vẹn mà không tốn kém lãng phí?',
    objective: 'Biết cách đọc mã sản phẩm, tra cứu manual chính hãng Bandai, chuẩn bị 3 dụng cụ cơ bản và sắp xếp bàn lắp gọn gàng.',
    cta: 'Tải Phiếu chọn kit Gunpla tại /tai-nguyen/#phieu-chon-kit.',
    limitations: 'Không khuyến khích người mới nhảy ngay vào các dòng kit đắt tiền; không khẳng định một thương hiệu kìm cắt nào là duy nhất.',
    primaryKw: 'Gunpla cho người mới',
    secondaryKws: ['chọn kit Gunpla đầu tiên', 'dụng cụ lắp Gunpla cơ bản', 'manual Gunpla Bandai', 'hướng dẫn lắp Gundam'],
    searchIntent: 'Informational & Commercial Investigation (Hướng dẫn chọn mua & chuẩn bị)',
    contentAngle: 'Thực tế, dễ tiếp cận, nhấn mạnh trải nghiệm hoàn thành sản phẩm đầu tay.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Thân thiện, giải thích rõ thuật ngữ tiếng Nhật/Anh (runner, nubmark, gate).',
    beforeAfter: [
      { before: '“Mới chơi cứ mua kìm GodHand 1 triệu và kit MG 1/100 cho đẳng cấp.”', after: '“Bắt đầu từ một kit HG 1/144 bạn thực sự thích và một chiếc kìm cắt mô hình cơ bản là đủ để hoàn thành lần lắp đầu.”' },
      { before: '“Lắp Gunpla cực kỳ khó và dễ gãy part nếu không có thợ hướng dẫn.”', after: '“Sách hướng dẫn (manual) chính hãng sử dụng hình vẽ trực quan từng bước; chỉ cần đọc kỹ số hiệu vỉ runner là làm theo được.”' }
    ],
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Gunpla cho người mới', target: '/seo/gunpla-cho-nguoi-moi/', purpose: 'Danh mục Hobby', status: 'Đã gắn' },
      { source: 'Thân bài A02', anchor: 'phiếu chọn kit', target: '/tai-nguyen/#phieu-chon-kit', purpose: 'Dẫn sang biểu mẫu tải về', status: 'Đã gắn' },
      { source: 'Thân bài A02', anchor: 'quy trình kiểm tra', target: '/seo/quy-trinh/', purpose: 'Dẫn sang quy trình On-Page', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Bandai Hobby: Hướng dẫn lắp ráp chính thức mã RX-78-2', url: 'https://manual.bandai-hobby.net/menus/detail/978', claim: 'Tài liệu hướng dẫn chuẩn xác cấu trúc part và vỉ runner', checkDate: '16/10/2026', limitation: 'Áp dụng cho đúng mã kit RX-78-2 theo số hiệu của hãng.' }
    ],
    backlinkAsset: 'Phiếu chọn kit Gunpla trung lập không gắn link bán hàng.',
    backlinkTargetGroup: 'Các hội nhóm mô hình Gunpla Việt Nam, diễn đàn sở thích.',
    backlinkPitchReason: 'Bài viết giúp giải tỏa băn khoăn cho người mới, giảm bớt câu hỏi lặp lại trong cộng đồng.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A03: {
    slug: 'build-pc-theo-nhu-cau',
    category: 'Công nghệ',
    categorySlug: 'cong-nghe',
    title: 'Build PC theo nhu cầu: lập cấu hình trước khi mua linh kiện',
    h1: 'Build PC theo nhu cầu: lập cấu hình trước khi mua linh kiện',
    desc: 'Lập nhu cầu, ngân sách và bảng tương thích CPU, RAM, nguồn, tản nhiệt trước khi mua PC. Kèm mẫu so sánh cấu hình theo tác vụ.',
    reader: 'Người dùng cần tự ráp hoặc đặt mua máy tính để bàn phục vụ học tập, chơi game hoặc làm đồ họa.',
    situation: 'Thường chọn linh kiện theo tên gọi hoặc quảng cáo trên mạng mà không đối chiếu tính tương thích phần cứng.',
    coreQuestion: 'Làm thế nào để xây dựng một cấu hình PC cân đối, tương thích 100% giữa các linh kiện và đúng ngân sách?',
    objective: 'Nắm vững 5 cặp tương thích cốt lõi: CPU-Mainboard, RAM QVL, Tản-Case, GPU-Nguồn, và SSD M.2.',
    cta: 'Tải Bảng kiểm tương thích PC dạng CSV tại /tai-nguyen/#bang-tuong-thich-pc.',
    limitations: 'Không phán xét hiệu năng chủ quan; không tự ý bảo đảm mức FPS nếu chưa thử nghiệm benchmark thực tế.',
    primaryKw: 'build PC theo nhu cầu',
    secondaryKws: ['tương thích linh kiện PC', 'bảng cấu hình máy tính', 'chọn CPU và mainboard', 'nguồn cho RTX 4060'],
    searchIntent: 'Commercial Investigation (So sánh & kiểm tra tương thích trước khi mua)',
    contentAngle: 'Kỹ thuật thực dụng, nhấn mạnh kiểm tra manual bo mạch chủ và thông số kích thước vỏ case.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Chính xác, trung tính, không sử dụng biệt danh lóng phần cứng khó hiểu.',
    beforeAfter: [
      { before: '“Mainboard này gánh tốt mọi CPU cao cấp nhất hiện nay.”', after: '“Cần tra cứu danh sách hỗ trợ CPU và phiên bản BIOS tối thiểu trên trang web chính thức của nhà sản xuất bo mạch chủ.”' },
      { before: '“Nguồn 500W nào cũng cắm được card đồ họa rời.”', after: '“Cần kiểm tra công suất khuyến nghị của hãng GPU và số lượng đầu cắm 8-pin PCIe thực tế của bộ nguồn.”' }
    ],
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Build PC theo nhu cầu', target: '/seo/build-pc-theo-nhu-cau/', purpose: 'Danh mục Công nghệ', status: 'Đã gắn' },
      { source: 'Thân bài A03', anchor: 'bảng tương thích PC', target: '/tai-nguyen/#bang-tuong-thich-pc', purpose: 'Tải file CSV đối chiếu', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Intel: Hướng dẫn chuẩn bị và lắp ráp PC', url: 'https://www.intel.com/content/www/us/en/gaming/resources/how-to-build-a-gaming-pc.html', claim: 'Quy trình chuẩn bị phần cứng và an toàn tĩnh điện', checkDate: '16/10/2026', limitation: 'Hướng dẫn nền tảng của Intel cho nền tảng máy tính cá nhân.' }
    ],
    backlinkAsset: 'Bảng kiểm 5 cặp tương thích linh kiện PC dạng bảng tính CSV.',
    backlinkTargetGroup: 'Nhóm sinh viên công nghệ, diễn đàn IT, phòng hỗ trợ kỹ thuật phần cứng.',
    backlinkPitchReason: 'Cung cấp công cụ kiểm tra checklist trước khi ra cửa hàng máy tính.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A04: {
    slug: 'dragon-ball-daima-cho-nguoi-moi',
    category: 'Giải trí',
    categorySlug: 'giai-tri',
    title: 'Dragon Ball DAIMA: cần biết gì trước khi bắt đầu xem?',
    h1: 'Dragon Ball DAIMA: cần biết gì trước khi bắt đầu xem?',
    desc: 'Giới thiệu Dragon Ball DAIMA, bối cảnh mở đầu và cách tìm nguồn xem hợp pháp. Bài ít spoiler, phân biệt thông tin chính thức và nhận định.',
    reader: 'Khán giả muốn bắt đầu theo dõi bộ anime Dragon Ball DAIMA nhưng chưa xem hết toàn bộ các phần phim trước đây.',
    situation: 'Lo lắng không hiểu cốt truyện và gặp phải quá nhiều nội dung tiết lộ tình tiết (spoiler) không kiểm chứng trên mạng.',
    coreQuestion: 'Người mới có cần xem lại các phần phim cũ không, bối cảnh mở đầu ra sao và tìm nguồn xem hợp pháp ở đâu?',
    objective: 'Cung cấp bối cảnh mở đầu ngắn gọn, hướng dẫn tìm nền tảng xem có bản quyền và cách tránh các nhóm spoiler.',
    cta: 'Tải Phiếu kiểm nguồn thông tin giải trí tại /tai-nguyen/#kiem-nguon-giai-tri.',
    limitations: 'Tuyệt đối không tiết lộ các bước ngoặt cốt truyện then chốt; không tham gia vào tranh cãi canon vô căn cứ của fanpage.',
    primaryKw: 'Dragon Ball DAIMA',
    secondaryKws: ['DAIMA cho người mới', 'xem Dragon Ball DAIMA ở đâu', 'bối cảnh Dragon Ball DAIMA', 'anime DAIMA lịch phát sóng'],
    searchIntent: 'Informational (Tìm kiếm thông tin giải trí & hướng dẫn xem)',
    contentAngle: 'Trung thực, tôn trọng trải nghiệm của người xem, phân biệt rõ dữ liệu phát hành với suy đoán của cộng đồng.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Nhẹ nhàng, cởi mở, không phán xét mức độ hiểu biết của người mới.',
    beforeAfter: [
      { before: '“Phải cày hết 500 tập Dragon Ball Z và Super thì mới mong hiểu được DAIMA.”', after: '“DAIMA bắt đầu bằng một biến cố độc lập tại vương quốc Ma Giới; người mới chỉ cần nắm bối cảnh nhóm Goku vừa chiến thắng Majin Buu là có thể thưởng thức.”' },
      { before: '“Xem link này nét căng không mất tiền.”', after: '“Nên theo dõi qua các dịch vụ phát trực tuyến được cấp phép bản quyền chính thức để bảo đảm chất lượng hình ảnh và an toàn thiết bị.”' }
    ],
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Dragon Ball DAIMA', target: '/seo/dragon-ball-daima-cho-nguoi-moi/', purpose: 'Danh mục Giải trí', status: 'Đã gắn' },
      { source: 'Thân bài A04', anchor: 'cách kiểm nguồn thông tin', target: '/tai-nguyen/#kiem-nguon-giai-tri', purpose: 'Dẫn sang phiếu kiểm nguồn', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Dragon Ball Official: Thông báo dự án DAIMA', url: 'https://en.dragon-ball-official.com/news/01_2187.html', claim: 'Xác nhận vai trò tác giả Akira Toriyama và ý tưởng nhân vật', checkDate: '16/10/2026', limitation: 'Thông tin công bố chính thức từ chủ sở hữu quyền thương hiệu.' },
      { name: 'Dragon Ball Official: Thông báo phát sóng tập cuối', url: 'https://en.dragon-ball-official.com/news/01_3238.html', claim: 'Mốc thời gian phát hành tập kết thúc 28/02/2025', checkDate: '16/10/2026', limitation: 'Lịch phát sóng theo thông báo gốc của nhà sản xuất.' }
    ],
    backlinkAsset: 'Checklist nhận diện nguồn xem phim có bản quyền an toàn.',
    backlinkTargetGroup: 'Các trang thông tin điện ảnh, cộng đồng người hâm mộ anime văn minh.',
    backlinkPitchReason: 'Giúp lan tỏa thói quen xem phim bản quyền và bảo vệ trải nghiệm của khán giả.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A05: {
    slug: 'prototype-rpg-2d',
    category: 'Game Development',
    categorySlug: 'game-development',
    title: 'Prototype RPG 2D: thiết kế một phòng trước khi mở rộng',
    h1: 'Prototype RPG 2D: thiết kế một phòng trước khi mở rộng',
    desc: 'Thu nhỏ ý tưởng RPG 2D thành một phòng có mục tiêu, tương tác và điều kiện hoàn thành. Kèm tiêu chí playtest và bảng ghi lỗi.',
    reader: 'Nhà phát triển game indie mới bắt đầu hoặc sinh viên học ngành lập trình/thiết kế game.',
    situation: 'Thường tham vọng xây dựng cả một thế giới rộng lớn với hàng trăm quái vật và nhiệm vụ, dẫn đến kiệt sức và bỏ dở dự án.',
    coreQuestion: 'Làm thế nào để kiểm tra ý tưởng cốt lõi của một game RPG 2D nhanh chóng trong phạm vi một căn phòng duy nhất?',
    objective: 'Biết cách thiết kế một căn phòng thử nghiệm (whitebox/greybox) có mục tiêu, chướng ngại và cơ chế phản hồi rõ ràng.',
    cta: 'Tải Bảng ghi lỗi Playtest một phòng tại /tai-nguyen/#playtest-mot-phong.',
    limitations: 'Không hứa hẹn bí quyết làm game thương mại triệu đô; chỉ tập trung vào phương pháp luận thu nhỏ phạm vi (scope).',
    primaryKw: 'prototype RPG 2D',
    secondaryKws: ['làm bản mẫu game RPG', 'mini brief game', 'thiết kế một phòng game', 'playtest game 2D'],
    searchIntent: 'Informational (Hướng dẫn thiết kế level & kỹ thuật làm prototype)',
    contentAngle: 'Thực hành tinh gọn, tập trung vào vòng lặp tương tác (core gameplay loop).',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Gọn gàng, giải thích bằng ví dụ trực quan trong không gian 2D.',
    beforeAfter: [
      { before: '“Làm game RPG là phải vẽ ngay đồ họa pixel đỉnh cao và viết kịch bản 10 chương.”', after: '“Hãy dùng các khối vuông tạm (greybox) để kiểm tra xem cảm giác di chuyển và khoảng cách nhảy có làm người chơi thấy thoải mái hay không.”' },
      { before: '“Tự chơi thấy hay là game chắc chắn thành công.”', after: '“Giao máy cho một người chưa từng nghe về game chơi thử, không hướng dẫn trước và ghi nhận những chỗ họ bị kẹt lại.”' }
    ],
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Prototype RPG 2D', target: '/seo/prototype-rpg-2d/', purpose: 'Danh mục Game Dev', status: 'Đã gắn' },
      { source: 'Thân bài A05', anchor: 'bảng playtest một phòng', target: '/tai-nguyen/#playtest-mot-phong', purpose: 'Tải file mẫu kiểm lỗi', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Unity Documentation: Quy trình làm game 2D', url: 'https://docs.unity3d.com/6000.0/Documentation/Manual/2d-game-creation-wokflow.html', claim: 'Tài liệu hướng dẫn cấu trúc sprite, physics2D và tilemap', checkDate: '16/10/2026', limitation: 'Tài liệu kỹ thuật chính thức của Unity 6.' }
    ],
    backlinkAsset: 'Bảng mẫu ghi nhận lỗi Playtest và sơ đồ phân tích một phòng game.',
    backlinkTargetGroup: 'Nhóm phát triển game indie, câu lạc bộ game dev các trường đại học.',
    backlinkPitchReason: 'Cung cấp phương pháp thu gọn scope hữu ích cho các dự án game đầu tay.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A06: {
    slug: 'chon-ca-phe-pha-phin',
    category: 'F&B',
    categorySlug: 'fb',
    title: 'Chọn cà phê pha phin: bắt đầu từ gu uống và cách pha',
    h1: 'Chọn cà phê pha phin: bắt đầu từ gu uống và cách pha',
    desc: 'Chọn cà phê pha phin theo gu đen hoặc sữa, hướng dẫn trên gói, cỡ xay và lượng dùng. Kèm phiếu ghi chú để điều chỉnh từng lần pha.',
    reader: 'Người muốn tự pha cà phê phin tại nhà để uống mỗi sáng nhưng chưa biết chọn loại cà phê nào vừa miệng.',
    situation: 'Mua cà phê theo quảng cáo hoặc lời giới thiệu chung chung “ngon nhất”, về nhà pha bị chua, đắng gắt hoặc chảy quá nhanh.',
    coreQuestion: 'Làm thế nào để chọn đúng loại bột cà phê và cỡ xay phù hợp với chiếc phin đang có ở nhà?',
    objective: 'Xác định rõ gu đen/sữa, biết cách hỏi người bán về cỡ xay cho phin nhôm hay inox và ghi lại thông số lần pha.',
    cta: 'Tải Phiếu thử gu cà phê pha tại nhà tại /tai-nguyen/#phieu-thu-gu.',
    limitations: 'Không đưa ra danh sách nhãn hiệu chiến thắng; không khẳng định một công thức pha nào là duy nhất.',
    primaryKw: 'chọn cà phê pha phin',
    secondaryKws: ['cà phê xay pha phin', 'cỡ xay cà phê phin', 'gu cà phê đen hay sữa', 'cách pha phin không bị nghẹt'],
    searchIntent: 'Informational & Buying Guide (Hướng dẫn lựa chọn thực phẩm & đồ uống)',
    contentAngle: 'Gần gũi, thực tế, gắn liền với thao tác thử và điều chỉnh dần theo concept MẺ NHỎ.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Ấm áp, cởi mở, khuyến khích sự tự trải nghiệm của cá nhân.',
    beforeAfter: [
      { before: '“Gu chuẩn của người sành điệu là chỉ được uống cà phê đen không đường.”', after: '“Bạn thích uống đen đậm vị hay thêm một thìa sữa đặc ngọt béo? Hãy bắt đầu từ chính ly cà phê bạn cảm thấy dễ uống nhất.”' },
      { before: '“Cứ mua hạt về rồi đem ra quán nhờ xay thật mịn là pha phin ngon.”', after: '“Cà phê xay quá mịn sẽ làm nghẹt lỗ phin khiến nước không chảy được; hãy yêu cầu cỡ xay vừa tương đương hạt muối biển.”' }
    ],
    internalLinks: [
      { source: 'Case MẺ NHỎ (/content/me-nho/)', anchor: 'hướng dẫn chọn cà phê pha phin', target: '/seo/chon-ca-phe-pha-phin/', purpose: 'Liên kết từ case social', status: 'Đã gắn' },
      { source: 'Thân bài A06', anchor: 'nhật ký pha', target: '/content/me-nho/', purpose: 'Dẫn về case MẺ NHỎ', status: 'Đã gắn' },
      { source: 'Thân bài A06', anchor: 'phiếu thử gu', target: '/tai-nguyen/#phieu-thu-gu', purpose: 'Dẫn sang tải phiếu', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'National Coffee Association (NCA): Hướng dẫn pha & lưu trữ cà phê', url: 'https://www.aboutcoffee.org/brewing/', claim: 'Nguyên tắc bảo quản kín khí và tỷ lệ chiết xuất tiêu chuẩn', checkDate: '16/10/2026', limitation: 'Hướng dẫn tổng quát quốc tế, không thay thế công thức của từng sản phẩm cụ thể.' }
    ],
    backlinkAsset: 'Phiếu ghi chú nhật ký lần pha cà phê phin tại nhà.',
    backlinkTargetGroup: 'Nhóm người yêu thích cà phê tại nhà (home brewing), blog đời sống ẩm thực.',
    backlinkPitchReason: 'Cung cấp biểu mẫu thực tế để theo dõi và cải thiện chất lượng ly cà phê tự pha.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A07: {
    slug: 'chon-tui-canvas-di-hoc',
    category: 'Thời trang & Phụ kiện',
    categorySlug: 'thoi-trang-phu-kien',
    title: 'Chọn túi canvas đi học: kiểm tra kích thước và cách dùng',
    h1: 'Chọn túi canvas đi học: kiểm tra kích thước và cách dùng',
    desc: 'Đo đồ dùng, đọc kích thước lòng túi và kiểm tra quai, miệng túi, lớp lót trước khi chọn túi canvas đi học. Có checklist thử túi.',
    reader: 'Học sinh, sinh viên hoặc người đi làm trẻ đang tìm kiếm một chiếc túi vải canvas bền đẹp để đựng laptop và đồ dùng học tập.',
    situation: 'Mua túi qua ảnh mẫu chụp đẹp nhưng khi nhận về thì không nhét vừa máy tính, quai đeo cấn nách hoặc vải bị co rút sau khi giặt.',
    coreQuestion: 'Làm thế nào để chọn đúng một chiếc túi canvas vừa vặn với toàn bộ vật dụng cần mang trong một ngày?',
    objective: 'Biết cách đo món đồ lớn nhất (laptop + chống sốc), kiểm tra 4 điểm cốt lõi (lòng túi, miệng túi, quai, nhãn giặt).',
    cta: 'Tải Phiếu đo túi canvas tại /tai-nguyen/#phieu-do-tui.',
    limitations: 'Không đưa ra tuyên bố về độ chịu tải vượt mức kiểm nghiệm; không hứa hẹn tính năng chống nước tuyệt đối cho vải canvas.',
    primaryKw: 'chọn túi canvas đi học',
    secondaryKws: ['kích thước túi tote đi học', 'túi canvas đựng laptop', 'đo túi canvas', 'cách giặt túi vải canvas'],
    searchIntent: 'Commercial Investigation & Buying Guide (Hướng dẫn tiêu dùng)',
    contentAngle: 'Tỉ mỉ, coi trọng công năng và thói quen sử dụng hàng ngày theo concept QUAI VẢI.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Thực dụng, chú ý từng chi tiết đường may và độ rơi của quai túi.',
    beforeAfter: [
      { before: '“Túi canvas này cân mọi loại laptop và chịu tải trọng 20kg thoải mái.”', after: '“Hãy đo kích thước thực tế của chiếc máy tính đã bọc túi chống sốc trước khi đối chiếu với chiều cao và độ mở miệng túi.”' },
      { before: '“Túi bẩn cứ ném vào máy giặt quay vắt thoải mái.”', after: '“Đọc kỹ nhãn chăm sóc của từng mã túi; hầu hết vải canvas thô nên giặt tay bằng nước lạnh để tránh bị co rút sợi vải.”' }
    ],
    internalLinks: [
      { source: 'Case QUAI VẢI (/nhan-dien/quai-vai/)', anchor: 'bài viết chọn túi canvas', target: '/seo/chon-tui-canvas-di-hoc/', purpose: 'Liên kết từ case nhận diện', status: 'Đã gắn' },
      { source: 'Thân bài A07', anchor: 'túi phù hợp đồ mang', target: '/seo/checklist-du-lich-cuoi-tuan/', purpose: 'Dẫn sang bài du lịch A10', status: 'Đã gắn' },
      { source: 'Thân bài A07', anchor: 'phiếu đo túi', target: '/tai-nguyen/#phieu-do-tui', purpose: 'Dẫn sang tải phiếu đo túi', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'MUJI: Hướng dẫn chăm sóc & thông số túi Canvas Mini Tote', url: 'https://www.muji.com/sg/products/cmdty/detail/4548076743323', claim: 'Quy chuẩn thông số lòng túi và cảnh báo giặt ủi vải canvas', checkDate: '16/10/2026', limitation: 'Thông số kỹ thuật áp dụng cho sản phẩm cụ thể của MUJI.' }
    ],
    backlinkAsset: 'Phiếu đo kích thước đồ dùng và checklist kiểm tra túi vải canvas.',
    backlinkTargetGroup: 'Nhóm sinh viên, cộng đồng yêu thích đồ dùng tối giản, diễn đàn phong cách sống.',
    backlinkPitchReason: 'Giúp người mua tránh tình trạng mua nhầm kích cỡ khi mua sắm online.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A08: {
    slug: 'chon-so-planner',
    category: 'Văn phòng phẩm',
    categorySlug: 'van-phong-pham',
    title: 'Chọn sổ planner: tìm bố cục phù hợp với lịch của bạn',
    h1: 'Chọn sổ planner: tìm bố cục phù hợp với lịch của bạn',
    desc: 'So sánh planner ngày, tuần, tháng và sổ không ghi ngày. Chọn bố cục theo việc cần ghi, thử trên giấy trước khi mua.',
    reader: 'Người muốn bắt đầu ghi chép kế hoạch bằng sổ tay giấy nhưng hay bỏ dở giữa chừng.',
    situation: 'Mua những cuốn sổ planner dày cộp in sẵn ngày tháng nhưng chỉ viết được vài ngày đầu rồi để trống lãng phí.',
    coreQuestion: 'Loại bố cục sổ planner nào (ngày, tuần, tháng hay undated) thực sự phù hợp với nhịp sống và công việc của bạn?',
    objective: 'Phân tích ưu nhược điểm của 4 loại layout phổ biến; khuyên người dùng thử viết trên một trang trước khi mua.',
    cta: 'Tải bản in mẫu Lịch tuần NẾP GẤP tại /tai-nguyen/#lich-tuan.',
    limitations: 'Tuyệt đối không hứa hẹn một cuốn sổ tay có thể làm tăng gấp đôi năng suất làm việc một cách thần kỳ.',
    primaryKw: 'chọn sổ planner',
    secondaryKws: ['planner tuần hay ngày', 'sổ planner không ghi ngày', 'bố cục sổ tay kế hoạch', 'thử layout planner'],
    searchIntent: 'Informational & Commercial Investigation (Hướng dẫn lựa chọn văn phòng phẩm)',
    contentAngle: 'Nhẹ nhàng, khuyến khích tính kiên trì và không tự tạo áp lực ghi chép theo concept NẾP GẤP.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Thấu hiểu, thực tế, đề cao giá trị của khoảng trống trên trang giấy.',
    beforeAfter: [
      { before: '“Dùng planner này sẽ giúp bạn kỷ luật tuyệt đối và thành công vượt bậc.”', after: '“Một cuốn sổ tốt chỉ là một công cụ giúp bạn nhìn thấy rõ các việc cần làm trong tuần và chừa chỗ cho những việc phát sinh.”' },
      { before: '“Đã mua sổ là ngày nào cũng phải ghi kín mít các ô.”', after: '“Nếu tuần này bận rộn và bỏ trống vài ngày, đừng tự trách mình. Hãy tiếp tục lật sang tuần mới với một trang giấy thoáng đãng.”' }
    ],
    internalLinks: [
      { source: 'Case NẾP GẤP (/nhan-dien/nep-gap/)', anchor: 'bài viết chọn sổ planner', target: '/seo/chon-so-planner/', purpose: 'Liên kết từ case nhận diện', status: 'Đã gắn' },
      { source: 'Thân bài A08', anchor: 'sổ nhận brief', target: '/seo/brief-content-cho-nhom-nho/', purpose: 'Dẫn sang bài brief A11', status: 'Đã gắn' },
      { source: 'Thân bài A08', anchor: 'lịch tuần NẾP GẤP', target: '/tai-nguyen/#lich-tuan', purpose: 'Dẫn sang tải layout tuần', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'KOKUYO Campus: Cấu trúc và kích thước các dòng sổ tay', url: 'https://www.kokuyo.com/en/stationery/series/campus/campus-notebook/', claim: 'Thiết kế cấu trúc dòng kẻ hỗ trợ căn lề tiêu đề khoa học', checkDate: '16/10/2026', limitation: 'Nguyên tắc thiết kế sản phẩm của dòng KOKUYO Campus.' }
    ],
    backlinkAsset: 'Bản in thử layout lịch tuần A5 miễn phí do portfolio tự thiết kế.',
    backlinkTargetGroup: 'Nhóm học tập, người yêu thích stationery và bullet journal.',
    backlinkPitchReason: 'Cho phép người dùng in thử trải nghiệm miễn phí trước khi quyết định mua sổ.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A09: {
    slug: 'chon-cay-trong-nha-it-sang',
    category: 'Nhà cửa & Đời sống',
    categorySlug: 'nha-cua-doi-song',
    title: 'Chọn cây trong nhà ít sáng: kiểm tra chỗ đặt trước',
    h1: 'Chọn cây trong nhà ít sáng: kiểm tra chỗ đặt trước',
    desc: 'Quan sát ánh sáng, khoảng cách cửa sổ và độ khô giá thể trước khi chọn cây trong nhà. Phân biệt chịu ít sáng với sống không cần sáng.',
    reader: 'Người sống tại căn hộ chung cư, phòng trọ hoặc làm việc tại văn phòng có ít ánh sáng tự nhiên muốn đặt cây xanh.',
    situation: 'Thường mua cây theo hình ảnh trên mạng, đặt vào góc tối sâu trong phòng làm cây bị vàng lá, thối rễ và chết sau vài tuần.',
    coreQuestion: 'Làm thế nào để chọn đúng loại cây và chuẩn bị vị trí đặt phù hợp với không gian thiếu sáng?',
    objective: 'Phân biệt rõ “cây chịu bóng râm” với “cây không cần ánh sáng”; nắm vững quy tắc kiểm tra độ khô của đất trước khi tưới.',
    cta: 'Tải Bảng nhật ký quan sát cây tại /tai-nguyen/#phieu-quan-sat-cay.',
    limitations: 'Tuyệt đối KHÔNG tuyên bố cây có thể thanh lọc 100% độc tố trong phòng hay chữa bệnh; tuân thủ sự thật sinh học.',
    primaryKw: 'cây trong nhà ít sáng',
    secondaryKws: ['chọn cây cảnh ít ánh sáng', 'vị trí đặt cây trong nhà', 'cây trồng phòng kín', 'cách tưới cây trong nhà'],
    searchIntent: 'Informational & How-to (Hướng dẫn chăm sóc nhà cửa)',
    contentAngle: 'Khoa học, thực tế, lấy sức khỏe bền vững của cây trồng làm trọng tâm.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Cẩn trọng, tôn trọng quy luật tự nhiên, dùng thuật ngữ dễ hiểu.',
    beforeAfter: [
      { before: '“Cây Lưỡi Hổ để phòng tối kín mít 6 tháng không cần tưới vẫn xanh mướt và hút sạch bức xạ wifi.”', after: '“Mọi loài thực vật đều cần quang hợp để sinh trưởng; cây chịu bóng chỉ có khả năng tồn tại ở mức ánh sáng yếu chứ không thể sống vĩnh viễn trong bóng tối.”' },
      { before: '“Ngày nào cũng phải tưới một cốc nước cho cây tươi tốt.”', after: '“Hãy chọc ngón tay sâu 2-3cm vào đất; chỉ tưới đẫm khi cảm thấy giá thể đã thực sự khô ráo để tránh làm úng rễ.”' }
    ],
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Cây trong nhà ít sáng', target: '/seo/chon-cay-trong-nha-it-sang/', purpose: 'Danh mục Nhà cửa', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Royal Horticultural Society (RHS): Cây nội thất cho không gian ít sáng', url: 'https://www.rhs.org.uk/shows-events/rhs-urban-show/houseplant-profiles/houseplants-for-shade', claim: 'Phân loại các loài thực vật có khả năng chịu bóng râm và điều kiện độ ẩm', checkDate: '16/10/2026', limitation: 'Khuyến cáo chăm sóc tổng quát của Hội Làm Vườn Hoàng Gia Anh.' }
    ],
    backlinkAsset: 'Bảng theo dõi chu kỳ độ khô của đất và mức độ ánh sáng từng góc nhà.',
    backlinkTargetGroup: 'Các nhóm yêu cây xanh trong nhà (indoor plants), diễn đàn decor nhà cửa.',
    backlinkPitchReason: 'Giúp người mới giảm tỷ lệ làm chết cây khi mới bắt đầu trồng.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A10: {
    slug: 'checklist-du-lich-cuoi-tuan',
    category: 'Du lịch',
    categorySlug: 'du-lich',
    title: 'Checklist du lịch cuối tuần: soạn đồ theo lịch trình',
    h1: 'Checklist du lịch cuối tuần: soạn đồ theo lịch trình',
    desc: 'Soạn đồ cho chuyến đi cuối tuần theo hoạt động, chỗ ở và phương tiện. Có danh sách đóng gói, đồ cần xác nhận và bước kiểm trước khi đi.',
    reader: 'Người trẻ, sinh viên hoặc nhân viên văn phòng lên kế hoạch đi du lịch ngắn ngày (2 ngày 1 đêm) vào cuối tuần.',
    situation: 'Thường mang quá nhiều quần áo không dùng đến làm vali nặng nề, nhưng lại hay quên các vật dụng thiết yếu như sạc pin, giấy tờ tùy thân.',
    coreQuestion: 'Làm thế nào để chuẩn bị một hành lý gọn nhẹ, vừa vặn trong một chiếc balo/túi xách mà vẫn đủ đồ cho 48 giờ?',
    objective: 'Biết cách chia đồ đạc theo 3 nhóm hoạt động, chọn trang phục theo bộ phối sẵn và thực hiện 4 bước kiểm tra an toàn trước khi khóa cửa.',
    cta: 'Tải Checklist du lịch cuối tuần in được tại /tai-nguyen/#checklist-du-lich.',
    limitations: 'Không mặc định quy định hành lý của tất cả hãng bay; người đọc cần tra cứu quy định cụ thể của phương tiện mình đi.',
    primaryKw: 'checklist du lịch cuối tuần',
    secondaryKws: ['chuẩn bị đồ du lịch 2 ngày 1 đêm', 'soạn đồ du lịch ngắn ngày', 'danh sách đóng gói hành lý', 'kiểm tra an toàn trước khi đi'],
    searchIntent: 'Informational & Checklist (Hướng dẫn thực tế)',
    contentAngle: 'Thực dụng, tối giản, phân loại hành lý khoa học.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Năng động, súc tích, theo dạng đầu mục dễ tích chọn.',
    beforeAfter: [
      { before: '“Đi du lịch 2 ngày cứ mang theo 7 bộ quần áo để chụp ảnh cho sướng.”', after: '“Hãy phối sẵn trang phục theo từng hoạt động thực tế (di chuyển, dạo phố, đi ngủ) để tránh việc phải mang vác cồng kềnh.”' },
      { before: '“Cứ ném hết đồ vào túi rồi trước sau gì cũng nhớ ra.”', after: '“Dành 5 phút trước khi rời nhà để rà soát danh sách kiểm tra: phích cắm điện, van gas, khóa cửa sổ và giấy tờ tùy thân.”' }
    ],
    internalLinks: [
      { source: 'SEO Studio Hub (/seo/)', anchor: 'Checklist du lịch cuối tuần', target: '/seo/checklist-du-lich-cuoi-tuan/', purpose: 'Danh mục Du lịch', status: 'Đã gắn' },
      { source: 'Thân bài A10', anchor: 'túi phù hợp đồ mang', target: '/seo/chon-tui-canvas-di-hoc/', purpose: 'Dẫn sang bài túi canvas A07', status: 'Đã gắn' },
      { source: 'Thân bài A10', anchor: 'đóng gói chuyến đi', target: '/tai-nguyen/#checklist-du-lich', purpose: 'Dẫn sang tải checklist', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Vietnam Tourism: Lên kế hoạch chuyến đi (Plan Your Trip)', url: 'https://vietnam.travel/plan-your-trip', claim: 'Khuyến nghị chuẩn bị giấy tờ cá nhân và thông tin điểm đến an toàn', checkDate: '16/10/2026', limitation: 'Cổng thông tin du lịch quốc gia Việt Nam.' }
    ],
    backlinkAsset: 'Bản in checklist đóng gói hành lý theo hoạt động và 4 bước an toàn khi rời nhà.',
    backlinkTargetGroup: 'Blog du lịch phượt, cộng đồng sinh viên thích xê dịch.',
    backlinkPitchReason: 'Công cụ in ấn thực tế, dễ dùng ngay cho mỗi chuyến đi ngắn ngày.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  },

  A11: {
    slug: 'brief-content-cho-nhom-nho',
    category: 'Dịch vụ số / B2B',
    categorySlug: 'dich-vu-so-b2b',
    title: 'Brief content cho nhóm nhỏ: chốt gì trước khi bắt đầu viết?',
    h1: 'Brief content cho nhóm nhỏ: chốt gì trước khi bắt đầu viết?',
    desc: 'Mẫu brief content một trang giúp nhóm nhỏ thống nhất người đọc, mục tiêu, thông điệp, nguồn, CTA và cách duyệt bản nháp.',
    reader: 'Nhóm làm nội dung nhỏ (2-5 người), nhóm freelance hoặc sinh viên làm đồ án truyền thông.',
    situation: 'Thường giao việc qua các tin nhắn rời rạc (“viết giúp bài này hay hay nhé”), dẫn đến việc sửa đi sửa lại nhiều lần vì lệch mục tiêu.',
    coreQuestion: 'Một bản brief nội dung tối giản cần những thông tin gì để người viết và người duyệt có thể làm việc ăn ý?',
    objective: 'Cung cấp cấu trúc brief một trang chuẩn mực gồm 6 phần cốt lõi và một ví dụ điền thực tế cho concept MẺ NHỎ.',
    cta: 'Tải Mẫu brief content một trang tại /tai-nguyen/#brief-mot-trang.',
    limitations: 'Không hứa hẹn brief giúp giải quyết 100% mọi xung đột ý kiến; brief là công cụ để đối chiếu mục tiêu khi có bất đồng.',
    primaryKw: 'brief content cho nhóm nhỏ',
    secondaryKws: ['mẫu brief content một trang', 'cách viết creative brief', 'giao việc viết nội dung', 'tiêu chí duyệt bài viết'],
    searchIntent: 'Informational & Template (Hướng dẫn quy trình làm việc nhóm)',
    contentAngle: 'Chuyên nghiệp, rõ ràng, đề cao sự tôn trọng thời gian và công sức giữa các thành viên theo concept NHỊP VIỆC.',
    serpStatus: 'Bản mẫu concept portfolio; chưa có số liệu khảo sát SERP thực tế.',
    voiceGuide: 'Thấu hiểu, thực tiễn, định hướng hành động.',
    beforeAfter: [
      { before: '“Nhận xét: Bài này đọc chưa thấy thích, viết lại cho cảm xúc hơn đi.”', after: '“Nhận xét cụ thể: Đoạn mở bài chưa nêu được việc bài viết giúp người đọc giải quyết; cần bổ sung câu trả lời trực tiếp theo mục 2 của Brief.”' },
      { before: '“Cứ viết thử một bài nháp đi rồi tính tiếp.”', after: '“Trước khi viết một chữ, hãy chốt một câu: Bài viết này giúp ai làm được việc gì và đâu là tài liệu nguồn được phép dùng.”' }
    ],
    internalLinks: [
      { source: 'Case NHỊP VIỆC (/content/nhip-viec/)', anchor: 'bài viết brief content', target: '/seo/brief-content-cho-nhom-nho/', purpose: 'Liên kết từ case B2B', status: 'Đã gắn' },
      { source: 'Thân bài A11', anchor: 'AI tạo bản nháp', target: '/seo/ai-ho-tro-viet-bai-seo/', purpose: 'Dẫn sang bài AI A01', status: 'Đã gắn' },
      { source: 'Thân bài A11', anchor: 'brief một trang', target: '/tai-nguyen/#brief-mot-trang', purpose: 'Dẫn sang tải template brief', status: 'Đã gắn' }
    ],
    externalLinks: [
      { name: 'Asana: Hướng dẫn viết Creative Brief kèm mẫu chuẩn', url: 'https://asana.com/resources/how-write-creative-brief-examples-template', claim: 'Cấu trúc các trường thông tin then chốt của một bản brief sáng tạo', checkDate: '16/10/2026', limitation: 'Tài liệu phương pháp luận quản lý dự án của Asana.' }
    ],
    backlinkAsset: 'Mẫu brief content một trang (PDF in được) kèm ví dụ điền mẫu hoàn chỉnh.',
    backlinkTargetGroup: 'Các khóa đào tạo quản lý nội dung, nhóm làm việc từ xa, cộng đồng khởi nghiệp trẻ.',
    backlinkPitchReason: 'Biểu mẫu thực tế giúp tiết kiệm hàng chục giờ sửa bài vô ích.',
    backlinkStatus: 'Đề xuất, chưa tiếp cận, chưa có backlink.'
  }
};

function extractArticleBody(id) {
  const marker = `### ${id} — BẢN ĐĂNG`;
  const startIdx = planContent.indexOf(marker);
  if (startIdx === -1) return '';
  
  const nextMarkerIdx = id === 'A11' 
    ? planContent.indexOf('### 6.2.', startIdx)
    : planContent.indexOf(`### A${String(Number(id.slice(1)) + 1).padStart(2, '0')} — BẢN ĐĂNG`, startIdx);
    
  let raw = planContent.substring(startIdx + marker.length, nextMarkerIdx !== -1 ? nextMarkerIdx : planContent.length).trim();
  const lines = raw.split('\n');
  if (lines[0].startsWith('# ')) {
    lines.shift();
  }
  // Trim any trailing headers or solitary symbols like '#'
  while (lines.length > 0 && (lines[lines.length - 1].trim() === '#' || lines[lines.length - 1].trim().startsWith('### 6.2'))) {
    lines.pop();
  }
  return lines.join('\n').trim();
}

function markdownToHtml(md) {
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  let inTable = false;
  let inBlockquote = false;
  let tableRows = [];
  let blockquoteLines = [];

  function closeAll() {
    if (inList) { html += '</ul>\n'; inList = false; }
    if (inTable) { html += renderTable(tableRows); inTable = false; tableRows = []; }
    if (inBlockquote) { html += '<blockquote>' + blockquoteLines.map(formatInline).join('<br>') + '</blockquote>\n'; inBlockquote = false; blockquoteLines = []; }
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
      closeAll();
      continue;
    }

    if (line.startsWith('>')) {
      if (!inBlockquote) {
        closeAll();
        inBlockquote = true;
        blockquoteLines = [];
      }
      blockquoteLines.push(line.replace(/^>\s*/, ''));
      continue;
    } else if (inBlockquote) {
      html += '<blockquote>' + blockquoteLines.map(formatInline).join('<br>') + '</blockquote>\n';
      inBlockquote = false;
      blockquoteLines = [];
    }

    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        closeAll();
        inTable = true;
        tableRows = [];
      }
      tableRows.push(line);
      continue;
    } else if (inTable) {
      html += renderTable(tableRows);
      inTable = false;
      tableRows = [];
    }

    if (line.startsWith('## ')) {
      closeAll();
      const text = line.substring(3).trim();
      const id = slugify(text);
      html += `<h2 id="${id}">${text}</h2>\n`;
    } else if (line.startsWith('### ')) {
      closeAll();
      const text = line.substring(4).trim();
      const id = slugify(text);
      html += `<h3 id="${id}">${text}</h3>\n`;
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      if (!inList) {
        closeAll();
        html += '<ul>\n';
        inList = true;
      }
      html += `<li>${formatInline(line.substring(2))}</li>\n`;
    } else {
      closeAll();
      html += `<p>${formatInline(line)}</p>\n`;
    }
  }

  closeAll();
  return html;
}

function renderTable(rows) {
  if (rows.length < 2) return '';
  let out = '<div class="table-wrap"><table>\n';
  const headerCols = rows[0].split('|').slice(1, -1).map(c => c.trim());
  out += '<thead><tr>' + headerCols.map(c => `<th>${formatInline(c)}</th>`).join('') + '</tr></thead>\n';
  out += '<tbody>\n';
  for (let r = 2; r < rows.length; r++) {
    const cols = rows[r].split('|').slice(1, -1).map(c => c.trim());
    out += '<tr>' + cols.map(c => `<td>${formatInline(c)}</td>`).join('') + '</tr>\n';
  }
  out += '</tbody></table></div>\n';
  return out;
}

function formatInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Build all 11 articles
for (const [id, meta] of Object.entries(articleMeta)) {
  const articleDir = path.join(baseDir, 'seo', meta.slug);
  if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });

  const rawMd = extractArticleBody(id);
  const bodyHtml = markdownToHtml(rawMd);

  // Extract headings for TOC
  const h2Matches = rawMd.match(/^##\s+(.*)$/gm) || [];
  const tocItems = h2Matches.map(h => {
    const title = h.replace(/^##\s+/, '').trim();
    return { title, id: slugify(title) };
  });

  const pageTitle = `${meta.title} · Khương Tuấn Anh Portfolio`;
  const titleLen = pageTitle.length;
  const descLen = meta.desc.length;

  const pageHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <meta name="description" content="${meta.desc}">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://cv-two-pi-94.vercel.app/seo/${meta.slug}/">
  <link rel="stylesheet" href="../../assets/portfolio/editorial-system.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${meta.h1.replace(/"/g, '\\"')}",
    "description": "${meta.desc.replace(/"/g, '\\"')}",
    "author": {
      "@type": "Person",
      "name": "Khương Tuấn Anh",
      "jobTitle": "Học viên Digital Marketing, hướng đến Content Creator"
    },
    "publisher": {
      "@type": "Person",
      "name": "Khương Tuấn Anh"
    },
    "datePublished": "2026-10-16",
    "dateModified": "2026-10-16",
    "mainEntityOfPage": "https://cv-two-pi-94.vercel.app/seo/${meta.slug}/"
  }
  </script>
</head>
<body>
  <!-- Header -->
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
        <a href="/" class="nav-link">Trang chủ</a>
        <a href="/du-an/" class="nav-link">Dự án</a>
        <a href="/seo/" class="nav-link active">SEO</a>
        <a href="/content/" class="nav-link">Content</a>
        <a href="/tai-nguyen/" class="nav-link">Tài nguyên</a>
        <a href="/lien-he/" class="btn btn-primary btn-sm">Liên hệ</a>
      </nav>
    </div>
  </header>

  <main class="container" style="padding-top: 36px; padding-bottom: 72px;">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <a href="/">Trang chủ</a>
      <span class="breadcrumb-sep">/</span>
      <a href="/seo/">SEO Studio</a>
      <span class="breadcrumb-sep">/</span>
      <span>${meta.category}</span>
      <span class="breadcrumb-sep">/</span>
      <span style="color: var(--text-main); font-weight: 500;">${meta.h1}</span>
    </nav>

    <!-- Mobile collapsible TOC -->
    <details class="mobile-toc">
      <summary>📑 Mục lục bài đọc (Bấm để xem nhanh)</summary>
      <ul>
        ${tocItems.map(item => `<li><a href="#${item.id}">${item.title}</a></li>`).join('\n')}
        <li style="margin-top: 10px; font-weight: 600;"><a href="#ho-so" style="color: var(--accent);">📁 Xem hồ sơ làm bài</a></li>
      </ul>
    </details>

    <!-- Responsive Layout: Article Column & Sidebar -->
    <div class="article-page-layout">
      
      <!-- Article Column -->
      <article class="article-main-col">
        <header class="article-header">
          <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 16px; flex-wrap: wrap;">
            <span class="badge badge-seo">${meta.category}</span>
            <span class="badge badge-concept">Bản biên tập Concept</span>
            <span class="badge badge-note">Mã: ${id}</span>
          </div>
          <h1 class="article-title">${meta.h1}</h1>
          <p class="article-lead">${meta.desc}</p>
          <div class="article-meta">
            <span>✍️ Biên tập: <strong>Khương Tuấn Anh</strong></span>
            <span>📅 Cập nhật: <strong>16/10/2026</strong></span>
            <span>⏱️ Đọc khoảng 5 phút</span>
          </div>

          <!-- Two Layer Toggle Buttons -->
          <div class="article-layer-toggle">
            <a href="#bai-viet" class="layer-tab active">📖 Đọc bài viết hoàn chỉnh</a>
            <a href="#ho-so" class="layer-tab">📁 Xem hồ sơ làm bài</a>
          </div>
        </header>

        <!-- Editorial Disclaimer Note -->
        <div class="disclaimer-box">
          <strong>Lưu ý về bản mẫu:</strong> Bài mẫu cho portfolio, có nguồn tham khảo; chưa có dữ liệu hiệu quả chiến dịch. Có sử dụng AI hỗ trợ ở khâu nghiên cứu và lập dàn ý; con người trực tiếp rà soát và biên tập lại.
        </div>

        <!-- In-Article Hero Banner (Figure 1) -->
        <figure style="margin: 28px 0;">
          <img src="../../assets/articles/${id.toLowerCase()}-hero.svg" alt="Sơ đồ tổng quan quy trình ${meta.h1}" style="width: 100%; border-radius: 12px; border: 1px solid var(--border);">
          <figcaption style="font-size: 13px; color: var(--text-muted); margin-top: 8px; text-align: center; font-style: italic;">
            Hình 1: Sơ đồ tổng quan quy trình ${meta.h1} (Đồ họa vector nguyên bản)
          </figcaption>
        </figure>

        <!-- Article Body -->
        <section id="bai-viet" class="article-body">
          ${bodyHtml}
        </section>

        <!-- In-Article Infographic Diagram (Figure 2) -->
        <figure style="margin: 36px 0;">
          <img src="../../assets/articles/${id.toLowerCase()}-infographic.svg" alt="Bảng hướng dẫn chi tiết ${meta.h1}" style="width: 100%; border-radius: 12px; border: 1px solid var(--border);">
          <figcaption style="font-size: 13px; color: var(--text-muted); margin-top: 8px; text-align: center; font-style: italic;">
            Hình 2: Các bước kiểm tra thực hành ${meta.h1}
          </figcaption>
        </figure>

        <!-- COMPREHENSIVE DOSSIER ON-PAGE (#ho-so) -->
        <section id="ho-so" class="dossier-section">
          <div class="dossier-title">
            <span>📁</span>
            <h2>HỒ SƠ LÀM BÀI &amp; TÀI LIỆU ON-PAGE CHI TIẾT</h2>
          </div>
          <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 28px;">
            Toàn bộ dữ liệu chuẩn bị phía sau bài viết: brief, ý định tìm kiếm, giọng văn, heading map, metadata SERP, internal/external links, kế hoạch backlink và kiểm soát chất lượng.
          </p>

          <div class="dossier-grid">
            
            <!-- 1. Brief chi tiết -->
            <div class="dossier-card span-2" style="grid-column: span 2;">
              <h4>1. Brief chi tiết của bài viết</h4>
              <div style="font-size: 14px; color: var(--text-main); line-height: 1.7; display: flex; flex-direction: column; gap: 8px;">
                <div><strong>Người đọc mục tiêu:</strong> ${meta.reader}</div>
                <div><strong>Tình huống thực tế:</strong> ${meta.situation}</div>
                <div><strong>Câu hỏi bài phải trả lời:</strong> ${meta.coreQuestion}</div>
                <div><strong>Mục tiêu &amp; Kêu gọi hành động (CTA):</strong> ${meta.objective} — <em>${meta.cta}</em></div>
                <div style="background: #FFFDF0; border: 1px solid #E8D383; padding: 10px 14px; border-radius: 6px; color: #8A4B00;">
                  ⚠️ <strong>Giới hạn không được khẳng định:</strong> ${meta.limitations}
                </div>
              </div>
            </div>

            <!-- 2. Ý định tìm kiếm & Từ khóa -->
            <div class="dossier-card">
              <h4>2. Ý định tìm kiếm &amp; Cụm từ khóa</h4>
              <div style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                <div style="margin-bottom: 8px;"><strong>Từ khóa chính:</strong> <span style="color: var(--accent); font-weight: 600;">${meta.primaryKw}</span></div>
                <div style="margin-bottom: 8px;"><strong>Từ khóa phụ &amp; Biến thể:</strong> ${meta.secondaryKws.join(', ')}</div>
                <div style="margin-bottom: 8px;"><strong>Ý định tìm kiếm (Search Intent):</strong> ${meta.searchIntent}</div>
                <div style="margin-bottom: 8px;"><strong>Góc tiếp cận (Content Angle):</strong> ${meta.contentAngle}</div>
                <div style="font-size: 12px; color: #B06000; font-style: italic;">
                  📊 Khảo sát SERP &amp; Volume: ${meta.serpStatus}
                </div>
              </div>
            </div>

            <!-- 3. Giọng văn & Biên tập Trước vs Sau -->
            <div class="dossier-card">
              <h4>3. Quy chuẩn giọng văn &amp; Biên tập</h4>
              <div style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                <p style="margin-bottom: 10px;"><strong>Định hướng giọng văn:</strong> ${meta.voiceGuide}</p>
                <div style="background: #FFFFFF; border: 1px solid var(--border); border-radius: 6px; padding: 10px; font-size: 13px; margin-bottom: 8px;">
                  <span style="color: #C5221F; font-weight: 600;">❌ Trước biên tập:</span> ${meta.beforeAfter[0].before}<br>
                  <span style="color: #137333; font-weight: 600;">✓ Sau biên tập:</span> ${meta.beforeAfter[0].after}
                </div>
              </div>
            </div>

            <!-- 4. Dàn ý Heading Map -->
            <div class="dossier-card">
              <h4>4. Dàn ý Heading Map thực tế</h4>
              <ul style="list-style: none; margin: 0; padding: 0; font-size: 13px; color: var(--text-muted); line-height: 1.6;">
                <li style="font-weight: 600; color: var(--text-main); margin-bottom: 6px;">H1: ${meta.h1}</li>
                ${tocItems.map(item => `<li style="margin-left: 12px; margin-bottom: 4px;">• H2: ${item.title}</li>`).join('\n')}
              </ul>
            </div>

            <!-- 5. Metadata & Xem trước SERP -->
            <div class="dossier-card">
              <h4>5. Metadata &amp; Bản xem trước SERP</h4>
              <div style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">
                <div><strong>Title tag (${titleLen} ký tự):</strong> ${pageTitle}</div>
                <div style="margin-top: 4px;"><strong>Meta description (${descLen} ký tự):</strong> ${meta.desc}</div>
                <div style="margin-top: 4px;"><strong>Chỉ thị Robots:</strong> noindex, follow · <strong>Canonical:</strong> /seo/${meta.slug}/</div>
                
                <!-- Google SERP Snippet Box -->
                <div style="margin-top: 12px; background: #FFFFFF; border: 1px solid #D6DFE8; border-radius: 8px; padding: 12px;">
                  <div style="font-size: 12px; color: #202124;">cv-two-pi-94.vercel.app › seo › ${meta.slug}</div>
                  <div style="font-size: 16px; color: #1a0dab; font-weight: 500; text-decoration: underline; margin-top: 2px;">${pageTitle}</div>
                  <div style="font-size: 13px; color: #4d5156; margin-top: 4px; line-height: 1.4;">${meta.desc}</div>
                </div>
              </div>
            </div>

            <!-- 6. Bảng Internal Links -->
            <div class="dossier-card span-2" style="grid-column: span 2;">
              <h4>6. Bảng Internal Links (Liên kết nội bộ)</h4>
              <div class="table-wrap">
                <table>
                  <thead><tr><th>Trang nguồn</th><th>Anchor text trong bài</th><th>Trang đích</th><th>Mục đích liên kết</th><th>Trạng thái</th></tr></thead>
                  <tbody>
                    ${meta.internalLinks.map(l => `
                      <tr>
                        <td>${l.source}</td>
                        <td><strong>${l.anchor}</strong></td>
                        <td><a href="${l.target}">${l.target}</a></td>
                        <td>${l.purpose}</td>
                        <td><span class="badge badge-real" style="font-size:11px;">${l.status}</span></td>
                      </tr>
                    `).join('\n')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 7. Bảng External Links -->
            <div class="dossier-card span-2" style="grid-column: span 2;">
              <h4>7. Bảng External Links (Nguồn sơ cấp bảo chứng)</h4>
              <div class="table-wrap">
                <table>
                  <thead><tr><th>Tên tài liệu / Nguồn sơ cấp</th><th>URL cụ thể</th><th>Claim được hỗ trợ</th><th>Ngày kiểm</th><th>Giới hạn nguồn</th></tr></thead>
                  <tbody>
                    ${meta.externalLinks.map(l => `
                      <tr>
                        <td><strong>${l.name}</strong></td>
                        <td><a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.url}</a></td>
                        <td>${l.claim}</td>
                        <td>${l.checkDate}</td>
                        <td>${l.limitation}</td>
                      </tr>
                    `).join('\n')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 8. Kế hoạch tìm kiếm Backlink (Off-page) -->
            <div class="dossier-card span-2" style="grid-column: span 2;">
              <h4>8. Kế hoạch tìm kiếm Backlink (Off-page)</h4>
              <div style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                <div><strong>Tài sản đáng dẫn (Linkable Asset):</strong> ${meta.backlinkAsset}</div>
                <div style="margin-top: 6px;"><strong>Nhóm website / Cộng đồng phù hợp:</strong> ${meta.backlinkTargetGroup}</div>
                <div style="margin-top: 6px;"><strong>Lý do hữu ích để họ dẫn link:</strong> ${meta.backlinkPitchReason}</div>
                <div style="margin-top: 6px;"><strong>Người phụ trách:</strong> Khương Tuấn Anh · <strong>Trạng thái thực tế:</strong> <span class="badge badge-note">${meta.backlinkStatus}</span></div>
                <div style="margin-top: 10px; font-size: 12px; color: #B06000; background: var(--note-bg); padding: 8px 12px; border-radius: 6px;">
                  ⚠️ <strong>Chính sách Spam:</strong> Tuyệt đối không mua bán liên kết, không spam diễn đàn. Backlink chỉ tiếp cận sau khi bài viết được duyệt xuất bản chính thức.
                </div>
              </div>
            </div>

            <!-- 9. Manifest Hình ảnh & Bản quyền -->
            <div class="dossier-card span-2" style="grid-column: span 2;">
              <h4>9. Manifest hình ảnh &amp; Bản quyền tự dựng</h4>
              <div class="table-wrap">
                <table>
                  <thead><tr><th>Tên file</th><th>Thẻ Alt mô tả</th><th>Vai trò</th><th>Quyền sở hữu</th></tr></thead>
                  <tbody>
                    <tr>
                      <td><code>${id.toLowerCase()}-hero.svg</code></td>
                      <td>Sơ đồ tổng quan quy trình ${meta.h1}</td>
                      <td>Ảnh Hero đầu bài minh họa quy trình</td>
                      <td>Vector SVG tự thiết kế nguyên bản</td>
                    </tr>
                    <tr>
                      <td><code>${id.toLowerCase()}-infographic.svg</code></td>
                      <td>Bảng hướng dẫn chi tiết ${meta.h1}</td>
                      <td>Infographic 4 bước kiểm tra thực hành</td>
                      <td>Vector SVG tự thiết kế nguyên bản</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 10. Trạng thái QA & Kiểm thử -->
            <div class="dossier-card span-2" style="grid-column: span 2;">
              <h4>10. Trạng thái kiểm soát chất lượng (QA)</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 13px;">
                <div style="background: #E6F4EA; border: 1px solid #CEEAD6; padding: 12px; border-radius: 8px; color: #137333;">
                  <strong>✓ CÁC BƯỚC ĐÃ KIỂM TRA ĐẠT:</strong><br>
                  • Kiểm tra chính tả &amp; câu từ tiếng Việt đầy đủ.<br>
                  • Kiểm tra hiển thị responsive (320px, 423px, 768px, 1280px).<br>
                  • Kiểm tra thẻ meta, chỉ thị noindex và schema Article JSON-LD.<br>
                  • Kiểm tra liên kết nội bộ và nguồn dẫn chứng sơ cấp.
                </div>
                <div style="background: #F5F7FB; border: 1px solid #D6DFE8; padding: 12px; border-radius: 8px; color: #53647A;">
                  <strong>⏱️ CÁC BƯỚC CHƯA TRIỂN KHAI THỰC TẾ:</strong><br>
                  • Chưa kết nối đo lường Google Search Console thực tế.<br>
                  • Chưa có số liệu người đọc click / CTR / thời gian cuộn trang.<br>
                  • Chưa thực hiện gửi email tiếp cận kiếm backlink bên ngoài.
                </div>
              </div>
            </div>

          </div>
        </section>

      </article>

      <!-- Sidebar -->
      <aside class="article-sidebar">
        <!-- Desktop TOC -->
        <nav class="desktop-toc card" style="margin-bottom: 24px; padding: 20px;">
          <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 12px; color: var(--accent);">MỤC LỤC BÀI ĐỌC</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            ${tocItems.map(item => `<li style="margin-bottom: 8px;"><a href="#${item.id}" style="font-size: 14px; text-decoration: none; color: var(--text-main);">${item.title}</a></li>`).join('\n')}
            <li style="margin-top: 12px; padding-top: 8px; border-top: 1px solid var(--border);"><a href="#ho-so" style="font-size: 14px; font-weight: 600; color: var(--accent);">📁 Xem hồ sơ làm bài</a></li>
          </ul>
        </nav>

        <!-- Chibi Helper Widget with truthful wording -->
        <div class="card" style="text-align: center; padding: 24px;">
          <img src="../../assets/chibi/ta-chibi-qa.svg" alt="Bạn Biên Tập kiểm tra quy trình" style="width: 140px; margin: 0 auto 16px auto;" class="chibi-character">
          <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Quy trình 22 bước SEO</h4>
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
            Quy trình đề xuất gồm 22 bước. Hồ sơ từng bài ghi rõ phần đã làm và phần cần triển khai tiếp.
          </p>
          <a href="/seo/quy-trinh/" class="btn btn-secondary btn-sm" style="width: 100%;">Xem chi tiết 22 bước →</a>
        </div>
      </aside>

    </div>
  </main>

  <!-- Global Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h5>Góc làm nội dung · Khương Tuấn Anh</h5>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 16px;">
            Học viên Digital Marketing tại VTC Academy. Thực hành viết SEO, thiết kế nhận diện thương hiệu và nghiên cứu dữ liệu thực tế.
          </p>
          <p style="font-size: 13px; color: var(--text-muted);">
            📧 anhkhuong134@gmail.com &nbsp;|&nbsp; 📞 0384 201 443
          </p>
        </div>
        <div class="footer-col">
          <h5>SEO Studio</h5>
          <ul class="footer-links">
            <li><a href="/seo/">Tất cả 11 bài viết</a></li>
            <li><a href="/seo/quy-trinh/">Quy trình 22 bước On-Page</a></li>
            <li><a href="/seo/ai-ho-tro-viet-bai-seo/">Bài mẫu A01: AI hỗ trợ SEO</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Dự án nổi bật</h5>
          <ul class="footer-links">
            <li><a href="/nghien-cuu/circle-k-gs25/">Đồ án thật: Circle K &amp; GS25</a></li>
            <li><a href="/nhan-dien/nep-gap/">Concept: NẾP GẤP</a></li>
            <li><a href="/content/me-nho/">Case: MẺ NHỎ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Tài nguyên</h5>
          <ul class="footer-links">
            <li><a href="/tai-nguyen/#brief-mot-trang">Mẫu Brief một trang</a></li>
            <li><a href="/tai-nguyen/#lich-tuan">Lịch tuần NẾP GẤP</a></li>
            <li><a href="/tai-nguyen/#phieu-thu-gu">Phiếu thử gu cà phê</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Khương Tuấn Anh. Portfolio cá nhân xây dựng minh bạch, có đối chiếu nguồn.</span>
        <span>Phạm vi: Bài tập môn học &amp; concept thực hành</span>
      </div>
    </div>
  </footer>
</body>
</html>`;

  fs.writeFileSync(path.join(articleDir, 'index.html'), pageHtml, 'utf8');
  console.log(`Generated Complete Article: ${id} -> /seo/${meta.slug}/index.html`);
}

// Copy to CV/scripts/build_all_articles.js
console.log('Successfully synced to CV/scripts/build_all_articles.js');

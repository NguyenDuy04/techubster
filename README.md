# 🛒 E-commerce Project - Next.js 15

Đây là dự án website thương mại điện tử được xây dựng với công nghệ mới nhất, hỗ trợ đa ngôn ngữ và giao diện phản hồi (responsive).

---

## 🚀 Bắt đầu nhanh (Quick Start)

Để chạy dự án ở môi trường phát triển (development), bạn hãy thực hiện các bước sau:

### 1. Cài đặt các thư viện phụ thuộc

2. Chạy server phát triển
   ```
   npm install
   npm run dev
   ```

4. Mở trình duyệt
- Truy cập http://localhost:3000 để xem kết quả.

🛠 Công nghệ sử dụng 
- Framework: Next.js 15 (App Router) với Turbopack

- Styling: Tailwind CSS

- Animation: Framer Motion

- Internationalization: Next-intl (Hỗ trợ đa ngôn ngữ vi/en)

- Icons: Lucide React / Custom Icons

📦 Cấu trúc thư mục chính 
- src/app/[locale]: Chứa các route và page theo từng ngôn ngữ.

- src/components: Các UI component tái sử dụng (Navbar, Footer, Card...).

- public: Chứa hình ảnh, icons và assets tĩnh.

- messages: Chứa các file JSON định nghĩa ngôn ngữ (vi.json, en.json).

📝 Lưu ý khi phát triển [!TIP]:
### Khắc phục lỗi cache:  
- Nếu gặp lỗi cache hoặc cảnh báo preload CSS lạ trong quá trình dev, hãy chạy lệnh sau để làm sạch dự án:
```
rm -rf .next
npm run dev
```
- Tối ưu hình ảnh: Luôn sử dụng component <Image /> từ next/image để tối ưu dung lượng và tốc độ tải trang.

- Responsive: Sử dụng các breakpoint của Tailwind (sm:, md:, lg:, ...) để đảm bảo giao diện hiển thị tốt trên mọi thiết bị.

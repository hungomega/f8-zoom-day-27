# F8 Zoom Day 27

Tạo repo f8-zoom-day-27 và làm các bài tập phía dưới, mỗi bài bao gồm 1 file HTML và JS riêng biệt.

#1. Dispatch event khi slide change
Tạo file slideshow.html và slideshow.js.
Sử dụng lại bài tập slideshow, khi change slide (prev hoặc next) thì chờ hiệu ứng hoàn thành hãy dispatch 1 custom event slideshow:change trên document với detail là object chứa old và current (slide element cũ và hiện tại).
Sau bài tập này bạn sẽ biết cách sử dụng transitionend. Ngoài ra còn một event tương tự là animationend. Khác biệt là transitionend hoạt động với CSS transition, còn animationend hoạt động với CSS animation.

#2. Tạo live preview code editor
Tạo file live-code-editor.html và live-code-editor.js.
Giao diện full viewport, chia làm 2 cột độ rộng bằng nhau (50/50).
Bên trái để thẻ textarea, bên phải để thẻ iframe, các bạn tự CSS và thêm các chi tiết tùy ý sao cho phù hợp, tùy ý sáng tạo.
Khi gõ vào textarea code HTML, CSS thì bên preview ngay lập tức hiển thị kết quả. Gợi ý: bắt event input trên textarea sau đó cập nhật property srcDoc trên phần từ iframe bằng nội dung của textarea.
Khi user có viết code mà nhấn F5 hoặc tắt tab thì hiển thị confirm trước.
Khi nhấn chuột phải vào màn hình trang web thì không hiển thị context menu mặc định, thay vào đó hiển thị context menu tùy chỉnh:
Context menu có ít nhất 1 lựa chọn là “Xóa code”, nhấn vào sẽ xóa code của editor đi, preview cũng thay đổi tương ứng. Giao diện context menu tùy ý CSS.
Chuột phải hiển thị context menu tại vị trí con trỏ chuột (menu hiển thị bên phải và phía dưới con trỏ chuột, tức vị trí như mặc định)
Nếu trỏ chuột quá gần với cạnh right hoặc bottom của viewport thì thay đổi hướng hiển thị contextmenu đảm bảo menu không bị hiển thị ngoài viewport.
Quan sát hành vi mặc định và xử lý ẩn/hiện contextmenu giống như vậy.

#3. Tạo ứng dụng Tender
Giao diện full viewport, tối ưu cho mobile.
Tạo mảng players chứa danh sách users (ít nhất 5), disliked chứa danh sách quẹt trái, liked chứa danh sách quẹt phải.
Danh sách card được render từ players, giao diện tùy ý bạn CSS, càng đẹp càng giống thật càng cộng điểm.
Quẹt trái card đổi nghiêng sang màu tone đỏ, quẹt phải card đổi nghiêng sang màu tone xanh; kèm hiệu ứng chuyển động card chạy qua trái & phải tương ứng. Ngoài ra tùy ý bạn sáng tạo.
Có ngưỡng quẹt, ví dụ swipeThreshold = 50 phải quẹt >= 50px mới tính là quẹt, không thì khi nhấn tay lên card trở về vị trí ban đầu.
Khi card hiện tại quẹt và chuyển động rời khỏi viewport hãy xóa card element đó khỏi DOM.

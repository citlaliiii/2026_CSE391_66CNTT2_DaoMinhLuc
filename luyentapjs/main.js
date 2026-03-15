// 1. Sử dụng getElementById để truy cập trực tiếp qua ID
const title = document.getElementById('main-title');
console.log("Phần tử chọn bằng getElementById:", title);

// 2. Sử dụng querySelector để chọn một phần tử bất kỳ (ví dụ class đầu tiên)
const firstDesc = document.querySelector('.description');
console.log("Phần tử đầu tiên chọn bằng querySelector:", firstDesc);

// 3. Sử dụng querySelectorAll để lấy danh sách các phần tử
const allDescs = document.querySelectorAll('.description');
console.log("Danh sách phần tử chọn bằng querySelectorAll:", allDescs);

// Kiểm tra nội dung text của phần tử đầu tiên cho trực quan
console.log("Nội dung tiêu đề là: " + title.innerText);
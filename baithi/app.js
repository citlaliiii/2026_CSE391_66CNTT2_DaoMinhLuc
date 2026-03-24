const studentForm = document.getElementById('student-form');
const modal = document.getElementById('student-modal');
const tableBody = document.getElementById('table-body');

// 1. Tải dữ liệu từ Local Storage
let students = JSON.parse(localStorage.getItem('students')) || [];
const btnAdd = document.getElementById('btn-open-modal'); // ID của nút THÊM SINH VIÊN
const btnClose = document.getElementById('btn-close'); // ID của nút HỦY
const spanClose = document.querySelector('.close-btn'); // Nút X

// Mở Pop-up khi bấm nút "Thêm sinh viên"
btnAdd.onclick = function() {
    document.getElementById('modal-title').innerText = "Thêm Sinh Viên";
    document.getElementById('student-form').reset(); // Xóa trắng form cũ
    document.getElementById('edit-index').value = ""; // Reset index sửa
    modal.style.display = "block";
}

// Đóng Pop-up khi bấm nút "Hủy"
btnClose.onclick = function() {
    modal.style.display = "none";
}

// Đóng Pop-up khi bấm vào dấu (X)
spanClose.onclick = function() {
    modal.style.display = "none";
}

// Đóng Pop-up khi bấm chuột ra ngoài vùng Form
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// 2. Hàm hiển thị danh sách
function renderTable() {
    tableBody.innerHTML = '';
    let totalGPA = 0;

    students.forEach((s, index) => {
        totalGPA += parseFloat(s.gpa);
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${s.studentId}</td>
                <td>${s.fullName}</td>
                <td>${s.dob}</td>
                <td>${s.classRoom}</td>
                <td>${parseFloat(s.gpa).toFixed(2)}</td>
                <td>
                    <button class="btn-edit" onclick="editStudent(${index})">Sửa</button>
                    <button class="btn-delete" onclick="deleteStudent(${index})">Xoá</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    // Cập nhật thống kê
    document.getElementById('total-count').innerText = students.length;
    document.getElementById('class-avg').innerText = students.length > 0 
        ? (totalGPA / students.length).toFixed(2) : "0.00";
}

// 3. Hàm Validation
function validate() {
    let isValid = true;
    return isValid;
}
// 4. Xử lý Lưu dữ liệu
studentForm.onsubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const studentData = {
        studentId: document.getElementById('studentId').value,
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        classRoom: document.getElementById('classRoom').value,
        gpa: document.getElementById('gpa').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    const editIndex = document.getElementById('edit-index').value;
    if (editIndex === "") {
        students.push(studentData);
    } else {
        students[editIndex] = studentData;
    }

    localStorage.setItem('students', JSON.stringify(students));
    modal.style.display = "none";
    studentForm.reset();
    renderTable();
};

// 5. Sửa và Xoá
window.editStudent = (index) => {
    const s = students[index];
    document.getElementById('studentId').value = s.studentId;
    document.getElementById('fullName').value = s.fullName;
    document.getElementById('dob').value = s.dob;
    document.getElementById('classRoom').value = s.classRoom;
    document.getElementById('gpa').value = s.gpa;
    document.getElementById('email').value = s.email;
    document.getElementById('edit-index').value = index;
    
    document.getElementById('modal-title').innerText = "Sửa Sinh Viên";
    modal.style.display = "block";
};

window.deleteStudent = (index) => {
    if (confirm("Bạn có chắc chắn muốn xoá sinh viên này?")) {
        students.splice(index, 1);
        localStorage.setItem('students', JSON.stringify(students));
        renderTable();
    }
};


// Khởi tạo
renderTable();
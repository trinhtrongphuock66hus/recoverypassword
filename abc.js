// Lấy tham chiếu đến phần tử nút SignIn
const signInButton = document.querySelector(".signIn button");

// Gán sự kiện cho nút SignIn
signInButton.addEventListener("click", function() {
  // Lấy thông tin tài khoản và mật khẩu từ các trường nhập liệu
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  // Kiểm tra tính hợp lệ của tên đăng nhập và mật khẩu
  console.log(`Username: `,username,`Email: `,email);

  // khởi tạo đối tượng XMLHttpRequest
  var xhttp = new XMLHttpRequest();

  // Xác định hành động khi nhận được phản hồi từ máy chủ
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Xử lý kết quả trả về từ máy chủ
      var data = JSON.parse(this.responseText);
      const nguoiDung = data.find(user => user.user === username && user.email === email );
      if (nguoiDung) {
        // Tài khoản đã tồn tại
        alert("Mật khẩu là '" + nguoiDung.pass + "'" );
      } else {
        alert("Tài khoản hoặc email không đúng");
      }
    }
  };
  // Gửi yêu cầu HTTP GET đến địa chỉ '/users'
  xhttp.open("GET", "http://192.168.2.6:3000/users", true);
  xhttp.send();
});

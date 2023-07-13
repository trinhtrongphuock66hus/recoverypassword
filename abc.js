// Lấy tham chiếu đến phần tử nút SignIn
const signInButton = document.querySelector(".signIn button");

// Gán sự kiện cho nút SignIn
signInButton.addEventListener("click", function() {
  // Lấy thông tin tài khoản và mật khẩu từ các trường nhập liệu
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  // Kiểm tra tính hợp lệ của tên đăng nhập và mật khẩu
  console.log(`Username: `,username,`Email: `,email);

  // Tạo một đối tượng mới để chứa thông tin người dùng
  var newUser = {
    user: username,
    email: email
  };

  // Gửi yêu cầu HTTP POST đến địa chỉ '/recovery'
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.2.6/recovery", true);
  xhttp.setRequestHeader("Content-type", "application/json");

  // Gửi thông tin tài khoản và mật khẩu dưới dạng JSON
  var data = JSON.stringify(newUser);
  xhttp.send(data);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Xử lý kết quả trả về từ máy chủ
      var responseData = JSON.parse(this.responseText);
      alert(responseData.message);
    }
  };
});

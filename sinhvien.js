function findStudent() {
  var name = document.getElementById("name").value;
  var studentId = document.getElementById("student-id").value;

  // Kiểm tra thông tin sinh viên và hiển thị kết quả tương ứng
  if (name === "Đỗ Duy Tiến" && studentId === "221231009") {
    document.getElementById("result").innerHTML = `
      <p>Thông tin của Đỗ Duy Tiến:</p>
      <table>
        <tr>
          <th>Họ tên</th>
          <th>Mã sinh viên</th>
          <th>CCCD</th>
          <th>Giới tính</th>
          <th>Tiền phòng</th>
          <th>Phi dịch vụ</th>
          <th>Tổng tiền</th>
        </tr>
        <tr>
          <td>Đỗ Duy Tiến</td>
          <td>221231009</td>
          <td>03480008394</td>
          <td>Nam</td>
          <td>800000 VND</td>
          <td>300000 VND</td>
          <td>1100000 VND</td>
        </tr>
      </table>
    `;

    // Định dạng bảng
    var table = document.querySelector("#result table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    var cells = table.getElementsByTagName("th");
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.border = "1px solid black";
      cells[i].style.padding = "8px";
      cells[i].style.backgroundColor = "#f2f2f2";
      cells[i].style.textAlign = "left";
    }

    cells = table.getElementsByTagName("td");
    for (var j = 0; j < cells.length; j++) {
      cells[j].style.border = "1px solid black";
      cells[j].style.padding = "8px";
      cells[j].style.textAlign = "left";
    }
  }
  else if (name === "Nguyễn Văn B" && studentId === "2212312324") {
    document.getElementById("result").innerHTML = `
      <p>Thông tin của Đỗ Duy Tiến:</p>
      <table>
        <tr>
          <th>Họ tên</th>
          <th>Mã sinh viên</th>
          <th>CCCD</th>
          <th>Giới tính</th>
          <th>Tiền phòng</th>
          <th>Phi dịch vụ</th>
          <th>Tổng tiền</th>
        </tr>
        <tr>
        <td>Nguyễn Văn B</td>
        <td>2212312324</td>
        <td>0348000324</td>
        <td>Nam</td>
        <td>800000 VND</td>
        <td>300000 VND</td>
        <td>1100000 VND</td>
        </tr>
      </table>
    `;

    // Định dạng bảng
    var table = document.querySelector("#result table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";

    var cells = table.getElementsByTagName("th");
    for (var i = 0; i < cells.length; i++) {
      cells[i].style.border = "1px solid black";
      cells[i].style.padding = "8px";
      cells[i].style.backgroundColor = "#f2f2f2";
      cells[i].style.textAlign = "left";
    }

    cells = table.getElementsByTagName("td");
    for (var j = 0; j < cells.length; j++) {
      cells[j].style.border = "1px solid black";
      cells[j].style.padding = "8px";
      cells[j].style.textAlign = "left";
    }
  
  }
 else {
    document.getElementById("result").innerHTML = "<p>Không tìm thấy thông tin sinh viên.</p>";
  }
}

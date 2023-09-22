function layThongTinTuForm(){
    var ma = document.getElementById("txtMaSV").value;
    var ten = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var matkhau = document.getElementById("txtPass").value;
    var diemtoan = document.getElementById("txtDiemToan").value * 1;
    var diemly = document.getElementById("txtDiemLy").value * 1;
    var diemhoa = document.getElementById("txtDiemHoa").value * 1;

    //tạo objective
    var sv = new SinhVien(ma,ten,email,matkhau,diemtoan,diemly, diemhoa)
    return sv;
}

function renderDSSV(dssv) {
    // show dssv lên 
    var contentHTML = "";
    for (var i = 0; i < dssv.length; i++) {
        var sv = dssv[i];
        // tạo chuỗi tr
        var trString = `<tr>
         <td>  ${sv.ma}  </td>
         <td>  ${sv.ten}  </td>
         <td>  ${sv.email}  </td>
         <td> ${sv.tinhDTB()}  </td>
         <td> 
            <button onclick="xoaSV(${sv.ma})" class="btn btn-danger">Xóa</button> 
            <button onclick="suaSV(${sv.ma})" class="btn btn-warning">Sửa</button>  
         </td>;
         </tr>`;
        // cộng dồn chuỗi tr và contentHTML
        contentHTML += trString;
    }
    // dom tbody và show contentHTML
    var tbody = document.getElementById("tbodySinhVien");
    tbody.innerHTML = contentHTML ;
}
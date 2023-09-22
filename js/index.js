// tạo danh sách sinh viên chứa object SV
var dssv = [];
const dssv_localStorage = "dssv_localStorage"

// render lại data từ local storage khi user reload 
var dataJson = localStorage.getItem(dssv_localStorage);

if (dataJson != null) {
    // kiểm tra dữ liệu dưới local storage có tồn tại hay không trước khi render
   dssv = JSON.parse(dataJson); // Gán dữ liệu từ localStorage vào dssv
   renderDSSV(dssv);
}
function themSV() {
    var sv = layThongTinTuForm();
    // check validate
    var isValid = 
    kiemTraRong(sv.ma,"spanMaSV") && 
    kiemTraTrung(sv.ma,"spanMaSV", dssv, "Mã sinh viên này đã tồn tại","ma");

    isValid = isValid & 
    kiemTraTrung(sv.email, "spanEmailSV",dssv, "Email này đã tồn tại","email");
    if(!isValid) {
        // nếu isvalid sai thì dừng fuction themSV tại đây
        return;
    }


    // thêm dssv 
    dssv.push(sv);
    renderDSSV(dssv);

    // lưu xuống local storage
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem(dssv_localStorage, dataJson);
}

function xoaSV(id){
    var index;
    for (var i = 0; i < dssv.length; i++) {
        if (dssv[i].id == id) {
            index = i;
            break;
        }
    }
    //xóa phần tử tại vị trí index
    dssv.splice(index, 1);
    renderDSSV(dssv);
    // Cập nhật lại localStorage sau khi xóa
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem(dssv_localStorage, dataJson);
}

function suaSV(id) {
    var viTri = dssv.findIndex(function(item){
        return item.ma == id;
    })
    var sv = dssv[viTri];
    // show data lên form
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.matkhau;
    document.getElementById("txtDiemToan").value = sv.diemtoan;
    document.getElementById("txtDiemLy").value = sv.diemly;
    document.getElementById("txtDiemHoa").value = sv.diemhoa;

    // Cập nhật lại localStorage sau khi xóa
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem(dssv_localStorage, dataJson);
}
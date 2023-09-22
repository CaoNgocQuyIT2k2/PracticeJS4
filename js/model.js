function SinhVien(ma ,ten ,email ,matkhau ,diemtoan ,diemly ,diemhoa){
    this.ma = ma;
    this.ten = ten;
    this.email = email;
    this.matkhau = matkhau;
    this.diemtoan = diemtoan;
    this.diemly = diemly;
    this.diemhoa = diemhoa;
    this.tinhDTB = function(){
        var dtb = (this.diemtoan + this.diemly + this.diemhoa )/3;
        return dtb;
    };
}
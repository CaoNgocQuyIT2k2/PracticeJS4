function kiemTraRong(value,idErr) {
    if(value != 0) {
        document.getElementById(idErr).innerHTML ="";
        return true;
    }
    else{
        document.getElementById(idErr).innerHTML ="Điền vào ô trống";
        return false;
    }
}

function kiemTraTrung(value,idErr,dssv,mesage,key) {
    var index = dssv.findIndex(function(item){
        return item[key] == value;
    });

    if(index == -1) {
        //ko lỗi
        document.getElementById(idErr).innerHTML = "";
        return true;
    }
    else {
        document.getElementById(idErr).innerHTML = mesage;
        return false;
    }
}
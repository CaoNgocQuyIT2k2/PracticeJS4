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
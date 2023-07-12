// Bài toán kiểm tra số nguyên tố
function KiemTraNT(iSo) {

    var output = true;
    for (var uoc = 2; uoc <= Math.sqrt(iSo); uoc++) { // Math.sqrt(iSo) : căn bậc 2

        if (iSo % uoc == 0) {
            output = false;
            break;
        }
    }
    return output; // true | false

}
/**
 *  Hàm dùng để làm gì :
 *  + Tái sử dụng lại 1 logic code nào đó
 *  + Code 1 chương trình chính ngắn gọn hơn khi gọi hàm
 *  + Dễ bảo trì nâng cấp
 *  + Chia nhỏ vấn đề
 */

// console.log('Hello cyber');

// console.log('Học FE');

// Cú pháp khai báo hàm 

function inNoiDung(noiDung) { // noiDung: param, tham số, input

    console.log(noiDung);
}

var title = 'Hello các bạn';
// Lệnh gọi hàm
inNoiDung('Hello Cyber');
inNoiDung(title);

/**
 * Ví dụ 1: Thay đổi nội dung 3 đoạn text và gán màu sắc cho 3 đoạn nội
        dung khác nhau
 */

// document.getElementById('pText1').innerHTML = 'Hello Cybersoft';
// document.getElementById('pText1').style.color = 'red';

// document.getElementById('pText2').innerHTML = 'Học nè';
// document.getElementById('pText2').style.color = 'blue';

// document.getElementById('pText3').innerHTML = 'Hello Cybersoft + Học nè';
// document.getElementById('pText3').style.color = 'orange';
/**
 * Đây là 1 hàm nhận vào id của 1 thẻ  và làm thay đổi nội dung, màu sắc, classname của thẻ
 * @param {*} id 'id':là id của thẻ
 * @param {*} content 'content: là nội dung của thẻ
 * @param {*} color 'color: là màu sắc của thẻ
 * @param {*} className 'className: là classname của thẻ
 */
//==== Các nội dung thay đổi của 1 logic thì đưa ra thành input
function changeContent(id, content, color, className) { // id: id của thẻ, contnet : nội dung của thẻ, color : màu sắc của thẻ
    document.getElementById(id).innerHTML = content;
    document.getElementById(id).style.color = color;
    document.getElementById(id).style.fontSize = '30px';
    document.getElementById(id).className = className;
}
// Thêm class alert
//== Gọi hàm 
changeContent('pText1', 'Học FrontEnd', 'red', 'alert alert-success');
changeContent('pText2', 'Học nè', 'blue', 'alert alert-danger');
changeContent('pText3', 'Học FE + Học nè', 'orange', 'alert alert-primary');

/**
 *  Ví dụ 2: Xây dưng chức năng để tăng giảm kich thước của ngôi nhà và đoạn
        văn bản sau
 */
//=== Cách 1
/**document.getElementById('btnZoomOutHome').onclick = function(){

    //input: font-size : number

    var fSize = document.getElementById('home').style.fontSize;
    // replace : Thay thế 1 chuỗi thành 1 chuỗi khác ( 200px => 200)
    fSize = Number(fSize.replace('px',''));

    //output : Tăng fSize : number

    fSize = fSize - 10;
    document.getElementById('home').style.fontSize = fSize + 'px';
}
document.getElementById('btnZoomInHome').onclick = function(){

    //input: font-size : number

    var fSize = document.getElementById('home').style.fontSize;
    // replace : Thay thế 1 chuỗi thành 1 chuỗi khác ( 200px => 200)
    fSize = Number(fSize.replace('px',''));

    //output : Tăng fSize : number

    fSize = fSize + 10;
    document.getElementById('home').style.fontSize = fSize + 'px';
}*/

//== Cách 2: Hàm
/**
 * 
 * @param {*} id  Nhận vào 1 id
 * @param {*} size Nhận vào size tăng or giảm
 */
function changeFontSize(id, size) { //Xác định input:  id, size
    // DOM đến 1 id nào đó => lấy font-size
    var fSize = document.getElementById(id).style.fontSize;
    // replace : Thay thế 1 chuỗi thành 1 chuỗi khác ( 200px => 200)

    fSize = Number(fSize.replace('px', ''));
    // Tăng hoặc giảm dựa vào size
    fSize += size;

    document.getElementById(id).style.fontSize = fSize + 'px';
}

document.getElementById('btnZoomOutHome').onclick = function () {

    changeFontSize('home', -10);
}
document.getElementById('btnZoomInHome').onclick = function () {

    changeFontSize('home', 10);
}
document.getElementById('btnZoomOutText').onclick = function () {

    changeFontSize('textVD2', - 10);
}
document.getElementById('btnZoomInText').onclick = function () {

    changeFontSize('textVD2', 10);
}

/** ===== Vòng lặp While
 * Ví dụ 3: Tính tổng từ 1 cho đến sô người dùng nhập vào
 */

// input : soN người dùng nhập vào : Number


document.getElementById('btnTinhTong').onclick = function () {

    var soN = Number(document.getElementById('isoN').value);
    //output : Tong : Number
    var tong = 0;
    var soHang = 1;
    while (soHang <= soN) { // Đúng thì lặp, sai thì dừng

        tong = tong + soHang;

        soHang++; // soHang = soHang + 1;
    }

    document.getElementById('ketQua5').innerHTML = 'Tổng của ' + soN + ' là : ' + tong;
}

/**
 * Ví dụ 4: Cho phép người dùng nhập vào 1 giá trị. In ra số div tương ứng
        với giá trị đó
 */

document.getElementById('btnInDiv').onclick = function () {

    // input : iSo2 : Number : VD :2
    var iSo2 = Number(document.getElementById('iSo2').value);
    // output : html : Tring <div> Div1 </div> <div> Div2 <div>
    var html = '';
    var soLan = 1;

    while (soLan <= iSo2) {

        var inDiv = '<div class="alert alert-success mt-2"> Cyber' + soLan + '</div>';

        html += inDiv; // html = html + inDiv

        // B4: Thay đổi giá trị ban đầu
        soLan++;
    }

    document.getElementById('ketQua6').innerHTML = html;
}

/**
 *  Ví dụ 5: Cho phép người dùng nhập vào 1 số. Cho biết số đó có phải là số
        nguyên tố hay không?
        -- Số nguyên tố là số chia hết cho chính nó và có hai ước
 */

// document.getElementById('btnKiemTra').onclick = function(){

//     // input : iSo : Number
//     var iSo3 = Number(document.getElementById('iSo3').value);

//     // output : ketQua : String ( iSo3 có phải là số nguyên tố)

//     var ketQua = '';
//     // B1: Giá trị bắt đầu
//     var dem = 0;
//     var uoc = 1; // bắt đầu ước là số 1 

//     while( uoc <= iSo3){ //B2: Xác định điều kiện lặp
//         //B3: Thực thi khối lệnh
//         if( iSo3 % uoc == 0){ // Nếu chia hết thì tăng biến đếm

//             dem ++;
//         }
//         // B4: Thay đổi giá trị ban đầu
//         uoc ++;
//     }

//      if(dem == 2){

//         ketQua = iSo3 +' là số nguyên tố!';
//      } else{
//          ketQua = iSo3 + ' không phải là số nguyên tố!';
//      }

//      document.getElementById('ketQua7').innerHTML = ketQua;
// }

//===== Cách 2 : tối ưu, tiết kiệm tài nguyên
document.getElementById('btnKiemTra').onclick = function () {

    // input : iSo : Number
    var iSo3 = Number(document.getElementById('iSo3').value);

    // output : ketQua : String ( iSo3 có phải là số nguyên tố)

    var ketQua = '';
    //B1: Giá trị bắt đầu
    var kiemTraSoNT = true; // Kỹ thuật đặt cờ hiệu ( lính canh).
    var uoc = 2;

    //B2: Điều kiện lặp
    while (uoc <= iSo3 / 2) { // uoc <= Math.sqrt(iSo3) : ước : căn bậc 2 => tối ưu hơn +1

        // B3: Xử lý kiểm tra ước
        if (iSo3 % uoc === 0) { // Nếu có 1 trường hợp xảy ra => ko còn phải là số nguyên tố

            kiemTraSoNT = false;
            break; // Thoát ra khỏi vòng lặp ngay lập tức => ko cần ktra thêm
        }
        // B4: Thay đổi giá trị ban đầu
        uoc++;
    }
    if (kiemTraSoNT && iSo3 != 1) {

        ketQua = iSo3 + ' là số nguyên tố!';
    } else {
        ketQua = iSo3 + ' không phải là số nguyên tố !'
    }
    document.getElementById('ketQua7').innerHTML = ketQua;
}

/** 
 * Ví dụ 6: Cho phép người dùng nhập vào 1 số. Tính tổng các số chẵn từ 2 -> số đó ( hoặc nhỏ hơn 1 đơn vị)
 * 
*/
document.getElementById('btnTinh').onclick = function () {

    var iSo4 = Number(document.getElementById('iSo4').value);

    var tong = 0;
    //B1: Giá trị bắt đầu
    var soHang = 2; // số chẵn bắt đầu
    while (soHang <= iSo4) { // B2: Xác định điều kiện lặp

        //B3: Thực thi khối lệnh
        tong += soHang; // tong = tong + soHang;
        //B4: Thay đổi giá trị

        soHang += 2; // soHang = soHang + 2;

    }

    document.getElementById('ketQua8').innerHTML = 'Tổng ' + iSo4 + ' là: ' + tong;
}

/**
 *  Ví dụ 7: Cho phép người dùng nhập vào 1 số. In ra số ngôi sao tương ứng
 */

document.getElementById('InNgoiSao').onclick = function () {

    var iSo5 = Number(document.getElementById('iSo5').value);
    var html = '';
    //B1: Giá trị bắt đầu
    // var soSao = 1;
    //=== Cách 1
    // while (soSao <= iSo5){ //B2: Xác định điều kiện lặp

    //     //B3: Thực thi khối lệnh
    //    var tagSao = '<i class="fa fa-star text-warning"></i>';
    //    html += tagSao;
    //     //B4: Thay đổi giá trị
    //    soSao ++;
    // }

    //==== Cách 2
    for (var soSao = 1; soSao <= iSo5; soSao++) {

        var tagSao = '<i class="fa fa-star text-warning"></i>';

        html += tagSao;
    }
    // In output ra giao diện
    document.getElementById('ketQua9').innerHTML = html;

}

/**
 * Bài tập: Cho phép người dùng nhập vào số hàng và số cột. In ra số sao tương ứng
 */
// ===== Cách 1
// document.getElementById('btnInSao').onclick = function () {

//     var soHang = Number(document.getElementById('iHang').value);
//     var soCot = Number(document.getElementById('iCot').value);

//     var output = '';
//     for (var soLanHang = 1; soLanHang <= soHang; soLanHang++) {
//         // In ra 1 hàng sao trước 
//         //B1: Tạo ra biến số Lần
//         // B2: Điều kiện lặp
//         for (var soLan = 1; soLan <= soCot; soLan++) {

//             var tagSao = '<i class="fa fa-star text-warning"></i>';
//             output += tagSao;

//         }
//         output += '<br/>';
//     }
//     document.getElementById('ketQua10').innerHTML = output;
// }
//====== Cách 2
document.getElementById('btnInSao').onclick = function () {

    var soHang = Number(document.getElementById('iHang').value);
    var soCot = Number(document.getElementById('iCot').value);

    var output = '';
    for (var soLanHang = 1; soLanHang <= soHang; soLanHang++) {

        var hangSao = inHangSao(soCot);
        output += hangSao;
        output += '<br/>';
    }
    document.getElementById('ketQua10').innerHTML = output;
}
// In hàng sao
function inHangSao(soLan) { // soLan = 5 == soCot
    var output = '';
    for (i = 1; i <= soLan; i++) {

        output += '<i class="fa fa-star text-warning"></i>';

    }
    return output; // output
}

/** 
 * Bài tập: Cho phép người dùng nhập vào 1 số. In ra các số nguyên tố từ 2
        đến nhỏ hơn hoặc bằng số đó
*/
document.getElementById('inSoNT').onclick = function () {

    // input : number
    var soNT = Number(document.getElementById('iSo6').value);

    //output : 2 3 5 7 : String
    var ketQua = '';
    // Bước 1:
    for (var i = 2; i <= soNT; i++) { // i: index: số TT
        // B3: Chạy qua 1 con số sẽ kiểm tra số đó có phải số NT hay không, nếu đúng thì mới + vào output
        var kiemTra = KiemTraNT(i);
        if (kiemTra) {

            ketQua += i + ' ';
        }
        document.getElementById('ketQua11').innerHTML = ' Số nguyên tố của ' + soNT + ' là: ' + ketQua;
    }
}
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
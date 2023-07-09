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
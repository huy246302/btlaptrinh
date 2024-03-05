var x = prompt('hay nhap vao so be hon 100');
if (x >= 100)
{
    alert("ban vua nhap gia tri la: " + x + ",gia tri nay khong be hon 100");
}

var x = prompt('hay nhap vao so be hon 100 lon hon 50');
if ((x<51)||(x>99))
{
    document.write("Ban vua nhap gia tri la :" + x);
    document.write("Gia tri nay khong nam trong khoan tu 50 den 100");
}
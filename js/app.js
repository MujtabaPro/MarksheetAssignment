var name = prompt('Enter your Name', 'StudentName');

var eng = +prompt('StudentMarKsheeT', 'Enter Your English Mark');
var urdu = +prompt('StudentMarKsheeT', 'Enter Your Urdu Mark');
var isl = +prompt('StudentMarKsheeT', 'Enter Your Islmiat Mark');
var math = +prompt('StudentMarKsheeT', 'Enter Your Math Mark');
var phy = +prompt('StudentMarKsheeT', 'Enter Your Physics Mark');
var chem = +prompt('StudentMarKsheeT', 'Enter Your Chemistry Mark');

var total = eng + urdu + isl + math + phy + chem;
var per = (total * 100) / 600;

if (per > 80) {
    document.write('Hellow <h2>' + name + '</h2> Your Grade Is: <h2> A+ </h2> <br> Your Per% is: ' + per);
} else if (per > 70 && per < 80) {
    document.write('Hellow <h2>' + name + '</h2> Your Grade Is: <h2> A </h2> <br> Your Per% is: ' + per);
} else if (per > 60 && per < 70) {
    document.write('Hellow <h2>' + name + '</h2> Your Grade Is: <h2> B </h2> <br> Your Per% is: ' + per);
} else if (per > 50 && per < 60) {
    document.write('Hellow <h2>' + name + '</h2> Your Grade Is: <h2> C </h2> <br> Your Per% is: ' + per);
} else if (per > 40 && per < 50) {
    document.write('Hellow <h2>' + name + '</h2> Your Are: <h2> Fail </h2> <br> Your Per% is: ' + per);
}
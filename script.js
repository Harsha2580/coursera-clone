var text = document.getElementById("maincontent");
var def = text.innerHTML;
var ibm = document.getElementById("ibm").innerHTML;
ibm = '<div id ="ibm" class = "header cards">' + ibm + '</div>';
var meta = document.getElementById("meta").innerHTML;
meta = '<div id ="meta" class = "header cards">' + meta + '</div>';
var full = document.getElementById("full").innerHTML;
full = '<div id ="full" class = "header cards">' + full + '</div>';
function Beginner(){
    var checkBox = document.getElementById("Beginner");
    if (checkBox.checked == true){
        text.innerHTML = "";
        text.innerHTML = ibm;
      } else {
        text.innerHTML = def;
      }
}
function Intermediate(){
    var checkBox = document.getElementById("Intermediate");
    if (checkBox.checked == true){
        text.innerHTML = "";
        text.innerHTML = meta;
      } else {
        text.innerHTML = def;
      }
}
function Advanced(){
    var checkBox = document.getElementById("Advanced");
    if (checkBox.checked == true){
        text.innerHTML = "";
        text.innerHTML = full;
      } else {
        text.innerHTML = def;
      }
}

function Weeks(){
    var checkBox = document.getElementById("Weeks");
    if (checkBox.checked == true){
        text.innerHTML = "";
        text.innerHTML = ibm;
      } else {
        text.innerHTML = def;
      }
}
function Months(){
    var checkBox = document.getElementById("Months");
    if (checkBox.checked == true){
        text.innerHTML = "";
        text.innerHTML = full;
      } else {
        text.innerHTML = def;
      }
}
function moreMonths(){
    var checkBox = document.getElementById("moreMonths");
    if (checkBox.checked == true){
        text.innerHTML = "";
        text.innerHTML = meta;
      } else {
        text.innerHTML = def;
      }
}

function search(){
    var course = document.getElementById("input").value;
    course = course.toLowerCase();
    if(course === "meta"){
        text.innerHTML = "";
        text.innerHTML = meta;
    }
    else if(course === "ibm"){
        text.innerHTML = "";
        text.innerHTML = ibm;
    }
    else if(course === "johns hopkins"){
        text.innerHTML = "";
        text.innerHTML = full;
    }
}
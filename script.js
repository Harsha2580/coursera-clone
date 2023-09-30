var text = document.getElementById("maincontent");
var def = text.innerHTML;
var ibm = document.getElementById("ibm").innerHTML;
ibm = '<div id ="ibm" class = "header cards">' + ibm + '</div>';
var meta = document.getElementById("meta").innerHTML;
meta = '<div id ="meta" class = "header cards">' + meta + '</div>';
var full = document.getElementById("full").innerHTML;
full = '<div id ="full" class = "header cards">' + full + '</div>';

function filter(){
  var ans = "";
  text.innerHTML = "";
  var a = document.getElementById("Beginner");
  var b = document.getElementById("Intermediate");
  var c = document.getElementById("Advanced");
  var d = document.getElementById("Weeks");
  var e = document.getElementById("Months");
  var f = document.getElementById("moreMonths");
  var lev = false;
  var time = false;
  if(!a.checked && !b.checked && !c.checked){
    lev =true;
  }
  if(!d.checked && !e.checked && !f.checked){
    time =true;
  }
  if(time){
    if(a.checked && b.checked && c.checked){
      ans += ibm+meta+full;
    }
    else if(a.checked && b.checked && !c.checked){
      ans += ibm+meta;
    }
    else if(a.checked && !b.checked && c.checked){
      ans += ibm+full;
    }
    else if(!a.checked && b.checked && c.checked){
      ans += meta+full;
    }
    else if(a.checked && !b.checked && !c.checked){
      ans += ibm;
    }
    else if(!a.checked && b.checked && !c.checked){
      ans += meta;
    }
    else if(!a.checked && !b.checked && c.checked){
      ans += full;
    }
  }
  else if(lev){
    if(d.checked && e.checked && f.checked){
      ans += ibm+full+meta;
    }
    else if(d.checked && e.checked && !f.checked){
      ans += ibm+full;
    }
    else if(d.checked && !e.checked && f.checked){
      ans += ibm+meta;
    }
    else if(!d.checked && e.checked && f.checked){
      ans += meta+full;
    }
    else if(d.checked && !e.checked && !f.checked){
      ans += ibm;
    }
    else if(!d.checked && e.checked && !f.checked){
      ans += full;
    }
    else if(!d.checked && !e.checked && f.checked){
      ans += meta;
    }
  }
  if(a.checked && d.checked){
    ans += ibm;
  }
  if(b.checked && f.checked){
    ans += meta;
  }
  if(c.checked && e.checked){
    ans += full;
  }
  text.innerHTML = ans;
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
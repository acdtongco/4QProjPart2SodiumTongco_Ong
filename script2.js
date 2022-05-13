window.addEventListener('load', () => {
  
  var teamname = localStorage.getItem('TEAMNAME');
  //name receive
  var name1 = localStorage.getItem('NAME1');
  var name2 = localStorage.getItem('NAME2');
  var name3 = localStorage.getItem('NAME3');
  var name4 = localStorage.getItem('NAME4');
  var name5 = localStorage.getItem('NAME5');
  var name6 = localStorage.getItem('NAME6');
  var name7 = localStorage.getItem('NAME7');
  //age receive
  var age1 = localStorage.getItem('AGE1');
  var age2 = localStorage.getItem('AGE2');
  var age3 = localStorage.getItem('AGE3');
  var age4 = localStorage.getItem('AGE4');
  var age5 = localStorage.getItem('AGE5');
  var age6 = localStorage.getItem('AGE6');
  var age7 = localStorage.getItem('AGE7');
  //height receive
  var height1 = localStorage.getItem('HEIGHT1');
  var height2 = localStorage.getItem('HEIGHT2');
  var height3 = localStorage.getItem('HEIGHT3');
  var height4 = localStorage.getItem('HEIGHT4');
  var height5 = localStorage.getItem('HEIGHT5');
  var height6 = localStorage.getItem('HEIGHT6');
  var height7 = localStorage.getItem('HEIGHT7');
  //email receive
  var email1 = localStorage.getItem('EMAIL1');
  var email2 = localStorage.getItem('EMAIL2');
  var email3 = localStorage.getItem('EMAIL3');
  var email4 = localStorage.getItem('EMAIL4');
  var email5 = localStorage.getItem('EMAIL5');
  var email6 = localStorage.getItem('EMAIL6');
  var email7 = localStorage.getItem('EMAIL7');
  //school receive
  var school1 = localStorage.getItem('SCHOOL1');
  var school2 = localStorage.getItem('SCHOOL2');
  var school3 = localStorage.getItem('SCHOOL3');
  var school4 = localStorage.getItem('SCHOOL4');
  var school5 = localStorage.getItem('SCHOOL5');
  var school6 = localStorage.getItem('SCHOOL6');
  var school7 = localStorage.getItem('SCHOOL7');
  //comorbidity receive
  var tArea1 = localStorage.getItem('TAREA1');
  var tArea2 = localStorage.getItem('TAREA2');
  var tArea3 = localStorage.getItem('TAREA3');
  var tArea4 = localStorage.getItem('TAREA4');
  var tArea5 = localStorage.getItem('TAREA5');
  var tArea6 = localStorage.getItem('TAREA6');
  var tArea7 = localStorage.getItem('TAREA7');
  //position receive
  var pos1 = localStorage.getItem('POS1');
  var pos2 = localStorage.getItem('POS2');
  var pos3 = localStorage.getItem('POS3');
  var pos4 = localStorage.getItem('POS4');
  var pos5 = localStorage.getItem('POS5');
  var pos6 = localStorage.getItem('POS6');
  var pos7 = localStorage.getItem('POS7');
  //contact number receive
  var cnumber1 = localStorage.getItem('CNUMBER1');
  var cnumber2 = localStorage.getItem('CNUMBER2');
  var cnumber3 = localStorage.getItem('CNUMBER3');
  var cnumber4 = localStorage.getItem('CNUMBER4');
  var cnumber5 = localStorage.getItem('CNUMBER5');
  var cnumber6 = localStorage.getItem('CNUMBER6');
  var cnumber7 = localStorage.getItem('CNUMBER7');
  //guardian's name receive
  var gname1 = localStorage.getItem('GNAME1');
  var gname2 = localStorage.getItem('GNAME2');
  var gname3 = localStorage.getItem('GNAME3');
  var gname4 = localStorage.getItem('GNAME4');
  var gname5 = localStorage.getItem('GNAME5');
  var gname6 = localStorage.getItem('GNAME6');
  var gname7 = localStorage.getItem('GNAME7');
  //guardian's contact number receive
  var gnumber1 = localStorage.getItem('GNUMBER1');
  var gnumber2 = localStorage.getItem('GNUMBER2');
  var gnumber3 = localStorage.getItem('GNUMBER3');
  var gnumber4 = localStorage.getItem('GNUMBER4');
  var gnumber5 = localStorage.getItem('GNUMBER5');
  var gnumber6 = localStorage.getItem('GNUMBER6');
  var gnumber7 = localStorage.getItem('GNUMBER7');
  
  document.getElementById('div1').innerHTML = "Teamname:" + teamname + "<br>";
  document.getElementById('div2').innerHTML = "Name: " + name1 + "<br>" + "Age: " + age1 + "<br>" + "Height: " + height1 + "<br>" + "Position: " + pos1 + "<br>" + "Email: " + email1 + "<br>" + "School: " + school1 + "<br>" + "Contact Number: " + cnumber1 + "<br>" + "Guardian's Name: "+ gname1 + "<br>" + "Guardian's Contact Number: " + gnumber1 + "<br>" + "Comorbidities: " + tArea1;
  document.getElementById('div3').innerHTML = "Name: " + name2 + "<br>" + "Age: " + age2 + "<br>" + "Height: " + height2 + "<br>" + "Position: " + pos2 + "<br>" + "Email: " + email2 + "<br>" + "School: " + school2 + "<br>" + "Contact Number: " + cnumber2 + "<br>" + "Guardian's Name: "+ gname2 + "<br>" + "Guardian's Contact Number: " + gnumber2 + "<br>" + "Comorbidities: " + tArea2;
  document.getElementById('div4').innerHTML = "Name: " + name3 + "<br>" + "Age: " + age3 + "<br>" + "Height: " + height3 + "<br>" + "Position: " + pos3 + "<br>" + "Email: " + email3 + "<br>" + "School: " + school3 + "<br>" + "Contact Number: " + cnumber3 + "<br>" + "Guardian's Name: "+ gname3 + "<br>" + "Guardian's Contact Number: " + gnumber3 + "<br>" + "Comorbidities: " + tArea3;
  document.getElementById('div5').innerHTML = "Name: " + name4 + "<br>" + "Age: " + age4 + "<br>" + "Height: " + height4 + "<br>" + "Position: " + pos4 + "<br>" + "Email: " + email4 + "<br>" + "School: " + school4 + "<br>" + "Contact Number: " + cnumber4 + "<br>" + "Guardian's Name: "+ gname4 + "<br>" + "Guardian's Contact Number: " + gnumber4 + "<br>" + "Comorbidities: " + tArea4;
  document.getElementById('div6').innerHTML = "Name: " + name5 + "<br>" + "Age: " + age5 + "<br>" + "Height: " + height5 + "<br>" + "Position: " + pos5 + "<br>" + "Email: " + email5 + "<br>" + "School: " + school5 + "<br>" + "Contact Number: " + cnumber5 + "<br>" + "Guardian's Name: "+ gname5 + "<br>" + "Guardian's Contact Number: " + gnumber5 + "<br>" + "Comorbidities: " + tArea5;
  document.getElementById('div7').innerHTML = "Name: " + name6 + "<br>" + "Age: " + age6 + "<br>" + "Height: " + height6 + "<br>" + "Position: " + pos6 + "<br>" + "Email: " + email6 + "<br>" + "School: " + school6 + "<br>" + "Contact Number: " + cnumber6 + "<br>" + "Guardian's Name: "+ gname6 + "<br>" + "Guardian's Contact Number: " + gnumber6 + "<br>" + "Comorbidities: " + tArea6;
  document.getElementById('div8').innerHTML = "Name: " + name7 + "<br>" + "Age: " + age7 + "<br>" + "Height: " + height7 + "<br>" + "Position: " + pos7 + "<br>" + "Email: " + email7 + "<br>" + "School: " + school7 + "<br>" + "Contact Number: " + cnumber7 + "<br>" + "Guardian's Name: "+ gname7 + "<br>" + "Guardian's Contact Number: " + gnumber7 + "<br>" + "Comorbidities: " + tArea7;
  
})
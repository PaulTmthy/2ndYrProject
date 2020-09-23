
  var field1 = document.getElementsByClassName("r1");
  var field2 = document.getElementsByClassName("r2");
  var field3 = document.getElementsByClassName("r3");
  var field4 = document.getElementsByClassName("r4");
  var field5 = document.getElementsByClassName("r5");
  var field6 = document.getElementsByClassName("r6");
  var field7 = document.getElementsByClassName("r7");
  var field8 = document.getElementsByClassName("r8");
  var field9 = document.getElementsByClassName("r9");
  var field10 = document.getElementsByClassName("r10");
  var field11 = document.getElementsByClassName("r11");
  var field12 = document.getElementsByClassName("r12");
  var field13 = document.getElementsByClassName("r13");
  var field14 = document.getElementsByClassName("r14");

  var btn = document.getElementById("button");
  
  var i,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,
  f11,f12,f13,f14;

  btn.addEventListener('click', avgScore);
  function avgScore(e){

    for (i=0; i < field1.length; i++){
      if (field1[i].checked){
        f1 = field1[i].value; 
      }
    }
    for (i=0;i< field2.length; i++){
      if (field2[i].checked){
        f2 = field2[i].value; 
      }
    }
    for (i=0; i < field3.length; i++){
      if (field3[i].checked){
        f3 = field3[i].value; 
      }
    }
    for (i=0; i < field4.length; i++){
      if (field4[i].checked){
        f4 = field4[i].value; 
      }
    }
    for (i=0; i < field5.length; i++){
      if (field5[i].checked){
        f5 = field5[i].value; 
      }
    }
    for (i=0; i < field6.length; i++){
      if (field6[i].checked){
        f6 = field6[i].value; 
      }
    }
    for (i=0; i < field7.length; i++){
      if (field7[i].checked){
        f7 = field7[i].value; 
      }
    }
    for (i=0; i < field8.length; i++){
      if (field8[i].checked){
        f8 = field8[i].value; 
      }
    }
    for (i=0; i < field9.length; i++){
      if (field9[i].checked){
        f9 = field9[i].value; 
      }
    }
    for (i=0; i < field10.length; i++){
      if (field10[i].checked){
        f10 = field10[i].value; 
      }
    }
    for (i=0; i < field11.length; i++){
      if (field11[i].checked){
        f11 = field11[i].value; 
      }
    }
    for (i=0; i < field12.length; i++){
      if (field12[i].checked){
        f12 = field12[i].value; 
      }
    }
    for (i=0; i < field13.length; i++){
      if (field13[i].checked){
        f13 = field13[i].value; 
      }
    }
    for (i=0; i < field14.length; i++){
      if (field14[i].checked){
        f14 = field14[i].value; 
      }
    }
   

    var num1 = parseFloat(f1);
    var num2 = parseFloat(f2);
    var num3 = parseFloat(f3);
    var num4 = parseFloat(f4);
    var num5 = parseFloat(f5);
    var num6 = parseFloat(f6);
    var num7 = parseFloat(f7);
    var num8 = parseFloat(f8);
    var num9 = parseFloat(f9);
    var num10 = parseFloat(f10);
    var num11 = parseFloat(f11);
    var num12 = parseFloat(f12);
    var num13 = parseFloat(f13);
    var num14 = parseFloat(f14);
   

    var total = num1 + num2 + num3 + num4 + num5 + num6 + num7 + 
    num8 + num9 + num10 + num11 + num12 + num13 + num14;

    var average = total/60*100;

    if (average >= 90 && average <= 100){
      alert("Your average is: "+average.toFixed(2)+ "%" + " - Excellent");     
    }

    else if (average >= 80 && average <= 90){
      alert("Your average is: "+average.toFixed(2)+ "%" + " - Good");
    }

    else if (average >= 70 && average <= 80){
      alert("Your average is: "+average.toFixed(2)+ "%" + " -Average");
    }

    else if (average >= 60 && average <= 70){
      alert("Your average is: "+average.toFixed(2)+ "%" + " - Average");
    }

    else if (average <= 60){
      alert("Your average is: " +average.toFixed(2)+ "%" + " - Average");
    }
    else{
    alert("Please select a score from each required item.");
    }
   
  }

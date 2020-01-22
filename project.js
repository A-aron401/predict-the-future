 var question1= $("name").val();
 console.log("testing");
 var question2=$("packs").val();

 var question3=$("peices").val();

 $(".submit").click(function() {
   console.log(Number(question2*12));
   console.log(Number(question3*52));
   $(".answer").text(question1+"you will buy "+question2+" by 2050 and you will chew "+ question3+" peices of gum by 2050");  
 });
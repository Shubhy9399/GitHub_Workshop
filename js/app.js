function nameCheck(){

   let a=document.getElementById("name").value;
   let b=confirm(" Is " + a + " your name ?");
   if(b!=null){
      alert( a + " , Welcome to DigiSafari Git Workshop");

}
}
function LeapYearCheck(){

   let c=document.getElementById("year").value;
   if((c%400==0)||(c%4==0 && c%100!=0))
		{
                                       alert( c+ " is a Leap Year!");
		}
    else {
                alert(c + " is not a Leap Year!")
            }
}
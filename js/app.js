function nameCheck(){

   let a=document.getElementById("name").value;
   let b=confirm(" Is " + a + " your name ?");
   if(b!=null){
      alert( a + " , Welcome to DigiSafari Git Workshop");

}
}
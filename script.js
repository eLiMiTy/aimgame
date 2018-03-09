$(document).ready(function(){
   
  var gameOn = true; 
  var i = 1;
  spawning();
  
  function spawning() {
    	var t = Math.floor(Math.random() * 360) + 90; 
      var l = Math.floor(Math.random() * 615) + 45;
      $(".bg").append("<div id='"+i+"' class='target'></div>");

     $(".target#"+i).css( {"top" : t+"px", "left" : l+"px" });
  
      i++;
      setTimeout(spawning() , 1000); 
   }
  
    
  
});
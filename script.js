$(document).ready(function(){
   
  var gameOn = true; 
  var i = 1;
  var spawnTimer = 1000;
  spawning();
  
  function spawning() {
    	var t = Math.floor(Math.random() * 97) + 2; 
      var l = Math.floor(Math.random() * 97) + 2;
      $(".bg").append("<div id='"+i+"' class='target'></div>");
      $(".target#"+i).css( {"top" : t+"%", "left" : l+"%" });
      $(".target").click(function(){
        $(this).hide();
      });   
      i++;
      spawnTimer = spawnTimer - 10;
     
  
   }

   setInterval(spawning , spawnTimer); 
  
});
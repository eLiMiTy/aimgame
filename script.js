$(document).ready(function(){
 
  var j = -2;
  var i = 1;
  var spawnTimer = 1000;
  var life = 3;
 
  var buttonClick = false;
  var w8 = 0;
  var gameOver = false;

 $('#button').click(function() {
    $(this).remove();
    spawning();
    buttonClick = true
  });


  function dmg() {
    if (life == 3) {
      life = life - 1
     $(".bg").text("Leben: X X ");
      console.log("hit 1");
    }else if (life == 2) {
      life = life - 1
     $(".bg").text("Leben: X ");
       console.log("hit 2");
    }else if (life == 1) {
      life = life - 1
     $(".bg").text("Leben:");
       console.log("hit 3");
       gameOver= true;
    }
  }


  function spawning() {
    if (buttonClick == true) {
    	var t = Math.floor(Math.random() * 94) + 2; 
      var l = Math.floor(Math.random() * 94) + 2;
      $(".bg").append("<div id='"+i+"' class='target'></div>");
      $(".target#"+i).css( {"top" : t+"%", "left" : l+"%" });
      $(".target").click(function(){
          $(this).remove();
      });   
      i++;
      decay();
      
    }
  }

  
  function decay() {
      console.log("decay");
      $(".target#"+j).remove(); 
      j++
     
        dmg();  

        

  }

  if (gameOver == true) {
      console.log("game Over");
  }else if(gameOver == false){
    console.log("game is going")
    setInterval(spawning, spawnTimer);
  }

  
});


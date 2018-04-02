$(document).ready(function(){
 
  var j = -2;
  var i = 1;
  var spawnTimer = 1000;
  var life = 3;
 
  var buttonClick = false;
  var w8 = 0;
  var gameOver = false;

  // damit nicht direckt ins spiel geworfen wir sobald die seite geladen hat habe ich einen button hinzugefüght dem es den spieler ermöglicht das spiel nach belieben zu starten.
 $('#button').click(function() {
    $(this).remove();
    spawning();
    buttonClick = true
  });

//die funktion die das Leben des spielers abzieht.
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

// Hier werden die Div also die vierecke erstellt auf die man später klicken muss
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

// ist dafür gedacht die vierecke zu entfernen die zulange nicht angeklickt wurden. außerdem sollen sie dann die schaden methode ausführen falls das der fall ist
  function decay() {
      console.log("decay");
      $(".target#"+j).remove(); 
      j++
     
        dmg();  

        

  }
  //hier ist der Game loop dieser wird jeder sekunde ausgeführt. und soll sollange laufen bis der spieler kein leben mehr hat.
  if (gameOver == true) {
      console.log("game Over");
  }else if(gameOver == false){
    console.log("game is going")
    setInterval(spawning, spawnTimer);
  }

  
});


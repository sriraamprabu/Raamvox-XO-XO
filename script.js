function main() {
  
    var titel = document.getElementsByTagName("h1")[0];
    
    var vakjes = document.getElementById("frame").getElementsByTagName("div");
    var spelers = document.getElementById("speler").getElementsByTagName("p");
    var tellerSpeler = 1;
  
    var uitslag = document.getElementsByTagName("h2")[0];
    var winnendespeler;
    var aantalTrue = 0;
  
    
    // GEWONNEN
            
     function stopSpel() {
         for(i=0;i<vakjes.length;i++){
              vakjes[i].onmouseover = function(e) {
                     e.preventDefault;
               };
               vakjes[i].onclick = function(e) { 
                     e.preventDefault;
               };
         }
         uitslag.innerHTML = winnendespeler + "WIN";
         spelers[0,1].className = "";
     };
    
     function functieX() {
         winnendespeler = "PLAYER 1 ";
         stopSpel();
         titel.style.color="whitesmoke"; 
         uitslag.style.color="whitesmoke"; 
     };
    
     function functieO() {
         winnendespeler = "PLAYER 2 ";
         stopSpel();
         titel.style.color="whitesmoke";
         uitslag.style.color="whitesmoke";
     };
    
     function functieNiemand() {
         winnendespeler = "NOBODY ";
         stopSpel();
         titel.style.color="whitesmoke";
         uitslag.style.color="whitesmoke";
     };
              
     function winnaar() {
               if(vakjes[0].innerHTML === "X" && vakjes[1].innerHTML === "X" && vakjes[2].innerHTML === "X"){
                  functieX();
               }else if(vakjes[0].innerHTML === "O" && vakjes[1].innerHTML === "O" && vakjes[2].innerHTML === "O"){
                  functieO();
               }else if(vakjes[3].innerHTML === "X" && vakjes[4].innerHTML === "X" && vakjes[5].innerHTML === "X"){
                  functieX(); 
               }else if(vakjes[3].innerHTML === "O" && vakjes[4].innerHTML === "O" && vakjes[5].innerHTML === "O"){
                  functieO();
               }else if(vakjes[6].innerHTML === "X" && vakjes[7].innerHTML === "X" && vakjes[8].innerHTML === "X"){
                  functieX(); 
               }else if(vakjes[6].innerHTML === "O" && vakjes[7].innerHTML === "O" && vakjes[8].innerHTML === "O"){
                  functieO();
               }else if(vakjes[0].innerHTML === "X" && vakjes[3].innerHTML === "X" && vakjes[6].innerHTML === "X"){
                  functieX(); 
               }else if(vakjes[0].innerHTML === "O" && vakjes[3].innerHTML === "O" && vakjes[6].innerHTML === "O"){
                  functieO();
               }else if(vakjes[1].innerHTML === "X" && vakjes[4].innerHTML === "X" && vakjes[7].innerHTML === "X"){
                  functieX();
               }else if(vakjes[1].innerHTML === "O" && vakjes[4].innerHTML === "O" && vakjes[7].innerHTML === "O"){
                  functieO();
               }else if(vakjes[2].innerHTML === "X" && vakjes[5].innerHTML === "X" && vakjes[8].innerHTML === "X"){
                  functieX(); 
               }else if(vakjes[2].innerHTML === "O" && vakjes[5].innerHTML === "O" && vakjes[8].innerHTML === "O"){
                  functieO();
               }else if(vakjes[0].innerHTML === "X" && vakjes[4].innerHTML === "X" && vakjes[8].innerHTML === "X"){
                  functieX();
               }else if(vakjes[0].innerHTML === "O" && vakjes[4].innerHTML === "O" && vakjes[8].innerHTML === "O"){
                  functieO();
               }else if(vakjes[2].innerHTML === "X" && vakjes[4].innerHTML === "X" && vakjes[6].innerHTML === "X"){
                  functieX();
               }else if(vakjes[2].innerHTML === "O" && vakjes[4].innerHTML === "O" && vakjes[6].innerHTML === "O"){
                  functieO();
               }else if(aantalTrue >= 9){
                   functieNiemand();
               }
    };
    
    
    
    
    // SPELEN
  
      for(i=0;i<vakjes.length;i++){
  
            vakjes[i].onmouseover = function() {
                if(this.getAttribute("data-id") === "false"){
                     if(tellerSpeler === 2){
                             this.innerHTML = "O";
                             this.style.color = "#F3BB61";
                             this.style.backgroundColor = "#252525;";
                      }else{
                             this.innerHTML = "X";
                             this.style.color = "#F2DF7B";
                             this.style.backgroundColor = "#252525;";
                      }
                }
            };
  
            vakjes[i].onmouseout = function() {
                if(this.getAttribute("data-id") === "false"){
                     this.style.backgroundColor = "#252525;";
                     this.innerHTML = "";
                }
            };
  
            vakjes[i].onclick = function() { 
                if(this.getAttribute("data-id") === "false"){
                     if(tellerSpeler === 2){
                         this.style.color = "#F3BB61"; 
                         this.innerHTML = "O";
                         tellerSpeler = 1;
                         spelers[0].className = "active1";
                         spelers[1].className = "";
                         this.setAttribute("data-id", "true");
                     }else{
                         this.style.color = "#F2DF7B";
                         this.innerHTML = "X";
                         tellerSpeler = 2;
                         spelers[0].className = "";
                         spelers[1].className = "active2";
                         this.setAttribute("data-id", "true");
                      } 
                      this.style.backgroundColor = "#252525;";
                      aantalTrue++;
                      winnaar();
                }  
            };
      };
  
    
    
  }
  
  window.onload = function() {
         main();
  }
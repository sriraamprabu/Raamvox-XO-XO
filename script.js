function main() {
   const titel = document.getElementsByTagName("h1")[0];
   const vakjes = document.getElementById("frame").getElementsByTagName("div");
   const spelers = document.getElementById("speler").getElementsByTagName("p");
   let tellerSpeler = 1;
   let uitslag = document.getElementsByTagName("h2")[0];
   let winnendespeler;
   let aantalTrue = 0;

   // Stop the game
   function stopSpel() {
       for (let i = 0; i < vakjes.length; i++) {
           vakjes[i].onmouseover = null;
           vakjes[i].onclick = null;
       }
       uitslag.innerHTML = `${winnendespeler} WINS`;
       spelers[0].className = "";
       spelers[1].className = "";
       titel.style.color = "gray";
       uitslag.style.color = "whitesmoke";
   }

   function functieX() {
       winnendespeler = "PLAYER 1 ";
       stopSpel();
   }

   function functieO() {
       winnendespeler = "PLAYER 2 ";
       stopSpel();
   }

   function functieNiemand() {
       winnendespeler = "NOBODY ";
       stopSpel();
   }

   function winnaar() {
       const winPatterns = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
       ];

       for (const pattern of winPatterns) {
           const [a, b, c] = pattern;
           if (vakjes[a].innerHTML === "X" && vakjes[b].innerHTML === "X" && vakjes[c].innerHTML === "X") {
               functieX();
               return;
           }
           if (vakjes[a].innerHTML === "O" && vakjes[b].innerHTML === "O" && vakjes[c].innerHTML === "O") {
               functieO();
               return;
           }
       }

       if (aantalTrue >= 9) {
           functieNiemand();
       }
   }

   // Add event listeners to the cells
   for (let i = 0; i < vakjes.length; i++) {
       vakjes[i].setAttribute("data-id", "false");

       vakjes[i].onmouseover = function () {
           if (this.getAttribute("data-id") === "false") {
               this.innerHTML = tellerSpeler === 2 ? "O" : "X";
               this.style.color = tellerSpeler === 2 ? "#F3BB61" : "#F2DF7B";
           }
       };

       vakjes[i].onmouseout = function () {
           if (this.getAttribute("data-id") === "false") {
               this.innerHTML = "";
           }
       };

       vakjes[i].onclick = function () {
           if (this.getAttribute("data-id") === "false") {
               this.innerHTML = tellerSpeler === 2 ? "O" : "X";
               this.style.color = tellerSpeler === 2 ? "#F3BB61" : "#F2DF7B";
               this.setAttribute("data-id", "true");
               tellerSpeler = tellerSpeler === 2 ? 1 : 2;
               spelers[0].className = tellerSpeler === 1 ? "active1" : "";
               spelers[1].className = tellerSpeler === 2 ? "active2" : "";
               aantalTrue++;
               winnaar();
           }
       };
   }
}

window.onload = function () {
   document.body.style.opacity = "1";
   main();
};

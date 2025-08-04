 function convert() {
      const monedha = document.getElementById("monedha").value;
      const sasia = parseFloat(document.getElementById("sasia").value);
      const monedhaKonvertuar = document.getElementById("monedha_konvertuar").value;

      // I have taken a random number for example
      const kursiKembimit = 1.12; 

      const sasiaKonvertuar = (sasia * kursiKembimit).toFixed(2);

      const rezultatiText = `${sasia} ${monedha} is equal to ${sasiaKonvertuar} ${monedhaKonvertuar}.`;
      alert(rezultatiText);
    }
     let rotationAngle=0;
    let rotationPosition=1;
    function animation(){
      if(rotationPosition === 1){
        rotationAngle +=180;
        rotationPosition =-1;
      }
      else{
        rotationPosition = 180;
        rotationPosition = 1;
      }
      const flipImage = document.getElementById("flip");
      flipImage.style.transform = `rotateY(${rotationAngle}deg)`;setTimeout(animation,2000);
    }
    animation();
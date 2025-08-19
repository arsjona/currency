 function convert() {
      const monedha = document.getElementById("monedha").value;
      const sasia = parseFloat(document.getElementById("sasia").value);
      const monedhaKonvertuar = document.getElementById("monedha_konvertuar").value;
    
      if (isNaN(sasia)) {
    alert("Please enter a valid amount.");
    return;
  }

  const rates = {
    USD: { USD: 1, GBP: 0.74, EUR: 0.86 },
    GBP: { USD: 1.35, GBP: 1, EUR: 1.157 },
    EUR: { USD: 1.17, GBP: 0.864, EUR: 1 }
  };

  if (!rates[monedha] || !rates[monedha][monedhaKonvertuar]) {
    alert("Conversion not available.");
    return;
  }

  const kursiKembimit = rates[monedha][monedhaKonvertuar];
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
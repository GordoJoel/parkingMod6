function ConcatenarFechaHora(fecha, hora){
  return fecha+" "+ hora;

}

function calcularTiempoDosFechas(date1, date2){
  entrada = new Date(date1);
  salida = new Date(date2);

  var tiempo = salida - entrada;

  var diffSegundos = tiempo/1000;
  var HH = Math.floor(diffSegundos/3600);
  var MM = Math.floor(diffSegundos%3600)/60;
  var hm=[HH,MM,entrada.getHours(),salida.getHours()];  
  return(hm);
}
function calcularCosto(tipoParqueo,hora,min,entrar,salir){
    var precio=0;
        switch (tipoParqueo) {
          case "cortoPlazo":
              if((hora==4)&&(min>0))
                return("El parqueo solo es para 4 hrs. maximo");     
              else if((hora>4)&&(min>=0))         
                return ("Elija un parqueo de mas horas")
              else{
                cpm=0.1;
                precio=(hora*60+min)*cpm;
                return precio.toFixed(2);
              break;
              }   
            case "economico":  
                cpm=2;        
                if((hora<4)||(hora>12)  )
                  return ("Elija otro tipo de parqueo"); 
                else if((hora==12)&&(min>0))     
                  return("El parqueo solo permite 12 horas maximo");  
                else if((hora>=4)&&(hora<=12)) {
                  if(min<30)
                      precio=hora*cpm;
                  else
                      precio=(hora*cpm)+cpm; 
                }                
                return precio.toFixed(2);                   
            break;  
            case "estandar":  
                cpm=3;        
                if((hora<4)||(hora>12)  )
                  return ("Elija otro tipo de parqueo"); 
                else if((hora==12)&&(min>0))     
                  return("El parqueo solo permite 12 horas maximo");  
                else if((hora>=4)&&(hora<=12)) {
                  if(min<=30)                          
                      precio=hora*cpm;
                  else
                      precio=(hora*cpm)+cpm; 
                }                
                return precio.toFixed(2);                   
            break;  
            case "largoPlazo":  
                cpm=6;        
                if(hora<12)  
                  return ("Elija otro tipo de parqueo menor a 12 horas"); 
                else if((hora>=12)&&(min>=0)){
                  tiemp=(hora/12).toFixed(0);
                  if((hora%12)==0)                           
                    precio=tiemp*cpm; 
                  else
                    precio=(tiemp*cpm)+cpm;
                                                  
                return precio.toFixed(2);   
              }                
            break;  
            case "nocturno":  
                cpm=5;   
                entrada     
                if((entrar<20)||(salir>8))
                  return ("Elija otro tipo de parqueo durante el dia"); 
                else if((entrar>=20)&&(salir<=8)){                  
                    precio=cpm;
                                                  
                return precio.toFixed(2);   
              }                
            break;    
                                    
          default: 
              return("Elija una opcion de Parqueo");
           }         
    
}

document.getElementById('submit').addEventListener("click", function(){
  var fechaE=document.getElementById('fechaE').value,
      horaE=document.getElementById('horaE').value,
      fechaS=document.getElementById('fechaS').value,
      horaS=document.getElementById('horaS').value;
      tipoP=document.getElementsByTagName('select')[0].value;      
      d1= ConcatenarFechaHora(fechaE,horaE);
      d2= ConcatenarFechaHora(fechaS,horaS);     
      tiempo=calcularTiempoDosFechas(d1,d2);      
      costo=calcularCosto(tipoP,tiempo[0],tiempo[1],tiempo[2],tiempo[3]);
      if(isNaN(costo))
      {
        alert(costo);   
        document.getElementById("costo").value=0;   
      }
            
      else
        document.getElementById("costo").value=costo+" "+"Bs.";   
})



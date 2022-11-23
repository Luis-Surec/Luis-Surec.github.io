function selecionarBandera(elemento){

if (elemento=="ejercicio1"){

    document.getElementById("ejercicio1").style.display="block";
    document.getElementById("ejercicio2").style.display="none";
    document.getElementById("ejercicio3").style.display="none";
    document.getElementById("ejercicio4").style.display="none";
    document.getElementById("ejercicio5").style.display="none";

    
}else if (elemento=="ejercicio2"){
    document.getElementById("ejercicio1").style.display="none";
    document.getElementById("ejercicio2").style.display="block";
    document.getElementById("ejercicio3").style.display="none";
    document.getElementById("ejercicio4").style.display="none";
    document.getElementById("ejercicio5").style.display="none";
    
}else if (elemento=="ejercicio3"){
    document.getElementById("ejercicio1").style.display="none";
    document.getElementById("ejercicio2").style.display="none";
    document.getElementById("ejercicio3").style.display="block";
    document.getElementById("ejercicio4").style.display="none";
    document.getElementById("ejercicio5").style.display="none";
    
   }else if (elemento=="ejercicio4"){
    document.getElementById("ejercicio1").style.display="none";
    document.getElementById("ejercicio2").style.display="none";
    document.getElementById("ejercicio3").style.display="none";
    document.getElementById("ejercicio4").style.display="block";
    document.getElementById("ejercicio5").style.display="none";
    
   }else if (elemento=="ejercicio5"){
    document.getElementById("ejercicio1").style.display="none";
    document.getElementById("ejercicio2").style.display="none";
    document.getElementById("ejercicio3").style.display="none";
    document.getElementById("ejercicio4").style.display="none";
    document.getElementById("ejercicio5").style.display="block";
    
   }


}

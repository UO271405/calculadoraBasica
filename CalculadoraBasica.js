"use strict";
class CalculadoraBasica {
    
    constructor (){
        this.pantalla = "";
        this.valorEnMemoria = "";
        this.resuelto = false;
    }
    digitos(digito){
        if(this.resuelto == true && digito != 0){
            this.pantalla = "";
            document.getElementById("pantalla").value = "";
            this.resuelto = false;
        }
        this.pantalla += digito;
        document.getElementById("pantalla").value = this.pantalla;
    }
    punto(){
        this.pantalla += ".";
        document.getElementById("pantalla").value = this.pantalla;
    }
    suma(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "+";
        document.getElementById("pantalla").value = this.pantalla;
    }
    resta(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "-";
        document.getElementById("pantalla").value = this.pantalla;
    }
    multiplicacion(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "*";
        document.getElementById("pantalla").value = this.pantalla;
    }
    division(){
        if(this.resuelto == true)   //por si se quiere seguir haciendo operaciones con el resultado
            this.resuelto = false;
        this.pantalla += "/";
        document.getElementById("pantalla").value = this.pantalla;
    }
    mrc(){
        if(this.pantalla == "" || !isNaN(document.getElementById("pantalla").value)){ //si no hay nada en la pantalla o es un numero sin ningun signo al lado
            this.pantalla = this.valorEnMemoria;    //la memoria sera el nuevo numero a computar
            document.getElementById("pantalla").value = this.pantalla;
        }else{  //si quieres usar ese valor en memoria para la operación que ya está en pantalla
            this.pantalla += this.valorEnMemoria;
            document.getElementById("pantalla").value = this.pantalla;
        }
    }
    mMenos(){
        var num = Number.parseInt(document.getElementById("pantalla").value);
        if(!isNaN(document.getElementById("pantalla").value)){  //si es un numero
            this.valorEnMemoria = eval(this.valorEnMemoria + "-" + document.getElementById("pantalla").value);   //restarselo a la memoria
        }
    }
    mMas(){
        var num = Number.parseInt(document.getElementById("pantalla").value);
        if(!isNaN(document.getElementById("pantalla").value)){  //si es un numero
            this.valorEnMemoria = eval(this.valorEnMemoria + "+" + document.getElementById("pantalla").value);   //sumarselo a la memoria
        }
    }
    borrar(){
        this.pantalla = "";
        this.valorEnMemoria = "";
        document.getElementById("pantalla").value = this.pantalla;
    }
    igual(){
        try {
            var result = eval(this.pantalla);
            if(typeof result == "number"){
                this.pantalla = result;
                document.getElementById("pantalla").value = this.pantalla;
                this.resuelto = true;
            }
        } catch (error) {   //reset
            this.borrar();
        }
    }
}
var calculadora = new CalculadoraBasica();
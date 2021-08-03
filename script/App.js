import { GenerateTemplate } from "./GenerateTemplate.js";
import Ajax from "./Ajax.js";
import { AppearModal, DisappearModal } from "./Modal.js";
import { OpenSidebar, CloseSidebar } from "./Sidebar.js";
import { CountElementsCar } from "./CountElementsCar.js";
import ModalContent from "./ModalContent.js";

export default function App(){
    const d = document,
        listMeat = Ajax(),
        $divBard = d.getElementById("alturaNav"),
        $modal = d.getElementById("tvesModal"),
        $nav = d.getElementById("nav");

    let nombreCarne = "",
        precioCarne = 0,
        precioFinal = 0,
        idFalse = 0,
        valueGrames = 0,
        valueKilogrames = 1;


d.addEventListener("click", e => {
    if(e.target.matches(".detallesModal")){
        $modal.innerHTML = ModalContent.modalDetail;
        $nav.classList.remove("fixed-top");
        $divBard.style.height = "0px";
        AppearModal($modal);
        CloseSidebar();
    }

    if(e.target.matches(".carritoAdd")){
        $nav.classList.remove("fixed-top");
        $divBard.style.height="0px";
        $modal.innerHTML = ModalContent.modalAdd;
        CloseSidebar();
        AppearModal($modal);
        let idp = e.target.getAttribute("idp");
        nombreCarne = "Carne " + idp;
        precioCarne = searchPriceMeat(nombreCarne); 
        $("#nombreCarne_Precio_Modal").html("<h2 class='colorAddCarrito'>"+nombreCarne+"</h2><h3 >Precio: "+precioCarne+"€/KG</h3>");
        
    }

    if(e.target.matches(".close") || e.target == $modal) {
        $nav.classList.add("fixed-top");
        $divBard.style.height = "100px";
        CloseSidebar();
        DisappearModal($modal);
    }

    if(e.target.matches("#bajarKG *") || e.target.matches("#bajarKG")){
        console.log(e.target)
        valueKilogrames--;
        $("#aviso").html("");
        if (11 > valueKilogrames && -1 < valueKilogrames) {
            $("#valueKilogrames").html(valueKilogrames);
            calculadorPrecioFinal(valueKilogrames, valueGrames, precioCarne);
        } else {
            valueKilogrames = 0;
            $("#valueKilogrames").html(valueKilogrames);
        }
    }

    if(e.target.matches("#bajarG *") || e.target.matches("#bajarG")){
        valueGrames = valueGrames - 100;
        if ((900 >= valueGrames && -101 < valueGrames) && valueKilogrames > 0) {
            if(valueGrames === 0 && valueKilogrames > 0) {
                valueGrames = 0;
            }

            if (valueGrames < 0 && valueKilogrames > 0) {
                valueKilogrames--;
                valueGrames = 900;
            }
        }

        if(valueGrames < 0) valueGrames = 0;

        calculadorPrecioFinal(valueKilogrames,valueGrames,precioCarne);
        $("#valueKilogrames").html(valueKilogrames);
        $("#valueGrames").html(valueGrames);
    }

    if(e.target.matches("#subirKG *") || e.target.matches("#subirKG")){
        valueKilogrames++;
        if(valueKilogrames === 10) {
            valueKilogrames=10;
            valueGrames=0; 
        } 

        if(valueKilogrames > 10){
            valueKilogrames=10;
            $("#aviso").html("Maximo 10 Kg");
        }
        
        $("#valueKilogrames").html(valueKilogrames);
        $("#valueGrames").html(valueGrames);
        calculadorPrecioFinal(valueKilogrames,valueGrames,precioCarne);

    }

    if(e.target.matches("#subirG *") || e.target.matches("#subirG")){
        valueGrames = valueGrames+100;
        $("#aviso").html("");

        if(valueGrames === 1000 && valueKilogrames!=10) {
            if (10 >= valueKilogrames && 0 <= valueKilogrames) {
                valueKilogrames++;
                valueGrames = 0;
            }else{
                valueKilogrames = 10;
                valueGrames = 900;
                $("#aviso").html("Maximo 10 Kg");
            }
        } 

        if(valueKilogrames === 10) {
            valueGrames = 0;
            $("#aviso").html("Maximo 10 Kg");
        }

        $("#valueGrames").html(valueGrames);
        $("#valueKilogrames").html(valueKilogrames);
        calculadorPrecioFinal(valueKilogrames,valueGrames,precioCarne);
    }

    if(e.target.matches("#finalizarPedido")){
        if(valueGrames >= 0 && valueKilogrames > 0) {
            console.log(nombreCarne, precioFinal)
            generarCarrito(nombreCarne, precioFinal);
            CountElementsCar();
            DisappearModal($modal);
            $nav.classList.remove("fixed-top");
            $divBard.style.height = "100px";
        } else {
            $("#aviso").html("Introduzca un valor mayor a 0");
        }
        
        valueKilogrames = 1;
        valueGrames = 0;
        $("#valueGrames").html(valueGrames);
        $("#valueKilogrames").html(valueKilogrames);
        $("#PrecioFinal").html("");
    }

    if(e.target.matches(".background-carrito")){
        $("#precioTotalCarrito").html(calcularPrecioCarritoFinal()+"€");
        OpenSidebar();
        $nav.classList.remove("fixed-top");
        $divBard.style.height = "0px";
    }

});

function generarCarrito(nameMeat, priceMeat){
    idFalse++;
    let Order = {
        idOrder: idFalse,
        nameOrder: nameMeat,
        priceOrder: priceMeat
    }
    $('.menu').append(GenerateTemplate(Order));
}

function calcularPrecioCarritoFinal(){
    let totalPrice = 0; 
    d.querySelectorAll(".priceOrder")
     .forEach(
            price => totalPrice += parseFloat(price.innerText) 
        );
    return totalPrice.toFixed(2);
}


function calculadorPrecioFinal(kilograms , grams, price){
    grams = grams / 1000;
    kilograms = kilograms + grams;
    precioFinal = price * kilograms;
    $("#PrecioFinal").html("Precio Final: " + precioFinal.toFixed(2));
}

function searchPriceMeat(nameMeat){
    return listMeat.find(meat => meat.name === nameMeat).price; 
}

}
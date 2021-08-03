const d = document;

export function CountElementsCar() {
    let contador = d.querySelectorAll(".liContador").length,
    carNumber = d.querySelector(".carritoNumber"),
    information = d.getElementById("informacion");        
    
    carNumber.classList.add("d-none");
    information.classList.remove("d-none");
    information.classList.add("d-block");

    if(contador > 9) {
        carNumber.classList.add("w-50")
        information.classList.remove("w-25"); 
        carNumber.innerText = contador;
        return;
    }

    if(contador !== 0) {
        carNumber.innerText = contador;
        carNumber.classList.remove("d-none");
        information.classList.add("d-none");
        information.classList.remove("d-block");
        return;
    }

}
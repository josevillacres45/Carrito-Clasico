export function GenerateTemplate(Order) {
    let {idOrder, nameOrder, priceOrder} = Order;
    return `
    <li class='d-flex mt-3 liContador ml-1 marginElementoCarritos'  id='"+crearID_Falsa+"'>
        <div class='w-50'>
            <h4 class='letraCarrito colorPrincipal letraBotones'>
                Pedido: ${idOrder}
             </h4>
             <h4 class='text-white letraCarrito letraBotones'>
                ${nameOrder} Kg
             </h4>
             <h4 class='priceOrder text-white letraCarrito letraBotones'>
                ${priceOrder} €
             </h4>
        </div>
        <button type='button' idp='${idOrder}' class='btn letraBotones ml-3 btn-danger w-50 borrarCarrito'>Borrar del Carrito</button>
        <button class='btn letraBotones verDetalles btn-info ml-3 w-50' idp='${nameOrder.substring(6,7)}'>Finalizar Pedido</button>
    </li>`;
}
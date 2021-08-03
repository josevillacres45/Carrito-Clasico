export  default {
    modalDetail: `
        <div class="modal-content">
            <div class="display-4">
                <button class="close btn btn-danger" type="button">×</button>
            </div>
            <h2 id="nombreCarne_Modal"></h2>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Descripción</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Precio</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Productos Relacionados</a>
                </div>
                </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <p>Aliquam eget tortor et nunc pulvinar eleifend. In consequat lorem nec malesuada sodales. Ut in tortor augue. $/Kg</p>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <p>Suspendisse mi velit, scelerisque sed ullamcorper at, lobortis vitae lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam rhoncus ipsum nec purus laoreet.</p>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <a class="btn-info btn w-25 m-2 text-white text-decoration-none d-flex justify-content-center align-items-center" href="#">Comprar</a>
            </div>
        </div>
    `,
    modalAdd: `
        <div class="modal-content">
            <div class="display-4">
                <button class="close btn btn-danger" id="cerrarPrecioModal" type="button">×</button>
            </div>
            <h2 id="nombreCarne_Precio_Modal"></h2>
            <div class="d-lg-flex  align-items-center">
                <h5 class="ml-1">Modifica Tu carrito </h5>
                <div class="d-flex">
                <button class="quitarEstiloBoton" id="bajarKG">
                    <img src="imagen/anterior.png">
                </button>
                <h6 class="mr-1 ml-1" id="valueKilogrames">1</h6>
                <h6 class="ml-1">Kg</h6>

                <button class="quitarEstiloBoton" id="subirKG">
                    <img src="imagen/proximo.png">
                </button>

                <button class="quitarEstiloBoton" id="bajarG">
                    <img src="imagen/anterior.png">
                </button>

                <h6 class="mr-1 ml-1" id="valueGrames">0</h6>
                <h6 class="ml-1">g</h6>
                <button class="quitarEstiloBoton" id="subirG">
                    <img src="imagen/proximo.png">
                </button>
                
                </div>
            </div>
            <h4 id="PrecioFinal" class="colorPrecioFinal"></h4>
            <h4 class="text-danger" id="aviso"></h4>
            <div class="d-flex justify-content-end">
                <a class="btn-info btn w-25 letraBotones m-2 text-white text-decoration-none d-flex justify-content-center align-items-center" id="finalizarPedido" href="#">Añadir Carrito</a>
            </div>
        </div>
    `
}
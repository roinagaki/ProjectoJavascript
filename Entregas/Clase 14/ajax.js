const url = "http://127.0.0.1:5500/productos.json";

$("#btnDatos").click(() => {
    console.log("Click");
    
    $.get(url, function(respuesta, estado) {
        if( estado == "Exitoso") {
            let datos = respuesta
            for (const dato of datos) {
                $("body").append(`
                    <div>
                        <h3>${dato.producto} (${dato.precio}</h3>
                    </div>
                    `)
            }
        }

    });

});
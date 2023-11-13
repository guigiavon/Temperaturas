


const productos = [
    { tipoPro: "Plastico", tempMin: 362, tempMax: 372, tiempo: 80, precion: "media" },
    { tipoPro: "Ceramica", tempMin: 347, tempMax: 356, tiempo: 180, precion: "media" },
    { tipoPro: "Spum", tempMin: 392, tempMax: 392, tiempo: 60, precion: "Alta" },
    { tipoPro: "Gorra", tempMin: 392, tempMax: 392, tiempo: 110, precion: "media" },
    { tipoPro: "Almohadon", tempMin: 356, tempMax: 356, tiempo: 60, precion: "Alta" },
    { tipoPro: "Llavero", tempMin: 360, tempMax: 360, tiempo: 90, precion: "Alta" },
    { tipoPro: "Carton", tempMin: 356, tempMax: 356, tiempo: 60, precion: "media" },
    { tipoPro: "Madera", tempMin: 356, tempMax: 356, tiempo: 70, precion: "media" },
    { tipoPro: "Vinilo Sublimable", tempMin: 320, tempMax: 320, tiempo: 100, precion: "baja" },
    { tipoPro: "Tela Trasfer", tempMin: 338, tempMax: 338, tiempo: 25, precion: "media" },
    { tipoPro: "Canillera", tempMin: 374, tempMax: 374, tiempo: 60, precion: "media" },
    { tipoPro: "Imanes", tempMin: 374, tempMax: 374, tiempo: 60, precion: "media" },
    { tipoPro: "Aluminio", tempMin: 356, tempMax: 356, tiempo: 100, precion: "media" }
];

// Asegúrate de tener un elemento en tu HTML con el id "tablaProductos"
var tablaProductos = document.getElementById("tablaProductos");
tablaProductos.innerHTML = "";
// Crear la tabla y su encabezado
var tabla = "<table class='table table-dark'>" +
    "<thead>" +
    "<tr>" +
    "<th scope='col'>Producto</th>" +
    "<th scope='col'>Temperatura Mínima</th>" +
    "<th scope='col'>Temperatura Máxima</th>" +
    "<th scope='col'>Tiempo</th>" +
    "<th scope='col'>Presión</th>" +
    "</tr>" +
    "</thead>" +
    "<tbody>";

// Agregar filas de datos a la tabla
for (var i = 0; i < productos.length; i++) {
    tabla += "<tr>" +
        "<td>" + productos[i].tipoPro + "</td>" +
        "<td>" + productos[i].tempMin + "</td>" +
        "<td>" + productos[i].tempMax + "</td>" +
        "<td>" + productos[i].tiempo + "</td>" +
        "<td>" + productos[i].precion + "</td>" +
        "</tr>";
        
}

// Cerrar la tabla
tabla += "</tbody></table>";

// Insertar la tabla en el contenedor
tablaProductos.innerHTML = tabla;


let isCelsius = false;

function convertirTemperaturas() {
 //   const factor = isCelsius ? 5 / 9 : 9 / 5;
    if (isCelsius){
        for (let i = 0; i < productos.length; i++) {
            productos[i].tempMin = Math.round((productos[i].tempMin - 32) * 5/9);
            productos[i].tempMax = Math.round((productos[i].tempMax - 32) * 5/9);
            document.getElementById("Titulo").innerHTML = "Lista de Temperaturas en Celsius";
        }
    } else{
        for (let i = 0; i < productos.length; i++) {
            productos[i].tempMin = Math.round((productos[i].tempMin * 9/5) +32);
            productos[i].tempMax = Math.round((productos[i].tempMax * 9/5) +32);
        }
        document.getElementById("Titulo").innerHTML = "Lista de Temperaturas en Fahrenheit ";
    }

 

    // Actualiza la tabla después de la conversión
    actualizarTabla();
}

function cambiarUnidad() {
    isCelsius = !isCelsius; // Cambiar la unidad actual (Celsius a Fahrenheit o viceversa)
    convertirTemperaturas(); // Volver a convertir las temperaturas y actualizar la tabla
}
function actualizarTabla() {
    // Obtén la referencia a la tabla
    var tablaProductos = document.getElementById("tablaProductos");

    // Limpiar la tabla antes de actualizar
    tablaProductos.innerHTML = "";

    // Crear la tabla y su encabezado
    var tabla = "<table class='table table-dark'>" +
        "<thead>" +
        "<tr>" +
        "<th scope='col'>Producto</th>" +
        "<th scope='col'>Temperatura Mínima</th>" +
        "<th scope='col'>Temperatura Máxima</th>" +
        "<th scope='col'>Tiempo</th>" +
        "<th scope='col'>Presión</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>";

    // Iterar sobre los productos y crear las filas de la tabla
    for (var i = 0; i < productos.length; i++) {
        var fila = "<tr>" +
            "<td>" + productos[i].tipoPro + "</td>" +
            "<td>" + productos[i].tempMin + "</td>" +
            "<td>" + productos[i].tempMax + "</td>" +
            "<td>" + productos[i].tiempo + "</td>" +
            "<td>" + productos[i].precion + "</td>" +
            "</tr>";
        tabla += fila;
    }

    // Cerrar la tabla
    tabla += "</tbody></table>";

    // Insertar la tabla en el contenedor
    tablaProductos.innerHTML = tabla;
    


}

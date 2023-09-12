window.URL_ADMIN = "http://localhost:8080/api/administrador/";
window.URL_PUESTO = "http://localhost:8080/api/puesto/";
window.URL_DELEGADO = "http://localhost:8080/api/delegado/";
// window.URL_ADMIN = "http://150.136.169.53:8080/api/administrador/";
// window.URL_PUESTO = "http://150.136.169.53:8080/api/puesto/";
// window.URL_DELEGADO = "http://150.136.169.53:8080/api/delegado/";

window.t_headers_admin = ['Cédula','Nombre'];
window.t_headers_puesto = ['ID','Nombre','Mesas','Ubicacion','Encargado','Cel. Encargado','Localidad'];
window.t_headers_delegado = ['Cédula','Nombre','Celular', 'Correo','Puesto'];



function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}

function userPermit(){
    let flat=false;
    try {
        if(sessionStorage.getItem("logUser") != null){
            flat =  true;      
        } else { flat = false; }
    } catch (error) {
        flat =  false;
    }
    return flat;
}

function consultarDatos(entidad){
sessionStorage.setItem("entidad",entidad);
sessionStorage.setItem("thisUrl",window.location.href);
location.href = "./tablas.html";
}

function formulario(entidad){
    sessionStorage.setItem("entidad",entidad);
    sessionStorage.setItem("thisUrl",window.location.href);
    switch (entidad) {
      case 'puesto':
        location.href = "./puestoRegistro.html";
        break;

      case 'delegado':
        location.href = "./delegadoRegistro.html";
        break;

      case 'admin':
        location.href = "./administradorRegistro.html";
        break;
    
      default:
        break;
    }
}